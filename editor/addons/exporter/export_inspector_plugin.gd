@tool
extends EditorInspectorPlugin

func _can_handle(object):
	# Limit to specific types or custom nodes
	return object is Exporter  # Change this to your target type

func _parse_begin(object):
	var button = Button.new()
	button.text = "Do Something"
	button.pressed.connect(_on_button_pressed.bind(object))
	add_custom_control(button)

func _on_button_pressed(target: Exporter):
	print("Button pressed on:", target.name, ' ', target.path)
	
	# You can call custom methods on target if needed:
	# if target.has_method("do_something"):
	#     target.do_something()
	var id_gen := _IdGenerator.new(target.id_block)
	
	var next_id = target.id_block * 1000
	
	var data := []
	
	for child in target.get_children():
		data.append(_iterate_child(target, child, id_gen))
	
	var json = JSON.stringify(data, '  ')
	
	var file = FileAccess.open(target.path, FileAccess.WRITE)
	if file:
		file.store_line('export const %s = %s' % [target.field_name, json])
		
		file.close()
		print("File written to: ", target.path)
	else:
		push_error("Failed to write to: " + target.path)
	
func _iterate_child(target: Exporter, node: Node, id_gen: _IdGenerator) -> Dictionary:
	var script = node.get_script()
	
	var data := {
		'id': id_gen.next_id(),
		'name': node.name,
		'type': script.get_global_name() if script else node.get_class()
	}
	
	if node is Node2D:
		data['rotation'] = _round(node.rotation)
		data['globalRotation'] = _round(node.global_rotation)
		data['position'] = _vec2(node.position)
		data['globalPosition'] = _vec2(node.global_position)
	
	if node is Critter:
		data['critterType'] = node.type
	
	if node is CollisionObject2D:
		data['isBody'] = true
		data['collisionLayer'] = node.collision_layer
		data['collisionMask'] = node.collision_mask
	
	if node is PhysicsBody2D:
		_add_physics_material_override(data, node.physics_material_override)
	
	if node is GravityField:
		data['direction'] = _vec2(node.global_position.direction_to(node.direction.global_position))
		
	if node is GravityWell:
		data['gravity'] = _round(node.speed)
		
	if node is Sprite2D:
		data['path'] = node.texture.resource_path
		
	
	if node is RigidBody2D:
		data['mass'] = node.mass
		data['gravityScale'] = _round(node.gravity_scale)
		if !is_zero_approx(node.constant_torque):
			data['constantTorque'] = _round(node.constant_torque, '%.4f')
	
	if node is CollisionPolygon2D:
		var polygons := []
		data['polygons'] = polygons
		
		for polygon in Geometry2D.decompose_polygon_in_convex(node.polygon):
			var p := {
				'center': _vec2(get_polygon_centroid(polygon))
			}
			var points = []
			for vertex in polygon:
				points.append(_round(vertex.x))
				points.append(_round(vertex.y))
			p['verts'] = ' '.join(points)
			polygons.append(p)
			
	if node is CollisionShape2D:
		var shape: Shape2D = node.shape
		if shape is RectangleShape2D:
			data['shape'] = 'rectangle'
			data['size'] = _vec2(shape.size)
		if shape is CircleShape2D:
			data['shape'] = 'circle'
			data['radius'] = float('%.3f' % shape.radius)
			
	if node is Path2D:
		var points = []
		for point in node.curve.get_baked_points():
			points.append(_vec2(point))
		data['points'] = points
	
	
	if !target.export_entity_data:
		if node is Critter:
			return data
	
	data['children'] = []		
	for child in node.get_children():
		data['children'].append(_iterate_child(target, child, id_gen))
		
	return data
	
func _add_physics_material_override(data: Dictionary, material: PhysicsMaterial) -> void:
		if material == null:
			data['friction'] = _round(1.0)
			data['bounce'] = _round(0.0)
		else:
			data['friction'] = _round(material.friction)
			data['bounce'] = _round(material.bounce)
func _round(num: float, format: String = '%.3f') -> float:
	return float(format % num)
	
func _vec2(vector: Vector2) -> Dictionary:
	return {'x': _round(vector.x), 'y': _round(vector.y)}
	
func get_polygon_centroid(points: Array[Vector2]) -> Vector2:
	var signed_area := 0.0
	var cx := 0.0
	var cy := 0.0
	var count := points.size()

	for i in count:
		var p0 = points[i]
		var p1 = points[(i + 1) % count]

		var a = p0.x * p1.y - p1.x * p0.y
		signed_area += a
		cx += (p0.x + p1.x) * a
		cy += (p0.y + p1.y) * a

	signed_area *= 0.5
	if abs(signed_area) < 0.00001:
		return Vector2.ZERO  # Avoid division by zero

	cx /= (6.0 * signed_area)
	cy /= (6.0 * signed_area)

	return Vector2(cx, cy)
	
class _IdGenerator extends RefCounted:
	var _next_id: int
	
	func _init(block: int):
		_next_id = block * 1000
		
	func next_id() -> int:
		var id = _next_id
		_next_id += 1
		return id
