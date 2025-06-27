@tool
extends EditorPlugin

var button

var inspector_plugin


func _enter_tree():
	# Create a button
	button = Button.new()
	button.text = "Write File"
	button.pressed.connect(_on_button_pressed)
	button.pressed.connect(func(): print('AAA'))
	add_control_to_container(EditorPlugin.CONTAINER_TOOLBAR, button)
	button.visible = true
	
	inspector_plugin = preload("res://addons/exporter/export_inspector_plugin.gd").new()
	add_inspector_plugin(inspector_plugin)

func _exit_tree():
	# Clean up
	remove_control_from_container(EditorPlugin.CONTAINER_TOOLBAR, button)
	button.queue_free()
	
	remove_inspector_plugin(inspector_plugin)

func _on_button_pressed():
	var path = "/home/damien/Godot/editor_output.txt"
	var file = FileAccess.open(path, FileAccess.WRITE)
	if file:
		file.store_string("Hello from the editor plugin!")
		file.close()
		print("File written to: ", path)
	else:
		push_error("Failed to write to: " + path)
		
