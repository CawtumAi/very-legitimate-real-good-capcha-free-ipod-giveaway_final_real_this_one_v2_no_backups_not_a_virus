/*! For license information please see captcha.js.LICENSE.txt */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 46: 
    /***/ function(module, __unused_webpack_exports, __webpack_require__) {
      /*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory(); else // removed by dead control flow
        {}
      })(this, (function() {
        /******/
        return function(modules) {
          // webpackBootstrap
          /******/ // The module cache
          /******/ var installedModules = {};
          /******/
          /******/ // The require function
          /******/          function __nested_webpack_require_1787__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
              /******/ return installedModules[moduleId].exports;
              /******/            }
            /******/ // Create a new module (and put it into the cache)
            /******/            var module = installedModules[moduleId] = {
              /******/ i: moduleId,
              /******/ l: false,
              /******/ exports: {}
              /******/            };
            /******/
            /******/ // Execute the module function
            /******/            modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
            /******/
            /******/ // Flag the module as loaded
            /******/            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/            return module.exports;
            /******/          }
          /******/
          /******/
          /******/ // expose the modules object (__webpack_modules__)
          /******/          __nested_webpack_require_1787__.m = modules;
          /******/
          /******/ // expose the module cache
          /******/          __nested_webpack_require_1787__.c = installedModules;
          /******/
          /******/ // define getter function for harmony exports
          /******/          __nested_webpack_require_1787__.d = function(exports, name, getter) {
            /******/ if (!__nested_webpack_require_1787__.o(exports, name)) {
              /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/            }
            /******/          };
          /******/
          /******/ // define __esModule on exports
          /******/          __nested_webpack_require_1787__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
              });
              /******/            }
            /******/            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            /******/          };
          /******/
          /******/ // create a fake namespace object
          /******/ // mode & 1: value is a module id, require it
          /******/ // mode & 2: merge all properties of value into the ns
          /******/ // mode & 4: return value when already ns object
          /******/ // mode & 8|1: behave like require
          /******/          __nested_webpack_require_1787__.t = function(value, mode) {
            /******/ if (mode & 1) value = __nested_webpack_require_1787__(value);
            /******/            if (mode & 8) return value;
            /******/            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/            var ns = Object.create(null);
            /******/            __nested_webpack_require_1787__.r(ns);
            /******/            Object.defineProperty(ns, "default", {
              enumerable: true,
              value
            });
            /******/            if (mode & 2 && typeof value != "string") for (var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) {
              return value[key];
            }.bind(null, key));
            /******/            return ns;
            /******/          };
          /******/
          /******/ // getDefaultExport function for compatibility with non-harmony modules
          /******/          __nested_webpack_require_1787__.n = function(module) {
            /******/ var getter = module && module.__esModule ? 
            /******/ function getDefault() {
              return module["default"];
            } : 
            /******/ function getModuleExports() {
              return module;
            };
            /******/            __nested_webpack_require_1787__.d(getter, "a", getter);
            /******/            return getter;
            /******/          };
          /******/
          /******/ // Object.prototype.hasOwnProperty.call
          /******/          __nested_webpack_require_1787__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/
          /******/ // __webpack_public_path__
          /******/          __nested_webpack_require_1787__.p = "";
          /******/
          /******/
          /******/ // Load entry module and return exports
          /******/          return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 20);
          /******/        }
        /************************************************************************/
        /******/ ([ 
        /* 0 */
        /***/ function(module, exports) {
          /**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/
          var Common = {};
          module.exports = Common;
          (function() {
            Common._baseDelta = 1e3 / 60;
            Common._nextId = 0;
            Common._seed = 0;
            Common._nowStartTime = +new Date;
            Common._warnedOnce = {};
            Common._decomp = null;
            /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */            Common.extend = function(obj, deep) {
              var argsStart, args, deepClone;
              if (typeof deep === "boolean") {
                argsStart = 2;
                deepClone = deep;
              } else {
                argsStart = 1;
                deepClone = true;
              }
              for (var i = argsStart; i < arguments.length; i++) {
                var source = arguments[i];
                if (source) {
                  for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                      if (!obj[prop] || obj[prop].constructor === Object) {
                        obj[prop] = obj[prop] || {};
                        Common.extend(obj[prop], deepClone, source[prop]);
                      } else {
                        obj[prop] = source[prop];
                      }
                    } else {
                      obj[prop] = source[prop];
                    }
                  }
                }
              }
              return obj;
            };
            /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */            Common.clone = function(obj, deep) {
              return Common.extend({}, deep, obj);
            };
            /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */            Common.keys = function(obj) {
              if (Object.keys) return Object.keys(obj);
              // avoid hasOwnProperty for performance
                            var keys = [];
              for (var key in obj) keys.push(key);
              return keys;
            };
            /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */            Common.values = function(obj) {
              var values = [];
              if (Object.keys) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++) {
                  values.push(obj[keys[i]]);
                }
                return values;
              }
              // avoid hasOwnProperty for performance
                            for (var key in obj) values.push(obj[key]);
              return values;
            };
            /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */            Common.get = function(obj, path, begin, end) {
              path = path.split(".").slice(begin, end);
              for (var i = 0; i < path.length; i += 1) {
                obj = obj[path[i]];
              }
              return obj;
            };
            /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */            Common.set = function(obj, path, val, begin, end) {
              var parts = path.split(".").slice(begin, end);
              Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
              return val;
            };
            /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */            Common.shuffle = function(array) {
              for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Common.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
              return array;
            };
            /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */            Common.choose = function(choices) {
              return choices[Math.floor(Common.random() * choices.length)];
            };
            /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */            Common.isElement = function(obj) {
              if (typeof HTMLElement !== "undefined") {
                return obj instanceof HTMLElement;
              }
              return !!(obj && obj.nodeType && obj.nodeName);
            };
            /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */            Common.isArray = function(obj) {
              return Object.prototype.toString.call(obj) === "[object Array]";
            };
            /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */            Common.isFunction = function(obj) {
              return typeof obj === "function";
            };
            /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */            Common.isPlainObject = function(obj) {
              return typeof obj === "object" && obj.constructor === Object;
            };
            /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */            Common.isString = function(obj) {
              return toString.call(obj) === "[object String]";
            };
            /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */            Common.clamp = function(value, min, max) {
              if (value < min) return min;
              if (value > max) return max;
              return value;
            };
            /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */            Common.sign = function(value) {
              return value < 0 ? -1 : 1;
            };
            /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */            Common.now = function() {
              if (typeof window !== "undefined" && window.performance) {
                if (window.performance.now) {
                  return window.performance.now();
                } else if (window.performance.webkitNow) {
                  return window.performance.webkitNow();
                }
              }
              if (Date.now) {
                return Date.now();
              }
              return new Date - Common._nowStartTime;
            };
            /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */            Common.random = function(min, max) {
              min = typeof min !== "undefined" ? min : 0;
              max = typeof max !== "undefined" ? max : 1;
              return min + _seededRandom() * (max - min);
            };
            var _seededRandom = function() {
              // https://en.wikipedia.org/wiki/Linear_congruential_generator
              Common._seed = (Common._seed * 9301 + 49297) % 233280;
              return Common._seed / 233280;
            };
            /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */            Common.colorToNumber = function(colorString) {
              colorString = colorString.replace("#", "");
              if (colorString.length == 3) {
                colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
              }
              return parseInt(colorString, 16);
            };
            /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @static
     * @property logLevel
     * @type {Number}
     * @default 1
     */            Common.logLevel = 1;
            /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */            Common.log = function() {
              if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                console.log.apply(console, [ "matter-js:" ].concat(Array.prototype.slice.call(arguments)));
              }
            };
            /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */            Common.info = function() {
              if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
                console.info.apply(console, [ "matter-js:" ].concat(Array.prototype.slice.call(arguments)));
              }
            };
            /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */            Common.warn = function() {
              if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                console.warn.apply(console, [ "matter-js:" ].concat(Array.prototype.slice.call(arguments)));
              }
            };
            /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */            Common.warnOnce = function() {
              var message = Array.prototype.slice.call(arguments).join(" ");
              if (!Common._warnedOnce[message]) {
                Common.warn(message);
                Common._warnedOnce[message] = true;
              }
            };
            /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */            Common.deprecated = function(obj, prop, warning) {
              obj[prop] = Common.chain((function() {
                Common.warnOnce("🔅 deprecated 🔅", warning);
              }), obj[prop]);
            };
            /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */            Common.nextId = function() {
              return Common._nextId++;
            };
            /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */            Common.indexOf = function(haystack, needle) {
              if (haystack.indexOf) return haystack.indexOf(needle);
              for (var i = 0; i < haystack.length; i++) {
                if (haystack[i] === needle) return i;
              }
              return -1;
            };
            /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */            Common.map = function(list, func) {
              if (list.map) {
                return list.map(func);
              }
              var mapped = [];
              for (var i = 0; i < list.length; i += 1) {
                mapped.push(func(list[i]));
              }
              return mapped;
            };
            /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */            Common.topologicalSort = function(graph) {
              // https://github.com/mgechev/javascript-algorithms
              // Copyright (c) Minko Gechev (MIT license)
              // Modifications: tidy formatting and naming
              var result = [], visited = [], temp = [];
              for (var node in graph) {
                if (!visited[node] && !temp[node]) {
                  Common._topologicalSort(node, visited, temp, graph, result);
                }
              }
              return result;
            };
            Common._topologicalSort = function(node, visited, temp, graph, result) {
              var neighbors = graph[node] || [];
              temp[node] = true;
              for (var i = 0; i < neighbors.length; i += 1) {
                var neighbor = neighbors[i];
                if (temp[neighbor]) {
                  // skip circular dependencies
                  continue;
                }
                if (!visited[neighbor]) {
                  Common._topologicalSort(neighbor, visited, temp, graph, result);
                }
              }
              temp[node] = false;
              visited[node] = true;
              result.push(node);
            };
            /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */            Common.chain = function() {
              var funcs = [];
              for (var i = 0; i < arguments.length; i += 1) {
                var func = arguments[i];
                if (func._chained) {
                  // flatten already chained functions
                  funcs.push.apply(funcs, func._chained);
                } else {
                  funcs.push(func);
                }
              }
              var chain = function() {
                // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
                var lastResult, args = new Array(arguments.length);
                for (var i = 0, l = arguments.length; i < l; i++) {
                  args[i] = arguments[i];
                }
                for (i = 0; i < funcs.length; i += 1) {
                  var result = funcs[i].apply(lastResult, args);
                  if (typeof result !== "undefined") {
                    lastResult = result;
                  }
                }
                return lastResult;
              };
              chain._chained = funcs;
              return chain;
            };
            /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */            Common.chainPathBefore = function(base, path, func) {
              return Common.set(base, path, Common.chain(func, Common.get(base, path)));
            };
            /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */            Common.chainPathAfter = function(base, path, func) {
              return Common.set(base, path, Common.chain(Common.get(base, path), func));
            };
            /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */            Common.setDecomp = function(decomp) {
              Common._decomp = decomp;
            };
            /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */            Common.getDecomp = function() {
              // get user provided decomp if set
              var decomp = Common._decomp;
              try {
                // otherwise from window global
                if (!decomp && typeof window !== "undefined") {
                  decomp = window.decomp;
                }
                // otherwise from node global
                                if (!decomp && typeof __webpack_require__.g !== "undefined") {
                  decomp = __webpack_require__.g.decomp;
                }
              } catch (e) {
                // decomp not available
                decomp = null;
              }
              return decomp;
            };
          })();
          /***/        }, 
        /* 1 */
        /***/ function(module, exports) {
          /**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/
          var Bounds = {};
          module.exports = Bounds;
          (function() {
            /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
            Bounds.create = function(vertices) {
              var bounds = {
                min: {
                  x: 0,
                  y: 0
                },
                max: {
                  x: 0,
                  y: 0
                }
              };
              if (vertices) Bounds.update(bounds, vertices);
              return bounds;
            };
            /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */            Bounds.update = function(bounds, vertices, velocity) {
              bounds.min.x = Infinity;
              bounds.max.x = -Infinity;
              bounds.min.y = Infinity;
              bounds.max.y = -Infinity;
              for (var i = 0; i < vertices.length; i++) {
                var vertex = vertices[i];
                if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
                if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
                if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
                if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
              }
              if (velocity) {
                if (velocity.x > 0) {
                  bounds.max.x += velocity.x;
                } else {
                  bounds.min.x += velocity.x;
                }
                if (velocity.y > 0) {
                  bounds.max.y += velocity.y;
                } else {
                  bounds.min.y += velocity.y;
                }
              }
            };
            /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */            Bounds.contains = function(bounds, point) {
              return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
            };
            /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */            Bounds.overlaps = function(boundsA, boundsB) {
              return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
            };
            /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */            Bounds.translate = function(bounds, vector) {
              bounds.min.x += vector.x;
              bounds.max.x += vector.x;
              bounds.min.y += vector.y;
              bounds.max.y += vector.y;
            };
            /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */            Bounds.shift = function(bounds, position) {
              var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
              bounds.min.x = position.x;
              bounds.max.x = position.x + deltaX;
              bounds.min.y = position.y;
              bounds.max.y = position.y + deltaY;
            };
          })();
          /***/        }, 
        /* 2 */
        /***/ function(module, exports) {
          /**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/
          // TODO: consider params for reusing vector objects
          var Vector = {};
          module.exports = Vector;
          (function() {
            /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
            Vector.create = function(x, y) {
              return {
                x: x || 0,
                y: y || 0
              };
            };
            /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */            Vector.clone = function(vector) {
              return {
                x: vector.x,
                y: vector.y
              };
            };
            /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */            Vector.magnitude = function(vector) {
              return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
            };
            /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */            Vector.magnitudeSquared = function(vector) {
              return vector.x * vector.x + vector.y * vector.y;
            };
            /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */            Vector.rotate = function(vector, angle, output) {
              var cos = Math.cos(angle), sin = Math.sin(angle);
              if (!output) output = {};
              var x = vector.x * cos - vector.y * sin;
              output.y = vector.x * sin + vector.y * cos;
              output.x = x;
              return output;
            };
            /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */            Vector.rotateAbout = function(vector, angle, point, output) {
              var cos = Math.cos(angle), sin = Math.sin(angle);
              if (!output) output = {};
              var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
              output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
              output.x = x;
              return output;
            };
            /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */            Vector.normalise = function(vector) {
              var magnitude = Vector.magnitude(vector);
              if (magnitude === 0) return {
                x: 0,
                y: 0
              };
              return {
                x: vector.x / magnitude,
                y: vector.y / magnitude
              };
            };
            /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */            Vector.dot = function(vectorA, vectorB) {
              return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
            };
            /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */            Vector.cross = function(vectorA, vectorB) {
              return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
            };
            /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */            Vector.cross3 = function(vectorA, vectorB, vectorC) {
              return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
            };
            /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */            Vector.add = function(vectorA, vectorB, output) {
              if (!output) output = {};
              output.x = vectorA.x + vectorB.x;
              output.y = vectorA.y + vectorB.y;
              return output;
            };
            /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */            Vector.sub = function(vectorA, vectorB, output) {
              if (!output) output = {};
              output.x = vectorA.x - vectorB.x;
              output.y = vectorA.y - vectorB.y;
              return output;
            };
            /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */            Vector.mult = function(vector, scalar) {
              return {
                x: vector.x * scalar,
                y: vector.y * scalar
              };
            };
            /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */            Vector.div = function(vector, scalar) {
              return {
                x: vector.x / scalar,
                y: vector.y / scalar
              };
            };
            /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */            Vector.perp = function(vector, negate) {
              negate = negate === true ? -1 : 1;
              return {
                x: negate * -vector.y,
                y: negate * vector.x
              };
            };
            /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */            Vector.neg = function(vector) {
              return {
                x: -vector.x,
                y: -vector.y
              };
            };
            /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */            Vector.angle = function(vectorA, vectorB) {
              return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
            };
            /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */            Vector._temp = [ Vector.create(), Vector.create(), Vector.create(), Vector.create(), Vector.create(), Vector.create() ];
          })();
          /***/        }, 
        /* 3 */
        /***/ function(module, exports, __nested_webpack_require_35421__) {
          /**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/
          var Vertices = {};
          module.exports = Vertices;
          var Vector = __nested_webpack_require_35421__(2);
          var Common = __nested_webpack_require_35421__(0);
          (function() {
            /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
            Vertices.create = function(points, body) {
              var vertices = [];
              for (var i = 0; i < points.length; i++) {
                var point = points[i], vertex = {
                  x: point.x,
                  y: point.y,
                  index: i,
                  body,
                  isInternal: false
                };
                vertices.push(vertex);
              }
              return vertices;
            };
            /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */            Vertices.fromPath = function(path, body) {
              var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, points = [];
              path.replace(pathPattern, (function(match, x, y) {
                points.push({
                  x: parseFloat(x),
                  y: parseFloat(y)
                });
              }));
              return Vertices.create(points, body);
            };
            /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */            Vertices.centre = function(vertices) {
              var area = Vertices.area(vertices, true), centre = {
                x: 0,
                y: 0
              }, cross, temp, j;
              for (var i = 0; i < vertices.length; i++) {
                j = (i + 1) % vertices.length;
                cross = Vector.cross(vertices[i], vertices[j]);
                temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                centre = Vector.add(centre, temp);
              }
              return Vector.div(centre, 6 * area);
            };
            /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */            Vertices.mean = function(vertices) {
              var average = {
                x: 0,
                y: 0
              };
              for (var i = 0; i < vertices.length; i++) {
                average.x += vertices[i].x;
                average.y += vertices[i].y;
              }
              return Vector.div(average, vertices.length);
            };
            /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */            Vertices.area = function(vertices, signed) {
              var area = 0, j = vertices.length - 1;
              for (var i = 0; i < vertices.length; i++) {
                area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                j = i;
              }
              if (signed) return area / 2;
              return Math.abs(area) / 2;
            };
            /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */            Vertices.inertia = function(vertices, mass) {
              var numerator = 0, denominator = 0, v = vertices, cross, j;
              // find the polygon's moment of inertia, using second moment of area
              // from equations at http://www.physicsforums.com/showthread.php?t=25293
                            for (var n = 0; n < v.length; n++) {
                j = (n + 1) % v.length;
                cross = Math.abs(Vector.cross(v[j], v[n]));
                numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                denominator += cross;
              }
              return mass / 6 * (numerator / denominator);
            };
            /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */            Vertices.translate = function(vertices, vector, scalar) {
              scalar = typeof scalar !== "undefined" ? scalar : 1;
              var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
              for (i = 0; i < verticesLength; i++) {
                vertices[i].x += translateX;
                vertices[i].y += translateY;
              }
              return vertices;
            };
            /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */            Vertices.rotate = function(vertices, angle, point) {
              if (angle === 0) return;
              var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
              for (i = 0; i < verticesLength; i++) {
                vertex = vertices[i];
                dx = vertex.x - pointX;
                dy = vertex.y - pointY;
                vertex.x = pointX + (dx * cos - dy * sin);
                vertex.y = pointY + (dx * sin + dy * cos);
              }
              return vertices;
            };
            /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */            Vertices.contains = function(vertices, point) {
              var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
              for (var i = 0; i < verticesLength; i++) {
                nextVertex = vertices[i];
                if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                  return false;
                }
                vertex = nextVertex;
              }
              return true;
            };
            /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */            Vertices.scale = function(vertices, scaleX, scaleY, point) {
              if (scaleX === 1 && scaleY === 1) return vertices;
              point = point || Vertices.centre(vertices);
              var vertex, delta;
              for (var i = 0; i < vertices.length; i++) {
                vertex = vertices[i];
                delta = Vector.sub(vertex, point);
                vertices[i].x = point.x + delta.x * scaleX;
                vertices[i].y = point.y + delta.y * scaleY;
              }
              return vertices;
            };
            /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */            Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
              if (typeof radius === "number") {
                radius = [ radius ];
              } else {
                radius = radius || [ 8 ];
              }
              // quality defaults to -1, which is auto
                            quality = typeof quality !== "undefined" ? quality : -1;
              qualityMin = qualityMin || 2;
              qualityMax = qualityMax || 14;
              var newVertices = [];
              for (var i = 0; i < vertices.length; i++) {
                var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                if (currentRadius === 0) {
                  newVertices.push(vertex);
                  continue;
                }
                var prevNormal = Vector.normalise({
                  x: vertex.y - prevVertex.y,
                  y: prevVertex.x - vertex.x
                });
                var nextNormal = Vector.normalise({
                  x: nextVertex.y - vertex.y,
                  y: vertex.x - nextVertex.x
                });
                var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), .5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                var precision = quality;
                if (quality === -1) {
                  // automatically decide precision
                  precision = Math.pow(currentRadius, .32) * 1.75;
                }
                precision = Common.clamp(precision, qualityMin, qualityMax);
                // use an even value for precision, more likely to reduce axes by using symmetry
                                if (precision % 2 === 1) precision += 1;
                var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                for (var j = 0; j < precision; j++) {
                  newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                }
              }
              return newVertices;
            };
            /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */            Vertices.clockwiseSort = function(vertices) {
              var centre = Vertices.mean(vertices);
              vertices.sort((function(vertexA, vertexB) {
                return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
              }));
              return vertices;
            };
            /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */            Vertices.isConvex = function(vertices) {
              // http://paulbourke.net/geometry/polygonmesh/
              // Copyright (c) Paul Bourke (use permitted)
              var flag = 0, n = vertices.length, i, j, k, z;
              if (n < 3) return null;
              for (i = 0; i < n; i++) {
                j = (i + 1) % n;
                k = (i + 2) % n;
                z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                if (z < 0) {
                  flag |= 1;
                } else if (z > 0) {
                  flag |= 2;
                }
                if (flag === 3) {
                  return false;
                }
              }
              if (flag !== 0) {
                return true;
              } else {
                return null;
              }
            };
            /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */            Vertices.hull = function(vertices) {
              // http://geomalgorithms.com/a10-_hull-1.html
              var upper = [], lower = [], vertex, i;
              // sort vertices on x-axis (y-axis for ties)
                            vertices = vertices.slice(0);
              vertices.sort((function(vertexA, vertexB) {
                var dx = vertexA.x - vertexB.x;
                return dx !== 0 ? dx : vertexA.y - vertexB.y;
              }));
              // build lower hull
                            for (i = 0; i < vertices.length; i += 1) {
                vertex = vertices[i];
                while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                  lower.pop();
                }
                lower.push(vertex);
              }
              // build upper hull
                            for (i = vertices.length - 1; i >= 0; i -= 1) {
                vertex = vertices[i];
                while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                  upper.pop();
                }
                upper.push(vertex);
              }
              // concatenation of the lower and upper hulls gives the convex hull
              // omit last points because they are repeated at the beginning of the other list
                            upper.pop();
              lower.pop();
              return upper.concat(lower);
            };
          })();
          /***/        }, 
        /* 4 */
        /***/ function(module, exports, __nested_webpack_require_49544__) {
          /**
* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/
          var Body = {};
          module.exports = Body;
          var Vertices = __nested_webpack_require_49544__(3);
          var Vector = __nested_webpack_require_49544__(2);
          var Sleeping = __nested_webpack_require_49544__(7);
          var Common = __nested_webpack_require_49544__(0);
          var Bounds = __nested_webpack_require_49544__(1);
          var Axes = __nested_webpack_require_49544__(11);
          (function() {
            Body._timeCorrection = true;
            Body._inertiaScale = 4;
            Body._nextCollidingGroupId = 1;
            Body._nextNonCollidingGroupId = -1;
            Body._nextCategory = 1;
            Body._baseDelta = 1e3 / 60;
            /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */            Body.create = function(options) {
              var defaults = {
                id: Common.nextId(),
                type: "body",
                label: "Body",
                parts: [],
                plugin: {},
                angle: 0,
                vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                position: {
                  x: 0,
                  y: 0
                },
                force: {
                  x: 0,
                  y: 0
                },
                torque: 0,
                positionImpulse: {
                  x: 0,
                  y: 0
                },
                constraintImpulse: {
                  x: 0,
                  y: 0,
                  angle: 0
                },
                totalContacts: 0,
                speed: 0,
                angularSpeed: 0,
                velocity: {
                  x: 0,
                  y: 0
                },
                angularVelocity: 0,
                isSensor: false,
                isStatic: false,
                isSleeping: false,
                motion: 0,
                sleepThreshold: 60,
                density: .001,
                restitution: 0,
                friction: .1,
                frictionStatic: .5,
                frictionAir: .01,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                },
                slop: .05,
                timeScale: 1,
                render: {
                  visible: true,
                  opacity: 1,
                  strokeStyle: null,
                  fillStyle: null,
                  lineWidth: null,
                  sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                  }
                },
                events: null,
                bounds: null,
                chamfer: null,
                circleRadius: 0,
                positionPrev: null,
                anglePrev: 0,
                parent: null,
                axes: null,
                area: 0,
                mass: 0,
                inertia: 0,
                deltaTime: 1e3 / 60,
                _original: null
              };
              var body = Common.extend(defaults, options);
              _initProperties(body, options);
              return body;
            };
            /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */            Body.nextGroup = function(isNonColliding) {
              if (isNonColliding) return Body._nextNonCollidingGroupId--;
              return Body._nextCollidingGroupId++;
            };
            /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */            Body.nextCategory = function() {
              Body._nextCategory = Body._nextCategory << 1;
              return Body._nextCategory;
            };
            /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */            var _initProperties = function(body, options) {
              options = options || {};
              // init required properties (order is important)
                            Body.set(body, {
                bounds: body.bounds || Bounds.create(body.vertices),
                positionPrev: body.positionPrev || Vector.clone(body.position),
                anglePrev: body.anglePrev || body.angle,
                vertices: body.vertices,
                parts: body.parts || [ body ],
                isStatic: body.isStatic,
                isSleeping: body.isSleeping,
                parent: body.parent || body
              });
              Vertices.rotate(body.vertices, body.angle, body.position);
              Axes.rotate(body.axes, body.angle);
              Bounds.update(body.bounds, body.vertices, body.velocity);
              // allow options to override the automatically calculated properties
                            Body.set(body, {
                axes: options.axes || body.axes,
                area: options.area || body.area,
                mass: options.mass || body.mass,
                inertia: options.inertia || body.inertia
              });
              // render properties
                            var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose([ "#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1" ]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
              body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
              body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
              body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
              body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
              body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
            };
            /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */            Body.set = function(body, settings, value) {
              var property;
              if (typeof settings === "string") {
                property = settings;
                settings = {};
                settings[property] = value;
              }
              for (property in settings) {
                if (!Object.prototype.hasOwnProperty.call(settings, property)) continue;
                value = settings[property];
                switch (property) {
                 case "isStatic":
                  Body.setStatic(body, value);
                  break;

                 case "isSleeping":
                  Sleeping.set(body, value);
                  break;

                 case "mass":
                  Body.setMass(body, value);
                  break;

                 case "density":
                  Body.setDensity(body, value);
                  break;

                 case "inertia":
                  Body.setInertia(body, value);
                  break;

                 case "vertices":
                  Body.setVertices(body, value);
                  break;

                 case "position":
                  Body.setPosition(body, value);
                  break;

                 case "angle":
                  Body.setAngle(body, value);
                  break;

                 case "velocity":
                  Body.setVelocity(body, value);
                  break;

                 case "angularVelocity":
                  Body.setAngularVelocity(body, value);
                  break;

                 case "speed":
                  Body.setSpeed(body, value);
                  break;

                 case "angularSpeed":
                  Body.setAngularSpeed(body, value);
                  break;

                 case "parts":
                  Body.setParts(body, value);
                  break;

                 case "centre":
                  Body.setCentre(body, value);
                  break;

                 default:
                  body[property] = value;
                }
              }
            };
            /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */            Body.setStatic = function(body, isStatic) {
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                if (isStatic) {
                  if (!part.isStatic) {
                    part._original = {
                      restitution: part.restitution,
                      friction: part.friction,
                      mass: part.mass,
                      inertia: part.inertia,
                      density: part.density,
                      inverseMass: part.inverseMass,
                      inverseInertia: part.inverseInertia
                    };
                  }
                  part.restitution = 0;
                  part.friction = 1;
                  part.mass = part.inertia = part.density = Infinity;
                  part.inverseMass = part.inverseInertia = 0;
                  part.positionPrev.x = part.position.x;
                  part.positionPrev.y = part.position.y;
                  part.anglePrev = part.angle;
                  part.angularVelocity = 0;
                  part.speed = 0;
                  part.angularSpeed = 0;
                  part.motion = 0;
                } else if (part._original) {
                  part.restitution = part._original.restitution;
                  part.friction = part._original.friction;
                  part.mass = part._original.mass;
                  part.inertia = part._original.inertia;
                  part.density = part._original.density;
                  part.inverseMass = part._original.inverseMass;
                  part.inverseInertia = part._original.inverseInertia;
                  part._original = null;
                }
                part.isStatic = isStatic;
              }
            };
            /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */            Body.setMass = function(body, mass) {
              var moment = body.inertia / (body.mass / 6);
              body.inertia = moment * (mass / 6);
              body.inverseInertia = 1 / body.inertia;
              body.mass = mass;
              body.inverseMass = 1 / body.mass;
              body.density = body.mass / body.area;
            };
            /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */            Body.setDensity = function(body, density) {
              Body.setMass(body, density * body.area);
              body.density = density;
            };
            /**
     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */            Body.setInertia = function(body, inertia) {
              body.inertia = inertia;
              body.inverseInertia = 1 / body.inertia;
            };
            /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
     * 
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */            Body.setVertices = function(body, vertices) {
              // change vertices
              if (vertices[0].body === body) {
                body.vertices = vertices;
              } else {
                body.vertices = Vertices.create(vertices, body);
              }
              // update properties
                            body.axes = Axes.fromVertices(body.vertices);
              body.area = Vertices.area(body.vertices);
              Body.setMass(body, body.density * body.area);
              // orient vertices around the centre of mass at origin (0, 0)
                            var centre = Vertices.centre(body.vertices);
              Vertices.translate(body.vertices, centre, -1);
              // update inertia while vertices are at origin (0, 0)
                            Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
              // update geometry
                            Vertices.translate(body.vertices, body.position);
              Bounds.update(body.bounds, body.vertices, body.velocity);
            };
            /**
     * Sets the parts of the `body`. 
     * 
     * See `body.parts` for details and requirements on how parts are used.
     * 
     * See Bodies.fromVertices for a related utility.
     * 
     * This function updates `body` mass, inertia and centroid based on the parts geometry.  
     * Sets each `part.parent` to be this `body`.  
     * 
     * The convex hull is computed and set on this `body` (unless `autoHull` is `false`).  
     * Automatically ensures that the first part in `body.parts` is the `body`.
     * @method setParts
     * @param {body} body
     * @param {body[]} parts
     * @param {bool} [autoHull=true]
     */            Body.setParts = function(body, parts, autoHull) {
              var i;
              // add all the parts, ensuring that the first part is always the parent body
                            parts = parts.slice(0);
              body.parts.length = 0;
              body.parts.push(body);
              body.parent = body;
              for (i = 0; i < parts.length; i++) {
                var part = parts[i];
                if (part !== body) {
                  part.parent = body;
                  body.parts.push(part);
                }
              }
              if (body.parts.length === 1) return;
              autoHull = typeof autoHull !== "undefined" ? autoHull : true;
              // find the convex hull of all parts to set on the parent body
                            if (autoHull) {
                var vertices = [];
                for (i = 0; i < parts.length; i++) {
                  vertices = vertices.concat(parts[i].vertices);
                }
                Vertices.clockwiseSort(vertices);
                var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                Body.setVertices(body, hull);
                Vertices.translate(body.vertices, hullCentre);
              }
              // sum the properties of all compound parts of the parent body
                            var total = Body._totalProperties(body);
              body.area = total.area;
              body.parent = body;
              body.position.x = total.centre.x;
              body.position.y = total.centre.y;
              body.positionPrev.x = total.centre.x;
              body.positionPrev.y = total.centre.y;
              Body.setMass(body, total.mass);
              Body.setInertia(body, total.inertia);
              Body.setPosition(body, total.centre);
            };
            /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */            Body.setCentre = function(body, centre, relative) {
              if (!relative) {
                body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                body.position.x = centre.x;
                body.position.y = centre.y;
              } else {
                body.positionPrev.x += centre.x;
                body.positionPrev.y += centre.y;
                body.position.x += centre.x;
                body.position.y += centre.y;
              }
            };
            /**
     * Sets the position of the body. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     * @param {boolean} [updateVelocity=false]
     */            Body.setPosition = function(body, position, updateVelocity) {
              var delta = Vector.sub(position, body.position);
              if (updateVelocity) {
                body.positionPrev.x = body.position.x;
                body.positionPrev.y = body.position.y;
                body.velocity.x = delta.x;
                body.velocity.y = delta.y;
                body.speed = Vector.magnitude(delta);
              } else {
                body.positionPrev.x += delta.x;
                body.positionPrev.y += delta.y;
              }
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                part.position.x += delta.x;
                part.position.y += delta.y;
                Vertices.translate(part.vertices, delta);
                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
            };
            /**
     * Sets the angle of the body. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     * @param {boolean} [updateVelocity=false]
     */            Body.setAngle = function(body, angle, updateVelocity) {
              var delta = angle - body.angle;
              if (updateVelocity) {
                body.anglePrev = body.angle;
                body.angularVelocity = delta;
                body.angularSpeed = Math.abs(delta);
              } else {
                body.anglePrev += delta;
              }
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                part.angle += delta;
                Vertices.rotate(part.vertices, delta, body.position);
                Axes.rotate(part.axes, delta);
                Bounds.update(part.bounds, part.vertices, body.velocity);
                if (i > 0) {
                  Vector.rotateAbout(part.position, delta, body.position, part.position);
                }
              }
            };
            /**
     * Sets the current linear velocity of the body.  
     * Affects body speed.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */            Body.setVelocity = function(body, velocity) {
              var timeScale = body.deltaTime / Body._baseDelta;
              body.positionPrev.x = body.position.x - velocity.x * timeScale;
              body.positionPrev.y = body.position.y - velocity.y * timeScale;
              body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
              body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
              body.speed = Vector.magnitude(body.velocity);
            };
            /**
     * Gets the current linear velocity of the body.
     * @method getVelocity
     * @param {body} body
     * @return {vector} velocity
     */            Body.getVelocity = function(body) {
              var timeScale = Body._baseDelta / body.deltaTime;
              return {
                x: (body.position.x - body.positionPrev.x) * timeScale,
                y: (body.position.y - body.positionPrev.y) * timeScale
              };
            };
            /**
     * Gets the current linear speed of the body.  
     * Equivalent to the magnitude of its velocity.
     * @method getSpeed
     * @param {body} body
     * @return {number} speed
     */            Body.getSpeed = function(body) {
              return Vector.magnitude(Body.getVelocity(body));
            };
            /**
     * Sets the current linear speed of the body.  
     * Direction is maintained. Affects body velocity.
     * @method setSpeed
     * @param {body} body
     * @param {number} speed
     */            Body.setSpeed = function(body, speed) {
              Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
            };
            /**
     * Sets the current rotational velocity of the body.  
     * Affects body angular speed.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */            Body.setAngularVelocity = function(body, velocity) {
              var timeScale = body.deltaTime / Body._baseDelta;
              body.anglePrev = body.angle - velocity * timeScale;
              body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
              body.angularSpeed = Math.abs(body.angularVelocity);
            };
            /**
     * Gets the current rotational velocity of the body.
     * @method getAngularVelocity
     * @param {body} body
     * @return {number} angular velocity
     */            Body.getAngularVelocity = function(body) {
              return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
            };
            /**
     * Gets the current rotational speed of the body.  
     * Equivalent to the magnitude of its angular velocity.
     * @method getAngularSpeed
     * @param {body} body
     * @return {number} angular speed
     */            Body.getAngularSpeed = function(body) {
              return Math.abs(Body.getAngularVelocity(body));
            };
            /**
     * Sets the current rotational speed of the body.  
     * Direction is maintained. Affects body angular velocity.
     * @method setAngularSpeed
     * @param {body} body
     * @param {number} speed
     */            Body.setAngularSpeed = function(body, speed) {
              Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
            };
            /**
     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     * @param {boolean} [updateVelocity=false]
     */            Body.translate = function(body, translation, updateVelocity) {
              Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
            };
            /**
     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     * @param {boolean} [updateVelocity=false]
     */            Body.rotate = function(body, rotation, point, updateVelocity) {
              if (!point) {
                Body.setAngle(body, body.angle + rotation, updateVelocity);
              } else {
                var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                Body.setPosition(body, {
                  x: point.x + (dx * cos - dy * sin),
                  y: point.y + (dx * sin + dy * cos)
                }, updateVelocity);
                Body.setAngle(body, body.angle + rotation, updateVelocity);
              }
            };
            /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */            Body.scale = function(body, scaleX, scaleY, point) {
              var totalArea = 0, totalInertia = 0;
              point = point || body.position;
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                // scale vertices
                                Vertices.scale(part.vertices, scaleX, scaleY, point);
                // update properties
                                part.axes = Axes.fromVertices(part.vertices);
                part.area = Vertices.area(part.vertices);
                Body.setMass(part, body.density * part.area);
                // update inertia (requires vertices to be at origin)
                                Vertices.translate(part.vertices, {
                  x: -part.position.x,
                  y: -part.position.y
                });
                Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                Vertices.translate(part.vertices, {
                  x: part.position.x,
                  y: part.position.y
                });
                if (i > 0) {
                  totalArea += part.area;
                  totalInertia += part.inertia;
                }
                // scale position
                                part.position.x = point.x + (part.position.x - point.x) * scaleX;
                part.position.y = point.y + (part.position.y - point.y) * scaleY;
                // update bounds
                                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
              // handle parent body
                            if (body.parts.length > 1) {
                body.area = totalArea;
                if (!body.isStatic) {
                  Body.setMass(body, body.density * totalArea);
                  Body.setInertia(body, totalInertia);
                }
              }
              // handle circles
                            if (body.circleRadius) {
                if (scaleX === scaleY) {
                  body.circleRadius *= scaleX;
                } else {
                  // body is no longer a circle
                  body.circleRadius = null;
                }
              }
            };
            /**
     * Performs an update by integrating the equations of motion on the `body`.
     * This is applied every update by `Matter.Engine` automatically.
     * @method update
     * @param {body} body
     * @param {number} [deltaTime=16.666]
     */            Body.update = function(body, deltaTime) {
              deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;
              var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
              // from the previous step
                            var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
              // update velocity with Verlet integration
                            body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
              body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
              body.positionPrev.x = body.position.x;
              body.positionPrev.y = body.position.y;
              body.position.x += body.velocity.x;
              body.position.y += body.velocity.y;
              body.deltaTime = deltaTime;
              // update angular velocity with Verlet integration
                            body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
              body.anglePrev = body.angle;
              body.angle += body.angularVelocity;
              // transform the body geometry
                            for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                Vertices.translate(part.vertices, body.velocity);
                if (i > 0) {
                  part.position.x += body.velocity.x;
                  part.position.y += body.velocity.y;
                }
                if (body.angularVelocity !== 0) {
                  Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                  Axes.rotate(part.axes, body.angularVelocity);
                  if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                  }
                }
                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
            };
            /**
     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
     * @method updateVelocities
     * @param {body} body
     */            Body.updateVelocities = function(body) {
              var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
              bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
              bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
              body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
              body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
              body.angularSpeed = Math.abs(body.angularVelocity);
            };
            /**
     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
     * 
     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
     * 
     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
     * 
     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
     * 
     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
     * 
     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
     * 
     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
     * @method applyForce
     * @param {body} body
     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
     * @param {vector} force
     */            Body.applyForce = function(body, position, force) {
              var offset = {
                x: position.x - body.position.x,
                y: position.y - body.position.y
              };
              body.force.x += force.x;
              body.force.y += force.y;
              body.torque += offset.x * force.y - offset.y * force.x;
            };
            /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */            Body._totalProperties = function(body) {
              // from equations at:
              // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
              // http://output.to/sideway/default.asp?qno=121100087
              var properties = {
                mass: 0,
                area: 0,
                inertia: 0,
                centre: {
                  x: 0,
                  y: 0
                }
              };
              // sum the properties of all compound parts of the parent body
                            for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
                var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                properties.mass += mass;
                properties.area += part.area;
                properties.inertia += part.inertia;
                properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
              }
              properties.centre = Vector.div(properties.centre, properties.mass);
              return properties;
            };
            /*
    *
    *  Events Documentation
    *
    */
            /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */
            /**
     * _Read only_. Set by `Body.create`.
     * 
     * A `String` denoting the type of object.
     *
     * @readOnly
     * @property type
     * @type string
     * @default "body"
     */
            /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */
            /**
     * _Read only_. Use `Body.setParts` to set. 
     * 
     * See `Bodies.fromVertices` for a related utility.
     * 
     * An array of bodies (the 'parts') that make up this body (the 'parent'). The first body in this array must always be a self-reference to this `body`.  
     * 
     * The parts are fixed together and therefore perform as a single unified rigid body.
     * 
     * Parts in relation to each other are allowed to overlap, as well as form gaps or holes, so can be used to create complex concave bodies unlike when using a single part. 
     * 
     * Use properties and functions on the parent `body` rather than on parts.
     *   
     * Outside of their geometry, most properties on parts are not considered or updated.  
     * As such 'per-part' material properties among others are not currently considered.
     * 
     * Parts should be created specifically for their parent body.  
     * Parts should not be shared or reused between bodies, only one parent is supported.  
     * Parts should not have their own parts, they are not handled recursively.  
     * Parts should not be added to the world directly or any other composite.  
     * Parts own vertices must be convex and in clockwise order.   
     * 
     * A body with more than one part is sometimes referred to as a 'compound' body. 
     * 
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.  
     *
     * @readOnly
     * @property parts
     * @type body[]
     */
            /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */
            /**
     * _Read only_. Updated by `Body.setParts`.
     * 
     * A reference to the body that this is a part of. See `body.parts`.
     * This is a self reference if the body is not a part of another body.
     *
     * @readOnly
     * @property parent
     * @type body
     */
            /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */
            /**
     * _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
     * 
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     * `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
     * 
     * Vertices must always be convex, in clockwise order and must not contain any duplicate points.
     * 
     * Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
     *
     * When set the vertices are translated such that `body.position` is at the centre of mass.
     * Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
     * 
     * The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @readOnly
     * @property vertices
     * @type vector[]
     */
            /**
     * _Read only_. Use `Body.setPosition` to set. 
     * 
     * A `Vector` that specifies the current world-space position of the body.
     * 
     * @readOnly
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * A `Vector` that accumulates the total force applied to the body for a single update.
     * Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
     * 
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
     * Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
     *
     * Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
     * 
     * @property torque
     * @type number
     * @default 0
     */
            /**
     * _Read only_. Use `Body.setSpeed` to set. 
     * 
     * See `Body.getSpeed` for details.
     * 
     * Equivalent to the magnitude of `body.velocity` (always positive).
     * 
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */
            /**
     * _Read only_. Use `Body.setVelocity` to set. 
     * 
     * See `Body.getVelocity` for details.
     * 
     * Equivalent to the magnitude of `body.angularVelocity` (always positive).
     * 
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * _Read only_. Use `Body.setAngularSpeed` to set. 
     * 
     * See `Body.getAngularSpeed` for details.
     * 
     * 
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */
            /**
     * _Read only_. Use `Body.setAngularVelocity` to set. 
     * 
     * See `Body.getAngularVelocity` for details.
     * 
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */
            /**
     * _Read only_. Use `Body.setStatic` to set. 
     * 
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     *
     * @readOnly
     * @property isStatic
     * @type boolean
     * @default false
     */
            /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */
            /**
     * _Read only_. Use `Sleeping.set` to set. 
     * 
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     *
     * @readOnly
     * @property isSleeping
     * @type boolean
     * @default false
     */
            /**
     * _Read only_. Calculated during engine update only when sleeping is enabled.
     * 
     * A `Number` that loosely measures the amount of movement a body currently has.
     *
     * Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
     * 
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */
            /**
     * A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     * 
     * @property sleepThreshold
     * @type number
     * @default 60
     */
            /**
     * _Read only_. Use `Body.setDensity` to set. 
     * 
     * A `Number` that defines the density of the body (mass per unit area).
     * 
     * Mass will also be updated when set.
     *
     * @readOnly
     * @property density
     * @type number
     * @default 0.001
     */
            /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the mass of the body.
     * 
     * Density will also be updated when set.
     * 
     * @readOnly
     * @property mass
     * @type number
     */
            /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     *
     * @readOnly
     * @property inverseMass
     * @type number
     */
            /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
     * 
     * A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
     * 
     * Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
     * 
     * @readOnly
     * @property inertia
     * @type number
     */
            /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
     * 
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * 
     * @readOnly
     * @property inverseInertia
     * @type number
     */
            /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     * `Math.max(bodyA.restitution, bodyB.restitution)`
     *
     * @property restitution
     * @type number
     * @default 0
     */
            /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     * `Math.min(bodyA.friction, bodyB.friction)`
     *
     * @property friction
     * @type number
     * @default 0.1
     */
            /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */
            /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */
            /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */
            /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */
            /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */
            /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */
            /**
     * A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
     * 
     * This is required for proper collision response, including friction and restitution effects.
     * 
     * The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
     *
     * @property slop
     * @type number
     * @default 0.05
     */
            /**
     * A `Number` that specifies per-body time scaling.
     *
     * @property timeScale
     * @type number
     * @default 1
     */
            /**
     * _Read only_. Updated during engine update.
     * 
     * A `Number` that records the last delta time value used to update this body.
     * Used to calculate speed and velocity.
     *
     * @readOnly
     * @property deltaTime
     * @type number
     * @default 1000 / 60
     */
            /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */
            /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */
            /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */
            /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */
            /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
            /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */
            /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */
            /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */
            /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */
            /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */
            /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */
            /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */
            /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated when vertices are set.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @readOnly
     * @property axes
     * @type vector[]
     */
            /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * A `Number` that measures the area of the body's convex hull.
     * 
     * @readOnly
     * @property area
     * @type string
     * @default 
     */
            /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
     * 
     * @property bounds
     * @type bounds
     */
            /**
     * Temporarily may hold parameters to be passed to `Vertices.chamfer` where supported by external functions.
     * 
     * See `Vertices.chamfer` for possible parameters this object may hold.
     * 
     * Currently only functions inside `Matter.Bodies` provide a utility using this property as a vertices pre-processing option.
     * 
     * Alternatively consider using `Vertices.chamfer` directly on vertices before passing them to a body creation function.
     * 
     * @property chamfer
     * @type object|null|undefined
     */          })();
          /***/        }, 
        /* 5 */
        /***/ function(module, exports, __nested_webpack_require_100740__) {
          /**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/
          var Events = {};
          module.exports = Events;
          var Common = __nested_webpack_require_100740__(0);
          (function() {
            /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
            Events.on = function(object, eventNames, callback) {
              var names = eventNames.split(" "), name;
              for (var i = 0; i < names.length; i++) {
                name = names[i];
                object.events = object.events || {};
                object.events[name] = object.events[name] || [];
                object.events[name].push(callback);
              }
              return callback;
            };
            /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */            Events.off = function(object, eventNames, callback) {
              if (!eventNames) {
                object.events = {};
                return;
              }
              // handle Events.off(object, callback)
                            if (typeof eventNames === "function") {
                callback = eventNames;
                eventNames = Common.keys(object.events).join(" ");
              }
              var names = eventNames.split(" ");
              for (var i = 0; i < names.length; i++) {
                var callbacks = object.events[names[i]], newCallbacks = [];
                if (callback && callbacks) {
                  for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback) newCallbacks.push(callbacks[j]);
                  }
                }
                object.events[names[i]] = newCallbacks;
              }
            };
            /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */            Events.trigger = function(object, eventNames, event) {
              var names, name, callbacks, eventClone;
              var events = object.events;
              if (events && Common.keys(events).length > 0) {
                if (!event) event = {};
                names = eventNames.split(" ");
                for (var i = 0; i < names.length; i++) {
                  name = names[i];
                  callbacks = events[name];
                  if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;
                    for (var j = 0; j < callbacks.length; j++) {
                      callbacks[j].apply(object, [ eventClone ]);
                    }
                  }
                }
              }
            };
          })();
          /***/        }, 
        /* 6 */
        /***/ function(module, exports, __nested_webpack_require_103938__) {
          /**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/
          var Composite = {};
          module.exports = Composite;
          var Events = __nested_webpack_require_103938__(5);
          var Common = __nested_webpack_require_103938__(0);
          var Bounds = __nested_webpack_require_103938__(1);
          var Body = __nested_webpack_require_103938__(4);
          (function() {
            /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
            Composite.create = function(options) {
              return Common.extend({
                id: Common.nextId(),
                type: "composite",
                parent: null,
                isModified: false,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null
                }
              }, options);
            };
            /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */            Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
              composite.isModified = isModified;
              if (isModified && composite.cache) {
                composite.cache.allBodies = null;
                composite.cache.allConstraints = null;
                composite.cache.allComposites = null;
              }
              if (updateParents && composite.parent) {
                Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
              }
              if (updateChildren) {
                for (var i = 0; i < composite.composites.length; i++) {
                  var childComposite = composite.composites[i];
                  Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                }
              }
            };
            /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */            Composite.add = function(composite, object) {
              var objects = [].concat(object);
              Events.trigger(composite, "beforeAdd", {
                object
              });
              for (var i = 0; i < objects.length; i++) {
                var obj = objects[i];
                switch (obj.type) {
                 case "body":
                  // skip adding compound parts
                  if (obj.parent !== obj) {
                    Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                    break;
                  }
                  Composite.addBody(composite, obj);
                  break;

                 case "constraint":
                  Composite.addConstraint(composite, obj);
                  break;

                 case "composite":
                  Composite.addComposite(composite, obj);
                  break;

                 case "mouseConstraint":
                  Composite.addConstraint(composite, obj.constraint);
                  break;
                }
              }
              Events.trigger(composite, "afterAdd", {
                object
              });
              return composite;
            };
            /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */            Composite.remove = function(composite, object, deep) {
              var objects = [].concat(object);
              Events.trigger(composite, "beforeRemove", {
                object
              });
              for (var i = 0; i < objects.length; i++) {
                var obj = objects[i];
                switch (obj.type) {
                 case "body":
                  Composite.removeBody(composite, obj, deep);
                  break;

                 case "constraint":
                  Composite.removeConstraint(composite, obj, deep);
                  break;

                 case "composite":
                  Composite.removeComposite(composite, obj, deep);
                  break;

                 case "mouseConstraint":
                  Composite.removeConstraint(composite, obj.constraint);
                  break;
                }
              }
              Events.trigger(composite, "afterRemove", {
                object
              });
              return composite;
            };
            /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */            Composite.addComposite = function(compositeA, compositeB) {
              compositeA.composites.push(compositeB);
              compositeB.parent = compositeA;
              Composite.setModified(compositeA, true, true, false);
              return compositeA;
            };
            /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */            Composite.removeComposite = function(compositeA, compositeB, deep) {
              var position = Common.indexOf(compositeA.composites, compositeB);
              if (position !== -1) {
                var bodies = Composite.allBodies(compositeB);
                Composite.removeCompositeAt(compositeA, position);
                for (var i = 0; i < bodies.length; i++) {
                  bodies[i].sleepCounter = 0;
                }
              }
              if (deep) {
                for (var i = 0; i < compositeA.composites.length; i++) {
                  Composite.removeComposite(compositeA.composites[i], compositeB, true);
                }
              }
              return compositeA;
            };
            /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */            Composite.removeCompositeAt = function(composite, position) {
              composite.composites.splice(position, 1);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */            Composite.addBody = function(composite, body) {
              composite.bodies.push(body);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */            Composite.removeBody = function(composite, body, deep) {
              var position = Common.indexOf(composite.bodies, body);
              if (position !== -1) {
                Composite.removeBodyAt(composite, position);
                body.sleepCounter = 0;
              }
              if (deep) {
                for (var i = 0; i < composite.composites.length; i++) {
                  Composite.removeBody(composite.composites[i], body, true);
                }
              }
              return composite;
            };
            /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */            Composite.removeBodyAt = function(composite, position) {
              composite.bodies.splice(position, 1);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */            Composite.addConstraint = function(composite, constraint) {
              composite.constraints.push(constraint);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */            Composite.removeConstraint = function(composite, constraint, deep) {
              var position = Common.indexOf(composite.constraints, constraint);
              if (position !== -1) {
                Composite.removeConstraintAt(composite, position);
              }
              if (deep) {
                for (var i = 0; i < composite.composites.length; i++) {
                  Composite.removeConstraint(composite.composites[i], constraint, true);
                }
              }
              return composite;
            };
            /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */            Composite.removeConstraintAt = function(composite, position) {
              composite.constraints.splice(position, 1);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */            Composite.clear = function(composite, keepStatic, deep) {
              if (deep) {
                for (var i = 0; i < composite.composites.length; i++) {
                  Composite.clear(composite.composites[i], keepStatic, true);
                }
              }
              if (keepStatic) {
                composite.bodies = composite.bodies.filter((function(body) {
                  return body.isStatic;
                }));
              } else {
                composite.bodies.length = 0;
              }
              composite.constraints.length = 0;
              composite.composites.length = 0;
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */            Composite.allBodies = function(composite) {
              if (composite.cache && composite.cache.allBodies) {
                return composite.cache.allBodies;
              }
              var bodies = [].concat(composite.bodies);
              for (var i = 0; i < composite.composites.length; i++) bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
              if (composite.cache) {
                composite.cache.allBodies = bodies;
              }
              return bodies;
            };
            /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */            Composite.allConstraints = function(composite) {
              if (composite.cache && composite.cache.allConstraints) {
                return composite.cache.allConstraints;
              }
              var constraints = [].concat(composite.constraints);
              for (var i = 0; i < composite.composites.length; i++) constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
              if (composite.cache) {
                composite.cache.allConstraints = constraints;
              }
              return constraints;
            };
            /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */            Composite.allComposites = function(composite) {
              if (composite.cache && composite.cache.allComposites) {
                return composite.cache.allComposites;
              }
              var composites = [].concat(composite.composites);
              for (var i = 0; i < composite.composites.length; i++) composites = composites.concat(Composite.allComposites(composite.composites[i]));
              if (composite.cache) {
                composite.cache.allComposites = composites;
              }
              return composites;
            };
            /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */            Composite.get = function(composite, id, type) {
              var objects, object;
              switch (type) {
               case "body":
                objects = Composite.allBodies(composite);
                break;

               case "constraint":
                objects = Composite.allConstraints(composite);
                break;

               case "composite":
                objects = Composite.allComposites(composite).concat(composite);
                break;
              }
              if (!objects) return null;
              object = objects.filter((function(object) {
                return object.id.toString() === id.toString();
              }));
              return object.length === 0 ? null : object[0];
            };
            /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */            Composite.move = function(compositeA, objects, compositeB) {
              Composite.remove(compositeA, objects);
              Composite.add(compositeB, objects);
              return compositeA;
            };
            /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */            Composite.rebase = function(composite) {
              var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
              for (var i = 0; i < objects.length; i++) {
                objects[i].id = Common.nextId();
              }
              return composite;
            };
            /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */            Composite.translate = function(composite, translation, recursive) {
              var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
              for (var i = 0; i < bodies.length; i++) {
                Body.translate(bodies[i], translation);
              }
              return composite;
            };
            /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */            Composite.rotate = function(composite, rotation, point, recursive) {
              var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                Body.setPosition(body, {
                  x: point.x + (dx * cos - dy * sin),
                  y: point.y + (dx * sin + dy * cos)
                });
                Body.rotate(body, rotation);
              }
              return composite;
            };
            /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */            Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
              var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                Body.setPosition(body, {
                  x: point.x + dx * scaleX,
                  y: point.y + dy * scaleY
                });
                Body.scale(body, scaleX, scaleY);
              }
              return composite;
            };
            /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */            Composite.bounds = function(composite) {
              var bodies = Composite.allBodies(composite), vertices = [];
              for (var i = 0; i < bodies.length; i += 1) {
                var body = bodies[i];
                vertices.push(body.bounds.min, body.bounds.max);
              }
              return Bounds.create(vertices);
            };
            /*
    *
    *  Events Documentation
    *
    */
            /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */
            /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */
            /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */
            /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */
            /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */
            /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */
            /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */
            /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */
            /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */
            /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */          })();
          /***/        }, 
        /* 7 */
        /***/ function(module, exports, __nested_webpack_require_127843__) {
          /**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/
          var Sleeping = {};
          module.exports = Sleeping;
          var Body = __nested_webpack_require_127843__(4);
          var Events = __nested_webpack_require_127843__(5);
          var Common = __nested_webpack_require_127843__(0);
          (function() {
            Sleeping._motionWakeThreshold = .18;
            Sleeping._motionSleepThreshold = .08;
            Sleeping._minBias = .9;
            /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} delta
     */            Sleeping.update = function(bodies, delta) {
              var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
              // update bodies sleeping status
                            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
                // wake up bodies if they have a force applied
                                if (body.force.x !== 0 || body.force.y !== 0) {
                  Sleeping.set(body, false);
                  continue;
                }
                var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                // biased average motion estimation between frames
                                body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                  body.sleepCounter += 1;
                  if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                    Sleeping.set(body, true);
                  }
                } else if (body.sleepCounter > 0) {
                  body.sleepCounter -= 1;
                }
              }
            };
            /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     */            Sleeping.afterCollisions = function(pairs) {
              var motionSleepThreshold = Sleeping._motionSleepThreshold;
              // wake up bodies involved in collisions
                            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                // don't wake inactive pairs
                                if (!pair.isActive) continue;
                var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                // don't wake if at least one body is static
                                if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic) continue;
                if (bodyA.isSleeping || bodyB.isSleeping) {
                  var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                  if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                    Sleeping.set(sleepingBody, false);
                  }
                }
              }
            };
            /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */            Sleeping.set = function(body, isSleeping) {
              var wasSleeping = body.isSleeping;
              if (isSleeping) {
                body.isSleeping = true;
                body.sleepCounter = body.sleepThreshold;
                body.positionImpulse.x = 0;
                body.positionImpulse.y = 0;
                body.positionPrev.x = body.position.x;
                body.positionPrev.y = body.position.y;
                body.anglePrev = body.angle;
                body.speed = 0;
                body.angularSpeed = 0;
                body.motion = 0;
                if (!wasSleeping) {
                  Events.trigger(body, "sleepStart");
                }
              } else {
                body.isSleeping = false;
                body.sleepCounter = 0;
                if (wasSleeping) {
                  Events.trigger(body, "sleepEnd");
                }
              }
            };
          })();
          /***/        }, 
        /* 8 */
        /***/ function(module, exports, __nested_webpack_require_132087__) {
          /**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/
          var Collision = {};
          module.exports = Collision;
          var Vertices = __nested_webpack_require_132087__(3);
          var Pair = __nested_webpack_require_132087__(9);
          (function() {
            var _supports = [];
            var _overlapAB = {
              overlap: 0,
              axis: null
            };
            var _overlapBA = {
              overlap: 0,
              axis: null
            };
            /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */            Collision.create = function(bodyA, bodyB) {
              return {
                pair: null,
                collided: false,
                bodyA,
                bodyB,
                parentA: bodyA.parent,
                parentB: bodyB.parent,
                depth: 0,
                normal: {
                  x: 0,
                  y: 0
                },
                tangent: {
                  x: 0,
                  y: 0
                },
                penetration: {
                  x: 0,
                  y: 0
                },
                supports: [ null, null ],
                supportCount: 0
              };
            };
            /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */            Collision.collides = function(bodyA, bodyB, pairs) {
              Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
              if (_overlapAB.overlap <= 0) {
                return null;
              }
              Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
              if (_overlapBA.overlap <= 0) {
                return null;
              }
              // reuse collision records for gc efficiency
                            var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
              if (!pair) {
                collision = Collision.create(bodyA, bodyB);
                collision.collided = true;
                collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                collision.parentA = collision.bodyA.parent;
                collision.parentB = collision.bodyB.parent;
              } else {
                collision = pair.collision;
              }
              bodyA = collision.bodyA;
              bodyB = collision.bodyB;
              var minOverlap;
              if (_overlapAB.overlap < _overlapBA.overlap) {
                minOverlap = _overlapAB;
              } else {
                minOverlap = _overlapBA;
              }
              var normal = collision.normal, tangent = collision.tangent, penetration = collision.penetration, supports = collision.supports, depth = minOverlap.overlap, minAxis = minOverlap.axis, normalX = minAxis.x, normalY = minAxis.y, deltaX = bodyB.position.x - bodyA.position.x, deltaY = bodyB.position.y - bodyA.position.y;
              // ensure normal is facing away from bodyA
                            if (normalX * deltaX + normalY * deltaY >= 0) {
                normalX = -normalX;
                normalY = -normalY;
              }
              normal.x = normalX;
              normal.y = normalY;
              tangent.x = -normalY;
              tangent.y = normalX;
              penetration.x = normalX * depth;
              penetration.y = normalY * depth;
              collision.depth = depth;
              // find support points, there is always either exactly one or two
                            var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
              // find the supports from bodyB that are inside bodyA
                            if (Vertices.contains(bodyA.vertices, supportsB[0])) {
                supports[supportCount++] = supportsB[0];
              }
              if (Vertices.contains(bodyA.vertices, supportsB[1])) {
                supports[supportCount++] = supportsB[1];
              }
              // find the supports from bodyA that are inside bodyB
                            if (supportCount < 2) {
                var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                  supports[supportCount++] = supportsA[0];
                }
                if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                  supports[supportCount++] = supportsA[1];
                }
              }
              // account for the edge case of overlapping but no vertex containment
                            if (supportCount === 0) {
                supports[supportCount++] = supportsB[0];
              }
              // update support count
                            collision.supportCount = supportCount;
              return collision;
            };
            /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */            Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
              var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
              for (i = 0; i < axesLength; i++) {
                var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                for (j = 1; j < verticesALength; j += 1) {
                  dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                  if (dot > maxA) {
                    maxA = dot;
                  } else if (dot < minA) {
                    minA = dot;
                  }
                }
                for (j = 1; j < verticesBLength; j += 1) {
                  dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                  if (dot > maxB) {
                    maxB = dot;
                  } else if (dot < minB) {
                    minB = dot;
                  }
                }
                overlapAB = maxA - minB;
                overlapBA = maxB - minA;
                overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                if (overlap < overlapMin) {
                  overlapMin = overlap;
                  overlapAxisNumber = i;
                  if (overlap <= 0) {
                    // can not be intersecting
                    break;
                  }
                }
              }
              result.axis = axes[overlapAxisNumber];
              result.overlap = overlapMin;
            };
            /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */            Collision._findSupports = function(bodyA, bodyB, normal, direction) {
              var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, vertexA = vertices[0], vertexB = vertexA, nearestDistance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y), vertexC, distance, j;
              // find deepest vertex relative to the axis
                            for (j = 1; j < verticesLength; j += 1) {
                vertexB = vertices[j];
                distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                // convex hill-climbing
                                if (distance < nearestDistance) {
                  nearestDistance = distance;
                  vertexA = vertexB;
                }
              }
              // measure next vertex
                            vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
              nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
              // compare with previous vertex
                            vertexB = vertices[(vertexA.index + 1) % verticesLength];
              if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                _supports[0] = vertexA;
                _supports[1] = vertexB;
                return _supports;
              }
              _supports[0] = vertexA;
              _supports[1] = vertexC;
              return _supports;
            };
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */
            /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */
            /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */
            /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */
            /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */
            /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */
            /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */
            /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * An array of body vertices that represent the support points in the collision.
     * 
     * _Note:_ Only the first `collision.supportCount` items of `collision.supports` are active.
     * Therefore use `collision.supportCount` instead of `collision.supports.length` when iterating the active supports.
     * 
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */
            /**
     * The number of active supports for this collision found in `collision.supports`.
     * 
     * _Note:_ Only the first `collision.supportCount` items of `collision.supports` are active.
     * Therefore use `collision.supportCount` instead of `collision.supports.length` when iterating the active supports.
     *
     * @property supportCount
     * @type number
     * @default 0
     */          })();
          /***/        }, 
        /* 9 */
        /***/ function(module, exports, __nested_webpack_require_144127__) {
          /**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/
          var Pair = {};
          module.exports = Pair;
          var Contact = __nested_webpack_require_144127__(16);
          (function() {
            /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
            Pair.create = function(collision, timestamp) {
              var bodyA = collision.bodyA, bodyB = collision.bodyB;
              var pair = {
                id: Pair.id(bodyA, bodyB),
                bodyA,
                bodyB,
                collision,
                contacts: [ Contact.create(), Contact.create() ],
                contactCount: 0,
                separation: 0,
                isActive: true,
                isSensor: bodyA.isSensor || bodyB.isSensor,
                timeCreated: timestamp,
                timeUpdated: timestamp,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0
              };
              Pair.update(pair, collision, timestamp);
              return pair;
            };
            /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */            Pair.update = function(pair, collision, timestamp) {
              var supports = collision.supports, supportCount = collision.supportCount, contacts = pair.contacts, parentA = collision.parentA, parentB = collision.parentB;
              pair.isActive = true;
              pair.timeUpdated = timestamp;
              pair.collision = collision;
              pair.separation = collision.depth;
              pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
              pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
              pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
              pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
              pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
              pair.contactCount = supportCount;
              collision.pair = pair;
              var supportA = supports[0], contactA = contacts[0], supportB = supports[1], contactB = contacts[1];
              // match contacts to supports
                            if (contactB.vertex === supportA || contactA.vertex === supportB) {
                contacts[1] = contactA;
                contacts[0] = contactA = contactB;
                contactB = contacts[1];
              }
              // update contacts
                            contactA.vertex = supportA;
              contactB.vertex = supportB;
            };
            /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */            Pair.setActive = function(pair, isActive, timestamp) {
              if (isActive) {
                pair.isActive = true;
                pair.timeUpdated = timestamp;
              } else {
                pair.isActive = false;
                pair.contactCount = 0;
              }
            };
            /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */            Pair.id = function(bodyA, bodyB) {
              return bodyA.id < bodyB.id ? bodyA.id.toString(36) + ":" + bodyB.id.toString(36) : bodyB.id.toString(36) + ":" + bodyA.id.toString(36);
            };
          })();
          /***/        }, 
        /* 10 */
        /***/ function(module, exports, __nested_webpack_require_147825__) {
          /**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/
          var Constraint = {};
          module.exports = Constraint;
          var Vertices = __nested_webpack_require_147825__(3);
          var Vector = __nested_webpack_require_147825__(2);
          var Sleeping = __nested_webpack_require_147825__(7);
          var Bounds = __nested_webpack_require_147825__(1);
          var Axes = __nested_webpack_require_147825__(11);
          var Common = __nested_webpack_require_147825__(0);
          (function() {
            Constraint._warming = .4;
            Constraint._torqueDampen = 1;
            Constraint._minLength = 1e-6;
            /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */            Constraint.create = function(options) {
              var constraint = options;
              // if bodies defined but no points, use body centre
                            if (constraint.bodyA && !constraint.pointA) constraint.pointA = {
                x: 0,
                y: 0
              };
              if (constraint.bodyB && !constraint.pointB) constraint.pointB = {
                x: 0,
                y: 0
              };
              // calculate static length using initial world space points
                            var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
              constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
              // option defaults
                            constraint.id = constraint.id || Common.nextId();
              constraint.label = constraint.label || "Constraint";
              constraint.type = "constraint";
              constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : .7);
              constraint.damping = constraint.damping || 0;
              constraint.angularStiffness = constraint.angularStiffness || 0;
              constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
              constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
              constraint.plugin = {};
              // render
                            var render = {
                visible: true,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: true
              };
              if (constraint.length === 0 && constraint.stiffness > .1) {
                render.type = "pin";
                render.anchors = false;
              } else if (constraint.stiffness < .9) {
                render.type = "spring";
              }
              constraint.render = Common.extend(render, constraint.render);
              return constraint;
            };
            /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */            Constraint.preSolveAll = function(bodies) {
              for (var i = 0; i < bodies.length; i += 1) {
                var body = bodies[i], impulse = body.constraintImpulse;
                if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                  continue;
                }
                body.position.x += impulse.x;
                body.position.y += impulse.y;
                body.angle += impulse.angle;
              }
            };
            /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} delta
     */            Constraint.solveAll = function(constraints, delta) {
              var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
              // Solve fixed constraints first.
                            for (var i = 0; i < constraints.length; i += 1) {
                var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                if (fixedA || fixedB) {
                  Constraint.solve(constraints[i], timeScale);
                }
              }
              // Solve free constraints last.
                            for (i = 0; i < constraints.length; i += 1) {
                constraint = constraints[i];
                fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                if (!fixedA && !fixedB) {
                  Constraint.solve(constraints[i], timeScale);
                }
              }
            };
            /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */            Constraint.solve = function(constraint, timeScale) {
              var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
              if (!bodyA && !bodyB) return;
              // update reference angle
                            if (bodyA && !bodyA.isStatic) {
                Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                constraint.angleA = bodyA.angle;
              }
              // update reference angle
                            if (bodyB && !bodyB.isStatic) {
                Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                constraint.angleB = bodyB.angle;
              }
              var pointAWorld = pointA, pointBWorld = pointB;
              if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
              if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
              if (!pointAWorld || !pointBWorld) return;
              var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
              // prevent singularity
                            if (currentLength < Constraint._minLength) {
                currentLength = Constraint._minLength;
              }
              // solve distance constraint with Gauss-Siedel method
                            var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
              if (damping > 0) {
                var zero = Vector.create();
                normal = Vector.div(delta, currentLength);
                relativeVelocity = Vector.sub(bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero);
                normalVelocity = Vector.dot(normal, relativeVelocity);
              }
              if (bodyA && !bodyA.isStatic) {
                share = bodyA.inverseMass / massTotal;
                // keep track of applied impulses for post solving
                                bodyA.constraintImpulse.x -= force.x * share;
                bodyA.constraintImpulse.y -= force.y * share;
                // apply forces
                                bodyA.position.x -= force.x * share;
                bodyA.position.y -= force.y * share;
                // apply damping
                                if (damping > 0) {
                  bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                  bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
                }
                // apply torque
                                torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                bodyA.constraintImpulse.angle -= torque;
                bodyA.angle -= torque;
              }
              if (bodyB && !bodyB.isStatic) {
                share = bodyB.inverseMass / massTotal;
                // keep track of applied impulses for post solving
                                bodyB.constraintImpulse.x += force.x * share;
                bodyB.constraintImpulse.y += force.y * share;
                // apply forces
                                bodyB.position.x += force.x * share;
                bodyB.position.y += force.y * share;
                // apply damping
                                if (damping > 0) {
                  bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                  bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
                }
                // apply torque
                                torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                bodyB.constraintImpulse.angle += torque;
                bodyB.angle += torque;
              }
            };
            /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */            Constraint.postSolveAll = function(bodies) {
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], impulse = body.constraintImpulse;
                if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                  continue;
                }
                Sleeping.set(body, false);
                // update geometry and reset
                                for (var j = 0; j < body.parts.length; j++) {
                  var part = body.parts[j];
                  Vertices.translate(part.vertices, impulse);
                  if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                  }
                  if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                      Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                  }
                  Bounds.update(part.bounds, part.vertices, body.velocity);
                }
                // dampen the cached impulse for warming next step
                                impulse.angle *= Constraint._warming;
                impulse.x *= Constraint._warming;
                impulse.y *= Constraint._warming;
              }
            };
            /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */            Constraint.pointAWorld = function(constraint) {
              return {
                x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
                y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
              };
            };
            /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */            Constraint.pointBWorld = function(constraint) {
              return {
                x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
                y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
              };
            };
            /**
     * Returns the current length of the constraint. 
     * This is the distance between both of the constraint's end points.
     * See `constraint.length` for the target rest length.
     * @method currentLength
     * @param {constraint} constraint
     * @returns {number} the current length
     */            Constraint.currentLength = function(constraint) {
              var pointAX = (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0);
              var pointAY = (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0);
              var pointBX = (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0);
              var pointBY = (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0);
              var deltaX = pointAX - pointBX;
              var deltaY = pointAY - pointBY;
              return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            };
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */
            /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */
            /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */
            /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */
            /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */
            /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */
            /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */
            /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */
            /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */
            /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */
            /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */
            /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */
            /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */
            /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */
            /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */
            /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */          })();
          /***/        }, 
        /* 11 */
        /***/ function(module, exports, __nested_webpack_require_165653__) {
          /**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/
          var Axes = {};
          module.exports = Axes;
          var Vector = __nested_webpack_require_165653__(2);
          var Common = __nested_webpack_require_165653__(0);
          (function() {
            /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
            Axes.fromVertices = function(vertices) {
              var axes = {};
              // find the unique axes, using edge normal gradients
                            for (var i = 0; i < vertices.length; i++) {
                var j = (i + 1) % vertices.length, normal = Vector.normalise({
                  x: vertices[j].y - vertices[i].y,
                  y: vertices[i].x - vertices[j].x
                }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                // limit precision
                                gradient = gradient.toFixed(3).toString();
                axes[gradient] = normal;
              }
              return Common.values(axes);
            };
            /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */            Axes.rotate = function(axes, angle) {
              if (angle === 0) return;
              var cos = Math.cos(angle), sin = Math.sin(angle);
              for (var i = 0; i < axes.length; i++) {
                var axis = axes[i], xx;
                xx = axis.x * cos - axis.y * sin;
                axis.y = axis.x * sin + axis.y * cos;
                axis.x = xx;
              }
            };
          })();
          /***/        }, 
        /* 12 */
        /***/ function(module, exports, __nested_webpack_require_167394__) {
          /**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/
          // TODO: true circle bodies
          var Bodies = {};
          module.exports = Bodies;
          var Vertices = __nested_webpack_require_167394__(3);
          var Common = __nested_webpack_require_167394__(0);
          var Body = __nested_webpack_require_167394__(4);
          var Bounds = __nested_webpack_require_167394__(1);
          var Vector = __nested_webpack_require_167394__(2);
          (function() {
            /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
            Bodies.rectangle = function(x, y, width, height, options) {
              options = options || {};
              var rectangle = {
                label: "Rectangle Body",
                position: {
                  x,
                  y
                },
                vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
              };
              if (options.chamfer) {
                var chamfer = options.chamfer;
                rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                delete options.chamfer;
              }
              return Body.create(Common.extend({}, rectangle, options));
            };
            /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The `slope` is parameterised as a fraction of `width` and must be < 1 to form a valid trapezoid. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope Must be a number < 1.
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */            Bodies.trapezoid = function(x, y, width, height, slope, options) {
              options = options || {};
              if (slope >= 1) {
                Common.warn("Bodies.trapezoid: slope parameter must be < 1.");
              }
              slope *= .5;
              var roof = (1 - slope * 2) * width;
              var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
              if (slope < .5) {
                verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
              } else {
                verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
              }
              var trapezoid = {
                label: "Trapezoid Body",
                position: {
                  x,
                  y
                },
                vertices: Vertices.fromPath(verticesPath)
              };
              if (options.chamfer) {
                var chamfer = options.chamfer;
                trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                delete options.chamfer;
              }
              return Body.create(Common.extend({}, trapezoid, options));
            };
            /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */            Bodies.circle = function(x, y, radius, options, maxSides) {
              options = options || {};
              var circle = {
                label: "Circle Body",
                circleRadius: radius
              };
              // approximate circles with polygons until true circles implemented in SAT
                            maxSides = maxSides || 25;
              var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
              // optimisation: always use even number of sides (half the number of unique axes)
                            if (sides % 2 === 1) sides += 1;
              return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
            };
            /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */            Bodies.polygon = function(x, y, sides, radius, options) {
              options = options || {};
              if (sides < 3) return Bodies.circle(x, y, radius, options);
              var theta = 2 * Math.PI / sides, path = "", offset = theta * .5;
              for (var i = 0; i < sides; i += 1) {
                var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
              }
              var polygon = {
                label: "Polygon Body",
                position: {
                  x,
                  y
                },
                vertices: Vertices.fromPath(path)
              };
              if (options.chamfer) {
                var chamfer = options.chamfer;
                polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                delete options.chamfer;
              }
              return Body.create(Common.extend({}, polygon, options));
            };
            /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */            Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
              var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
              // check decomp is as expected
                            canDecomp = Boolean(decomp && decomp.quickDecomp);
              options = options || {};
              parts = [];
              flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
              removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : .01;
              minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
              removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : .01;
              // ensure vertexSets is an array of arrays
                            if (!Common.isArray(vertexSets[0])) {
                vertexSets = [ vertexSets ];
              }
              for (v = 0; v < vertexSets.length; v += 1) {
                vertices = vertexSets[v];
                isConvex = Vertices.isConvex(vertices);
                isConcave = !isConvex;
                if (isConcave && !canDecomp) {
                  Common.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.");
                }
                if (isConvex || !canDecomp) {
                  if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                  } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                  }
                  parts.push({
                    position: {
                      x,
                      y
                    },
                    vertices
                  });
                } else {
                  // initialise a decomposition
                  var concave = vertices.map((function(vertex) {
                    return [ vertex.x, vertex.y ];
                  }));
                  // vertices are concave and simple, we can decompose into parts
                                    decomp.makeCCW(concave);
                  if (removeCollinear !== false) decomp.removeCollinearPoints(concave, removeCollinear);
                  if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints) decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                  // use the quick decomposition algorithm (Bayazit)
                                    var decomposed = decomp.quickDecomp(concave);
                  // for each decomposed chunk
                                    for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];
                    // convert vertices into the correct structure
                                        var chunkVertices = chunk.map((function(vertices) {
                      return {
                        x: vertices[0],
                        y: vertices[1]
                      };
                    }));
                    // skip small chunks
                                        if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea) continue;
                    // create a compound part
                                        parts.push({
                      position: Vertices.centre(chunkVertices),
                      vertices: chunkVertices
                    });
                  }
                }
              }
              // create body parts
                            for (i = 0; i < parts.length; i++) {
                parts[i] = Body.create(Common.extend(parts[i], options));
              }
              // flag internal edges (coincident part edges)
                            if (flagInternal) {
                var coincident_max_dist = 5;
                for (i = 0; i < parts.length; i++) {
                  var partA = parts[i];
                  for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];
                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                      var pav = partA.vertices, pbv = partB.vertices;
                      // iterate vertices of both parts
                                            for (k = 0; k < partA.vertices.length; k++) {
                        for (z = 0; z < partB.vertices.length; z++) {
                          // find distances between the vertices
                          var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                          // if both vertices are very close, consider the edge concident (internal)
                                                    if (da < coincident_max_dist && db < coincident_max_dist) {
                            pav[k].isInternal = true;
                            pbv[z].isInternal = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (parts.length > 1) {
                // create the parent body to be returned, that contains generated compound parts
                body = Body.create(Common.extend({
                  parts: parts.slice(0)
                }, options));
                // offset such that body.position is at the centre off mass
                                Body.setPosition(body, {
                  x,
                  y
                });
                return body;
              } else {
                return parts[0];
              }
            };
          })();
          /***/        }, 
        /* 13 */
        /***/ function(module, exports, __nested_webpack_require_181633__) {
          /**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/
          var Detector = {};
          module.exports = Detector;
          var Common = __nested_webpack_require_181633__(0);
          var Collision = __nested_webpack_require_181633__(8);
          (function() {
            /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */
            Detector.create = function(options) {
              var defaults = {
                bodies: [],
                collisions: [],
                pairs: null
              };
              return Common.extend(defaults, options);
            };
            /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */            Detector.setBodies = function(detector, bodies) {
              detector.bodies = bodies.slice(0);
            };
            /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */            Detector.clear = function(detector) {
              detector.bodies = [];
              detector.collisions = [];
            };
            /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */            Detector.collisions = function(detector) {
              var pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, collisions = detector.collisions, collisionIndex = 0, i, j;
              bodies.sort(Detector._compareBoundsX);
              for (i = 0; i < bodiesLength; i++) {
                var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                for (j = i + 1; j < bodiesLength; j++) {
                  var bodyB = bodies[j], boundsB = bodyB.bounds;
                  if (boundsB.min.x > boundXMax) {
                    break;
                  }
                  if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                    continue;
                  }
                  if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                    continue;
                  }
                  if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                    continue;
                  }
                  var partsBLength = bodyB.parts.length;
                  if (partsASingle && partsBLength === 1) {
                    var collision = collides(bodyA, bodyB, pairs);
                    if (collision) {
                      collisions[collisionIndex++] = collision;
                    }
                  } else {
                    var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                    for (var k = partsAStart; k < partsALength; k++) {
                      var partA = bodyA.parts[k], boundsA = partA.bounds;
                      for (var z = partsBStart; z < partsBLength; z++) {
                        var partB = bodyB.parts[z], boundsB = partB.bounds;
                        if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                          continue;
                        }
                        var collision = collides(partA, partB, pairs);
                        if (collision) {
                          collisions[collisionIndex++] = collision;
                        }
                      }
                    }
                  }
                }
              }
              if (collisions.length !== collisionIndex) {
                collisions.length = collisionIndex;
              }
              return collisions;
            };
            /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */            Detector.canCollide = function(filterA, filterB) {
              if (filterA.group === filterB.group && filterA.group !== 0) return filterA.group > 0;
              return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
            };
            /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */            Detector._compareBoundsX = function(bodyA, bodyB) {
              return bodyA.bounds.min.x - bodyB.bounds.min.x;
            };
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */
            /**
     * The array of `Matter.Collision` found in the last call to `Detector.collisions` on this detector.
     * @property collisions
     * @type collision[]
     * @default []
     */
            /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */          })();
          /***/        }, 
        /* 14 */
        /***/ function(module, exports, __nested_webpack_require_188122__) {
          /**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/
          var Mouse = {};
          module.exports = Mouse;
          var Common = __nested_webpack_require_188122__(0);
          (function() {
            /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
            Mouse.create = function(element) {
              var mouse = {};
              if (!element) {
                Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
              }
              mouse.element = element || document.body;
              mouse.absolute = {
                x: 0,
                y: 0
              };
              mouse.position = {
                x: 0,
                y: 0
              };
              mouse.mousedownPosition = {
                x: 0,
                y: 0
              };
              mouse.mouseupPosition = {
                x: 0,
                y: 0
              };
              mouse.offset = {
                x: 0,
                y: 0
              };
              mouse.scale = {
                x: 1,
                y: 1
              };
              mouse.wheelDelta = 0;
              mouse.button = -1;
              mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
              mouse.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null
              };
              mouse.mousemove = function(event) {
                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                if (touches) {
                  mouse.button = 0;
                  event.preventDefault();
                }
                mouse.absolute.x = position.x;
                mouse.absolute.y = position.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                mouse.sourceEvents.mousemove = event;
              };
              mouse.mousedown = function(event) {
                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                if (touches) {
                  mouse.button = 0;
                  event.preventDefault();
                } else {
                  mouse.button = event.button;
                }
                mouse.absolute.x = position.x;
                mouse.absolute.y = position.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                mouse.mousedownPosition.x = mouse.position.x;
                mouse.mousedownPosition.y = mouse.position.y;
                mouse.sourceEvents.mousedown = event;
              };
              mouse.mouseup = function(event) {
                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                if (touches) {
                  event.preventDefault();
                }
                mouse.button = -1;
                mouse.absolute.x = position.x;
                mouse.absolute.y = position.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                mouse.mouseupPosition.x = mouse.position.x;
                mouse.mouseupPosition.y = mouse.position.y;
                mouse.sourceEvents.mouseup = event;
              };
              mouse.mousewheel = function(event) {
                mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                event.preventDefault();
                mouse.sourceEvents.mousewheel = event;
              };
              Mouse.setElement(mouse, mouse.element);
              return mouse;
            };
            /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */            Mouse.setElement = function(mouse, element) {
              mouse.element = element;
              element.addEventListener("mousemove", mouse.mousemove, {
                passive: true
              });
              element.addEventListener("mousedown", mouse.mousedown, {
                passive: true
              });
              element.addEventListener("mouseup", mouse.mouseup, {
                passive: true
              });
              element.addEventListener("wheel", mouse.mousewheel, {
                passive: false
              });
              element.addEventListener("touchmove", mouse.mousemove, {
                passive: false
              });
              element.addEventListener("touchstart", mouse.mousedown, {
                passive: false
              });
              element.addEventListener("touchend", mouse.mouseup, {
                passive: false
              });
            };
            /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */            Mouse.clearSourceEvents = function(mouse) {
              mouse.sourceEvents.mousemove = null;
              mouse.sourceEvents.mousedown = null;
              mouse.sourceEvents.mouseup = null;
              mouse.sourceEvents.mousewheel = null;
              mouse.wheelDelta = 0;
            };
            /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */            Mouse.setOffset = function(mouse, offset) {
              mouse.offset.x = offset.x;
              mouse.offset.y = offset.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            };
            /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */            Mouse.setScale = function(mouse, scale) {
              mouse.scale.x = scale.x;
              mouse.scale.y = scale.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            };
            /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */            Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
              var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== undefined ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== undefined ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
              if (touches) {
                x = touches[0].pageX - elementBounds.left - scrollX;
                y = touches[0].pageY - elementBounds.top - scrollY;
              } else {
                x = event.pageX - elementBounds.left - scrollX;
                y = event.pageY - elementBounds.top - scrollY;
              }
              return {
                x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
              };
            };
          })();
          /***/        }, 
        /* 15 */
        /***/ function(module, exports, __nested_webpack_require_195247__) {
          /**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/
          var Plugin = {};
          module.exports = Plugin;
          var Common = __nested_webpack_require_195247__(0);
          (function() {
            Plugin._registry = {};
            /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */            Plugin.register = function(plugin) {
              if (!Plugin.isPlugin(plugin)) {
                Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
              }
              if (plugin.name in Plugin._registry) {
                var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                if (pluginVersion > registeredVersion) {
                  Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                  Plugin._registry[plugin.name] = plugin;
                } else if (pluginVersion < registeredVersion) {
                  Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
                } else if (plugin !== registered) {
                  Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                }
              } else {
                Plugin._registry[plugin.name] = plugin;
              }
              return plugin;
            };
            /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */            Plugin.resolve = function(dependency) {
              return Plugin._registry[Plugin.dependencyParse(dependency).name];
            };
            /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */            Plugin.toString = function(plugin) {
              return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
            };
            /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */            Plugin.isPlugin = function(obj) {
              return obj && obj.name && obj.version && obj.install;
            };
            /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */            Plugin.isUsed = function(module, name) {
              return module.used.indexOf(name) > -1;
            };
            /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */            Plugin.isFor = function(plugin, module) {
              var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
              return !plugin.for || module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range);
            };
            /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */            Plugin.use = function(module, plugins) {
              module.uses = (module.uses || []).concat(plugins || []);
              if (module.uses.length === 0) {
                Common.warn("Plugin.use:", Plugin.toString(module), "does not specify any dependencies to install.");
                return;
              }
              var dependencies = Plugin.dependencies(module), sortedDependencies = Common.topologicalSort(dependencies), status = [];
              for (var i = 0; i < sortedDependencies.length; i += 1) {
                if (sortedDependencies[i] === module.name) {
                  continue;
                }
                var plugin = Plugin.resolve(sortedDependencies[i]);
                if (!plugin) {
                  status.push("❌ " + sortedDependencies[i]);
                  continue;
                }
                if (Plugin.isUsed(module, plugin.name)) {
                  continue;
                }
                if (!Plugin.isFor(plugin, module)) {
                  Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module) + ".");
                  plugin._warned = true;
                }
                if (plugin.install) {
                  plugin.install(module);
                } else {
                  Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                  plugin._warned = true;
                }
                if (plugin._warned) {
                  status.push("🔶 " + Plugin.toString(plugin));
                  delete plugin._warned;
                } else {
                  status.push("✅ " + Plugin.toString(plugin));
                }
                module.used.push(plugin.name);
              }
              if (status.length > 0) {
                Common.info(status.join("  "));
              }
            };
            /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */            Plugin.dependencies = function(module, tracked) {
              var parsedBase = Plugin.dependencyParse(module), name = parsedBase.name;
              tracked = tracked || {};
              if (name in tracked) {
                return;
              }
              module = Plugin.resolve(module) || module;
              tracked[name] = Common.map(module.uses || [], (function(dependency) {
                if (Plugin.isPlugin(dependency)) {
                  Plugin.register(dependency);
                }
                var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                  Common.warn("Plugin.dependencies:", Plugin.toString(resolved), "does not satisfy", Plugin.toString(parsed), "used by", Plugin.toString(parsedBase) + ".");
                  resolved._warned = true;
                  module._warned = true;
                } else if (!resolved) {
                  Common.warn("Plugin.dependencies:", Plugin.toString(dependency), "used by", Plugin.toString(parsedBase), "could not be resolved.");
                  module._warned = true;
                }
                return parsed.name;
              }));
              for (var i = 0; i < tracked[name].length; i += 1) {
                Plugin.dependencies(tracked[name][i], tracked);
              }
              return tracked;
            };
            /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */            Plugin.dependencyParse = function(dependency) {
              if (Common.isString(dependency)) {
                var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                if (!pattern.test(dependency)) {
                  Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                }
                return {
                  name: dependency.split("@")[0],
                  range: dependency.split("@")[1] || "*"
                };
              }
              return {
                name: dependency.name,
                range: dependency.range || dependency.version
              };
            };
            /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */            Plugin.versionParse = function(range) {
              var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              if (!pattern.test(range)) {
                Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
              }
              var parts = pattern.exec(range);
              var major = Number(parts[4]);
              var minor = Number(parts[5]);
              var patch = Number(parts[6]);
              return {
                isRange: Boolean(parts[1] || parts[2]),
                version: parts[3],
                range,
                operator: parts[1] || parts[2] || "",
                major,
                minor,
                patch,
                parts: [ major, minor, patch ],
                prerelease: parts[7],
                number: major * 1e8 + minor * 1e4 + patch
              };
            };
            /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */            Plugin.versionSatisfies = function(version, range) {
              range = range || "*";
              var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
              if (r.isRange) {
                if (r.operator === "*" || version === "*") {
                  return true;
                }
                if (r.operator === ">") {
                  return v.number > r.number;
                }
                if (r.operator === ">=") {
                  return v.number >= r.number;
                }
                if (r.operator === "~") {
                  return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                }
                if (r.operator === "^") {
                  if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                  }
                  if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                  }
                  return v.patch === r.patch;
                }
              }
              return version === range || version === "*";
            };
          })();
          /***/        }, 
        /* 16 */
        /***/ function(module, exports) {
          /**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/
          var Contact = {};
          module.exports = Contact;
          (function() {
            /**
     * Creates a new contact.
     * @method create
     * @param {vertex} [vertex]
     * @return {contact} A new contact
     */
            Contact.create = function(vertex) {
              return {
                vertex,
                normalImpulse: 0,
                tangentImpulse: 0
              };
            };
          })();
          /***/        }, 
        /* 17 */
        /***/ function(module, exports, __nested_webpack_require_209153__) {
          /**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/
          var Engine = {};
          module.exports = Engine;
          var Sleeping = __nested_webpack_require_209153__(7);
          var Resolver = __nested_webpack_require_209153__(18);
          var Detector = __nested_webpack_require_209153__(13);
          var Pairs = __nested_webpack_require_209153__(19);
          var Events = __nested_webpack_require_209153__(5);
          var Composite = __nested_webpack_require_209153__(6);
          var Constraint = __nested_webpack_require_209153__(10);
          var Common = __nested_webpack_require_209153__(0);
          var Body = __nested_webpack_require_209153__(4);
          (function() {
            Engine._deltaMax = 1e3 / 60;
            /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */            Engine.create = function(options) {
              options = options || {};
              var defaults = {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: false,
                events: [],
                plugin: {},
                gravity: {
                  x: 0,
                  y: 1,
                  scale: .001
                },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0,
                  lastUpdatesPerFrame: 0
                }
              };
              var engine = Common.extend(defaults, options);
              engine.world = options.world || Composite.create({
                label: "World"
              });
              engine.pairs = options.pairs || Pairs.create();
              engine.detector = options.detector || Detector.create();
              engine.detector.pairs = engine.pairs;
              // for temporary back compatibility only
                            engine.grid = {
                buckets: []
              };
              engine.world.gravity = engine.gravity;
              engine.broadphase = engine.grid;
              engine.metrics = {};
              return engine;
            };
            /**
     * Moves the simulation forward in time by `delta` milliseconds.
     * Triggers `beforeUpdate`, `beforeSolve` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     */            Engine.update = function(engine, delta) {
              var startTime = Common.now();
              var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
              // warn if high delta
                            if (delta > Engine._deltaMax) {
                Common.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to", Engine._deltaMax.toFixed(3), "ms.");
              }
              delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
              delta *= timing.timeScale;
              // increment timestamp
                            timing.timestamp += delta;
              timing.lastDelta = delta;
              // create an event object
                            var event = {
                timestamp: timing.timestamp,
                delta
              };
              Events.trigger(engine, "beforeUpdate", event);
              // get all bodies and all constraints in the world
                            var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
              // if the world has changed
                            if (world.isModified) {
                // update the detector bodies
                Detector.setBodies(detector, allBodies);
                // reset all composite modified flags
                                Composite.setModified(world, false, false, true);
              }
              // update sleeping if enabled
                            if (engine.enableSleeping) Sleeping.update(allBodies, delta);
              // apply gravity to all bodies
                            Engine._bodiesApplyGravity(allBodies, engine.gravity);
              // update all body position and rotation by integration
                            if (delta > 0) {
                Engine._bodiesUpdate(allBodies, delta);
              }
              Events.trigger(engine, "beforeSolve", event);
              // update all constraints (first pass)
                            Constraint.preSolveAll(allBodies);
              for (i = 0; i < engine.constraintIterations; i++) {
                Constraint.solveAll(allConstraints, delta);
              }
              Constraint.postSolveAll(allBodies);
              // find all collisions
                            var collisions = Detector.collisions(detector);
              // update collision pairs
                            Pairs.update(pairs, collisions, timestamp);
              // wake up bodies involved in collisions
                            if (engine.enableSleeping) Sleeping.afterCollisions(pairs.list);
              // trigger collision events
                            if (pairs.collisionStart.length > 0) {
                Events.trigger(engine, "collisionStart", {
                  pairs: pairs.collisionStart,
                  timestamp: timing.timestamp,
                  delta
                });
              }
              // iteratively resolve position between collisions
                            var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
              Resolver.preSolvePosition(pairs.list);
              for (i = 0; i < engine.positionIterations; i++) {
                Resolver.solvePosition(pairs.list, delta, positionDamping);
              }
              Resolver.postSolvePosition(allBodies);
              // update all constraints (second pass)
                            Constraint.preSolveAll(allBodies);
              for (i = 0; i < engine.constraintIterations; i++) {
                Constraint.solveAll(allConstraints, delta);
              }
              Constraint.postSolveAll(allBodies);
              // iteratively resolve velocity between collisions
                            Resolver.preSolveVelocity(pairs.list);
              for (i = 0; i < engine.velocityIterations; i++) {
                Resolver.solveVelocity(pairs.list, delta);
              }
              // update body speed and velocity properties
                            Engine._bodiesUpdateVelocities(allBodies);
              // trigger collision events
                            if (pairs.collisionActive.length > 0) {
                Events.trigger(engine, "collisionActive", {
                  pairs: pairs.collisionActive,
                  timestamp: timing.timestamp,
                  delta
                });
              }
              if (pairs.collisionEnd.length > 0) {
                Events.trigger(engine, "collisionEnd", {
                  pairs: pairs.collisionEnd,
                  timestamp: timing.timestamp,
                  delta
                });
              }
              // clear force buffers
                            Engine._bodiesClearForces(allBodies);
              Events.trigger(engine, "afterUpdate", event);
              // log the time elapsed computing this update
                            engine.timing.lastElapsed = Common.now() - startTime;
              return engine;
            };
            /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */            Engine.merge = function(engineA, engineB) {
              Common.extend(engineA, engineB);
              if (engineB.world) {
                engineA.world = engineB.world;
                Engine.clear(engineA);
                var bodies = Composite.allBodies(engineA.world);
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i];
                  Sleeping.set(body, false);
                  body.id = Common.nextId();
                }
              }
            };
            /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */            Engine.clear = function(engine) {
              Pairs.clear(engine.pairs);
              Detector.clear(engine.detector);
            };
            /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */            Engine._bodiesClearForces = function(bodies) {
              var bodiesLength = bodies.length;
              for (var i = 0; i < bodiesLength; i++) {
                var body = bodies[i];
                // reset force buffers
                                body.force.x = 0;
                body.force.y = 0;
                body.torque = 0;
              }
            };
            /**
     * Applies gravitational acceleration to all `bodies`.
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
     * 
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */            Engine._bodiesApplyGravity = function(bodies, gravity) {
              var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : .001, bodiesLength = bodies.length;
              if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {
                return;
              }
              for (var i = 0; i < bodiesLength; i++) {
                var body = bodies[i];
                if (body.isStatic || body.isSleeping) continue;
                // add the resultant force of gravity
                                body.force.y += body.mass * gravity.y * gravityScale;
                body.force.x += body.mass * gravity.x * gravityScale;
              }
            };
            /**
     * Applies `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} delta The amount of time elapsed between updates
     */            Engine._bodiesUpdate = function(bodies, delta) {
              var bodiesLength = bodies.length;
              for (var i = 0; i < bodiesLength; i++) {
                var body = bodies[i];
                if (body.isStatic || body.isSleeping) continue;
                Body.update(body, delta);
              }
            };
            /**
     * Applies `Body.updateVelocities` to all given `bodies`.
     * @method _bodiesUpdateVelocities
     * @private
     * @param {body[]} bodies
     */            Engine._bodiesUpdateVelocities = function(bodies) {
              var bodiesLength = bodies.length;
              for (var i = 0; i < bodiesLength; i++) {
                Body.updateVelocities(bodies[i]);
              }
            };
            /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */
            /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */
            /**
    * Fired after bodies updated based on their velocity and forces, but before any collision detection, constraints and resolving etc.
    *
    * @event beforeSolve
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */
            /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */
            /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */
            /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */
            /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */
            /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */
            /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */
            /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */
            /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */
            /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */
            /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     * 
     * @property timing.timestamp
     * @type number
     * @default 0
     */
            /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     * 
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */
            /**
     * A `Number` that represents the `delta` value used in the last engine update.
     * 
     * @property timing.lastDelta
     * @type number
     * @default 0
     */
            /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */
            /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */
            /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */
            /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */
            /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */
            /**
     * An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
     * 
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
     * 
     * To disable set the `scale` component to `0`.
     * 
     * This is split into three components for ease of use:  
     * a normalised direction (`x` and `y`) and magnitude (`scale`).
     *
     * @property gravity
     * @type object
     */
            /**
     * The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
     * 
     * @property gravity.x
     * @type object
     * @default 0
     */
            /**
     * The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */
            /**
     * The magnitude of the gravitational acceleration.
     * 
     * @property gravity.scale
     * @type object
     * @default 0.001
     */          })();
          /***/        }, 
        /* 18 */
        /***/ function(module, exports, __nested_webpack_require_227816__) {
          /**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/
          var Resolver = {};
          module.exports = Resolver;
          var Vertices = __nested_webpack_require_227816__(3);
          var Common = __nested_webpack_require_227816__(0);
          var Bounds = __nested_webpack_require_227816__(1);
          (function() {
            Resolver._restingThresh = 2;
            Resolver._restingThreshTangent = Math.sqrt(6);
            Resolver._positionDampen = .9;
            Resolver._positionWarming = .8;
            Resolver._frictionNormalMultiplier = 5;
            Resolver._frictionMaxStatic = Number.MAX_VALUE;
            /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */            Resolver.preSolvePosition = function(pairs) {
              var i, pair, contactCount, pairsLength = pairs.length;
              // find total contacts on each body
                            for (i = 0; i < pairsLength; i++) {
                pair = pairs[i];
                if (!pair.isActive) continue;
                contactCount = pair.contactCount;
                pair.collision.parentA.totalContacts += contactCount;
                pair.collision.parentB.totalContacts += contactCount;
              }
            };
            /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} delta
     * @param {number} [damping=1]
     */            Resolver.solvePosition = function(pairs, delta, damping) {
              var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
              // find impulses required to resolve penetration
                            for (i = 0; i < pairsLength; i++) {
                pair = pairs[i];
                if (!pair.isActive || pair.isSensor) continue;
                collision = pair.collision;
                bodyA = collision.parentA;
                bodyB = collision.parentB;
                normal = collision.normal;
                // get current separation between body edges involved in collision
                                pair.separation = collision.depth + normal.x * (bodyB.positionImpulse.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y - bodyA.positionImpulse.y);
              }
              for (i = 0; i < pairsLength; i++) {
                pair = pairs[i];
                if (!pair.isActive || pair.isSensor) continue;
                collision = pair.collision;
                bodyA = collision.parentA;
                bodyB = collision.parentB;
                normal = collision.normal;
                positionImpulse = pair.separation - pair.slop * slopDampen;
                if (bodyA.isStatic || bodyB.isStatic) positionImpulse *= 2;
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                  contactShare = positionDampen / bodyA.totalContacts;
                  bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                  bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                }
                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                  contactShare = positionDampen / bodyB.totalContacts;
                  bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                  bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                }
              }
            };
            /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */            Resolver.postSolvePosition = function(bodies) {
              var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
              for (var i = 0; i < bodiesLength; i++) {
                var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                // reset contact count
                                body.totalContacts = 0;
                if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                  // update body geometry
                  for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    verticesTranslate(part.vertices, positionImpulse);
                    boundsUpdate(part.bounds, part.vertices, velocity);
                    part.position.x += positionImpulseX;
                    part.position.y += positionImpulseY;
                  }
                  // move the body without changing velocity
                                    body.positionPrev.x += positionImpulseX;
                  body.positionPrev.y += positionImpulseY;
                  if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                    // reset cached impulse if the body has velocity along it
                    positionImpulse.x = 0;
                    positionImpulse.y = 0;
                  } else {
                    // warm the next iteration
                    positionImpulse.x *= positionWarming;
                    positionImpulse.y *= positionWarming;
                  }
                }
              }
            };
            /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */            Resolver.preSolveVelocity = function(pairs) {
              var pairsLength = pairs.length, i, j;
              for (i = 0; i < pairsLength; i++) {
                var pair = pairs[i];
                if (!pair.isActive || pair.isSensor) continue;
                var contacts = pair.contacts, contactCount = pair.contactCount, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                // resolve each contact
                                for (j = 0; j < contactCount; j++) {
                  var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                  if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                    // apply impulse from contact
                                        if (!(bodyA.isStatic || bodyA.isSleeping)) {
                      bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                      bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                      bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                    }
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                      bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                      bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                      bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                    }
                  }
                }
              }
            };
            /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} delta
     */            Resolver.solveVelocity = function(pairs, delta) {
              var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
              for (i = 0; i < pairsLength; i++) {
                var pair = pairs[i];
                if (!pair.isActive || pair.isSensor) continue;
                var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, inverseMassTotal = pair.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier, contacts = pair.contacts, contactCount = pair.contactCount, contactShare = 1 / contactCount;
                // get body velocities
                                var bodyAVelocityX = bodyA.position.x - bodyA.positionPrev.x, bodyAVelocityY = bodyA.position.y - bodyA.positionPrev.y, bodyAAngularVelocity = bodyA.angle - bodyA.anglePrev, bodyBVelocityX = bodyB.position.x - bodyB.positionPrev.x, bodyBVelocityY = bodyB.position.y - bodyB.positionPrev.y, bodyBAngularVelocity = bodyB.angle - bodyB.anglePrev;
                // resolve each contact
                                for (j = 0; j < contactCount; j++) {
                  var contact = contacts[j], contactVertex = contact.vertex;
                  var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                  var velocityPointAX = bodyAVelocityX - offsetAY * bodyAAngularVelocity, velocityPointAY = bodyAVelocityY + offsetAX * bodyAAngularVelocity, velocityPointBX = bodyBVelocityX - offsetBY * bodyBAngularVelocity, velocityPointBY = bodyBVelocityY + offsetBX * bodyBAngularVelocity;
                  var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                  var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                  // coulomb friction
                                    var normalOverlap = pair.separation + normalVelocity;
                  var normalForce = Math.min(normalOverlap, 1);
                  normalForce = normalOverlap < 0 ? 0 : normalForce;
                  var frictionLimit = normalForce * friction;
                  if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                    maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                    if (tangentImpulse < -maxFriction) {
                      tangentImpulse = -maxFriction;
                    } else if (tangentImpulse > maxFriction) {
                      tangentImpulse = maxFriction;
                    }
                  } else {
                    tangentImpulse = tangentVelocity;
                    maxFriction = frictionMaxStatic;
                  }
                  // account for mass, inertia and contact offset
                                    var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                  // raw impulses
                                    var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                  tangentImpulse *= share;
                  // handle high velocity and resting collisions separately
                                    if (normalVelocity < restingThresh) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                  } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse += normalImpulse;
                    if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                  }
                  // handle high velocity and resting collisions separately
                                    if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                  } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse += tangentImpulse;
                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                  }
                  // total impulse from contact
                                    var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                  // apply impulse from contact
                                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                  }
                  if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                  }
                }
              }
            };
          })();
          /***/        }, 
        /* 19 */
        /***/ function(module, exports, __nested_webpack_require_243201__) {
          /**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/
          var Pairs = {};
          module.exports = Pairs;
          var Pair = __nested_webpack_require_243201__(9);
          var Common = __nested_webpack_require_243201__(0);
          (function() {
            /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
            Pairs.create = function(options) {
              return Common.extend({
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: []
              }, options);
            };
            /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */            Pairs.update = function(pairs, collisions, timestamp) {
              var pairUpdate = Pair.update, pairCreate = Pair.create, pairSetActive = Pair.setActive, pairsTable = pairs.table, pairsList = pairs.list, pairsListLength = pairsList.length, pairsListIndex = pairsListLength, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collisionsLength = collisions.length, collisionStartIndex = 0, collisionEndIndex = 0, collisionActiveIndex = 0, collision, pair, i;
              for (i = 0; i < collisionsLength; i++) {
                collision = collisions[i];
                pair = collision.pair;
                if (pair) {
                  // pair already exists (but may or may not be active)
                  if (pair.isActive) {
                    // pair exists and is active
                    collisionActive[collisionActiveIndex++] = pair;
                  }
                  // update the pair
                                    pairUpdate(pair, collision, timestamp);
                } else {
                  // pair did not exist, create a new pair
                  pair = pairCreate(collision, timestamp);
                  pairsTable[pair.id] = pair;
                  // add the new pair
                                    collisionStart[collisionStartIndex++] = pair;
                  pairsList[pairsListIndex++] = pair;
                }
              }
              // find pairs that are no longer active
                            pairsListIndex = 0;
              pairsListLength = pairsList.length;
              for (i = 0; i < pairsListLength; i++) {
                pair = pairsList[i];
                // pair is active if updated this timestep
                                if (pair.timeUpdated >= timestamp) {
                  // keep active pairs
                  pairsList[pairsListIndex++] = pair;
                } else {
                  pairSetActive(pair, false, timestamp);
                  // keep inactive pairs if both bodies may be sleeping
                                    if (pair.collision.bodyA.sleepCounter > 0 && pair.collision.bodyB.sleepCounter > 0) {
                    pairsList[pairsListIndex++] = pair;
                  } else {
                    // remove inactive pairs if either body awake
                    collisionEnd[collisionEndIndex++] = pair;
                    delete pairsTable[pair.id];
                  }
                }
              }
              // update array lengths if changed
                            if (pairsList.length !== pairsListIndex) {
                pairsList.length = pairsListIndex;
              }
              if (collisionStart.length !== collisionStartIndex) {
                collisionStart.length = collisionStartIndex;
              }
              if (collisionEnd.length !== collisionEndIndex) {
                collisionEnd.length = collisionEndIndex;
              }
              if (collisionActive.length !== collisionActiveIndex) {
                collisionActive.length = collisionActiveIndex;
              }
            };
            /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */            Pairs.clear = function(pairs) {
              pairs.table = {};
              pairs.list.length = 0;
              pairs.collisionStart.length = 0;
              pairs.collisionActive.length = 0;
              pairs.collisionEnd.length = 0;
              return pairs;
            };
          })();
          /***/        }, 
        /* 20 */
        /***/ function(module, exports, __nested_webpack_require_247547__) {
          var Matter = module.exports = __nested_webpack_require_247547__(21);
          Matter.Axes = __nested_webpack_require_247547__(11);
          Matter.Bodies = __nested_webpack_require_247547__(12);
          Matter.Body = __nested_webpack_require_247547__(4);
          Matter.Bounds = __nested_webpack_require_247547__(1);
          Matter.Collision = __nested_webpack_require_247547__(8);
          Matter.Common = __nested_webpack_require_247547__(0);
          Matter.Composite = __nested_webpack_require_247547__(6);
          Matter.Composites = __nested_webpack_require_247547__(22);
          Matter.Constraint = __nested_webpack_require_247547__(10);
          Matter.Contact = __nested_webpack_require_247547__(16);
          Matter.Detector = __nested_webpack_require_247547__(13);
          Matter.Engine = __nested_webpack_require_247547__(17);
          Matter.Events = __nested_webpack_require_247547__(5);
          Matter.Grid = __nested_webpack_require_247547__(23);
          Matter.Mouse = __nested_webpack_require_247547__(14);
          Matter.MouseConstraint = __nested_webpack_require_247547__(24);
          Matter.Pair = __nested_webpack_require_247547__(9);
          Matter.Pairs = __nested_webpack_require_247547__(19);
          Matter.Plugin = __nested_webpack_require_247547__(15);
          Matter.Query = __nested_webpack_require_247547__(25);
          Matter.Render = __nested_webpack_require_247547__(26);
          Matter.Resolver = __nested_webpack_require_247547__(18);
          Matter.Runner = __nested_webpack_require_247547__(27);
          Matter.SAT = __nested_webpack_require_247547__(28);
          Matter.Sleeping = __nested_webpack_require_247547__(7);
          Matter.Svg = __nested_webpack_require_247547__(29);
          Matter.Vector = __nested_webpack_require_247547__(2);
          Matter.Vertices = __nested_webpack_require_247547__(3);
          Matter.World = __nested_webpack_require_247547__(30);
          // temporary back compatibility
                    Matter.Engine.run = Matter.Runner.run;
          Matter.Common.deprecated(Matter.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead");
          /***/        }, 
        /* 21 */
        /***/ function(module, exports, __nested_webpack_require_249083__) {
          /**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/
          var Matter = {};
          module.exports = Matter;
          var Plugin = __nested_webpack_require_249083__(15);
          var Common = __nested_webpack_require_249083__(0);
          (function() {
            /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
            Matter.name = "matter-js";
            /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */            Matter.version = true ? "0.20.0" : 0;
            /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */            Matter.uses = [];
            /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */            Matter.used = [];
            /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */            Matter.use = function() {
              Plugin.use(Matter, Array.prototype.slice.call(arguments));
            };
            /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */            Matter.before = function(path, func) {
              path = path.replace(/^Matter./, "");
              return Common.chainPathBefore(Matter, path, func);
            };
            /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */            Matter.after = function(path, func) {
              path = path.replace(/^Matter./, "");
              return Common.chainPathAfter(Matter, path, func);
            };
          })();
          /***/        }, 
        /* 22 */
        /***/ function(module, exports, __nested_webpack_require_251991__) {
          /**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/
          var Composites = {};
          module.exports = Composites;
          var Composite = __nested_webpack_require_251991__(6);
          var Constraint = __nested_webpack_require_251991__(10);
          var Common = __nested_webpack_require_251991__(0);
          var Body = __nested_webpack_require_251991__(4);
          var Bodies = __nested_webpack_require_251991__(12);
          var deprecated = Common.deprecated;
          (function() {
            /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
            Composites.stack = function(x, y, columns, rows, columnGap, rowGap, callback) {
              var stack = Composite.create({
                label: "Stack"
              }), currentX = x, currentY = y, lastBody, i = 0;
              for (var row = 0; row < rows; row++) {
                var maxHeight = 0;
                for (var column = 0; column < columns; column++) {
                  var body = callback(currentX, currentY, column, row, lastBody, i);
                  if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                    if (bodyHeight > maxHeight) maxHeight = bodyHeight;
                    Body.translate(body, {
                      x: bodyWidth * .5,
                      y: bodyHeight * .5
                    });
                    currentX = body.bounds.max.x + columnGap;
                    Composite.addBody(stack, body);
                    lastBody = body;
                    i += 1;
                  } else {
                    currentX += columnGap;
                  }
                }
                currentY += maxHeight + rowGap;
                currentX = x;
              }
              return stack;
            };
            /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */            Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
              var bodies = composite.bodies;
              for (var i = 1; i < bodies.length; i++) {
                var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                var defaults = {
                  bodyA,
                  pointA: {
                    x: bodyAWidth * xOffsetA,
                    y: bodyAHeight * yOffsetA
                  },
                  bodyB,
                  pointB: {
                    x: bodyBWidth * xOffsetB,
                    y: bodyBHeight * yOffsetB
                  }
                };
                var constraint = Common.extend(defaults, options);
                Composite.addConstraint(composite, Constraint.create(constraint));
              }
              composite.label += " Chain";
              return composite;
            };
            /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */            Composites.mesh = function(composite, columns, rows, crossBrace, options) {
              var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
              for (row = 0; row < rows; row++) {
                for (col = 1; col < columns; col++) {
                  bodyA = bodies[col - 1 + row * columns];
                  bodyB = bodies[col + row * columns];
                  Composite.addConstraint(composite, Constraint.create(Common.extend({
                    bodyA,
                    bodyB
                  }, options)));
                }
                if (row > 0) {
                  for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + (row - 1) * columns];
                    bodyB = bodies[col + row * columns];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({
                      bodyA,
                      bodyB
                    }, options)));
                    if (crossBrace && col > 0) {
                      bodyC = bodies[col - 1 + (row - 1) * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({
                        bodyA: bodyC,
                        bodyB
                      }, options)));
                    }
                    if (crossBrace && col < columns - 1) {
                      bodyC = bodies[col + 1 + (row - 1) * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({
                        bodyA: bodyC,
                        bodyB
                      }, options)));
                    }
                  }
                }
              }
              composite.label += " Mesh";
              return composite;
            };
            /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */            Composites.pyramid = function(x, y, columns, rows, columnGap, rowGap, callback) {
              return Composites.stack(x, y, columns, rows, columnGap, rowGap, (function(stackX, stackY, column, row, lastBody, i) {
                var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                if (row > actualRows) return;
                // reverse row order
                                row = actualRows - row;
                var start = row, end = columns - 1 - row;
                if (column < start || column > end) return;
                // retroactively fix the first body's position, since width was unknown
                                if (i === 1) {
                  Body.translate(lastBody, {
                    x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth,
                    y: 0
                  });
                }
                var xOffset = lastBody ? column * lastBodyWidth : 0;
                return callback(x + xOffset + column * columnGap, stackY, column, row, lastBody, i);
              }));
            };
            /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */            Composites.newtonsCradle = function(x, y, number, size, length) {
              var newtonsCradle = Composite.create({
                label: "Newtons Cradle"
              });
              for (var i = 0; i < number; i++) {
                var separation = 1.9, circle = Bodies.circle(x + i * (size * separation), y + length, size, {
                  inertia: Infinity,
                  restitution: 1,
                  friction: 0,
                  frictionAir: 1e-4,
                  slop: 1
                }), constraint = Constraint.create({
                  pointA: {
                    x: x + i * (size * separation),
                    y
                  },
                  bodyB: circle
                });
                Composite.addBody(newtonsCradle, circle);
                Composite.addConstraint(newtonsCradle, constraint);
              }
              return newtonsCradle;
            };
            deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example");
            /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */            Composites.car = function(x, y, width, height, wheelSize) {
              var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * .5 + wheelBase, wheelBOffset = width * .5 - wheelBase, wheelYOffset = 0;
              var car = Composite.create({
                label: "Car"
              }), body = Bodies.rectangle(x, y, width, height, {
                collisionFilter: {
                  group
                },
                chamfer: {
                  radius: height * .5
                },
                density: 2e-4
              });
              var wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, {
                collisionFilter: {
                  group
                },
                friction: .8
              });
              var wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, {
                collisionFilter: {
                  group
                },
                friction: .8
              });
              var axelA = Constraint.create({
                bodyB: body,
                pointB: {
                  x: wheelAOffset,
                  y: wheelYOffset
                },
                bodyA: wheelA,
                stiffness: 1,
                length: 0
              });
              var axelB = Constraint.create({
                bodyB: body,
                pointB: {
                  x: wheelBOffset,
                  y: wheelYOffset
                },
                bodyA: wheelB,
                stiffness: 1,
                length: 0
              });
              Composite.addBody(car, body);
              Composite.addBody(car, wheelA);
              Composite.addBody(car, wheelB);
              Composite.addConstraint(car, axelA);
              Composite.addConstraint(car, axelB);
              return car;
            };
            deprecated(Composites, "car", "Composites.car ➤ moved to car example");
            /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */            Composites.softBody = function(x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
              particleOptions = Common.extend({
                inertia: Infinity
              }, particleOptions);
              constraintOptions = Common.extend({
                stiffness: .2,
                render: {
                  type: "line",
                  anchors: false
                }
              }, constraintOptions);
              var softBody = Composites.stack(x, y, columns, rows, columnGap, rowGap, (function(stackX, stackY) {
                return Bodies.circle(stackX, stackY, particleRadius, particleOptions);
              }));
              Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
              softBody.label = "Soft Body";
              return softBody;
            };
            deprecated(Composites, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples");
          })();
          /***/        }, 
        /* 23 */
        /***/ function(module, exports, __nested_webpack_require_264894__) {
          /**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/
          var Grid = {};
          module.exports = Grid;
          var Pair = __nested_webpack_require_264894__(9);
          var Common = __nested_webpack_require_264894__(0);
          var deprecated = Common.deprecated;
          (function() {
            /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
            Grid.create = function(options) {
              var defaults = {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48
              };
              return Common.extend(defaults, options);
            };
            /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */
            /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */
            /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */            Grid.update = function(grid, bodies, engine, forceUpdate) {
              var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
              for (i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.isSleeping && !forceUpdate) continue;
                // temporary back compatibility bounds check
                                if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)) continue;
                var newRegion = Grid._getRegion(grid, body);
                // if the body has changed grid region
                                if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                  if (!body.region || forceUpdate) body.region = newRegion;
                  var union = Grid._regionUnion(newRegion, body.region);
                  // update grid buckets affected by region change
                  // iterate over the union of both regions
                                    for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                      bucketId = Grid._getBucketId(col, row);
                      bucket = buckets[bucketId];
                      var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                      var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                      // remove from old region buckets
                                            if (!isInsideNewRegion && isInsideOldRegion) {
                        if (isInsideOldRegion) {
                          if (bucket) Grid._bucketRemoveBody(grid, bucket, body);
                        }
                      }
                      // add to new region buckets
                                            if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                        if (!bucket) bucket = Grid._createBucket(buckets, bucketId);
                        Grid._bucketAddBody(grid, bucket, body);
                      }
                    }
                  }
                  // set the new region
                                    body.region = newRegion;
                  // flag changes so we can update pairs
                                    gridChanged = true;
                }
              }
              // update pairs list only if pairs changed (i.e. a body changed region)
                            if (gridChanged) grid.pairsList = Grid._createActivePairsList(grid);
            };
            deprecated(Grid, "update", "Grid.update ➤ replaced by Matter.Detector");
            /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */            Grid.clear = function(grid) {
              grid.buckets = {};
              grid.pairs = {};
              grid.pairsList = [];
            };
            deprecated(Grid, "clear", "Grid.clear ➤ replaced by Matter.Detector");
            /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */            Grid._regionUnion = function(regionA, regionB) {
              var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
              return Grid._createRegion(startCol, endCol, startRow, endRow);
            };
            /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */            Grid._getRegion = function(grid, body) {
              var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
              return Grid._createRegion(startCol, endCol, startRow, endRow);
            };
            /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */            Grid._createRegion = function(startCol, endCol, startRow, endRow) {
              return {
                id: startCol + "," + endCol + "," + startRow + "," + endRow,
                startCol,
                endCol,
                startRow,
                endRow
              };
            };
            /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */            Grid._getBucketId = function(column, row) {
              return "C" + column + "R" + row;
            };
            /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */            Grid._createBucket = function(buckets, bucketId) {
              var bucket = buckets[bucketId] = [];
              return bucket;
            };
            /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */            Grid._bucketAddBody = function(grid, bucket, body) {
              var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
              // add new pairs
                            for (i = 0; i < bucketLength; i++) {
                var bodyB = bucket[i];
                if (body.id === bodyB.id || body.isStatic && bodyB.isStatic) continue;
                // keep track of the number of buckets the pair exists in
                // important for Grid.update to work
                                var id = pairId(body, bodyB), pair = gridPairs[id];
                if (pair) {
                  pair[2] += 1;
                } else {
                  gridPairs[id] = [ body, bodyB, 1 ];
                }
              }
              // add to bodies (after pairs, otherwise pairs with self)
                            bucket.push(body);
            };
            /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */            Grid._bucketRemoveBody = function(grid, bucket, body) {
              var gridPairs = grid.pairs, pairId = Pair.id, i;
              // remove from bucket
                            bucket.splice(Common.indexOf(bucket, body), 1);
              var bucketLength = bucket.length;
              // update pair counts
                            for (i = 0; i < bucketLength; i++) {
                // keep track of the number of buckets the pair exists in
                // important for _createActivePairsList to work
                var pair = gridPairs[pairId(body, bucket[i])];
                if (pair) pair[2] -= 1;
              }
            };
            /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */            Grid._createActivePairsList = function(grid) {
              var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
              // iterate over grid.pairs
                            for (k = 0; k < pairKeysLength; k++) {
                pair = gridPairs[pairKeys[k]];
                // if pair exists in at least one bucket
                // it is a pair that needs further collision testing so push it
                                if (pair[2] > 0) {
                  pairs.push(pair);
                } else {
                  delete gridPairs[pairKeys[k]];
                }
              }
              return pairs;
            };
          })();
          /***/        }, 
        /* 24 */
        /***/ function(module, exports, __nested_webpack_require_275224__) {
          /**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/
          var MouseConstraint = {};
          module.exports = MouseConstraint;
          var Vertices = __nested_webpack_require_275224__(3);
          var Sleeping = __nested_webpack_require_275224__(7);
          var Mouse = __nested_webpack_require_275224__(14);
          var Events = __nested_webpack_require_275224__(5);
          var Detector = __nested_webpack_require_275224__(13);
          var Constraint = __nested_webpack_require_275224__(10);
          var Composite = __nested_webpack_require_275224__(6);
          var Common = __nested_webpack_require_275224__(0);
          var Bounds = __nested_webpack_require_275224__(1);
          (function() {
            /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
            MouseConstraint.create = function(engine, options) {
              var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
              if (!mouse) {
                if (engine && engine.render && engine.render.canvas) {
                  mouse = Mouse.create(engine.render.canvas);
                } else if (options && options.element) {
                  mouse = Mouse.create(options.element);
                } else {
                  mouse = Mouse.create();
                  Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                }
              }
              var constraint = Constraint.create({
                label: "Mouse Constraint",
                pointA: mouse.position,
                pointB: {
                  x: 0,
                  y: 0
                },
                length: .01,
                stiffness: .1,
                angularStiffness: 1,
                render: {
                  strokeStyle: "#90EE90",
                  lineWidth: 3
                }
              });
              var defaults = {
                type: "mouseConstraint",
                mouse,
                element: null,
                body: null,
                constraint,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                }
              };
              var mouseConstraint = Common.extend(defaults, options);
              Events.on(engine, "beforeUpdate", (function() {
                var allBodies = Composite.allBodies(engine.world);
                MouseConstraint.update(mouseConstraint, allBodies);
                MouseConstraint._triggerEvents(mouseConstraint);
              }));
              return mouseConstraint;
            };
            /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */            MouseConstraint.update = function(mouseConstraint, bodies) {
              var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
              if (mouse.button === 0) {
                if (!constraint.bodyB) {
                  for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                      for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                        var part = body.parts[j];
                        if (Vertices.contains(part.vertices, mouse.position)) {
                          constraint.pointA = mouse.position;
                          constraint.bodyB = mouseConstraint.body = body;
                          constraint.pointB = {
                            x: mouse.position.x - body.position.x,
                            y: mouse.position.y - body.position.y
                          };
                          constraint.angleB = body.angle;
                          Sleeping.set(body, false);
                          Events.trigger(mouseConstraint, "startdrag", {
                            mouse,
                            body
                          });
                          break;
                        }
                      }
                    }
                  }
                } else {
                  Sleeping.set(constraint.bodyB, false);
                  constraint.pointA = mouse.position;
                }
              } else {
                constraint.bodyB = mouseConstraint.body = null;
                constraint.pointB = null;
                if (body) Events.trigger(mouseConstraint, "enddrag", {
                  mouse,
                  body
                });
              }
            };
            /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */            MouseConstraint._triggerEvents = function(mouseConstraint) {
              var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
              if (mouseEvents.mousemove) Events.trigger(mouseConstraint, "mousemove", {
                mouse
              });
              if (mouseEvents.mousedown) Events.trigger(mouseConstraint, "mousedown", {
                mouse
              });
              if (mouseEvents.mouseup) Events.trigger(mouseConstraint, "mouseup", {
                mouse
              });
              // reset the mouse state ready for the next step
                            Mouse.clearSourceEvents(mouse);
            };
            /*
    *
    *  Events Documentation
    *
    */
            /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */
            /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */
            /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */
            /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */
            /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */          })();
          /***/        }, 
        /* 25 */
        /***/ function(module, exports, __nested_webpack_require_283719__) {
          /**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/
          var Query = {};
          module.exports = Query;
          var Vector = __nested_webpack_require_283719__(2);
          var Collision = __nested_webpack_require_283719__(8);
          var Bounds = __nested_webpack_require_283719__(1);
          var Bodies = __nested_webpack_require_283719__(12);
          var Vertices = __nested_webpack_require_283719__(3);
          (function() {
            /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */
            Query.collides = function(body, bodies) {
              var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
              for (var i = 0; i < bodiesLength; i++) {
                var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                if (overlaps(bodyA.bounds, bounds)) {
                  for (var j = partsAStart; j < partsALength; j++) {
                    var part = bodyA.parts[j];
                    if (overlaps(part.bounds, bounds)) {
                      var collision = collides(part, body);
                      if (collision) {
                        collisions.push(collision);
                        break;
                      }
                    }
                  }
                }
              }
              return collisions;
            };
            /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */            Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
              rayWidth = rayWidth || 1e-100;
              var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * .5, rayY = (endPoint.y + startPoint.y) * .5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, {
                angle: rayAngle
              }), collisions = Query.collides(ray, bodies);
              for (var i = 0; i < collisions.length; i += 1) {
                var collision = collisions[i];
                collision.body = collision.bodyB = collision.bodyA;
              }
              return collisions;
            };
            /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */            Query.region = function(bodies, bounds, outside) {
              var result = [];
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                if (overlaps && !outside || !overlaps && outside) result.push(body);
              }
              return result;
            };
            /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */            Query.point = function(bodies, point) {
              var result = [];
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (Bounds.contains(body.bounds, point)) {
                  for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                      result.push(body);
                      break;
                    }
                  }
                }
              }
              return result;
            };
          })();
          /***/        }, 
        /* 26 */
        /***/ function(module, exports, __nested_webpack_require_288094__) {
          /**
* The `Matter.Render` module is a lightweight, optional utility which provides a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/
          var Render = {};
          module.exports = Render;
          var Body = __nested_webpack_require_288094__(4);
          var Common = __nested_webpack_require_288094__(0);
          var Composite = __nested_webpack_require_288094__(6);
          var Bounds = __nested_webpack_require_288094__(1);
          var Events = __nested_webpack_require_288094__(5);
          var Vector = __nested_webpack_require_288094__(2);
          var Mouse = __nested_webpack_require_288094__(14);
          (function() {
            var _requestAnimationFrame, _cancelAnimationFrame;
            if (typeof window !== "undefined") {
              _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                window.setTimeout((function() {
                  callback(Common.now());
                }), 1e3 / 60);
              };
              _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
            }
            Render._goodFps = 30;
            Render._goodDelta = 1e3 / 60;
            /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */            Render.create = function(options) {
              var defaults = {
                engine: null,
                element: null,
                canvas: null,
                mouse: null,
                frameRequestId: null,
                timing: {
                  historySize: 60,
                  delta: 0,
                  deltaHistory: [],
                  lastTime: 0,
                  lastTimestamp: 0,
                  lastElapsed: 0,
                  timestampElapsed: 0,
                  timestampElapsedHistory: [],
                  engineDeltaHistory: [],
                  engineElapsedHistory: [],
                  engineUpdatesHistory: [],
                  elapsedHistory: []
                },
                options: {
                  width: 800,
                  height: 600,
                  pixelRatio: 1,
                  background: "#14151f",
                  wireframeBackground: "#14151f",
                  wireframeStrokeStyle: "#bbb",
                  hasBounds: !!options.bounds,
                  enabled: true,
                  wireframes: true,
                  showSleeping: true,
                  showDebug: false,
                  showStats: false,
                  showPerformance: false,
                  showBounds: false,
                  showVelocity: false,
                  showCollisions: false,
                  showSeparations: false,
                  showAxes: false,
                  showPositions: false,
                  showAngleIndicator: false,
                  showIds: false,
                  showVertexNumbers: false,
                  showConvexHulls: false,
                  showInternalEdges: false,
                  showMousePosition: false
                }
              };
              var render = Common.extend(defaults, options);
              if (render.canvas) {
                render.canvas.width = render.options.width || render.canvas.width;
                render.canvas.height = render.options.height || render.canvas.height;
              }
              render.mouse = options.mouse;
              render.engine = options.engine;
              render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
              render.context = render.canvas.getContext("2d");
              render.textures = {};
              render.bounds = render.bounds || {
                min: {
                  x: 0,
                  y: 0
                },
                max: {
                  x: render.canvas.width,
                  y: render.canvas.height
                }
              };
              // for temporary back compatibility only
                            render.controller = Render;
              render.options.showBroadphase = false;
              if (render.options.pixelRatio !== 1) {
                Render.setPixelRatio(render, render.options.pixelRatio);
              }
              if (Common.isElement(render.element)) {
                render.element.appendChild(render.canvas);
              }
              return render;
            };
            /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */            Render.run = function(render) {
              (function loop(time) {
                render.frameRequestId = _requestAnimationFrame(loop);
                _updateTiming(render, time);
                Render.world(render, time);
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                if (render.options.showStats || render.options.showDebug) {
                  Render.stats(render, render.context, time);
                }
                if (render.options.showPerformance || render.options.showDebug) {
                  Render.performance(render, render.context, time);
                }
                render.context.setTransform(1, 0, 0, 1, 0, 0);
              })();
            };
            /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */            Render.stop = function(render) {
              _cancelAnimationFrame(render.frameRequestId);
            };
            /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */            Render.setPixelRatio = function(render, pixelRatio) {
              var options = render.options, canvas = render.canvas;
              if (pixelRatio === "auto") {
                pixelRatio = _getPixelRatio(canvas);
              }
              options.pixelRatio = pixelRatio;
              canvas.setAttribute("data-pixel-ratio", pixelRatio);
              canvas.width = options.width * pixelRatio;
              canvas.height = options.height * pixelRatio;
              canvas.style.width = options.width + "px";
              canvas.style.height = options.height + "px";
            };
            /**
     * Sets the render `width` and `height`.
     * 
     * Updates the canvas accounting for `render.options.pixelRatio`.  
     * 
     * Updates the bottom right render bound `render.bounds.max` relative to the provided `width` and `height`.
     * The top left render bound `render.bounds.min` isn't changed.
     * 
     * Follow this call with `Render.lookAt` if you need to change the render bounds.
     * 
     * See also `Render.setPixelRatio`.
     * @method setSize
     * @param {render} render
     * @param {number} width The width (in CSS pixels)
     * @param {number} height The height (in CSS pixels)
     */            Render.setSize = function(render, width, height) {
              render.options.width = width;
              render.options.height = height;
              render.bounds.max.x = render.bounds.min.x + width;
              render.bounds.max.y = render.bounds.min.y + height;
              if (render.options.pixelRatio !== 1) {
                Render.setPixelRatio(render, render.options.pixelRatio);
              } else {
                render.canvas.width = width;
                render.canvas.height = height;
              }
            };
            /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */            Render.lookAt = function(render, objects, padding, center) {
              center = typeof center !== "undefined" ? center : true;
              objects = Common.isArray(objects) ? objects : [ objects ];
              padding = padding || {
                x: 0,
                y: 0
              };
              // find bounds of all objects
                            var bounds = {
                min: {
                  x: Infinity,
                  y: Infinity
                },
                max: {
                  x: -Infinity,
                  y: -Infinity
                }
              };
              for (var i = 0; i < objects.length; i += 1) {
                var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                if (min && max) {
                  if (min.x < bounds.min.x) bounds.min.x = min.x;
                  if (max.x > bounds.max.x) bounds.max.x = max.x;
                  if (min.y < bounds.min.y) bounds.min.y = min.y;
                  if (max.y > bounds.max.y) bounds.max.y = max.y;
                }
              }
              // find ratios
                            var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
              // find scale factor
                            if (innerRatio > outerRatio) {
                scaleY = innerRatio / outerRatio;
              } else {
                scaleX = outerRatio / innerRatio;
              }
              // enable bounds
                            render.options.hasBounds = true;
              // position and size
                            render.bounds.min.x = bounds.min.x;
              render.bounds.max.x = bounds.min.x + width * scaleX;
              render.bounds.min.y = bounds.min.y;
              render.bounds.max.y = bounds.min.y + height * scaleY;
              // center
                            if (center) {
                render.bounds.min.x += width * .5 - width * scaleX * .5;
                render.bounds.max.x += width * .5 - width * scaleX * .5;
                render.bounds.min.y += height * .5 - height * scaleY * .5;
                render.bounds.max.y += height * .5 - height * scaleY * .5;
              }
              // padding
                            render.bounds.min.x -= padding.x;
              render.bounds.max.x -= padding.x;
              render.bounds.min.y -= padding.y;
              render.bounds.max.y -= padding.y;
              // update mouse
                            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                  x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                  y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                });
                Mouse.setOffset(render.mouse, render.bounds.min);
              }
            };
            /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */            Render.startViewTransform = function(render) {
              var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
              render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
              render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
            };
            /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */            Render.endViewTransform = function(render) {
              render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            };
            /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */            Render.world = function(render, time) {
              var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
              var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
              var event = {
                timestamp: engine.timing.timestamp
              };
              Events.trigger(render, "beforeRender", event);
              // apply background if it has changed
                            if (render.currentBackground !== background) _applyBackground(render, background);
              // clear the canvas with a transparent fill, to allow the canvas background to show
                            context.globalCompositeOperation = "source-in";
              context.fillStyle = "transparent";
              context.fillRect(0, 0, canvas.width, canvas.height);
              context.globalCompositeOperation = "source-over";
              // handle bounds
                            if (options.hasBounds) {
                // filter out bodies that are not in view
                for (i = 0; i < allBodies.length; i++) {
                  var body = allBodies[i];
                  if (Bounds.overlaps(body.bounds, render.bounds)) bodies.push(body);
                }
                // filter out constraints that are not in view
                                for (i = 0; i < allConstraints.length; i++) {
                  var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                  if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                  if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                  if (!pointAWorld || !pointBWorld) continue;
                  if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld)) constraints.push(constraint);
                }
                // transform the view
                                Render.startViewTransform(render);
                // update mouse
                                if (render.mouse) {
                  Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                  });
                  Mouse.setOffset(render.mouse, render.bounds.min);
                }
              } else {
                constraints = allConstraints;
                bodies = allBodies;
                if (render.options.pixelRatio !== 1) {
                  render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                }
              }
              if (!options.wireframes || engine.enableSleeping && options.showSleeping) {
                // fully featured rendering of bodies
                Render.bodies(render, bodies, context);
              } else {
                if (options.showConvexHulls) Render.bodyConvexHulls(render, bodies, context);
                // optimised method for wireframes only
                                Render.bodyWireframes(render, bodies, context);
              }
              if (options.showBounds) Render.bodyBounds(render, bodies, context);
              if (options.showAxes || options.showAngleIndicator) Render.bodyAxes(render, bodies, context);
              if (options.showPositions) Render.bodyPositions(render, bodies, context);
              if (options.showVelocity) Render.bodyVelocity(render, bodies, context);
              if (options.showIds) Render.bodyIds(render, bodies, context);
              if (options.showSeparations) Render.separations(render, engine.pairs.list, context);
              if (options.showCollisions) Render.collisions(render, engine.pairs.list, context);
              if (options.showVertexNumbers) Render.vertexNumbers(render, bodies, context);
              if (options.showMousePosition) Render.mousePosition(render, render.mouse, context);
              Render.constraints(constraints, context);
              if (options.hasBounds) {
                // revert view transforms
                Render.endViewTransform(render);
              }
              Events.trigger(render, "afterRender", event);
              // log the time elapsed computing this update
                            timing.lastElapsed = Common.now() - startTime;
            };
            /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */            Render.stats = function(render, context, time) {
              var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
              // count parts
                            for (var i = 0; i < bodies.length; i += 1) {
                parts += bodies[i].parts.length;
              }
              // sections
                            var sections = {
                Part: parts,
                Body: bodies.length,
                Cons: Composite.allConstraints(world).length,
                Comp: Composite.allComposites(world).length,
                Pair: engine.pairs.list.length
              };
              // background
                            context.fillStyle = "#0e0f19";
              context.fillRect(x, y, width * 5.5, height);
              context.font = "12px Arial";
              context.textBaseline = "top";
              context.textAlign = "right";
              // sections
                            for (var key in sections) {
                var section = sections[key];
                // label
                                context.fillStyle = "#aaa";
                context.fillText(key, x + width, y + 8);
                // value
                                context.fillStyle = "#eee";
                context.fillText(section, x + width, y + 26);
                x += width;
              }
            };
            /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */            Render.performance = function(render, context) {
              var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineUpdatesHistory = timing.engineUpdatesHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineUpdatesPerFrame = engine.timing.lastUpdatesPerFrame, lastEngineDelta = engine.timing.lastDelta;
              var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineUpdatesMean = _mean(engineUpdatesHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, neededUpdatesPerFrame = Math.round(deltaMean / lastEngineDelta), fps = 1e3 / deltaMean || 0;
              var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
              // background
                            context.fillStyle = "#0e0f19";
              context.fillRect(0, 50, gap * 5 + width * 6 + 22, height);
              // show FPS
                            Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + " fps", fps / Render._goodFps, (function(i) {
                return deltaHistory[i] / deltaMean - 1;
              }));
              // show engine delta
                            Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + " dt", Render._goodDelta / lastEngineDelta, (function(i) {
                return engineDeltaHistory[i] / engineDeltaMean - 1;
              }));
              // show engine updates per frame
                            Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineUpdatesHistory.length, lastEngineUpdatesPerFrame + " upf", Math.pow(Common.clamp(engineUpdatesMean / neededUpdatesPerFrame || 1, 0, 1), 4), (function(i) {
                return engineUpdatesHistory[i] / engineUpdatesMean - 1;
              }));
              // show engine update time
                            Render.status(context, x + (gap + width) * 3, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + " ut", 1 - lastEngineUpdatesPerFrame * engineElapsedMean / Render._goodFps, (function(i) {
                return engineElapsedHistory[i] / engineElapsedMean - 1;
              }));
              // show render time
                            Render.status(context, x + (gap + width) * 4, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + " rt", 1 - elapsedMean / Render._goodFps, (function(i) {
                return elapsedHistory[i] / elapsedMean - 1;
              }));
              // show effective speed
                            Render.status(context, x + (gap + width) * 5, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + " x", rateMean * rateMean * rateMean, (function(i) {
                return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
              }));
            };
            /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */            Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
              // background
              context.strokeStyle = "#888";
              context.fillStyle = "#444";
              context.lineWidth = 1;
              context.fillRect(x, y + 7, width, 1);
              // chart
                            context.beginPath();
              context.moveTo(x, y + 7 - height * Common.clamp(.4 * plotY(0), -2, 2));
              for (var i = 0; i < width; i += 1) {
                context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(.4 * plotY(i), -2, 2) : 0));
              }
              context.stroke();
              // indicator
                            context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
              context.fillRect(x, y - 7, 4, 4);
              // label
                            context.font = "12px Arial";
              context.textBaseline = "middle";
              context.textAlign = "right";
              context.fillStyle = "#eee";
              context.fillText(label, x + width, y - 5);
            };
            /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */            Render.constraints = function(constraints, context) {
              var c = context;
              for (var i = 0; i < constraints.length; i++) {
                var constraint = constraints[i];
                if (!constraint.render.visible || !constraint.pointA || !constraint.pointB) continue;
                var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                if (bodyA) {
                  start = Vector.add(bodyA.position, constraint.pointA);
                } else {
                  start = constraint.pointA;
                }
                if (constraint.render.type === "pin") {
                  c.beginPath();
                  c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                  c.closePath();
                } else {
                  if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                  } else {
                    end = constraint.pointB;
                  }
                  c.beginPath();
                  c.moveTo(start.x, start.y);
                  if (constraint.render.type === "spring") {
                    var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                    for (var j = 1; j < coils; j += 1) {
                      offset = j % 2 === 0 ? 1 : -1;
                      c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
                    }
                  }
                  c.lineTo(end.x, end.y);
                }
                if (constraint.render.lineWidth) {
                  c.lineWidth = constraint.render.lineWidth;
                  c.strokeStyle = constraint.render.strokeStyle;
                  c.stroke();
                }
                if (constraint.render.anchors) {
                  c.fillStyle = constraint.render.strokeStyle;
                  c.beginPath();
                  c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                  c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                  c.closePath();
                  c.fill();
                }
              }
            };
            /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodies = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
              for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible) continue;
                // handle compound parts
                                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                  part = body.parts[k];
                  if (!part.render.visible) continue;
                  if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = .5 * part.render.opacity;
                  } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                  }
                  if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);
                    c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
                    // revert translation, hopefully faster than save / restore
                                        c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                  } else {
                    // part polygon
                    if (part.circleRadius) {
                      c.beginPath();
                      c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                      c.beginPath();
                      c.moveTo(part.vertices[0].x, part.vertices[0].y);
                      for (var j = 1; j < part.vertices.length; j++) {
                        if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                          c.lineTo(part.vertices[j].x, part.vertices[j].y);
                        } else {
                          c.moveTo(part.vertices[j].x, part.vertices[j].y);
                        }
                        if (part.vertices[j].isInternal && !showInternalEdges) {
                          c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                        }
                      }
                      c.lineTo(part.vertices[0].x, part.vertices[0].y);
                      c.closePath();
                    }
                    if (!options.wireframes) {
                      c.fillStyle = part.render.fillStyle;
                      if (part.render.lineWidth) {
                        c.lineWidth = part.render.lineWidth;
                        c.strokeStyle = part.render.strokeStyle;
                        c.stroke();
                      }
                      c.fill();
                    } else {
                      c.lineWidth = 1;
                      c.strokeStyle = render.options.wireframeStrokeStyle;
                      c.stroke();
                    }
                  }
                  c.globalAlpha = 1;
                }
              }
            };
            /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyWireframes = function(render, bodies, context) {
              var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
              c.beginPath();
              // render all bodies
                            for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible) continue;
                // handle compound parts
                                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                  part = body.parts[k];
                  c.moveTo(part.vertices[0].x, part.vertices[0].y);
                  for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                      c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                      c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }
                    if (part.vertices[j].isInternal && !showInternalEdges) {
                      c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                  }
                  c.lineTo(part.vertices[0].x, part.vertices[0].y);
                }
              }
              c.lineWidth = 1;
              c.strokeStyle = render.options.wireframeStrokeStyle;
              c.stroke();
            };
            /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyConvexHulls = function(render, bodies, context) {
              var c = context, body, part, i, j, k;
              c.beginPath();
              // render convex hulls
                            for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible || body.parts.length === 1) continue;
                c.moveTo(body.vertices[0].x, body.vertices[0].y);
                for (j = 1; j < body.vertices.length; j++) {
                  c.lineTo(body.vertices[j].x, body.vertices[j].y);
                }
                c.lineTo(body.vertices[0].x, body.vertices[0].y);
              }
              c.lineWidth = 1;
              c.strokeStyle = "rgba(255,255,255,0.2)";
              c.stroke();
            };
            /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.vertexNumbers = function(render, bodies, context) {
              var c = context, i, j, k;
              for (i = 0; i < bodies.length; i++) {
                var parts = bodies[i].parts;
                for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                  var part = parts[k];
                  for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = "rgba(255,255,255,0.2)";
                    c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * .8, part.position.y + (part.vertices[j].y - part.position.y) * .8);
                  }
                }
              }
            };
            /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */            Render.mousePosition = function(render, mouse, context) {
              var c = context;
              c.fillStyle = "rgba(255,255,255,0.8)";
              c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
            };
            /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyBounds = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options;
              c.beginPath();
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.render.visible) {
                  var parts = bodies[i].parts;
                  for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                  }
                }
              }
              if (options.wireframes) {
                c.strokeStyle = "rgba(255,255,255,0.08)";
              } else {
                c.strokeStyle = "rgba(0,0,0,0.1)";
              }
              c.lineWidth = 1;
              c.stroke();
            };
            /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyAxes = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options, part, i, j, k;
              c.beginPath();
              for (i = 0; i < bodies.length; i++) {
                var body = bodies[i], parts = body.parts;
                if (!body.render.visible) continue;
                if (options.showAxes) {
                  // render all axes
                  for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                      var axis = part.axes[k];
                      c.moveTo(part.position.x, part.position.y);
                      c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                  }
                } else {
                  for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                      // render a single axis indicator
                      c.moveTo(part.position.x, part.position.y);
                      c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
                    }
                  }
                }
              }
              if (options.wireframes) {
                c.strokeStyle = "indianred";
                c.lineWidth = 1;
              } else {
                c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                c.globalCompositeOperation = "overlay";
                c.lineWidth = 2;
              }
              c.stroke();
              c.globalCompositeOperation = "source-over";
            };
            /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyPositions = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options, body, part, i, k;
              c.beginPath();
              // render current positions
                            for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible) continue;
                // handle compound parts
                                for (k = 0; k < body.parts.length; k++) {
                  part = body.parts[k];
                  c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                  c.closePath();
                }
              }
              if (options.wireframes) {
                c.fillStyle = "indianred";
              } else {
                c.fillStyle = "rgba(0,0,0,0.5)";
              }
              c.fill();
              c.beginPath();
              // render previous positions
                            for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (body.render.visible) {
                  c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                  c.closePath();
                }
              }
              c.fillStyle = "rgba(255,165,0,0.8)";
              c.fill();
            };
            /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyVelocity = function(render, bodies, context) {
              var c = context;
              c.beginPath();
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (!body.render.visible) continue;
                var velocity = Body.getVelocity(body);
                c.moveTo(body.position.x, body.position.y);
                c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
              }
              c.lineWidth = 3;
              c.strokeStyle = "cornflowerblue";
              c.stroke();
            };
            /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */            Render.bodyIds = function(render, bodies, context) {
              var c = context, i, j;
              for (i = 0; i < bodies.length; i++) {
                if (!bodies[i].render.visible) continue;
                var parts = bodies[i].parts;
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                  var part = parts[j];
                  c.font = "12px Arial";
                  c.fillStyle = "rgba(255,255,255,0.5)";
                  c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                }
              }
            };
            /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */            Render.collisions = function(render, pairs, context) {
              var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
              c.beginPath();
              // render collision positions
                            for (i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                if (!pair.isActive) continue;
                collision = pair.collision;
                for (j = 0; j < pair.contactCount; j++) {
                  var contact = pair.contacts[j], vertex = contact.vertex;
                  c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                }
              }
              if (options.wireframes) {
                c.fillStyle = "rgba(255,255,255,0.7)";
              } else {
                c.fillStyle = "orange";
              }
              c.fill();
              c.beginPath();
              // render collision normals
                            for (i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                if (!pair.isActive) continue;
                collision = pair.collision;
                if (pair.contactCount > 0) {
                  var normalPosX = pair.contacts[0].vertex.x, normalPosY = pair.contacts[0].vertex.y;
                  if (pair.contactCount === 2) {
                    normalPosX = (pair.contacts[0].vertex.x + pair.contacts[1].vertex.x) / 2;
                    normalPosY = (pair.contacts[0].vertex.y + pair.contacts[1].vertex.y) / 2;
                  }
                  if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                  } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                  }
                  c.lineTo(normalPosX, normalPosY);
                }
              }
              if (options.wireframes) {
                c.strokeStyle = "rgba(255,165,0,0.7)";
              } else {
                c.strokeStyle = "orange";
              }
              c.lineWidth = 1;
              c.stroke();
            };
            /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */            Render.separations = function(render, pairs, context) {
              var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
              c.beginPath();
              // render separations
                            for (i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                if (!pair.isActive) continue;
                collision = pair.collision;
                bodyA = collision.bodyA;
                bodyB = collision.bodyB;
                var k = 1;
                if (!bodyB.isStatic && !bodyA.isStatic) k = .5;
                if (bodyB.isStatic) k = 0;
                c.moveTo(bodyB.position.x, bodyB.position.y);
                c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                k = 1;
                if (!bodyB.isStatic && !bodyA.isStatic) k = .5;
                if (bodyA.isStatic) k = 0;
                c.moveTo(bodyA.position.x, bodyA.position.y);
                c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
              }
              if (options.wireframes) {
                c.strokeStyle = "rgba(255,165,0,0.5)";
              } else {
                c.strokeStyle = "orange";
              }
              c.stroke();
            };
            /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */            Render.inspector = function(inspector, context) {
              var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;
              if (options.hasBounds) {
                var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                context.translate(-render.bounds.min.x, -render.bounds.min.y);
              }
              for (var i = 0; i < selected.length; i++) {
                var item = selected[i].data;
                context.translate(.5, .5);
                context.lineWidth = 1;
                context.strokeStyle = "rgba(255,165,0,0.9)";
                context.setLineDash([ 1, 2 ]);
                switch (item.type) {
                 case "body":
                  // render body selections
                  bounds = item.bounds;
                  context.beginPath();
                  context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                  context.closePath();
                  context.stroke();
                  break;

                 case "constraint":
                  // render constraint selections
                  var point = item.pointA;
                  if (item.bodyA) point = item.pointB;
                  context.beginPath();
                  context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                  context.closePath();
                  context.stroke();
                  break;
                }
                context.setLineDash([]);
                context.translate(-.5, -.5);
              }
              // render selection region
                            if (inspector.selectStart !== null) {
                context.translate(.5, .5);
                context.lineWidth = 1;
                context.strokeStyle = "rgba(255,165,0,0.6)";
                context.fillStyle = "rgba(255,165,0,0.1)";
                bounds = inspector.selectBounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
                context.closePath();
                context.stroke();
                context.fill();
                context.translate(-.5, -.5);
              }
              if (options.hasBounds) context.setTransform(1, 0, 0, 1, 0, 0);
            };
            /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */            var _updateTiming = function(render, time) {
              var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
              timing.delta = time - timing.lastTime || Render._goodDelta;
              timing.lastTime = time;
              timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
              timing.lastTimestamp = timestamp;
              timing.deltaHistory.unshift(timing.delta);
              timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
              timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
              timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
              timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
              timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
              timing.engineUpdatesHistory.unshift(engine.timing.lastUpdatesPerFrame);
              timing.engineUpdatesHistory.length = Math.min(timing.engineUpdatesHistory.length, historySize);
              timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
              timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
              timing.elapsedHistory.unshift(timing.lastElapsed);
              timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
            };
            /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */            var _mean = function(values) {
              var result = 0;
              for (var i = 0; i < values.length; i += 1) {
                result += values[i];
              }
              return result / values.length || 0;
            };
            /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */            var _createCanvas = function(width, height) {
              var canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              canvas.oncontextmenu = function() {
                return false;
              };
              canvas.onselectstart = function() {
                return false;
              };
              return canvas;
            };
            /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */            var _getPixelRatio = function(canvas) {
              var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
              return devicePixelRatio / backingStorePixelRatio;
            };
            /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */            var _getTexture = function(render, imagePath) {
              var image = render.textures[imagePath];
              if (image) return image;
              image = render.textures[imagePath] = new Image;
              image.src = imagePath;
              return image;
            };
            /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */            var _applyBackground = function(render, background) {
              var cssBackground = background;
              if (/(jpg|gif|png)$/.test(background)) cssBackground = "url(" + background + ")";
              render.canvas.style.background = cssBackground;
              render.canvas.style.backgroundSize = "contain";
              render.currentBackground = background;
            };
            /*
    *
    *  Events Documentation
    *
    */
            /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * A back-reference to the `Matter.Render` module.
     *
     * @deprecated
     * @property controller
     * @type render
     */
            /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */
            /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */
            /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */
            /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */
            /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */
            /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */
            /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */
            /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */
            /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */
            /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */
            /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */
            /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */
            /**
     * A CSS color string to use for background when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */
            /**
     * A CSS color string to use for stroke when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeStrokeStyle
     * @type string
     * @default '#bbb'
     */
            /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average updates per frame (e.g. 1)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */
            /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */
            /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */
            /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */
            /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */          })();
          /***/        }, 
        /* 27 */
        /***/ function(module, exports, __nested_webpack_require_347924__) {
          /**
* The `Matter.Runner` module is an optional utility that provides a game loop for running a `Matter.Engine` inside a browser environment.
* A runner will continuously update a `Matter.Engine` whilst synchronising engine updates with the browser frame rate.
* This runner favours a smoother user experience over perfect time keeping.
* This runner is optional and is used for development and debugging but could be useful as a starting point for implementing some games and experiences.
* Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation as may be needed inside other environments.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/
          var Runner = {};
          module.exports = Runner;
          var Events = __nested_webpack_require_347924__(5);
          var Engine = __nested_webpack_require_347924__(17);
          var Common = __nested_webpack_require_347924__(0);
          (function() {
            Runner._maxFrameDelta = 1e3 / 15;
            Runner._frameDeltaFallback = 1e3 / 60;
            Runner._timeBufferMargin = 1.5;
            Runner._elapsedNextEstimate = 1;
            Runner._smoothingLowerBound = .1;
            Runner._smoothingUpperBound = .9;
            /**
     * Creates a new Runner. 
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     */            Runner.create = function(options) {
              var defaults = {
                delta: 1e3 / 60,
                frameDelta: null,
                frameDeltaSmoothing: true,
                frameDeltaSnapping: true,
                frameDeltaHistory: [],
                frameDeltaHistorySize: 100,
                frameRequestId: null,
                timeBuffer: 0,
                timeLastTick: null,
                maxUpdates: null,
                maxFrameTime: 1e3 / 30,
                lastUpdatesDeferred: 0,
                enabled: true
              };
              var runner = Common.extend(defaults, options);
              // for temporary back compatibility only
                            runner.fps = 0;
              return runner;
            };
            /**
     * Runs a `Matter.Engine` whilst synchronising engine updates with the browser frame rate. 
     * See module and properties descriptions for more information on this runner.
     * Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation.
     * @method run
     * @param {runner} runner
     * @param {engine} [engine]
     * @return {runner} runner
     */            Runner.run = function(runner, engine) {
              // initial time buffer for the first frame
              runner.timeBuffer = Runner._frameDeltaFallback;
              (function onFrame(time) {
                runner.frameRequestId = Runner._onNextFrame(runner, onFrame);
                if (time && runner.enabled) {
                  Runner.tick(runner, engine, time);
                }
              })();
              return runner;
            };
            /**
     * Performs a single runner tick as used inside `Runner.run`.
     * See module and properties descriptions for more information on this runner.
     * Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */            Runner.tick = function(runner, engine, time) {
              var tickStartTime = Common.now(), engineDelta = runner.delta, updateCount = 0;
              // find frame delta time since last call
                            var frameDelta = time - runner.timeLastTick;
              // fallback for unusable frame delta values (e.g. 0, NaN, on first frame or long pauses)
                            if (!frameDelta || !runner.timeLastTick || frameDelta > Math.max(Runner._maxFrameDelta, runner.maxFrameTime)) {
                // reuse last accepted frame delta else fallback
                frameDelta = runner.frameDelta || Runner._frameDeltaFallback;
              }
              if (runner.frameDeltaSmoothing) {
                // record frame delta over a number of frames
                runner.frameDeltaHistory.push(frameDelta);
                runner.frameDeltaHistory = runner.frameDeltaHistory.slice(-runner.frameDeltaHistorySize);
                // sort frame delta history
                                var deltaHistorySorted = runner.frameDeltaHistory.slice(0).sort();
                // sample a central window to limit outliers
                                var deltaHistoryWindow = runner.frameDeltaHistory.slice(deltaHistorySorted.length * Runner._smoothingLowerBound, deltaHistorySorted.length * Runner._smoothingUpperBound);
                // take the mean of the central window
                                var frameDeltaSmoothed = _mean(deltaHistoryWindow);
                frameDelta = frameDeltaSmoothed || frameDelta;
              }
              if (runner.frameDeltaSnapping) {
                // snap frame delta to the nearest 1 Hz
                frameDelta = 1e3 / Math.round(1e3 / frameDelta);
              }
              // update runner values for next call
                            runner.frameDelta = frameDelta;
              runner.timeLastTick = time;
              // accumulate elapsed time
                            runner.timeBuffer += runner.frameDelta;
              // limit time buffer size to a single frame of updates
                            runner.timeBuffer = Common.clamp(runner.timeBuffer, 0, runner.frameDelta + engineDelta * Runner._timeBufferMargin);
              // reset count of over budget updates
                            runner.lastUpdatesDeferred = 0;
              // get max updates per frame
                            var maxUpdates = runner.maxUpdates || Math.ceil(runner.maxFrameTime / engineDelta);
              // create event object
                            var event = {
                timestamp: engine.timing.timestamp
              };
              // tick events before update
                            Events.trigger(runner, "beforeTick", event);
              Events.trigger(runner, "tick", event);
              var updateStartTime = Common.now();
              // simulate time elapsed between calls
                            while (engineDelta > 0 && runner.timeBuffer >= engineDelta * Runner._timeBufferMargin) {
                // update the engine
                Events.trigger(runner, "beforeUpdate", event);
                Engine.update(engine, engineDelta);
                Events.trigger(runner, "afterUpdate", event);
                // consume time simulated from buffer
                                runner.timeBuffer -= engineDelta;
                updateCount += 1;
                // find elapsed time during this tick
                                var elapsedTimeTotal = Common.now() - tickStartTime, elapsedTimeUpdates = Common.now() - updateStartTime, elapsedNextEstimate = elapsedTimeTotal + Runner._elapsedNextEstimate * elapsedTimeUpdates / updateCount;
                // defer updates if over performance budgets for this frame
                                if (updateCount >= maxUpdates || elapsedNextEstimate > runner.maxFrameTime) {
                  runner.lastUpdatesDeferred = Math.round(Math.max(0, runner.timeBuffer / engineDelta - Runner._timeBufferMargin));
                  break;
                }
              }
              // track timing metrics
                            engine.timing.lastUpdatesPerFrame = updateCount;
              // tick events after update
                            Events.trigger(runner, "afterTick", event);
              // show useful warnings if needed
                            if (runner.frameDeltaHistory.length >= 100) {
                if (runner.lastUpdatesDeferred && Math.round(runner.frameDelta / engineDelta) > maxUpdates) {
                  Common.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.");
                } else if (runner.lastUpdatesDeferred) {
                  Common.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs.");
                }
                if (typeof runner.isFixed !== "undefined") {
                  Common.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs.");
                }
                if (runner.deltaMin || runner.deltaMax) {
                  Common.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.");
                }
                if (runner.fps !== 0) {
                  Common.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs.");
                }
              }
            };
            /**
     * Ends execution of `Runner.run` on the given `runner` by canceling the frame loop.
     * Alternatively to temporarily pause the runner, see `runner.enabled`.
     * @method stop
     * @param {runner} runner
     */            Runner.stop = function(runner) {
              Runner._cancelNextFrame(runner);
            };
            /**
     * Schedules the `callback` on this `runner` for the next animation frame.
     * @private
     * @method _onNextFrame
     * @param {runner} runner
     * @param {function} callback
     * @return {number} frameRequestId
     */            Runner._onNextFrame = function(runner, callback) {
              if (typeof window !== "undefined" && window.requestAnimationFrame) {
                runner.frameRequestId = window.requestAnimationFrame(callback);
              } else {
                throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");
              }
              return runner.frameRequestId;
            };
            /**
     * Cancels the last callback scheduled by `Runner._onNextFrame` on this `runner`.
     * @private
     * @method _cancelNextFrame
     * @param {runner} runner
     */            Runner._cancelNextFrame = function(runner) {
              if (typeof window !== "undefined" && window.cancelAnimationFrame) {
                window.cancelAnimationFrame(runner.frameRequestId);
              } else {
                throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");
              }
            };
            /**
     * Returns the mean of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values.
     */            var _mean = function(values) {
              var result = 0, valuesLength = values.length;
              for (var i = 0; i < valuesLength; i += 1) {
                result += values[i];
              }
              return result / valuesLength || 0;
            };
            /*
    *
    *  Events Documentation
    *
    */
            /**
    * Fired once at the start of the browser frame, before any engine updates.
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired once at the start of the browser frame, after `beforeTick`.
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired once at the end of the browser frame, after `beforeTick`, `tick` and after any engine updates.
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired before each and every engine update in this browser frame (if any). 
    * There may be multiple engine update calls per browser frame (or none) depending on framerate and timestep delta.
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /**
    * Fired after each and every engine update in this browser frame (if any). 
    * There may be multiple engine update calls per browser frame (or none) depending on framerate and timestep delta.
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */
            /*
    *
    *  Properties Documentation
    *
    */
            /**
     * The fixed timestep size used for `Engine.update` calls in milliseconds, known as `delta`.
     * 
     * This value is recommended to be `1000 / 60` ms or smaller (i.e. equivalent to at least 60hz).
     * 
     * Smaller `delta` values provide higher quality results at the cost of performance.
     * 
     * You should usually avoid changing `delta` during running, otherwise quality may be affected. 
     * 
     * For smoother frame pacing choose a `delta` that is an even multiple of each display FPS you target, i.e. `1000 / (n * fps)` as this helps distribute an equal number of updates over each display frame.
     * 
     * For example with a 60 Hz `delta` i.e. `1000 / 60` the runner will on average perform one update per frame on displays running 60 FPS and one update every two frames on displays running 120 FPS, etc.
     * 
     * Where as e.g. using a 240 Hz `delta` i.e. `1000 / 240` the runner will on average perform four updates per frame on displays running 60 FPS and two updates per frame on displays running 120 FPS, etc.
     * 
     * Therefore `Runner.run` will call multiple engine updates (or none) as needed to simulate the time elapsed between browser frames. 
     * 
     * In practice the number of updates in any particular frame may be restricted to respect the runner's performance budgets. These are specified by `runner.maxFrameTime` and `runner.maxUpdates`, see those properties for details.
     * 
     * @property delta
     * @type number
     * @default 1000 / 60
     */
            /**
     * A flag that can be toggled to enable or disable tick calls on this runner, therefore pausing engine updates and events while the runner loop remains running.
     *
     * @property enabled
     * @type boolean
     * @default true
     */
            /**
     * The accumulated time elapsed that has yet to be simulated in milliseconds.
     * This value is clamped within certain limits (see `Runner.tick` code).
     *
     * @private
     * @property timeBuffer
     * @type number
     * @default 0
     */
            /**
     * The measured time elapsed between the last two browser frames measured in milliseconds.
     * This is useful e.g. to estimate the current browser FPS using `1000 / runner.frameDelta`.
     *
     * @readonly
     * @property frameDelta
     * @type number
     */
            /**
     * Enables averaging to smooth frame rate measurements and therefore stabilise play rate.
     *
     * @property frameDeltaSmoothing
     * @type boolean
     * @default true
     */
            /**
     * Rounds measured browser frame delta to the nearest 1 Hz.
     * This option can help smooth frame rate measurements and simplify handling hardware timing differences e.g. 59.94Hz and 60Hz displays.
     * For best results you should also round your `runner.delta` equivalent to the nearest 1 Hz.
     *
     * @property frameDeltaSnapping
     * @type boolean
     * @default true
     */
            /**
     * A performance budget that limits execution time allowed for this runner per browser frame in milliseconds.
     * 
     * To calculate the effective browser FPS at which this throttle is applied use `1000 / runner.maxFrameTime`.
     * 
     * This performance budget is intended to help maintain browser interactivity and help improve framerate recovery during temporary high CPU usage.
     * 
     * This budget only covers the measured time elapsed executing the functions called in the scope of the runner tick, including `Engine.update` and its related user event callbacks.
     * 
     * You may also reduce this budget to allow for any significant additional processing you perform on the same thread outside the scope of this runner tick, e.g. rendering time.
     * 
     * See also `runner.maxUpdates`.
     *
     * @property maxFrameTime
     * @type number
     * @default 1000 / 30
     */
            /**
     * An optional limit for maximum engine update count allowed per frame tick in addition to `runner.maxFrameTime`.
     * 
     * Unless you set a value it is automatically chosen based on `runner.delta` and `runner.maxFrameTime`.
     * 
     * See also `runner.maxFrameTime`.
     * 
     * @property maxUpdates
     * @type number
     * @default null
     */
            /**
     * The timestamp of the last call to `Runner.tick` used to measure `frameDelta`.
     *
     * @private
     * @property timeLastTick
     * @type number
     * @default 0
     */
            /**
     * The id of the last call to `Runner._onNextFrame`.
     *
     * @private
     * @property frameRequestId
     * @type number
     * @default null
     */          })();
          /***/        }, 
        /* 28 */
        /***/ function(module, exports, __nested_webpack_require_364722__) {
          /**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/
          var SAT = {};
          module.exports = SAT;
          var Collision = __nested_webpack_require_364722__(8);
          var Common = __nested_webpack_require_364722__(0);
          var deprecated = Common.deprecated;
          (function() {
            /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */
            SAT.collides = function(bodyA, bodyB) {
              return Collision.collides(bodyA, bodyB);
            };
            deprecated(SAT, "collides", "SAT.collides ➤ replaced by Collision.collides");
          })();
          /***/        }, 
        /* 29 */
        /***/ function(module, exports, __nested_webpack_require_365792__) {
          /**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/
          var Svg = {};
          module.exports = Svg;
          var Bounds = __nested_webpack_require_365792__(1);
          var Common = __nested_webpack_require_365792__(0);
          (function() {
            /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
            Svg.pathToVertices = function(path, sampleLength) {
              if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {
                Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
              }
              // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
                            var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
              sampleLength = sampleLength || 15;
              var addPoint = function(px, py, pathSegType) {
                // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
                var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                // when the last point doesn't equal the current point add the current point
                                if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                  if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                  } else {
                    lx = 0;
                    ly = 0;
                  }
                  var point = {
                    x: lx + px,
                    y: ly + py
                  };
                  // set last point
                                    if (isRelative || !lastPoint) {
                    lastPoint = point;
                  }
                  points.push(point);
                  x = lx + px;
                  y = ly + py;
                }
              };
              var addSegmentPoint = function(segment) {
                var segType = segment.pathSegTypeAsLetter.toUpperCase();
                // skip path ends
                                if (segType === "Z") return;
                // map segment to x and y
                                switch (segType) {
                 case "M":
                 case "L":
                 case "T":
                 case "C":
                 case "S":
                 case "Q":
                  x = segment.x;
                  y = segment.y;
                  break;

                 case "H":
                  x = segment.x;
                  break;

                 case "V":
                  y = segment.y;
                  break;
                }
                addPoint(x, y, segment.pathSegType);
              };
              // ensure path is absolute
                            Svg._svgPathToAbsolute(path);
              // get total length
                            total = path.getTotalLength();
              // queue segments
                            segments = [];
              for (i = 0; i < path.pathSegList.numberOfItems; i += 1) segments.push(path.pathSegList.getItem(i));
              segmentsQueue = segments.concat();
              // sample through path
                            while (length < total) {
                // get segment at position
                segmentIndex = path.getPathSegAtLength(length);
                segment = segments[segmentIndex];
                // new segment
                                if (segment != lastSegment) {
                  while (segmentsQueue.length && segmentsQueue[0] != segment) addSegmentPoint(segmentsQueue.shift());
                  lastSegment = segment;
                }
                // add points in between when curving
                // TODO: adaptive sampling
                                switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                 case "C":
                 case "T":
                 case "S":
                 case "Q":
                 case "A":
                  point = path.getPointAtLength(length);
                  addPoint(point.x, point.y, 0);
                  break;
                }
                // increment by sample value
                                length += sampleLength;
              }
              // add remaining segments not passed by sampling
                            for (i = 0, il = segmentsQueue.length; i < il; ++i) addSegmentPoint(segmentsQueue[i]);
              return points;
            };
            Svg._svgPathToAbsolute = function(path) {
              // http://phrogz.net/convert-svg-path-to-all-absolute-commands
              // Copyright (c) Gavin Kistner
              // http://phrogz.net/js/_ReuseLicense.txt
              // Modifications: tidy formatting and naming
              var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
              for (var i = 0; i < len; ++i) {
                var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(segType)) {
                  if ("x" in seg) x = seg.x;
                  if ("y" in seg) y = seg.y;
                } else {
                  if ("x1" in seg) x1 = x + seg.x1;
                  if ("x2" in seg) x2 = x + seg.x2;
                  if ("y1" in seg) y1 = y + seg.y1;
                  if ("y2" in seg) y2 = y + seg.y2;
                  if ("x" in seg) x += seg.x;
                  if ("y" in seg) y += seg.y;
                  switch (segType) {
                   case "m":
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;

                   case "l":
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;

                   case "h":
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;

                   case "v":
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;

                   case "c":
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;

                   case "s":
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;

                   case "q":
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;

                   case "t":
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;

                   case "a":
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;

                   case "z":
                   case "Z":
                    x = x0;
                    y = y0;
                    break;
                  }
                }
                if (segType == "M" || segType == "m") {
                  x0 = x;
                  y0 = y;
                }
              }
            };
          })();
          /***/        }, 
        /* 30 */
        /***/ function(module, exports, __nested_webpack_require_373253__) {
          /**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/
          var World = {};
          module.exports = World;
          var Composite = __nested_webpack_require_373253__(6);
          var Common = __nested_webpack_require_373253__(0);
          (function() {
            /**
     * See above, aliases for back compatibility only
     */
            World.create = Composite.create;
            World.add = Composite.add;
            World.remove = Composite.remove;
            World.clear = Composite.clear;
            World.addComposite = Composite.addComposite;
            World.addBody = Composite.addBody;
            World.addConstraint = Composite.addConstraint;
          })();
          /***/        }
        /******/ ]);
      }));
      /***/    }
    /******/  };
  /************************************************************************/
  /******/ // The module cache
  /******/  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/    if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/    }
    /******/ // Create a new module (and put it into the cache)
    /******/    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/    };
    /******/
    /******/ // Execute the module function
    /******/    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/    return module.exports;
    /******/  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/global */
  /******/  (() => {
    /******/ __webpack_require__.g = function() {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/      try {
        /******/ return this || new Function("return this")();
        /******/      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/      }
      /******/    }();
    /******/  })();
  /******/
  /************************************************************************/
  // This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
    (() => {
    "use strict";
    // EXTERNAL MODULE: ./node_modules/matter-js/build/matter.js
        var matter = __webpack_require__(46);
    // ./node_modules/hachure-fill/bin/hachure.js
    function rotatePoints(points, center, degrees) {
      if (points && points.length) {
        const [cx, cy] = center;
        const angle = Math.PI / 180 * degrees;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        for (const p of points) {
          const [x, y] = p;
          p[0] = (x - cx) * cos - (y - cy) * sin + cx;
          p[1] = (x - cx) * sin + (y - cy) * cos + cy;
        }
      }
    }
    function rotateLines(lines, center, degrees) {
      const points = [];
      lines.forEach((line => points.push(...line)));
      rotatePoints(points, center, degrees);
    }
    function areSamePoints(p1, p2) {
      return p1[0] === p2[0] && p1[1] === p2[1];
    }
    function hachureLines(polygons, hachureGap, hachureAngle, hachureStepOffset = 1) {
      const angle = hachureAngle;
      const gap = Math.max(hachureGap, .1);
      const polygonList = polygons[0] && polygons[0][0] && typeof polygons[0][0] === "number" ? [ polygons ] : polygons;
      const rotationCenter = [ 0, 0 ];
      if (angle) {
        for (const polygon of polygonList) {
          rotatePoints(polygon, rotationCenter, angle);
        }
      }
      const lines = straightHachureLines(polygonList, gap, hachureStepOffset);
      if (angle) {
        for (const polygon of polygonList) {
          rotatePoints(polygon, rotationCenter, -angle);
        }
        rotateLines(lines, rotationCenter, -angle);
      }
      return lines;
    }
    function straightHachureLines(polygons, gap, hachureStepOffset) {
      const vertexArray = [];
      for (const polygon of polygons) {
        const vertices = [ ...polygon ];
        if (!areSamePoints(vertices[0], vertices[vertices.length - 1])) {
          vertices.push([ vertices[0][0], vertices[0][1] ]);
        }
        if (vertices.length > 2) {
          vertexArray.push(vertices);
        }
      }
      const lines = [];
      gap = Math.max(gap, .1);
      // Create sorted edges table
            const edges = [];
      for (const vertices of vertexArray) {
        for (let i = 0; i < vertices.length - 1; i++) {
          const p1 = vertices[i];
          const p2 = vertices[i + 1];
          if (p1[1] !== p2[1]) {
            const ymin = Math.min(p1[1], p2[1]);
            edges.push({
              ymin,
              ymax: Math.max(p1[1], p2[1]),
              x: ymin === p1[1] ? p1[0] : p2[0],
              islope: (p2[0] - p1[0]) / (p2[1] - p1[1])
            });
          }
        }
      }
      edges.sort(((e1, e2) => {
        if (e1.ymin < e2.ymin) {
          return -1;
        }
        if (e1.ymin > e2.ymin) {
          return 1;
        }
        if (e1.x < e2.x) {
          return -1;
        }
        if (e1.x > e2.x) {
          return 1;
        }
        if (e1.ymax === e2.ymax) {
          return 0;
        }
        return (e1.ymax - e2.ymax) / Math.abs(e1.ymax - e2.ymax);
      }));
      if (!edges.length) {
        return lines;
      }
      // Start scanning
            let activeEdges = [];
      let y = edges[0].ymin;
      let iteration = 0;
      while (activeEdges.length || edges.length) {
        if (edges.length) {
          let ix = -1;
          for (let i = 0; i < edges.length; i++) {
            if (edges[i].ymin > y) {
              break;
            }
            ix = i;
          }
          const removed = edges.splice(0, ix + 1);
          removed.forEach((edge => {
            activeEdges.push({
              s: y,
              edge
            });
          }));
        }
        activeEdges = activeEdges.filter((ae => {
          if (ae.edge.ymax <= y) {
            return false;
          }
          return true;
        }));
        activeEdges.sort(((ae1, ae2) => {
          if (ae1.edge.x === ae2.edge.x) {
            return 0;
          }
          return (ae1.edge.x - ae2.edge.x) / Math.abs(ae1.edge.x - ae2.edge.x);
        }));
        // fill between the edges
                if (hachureStepOffset !== 1 || iteration % gap === 0) {
          if (activeEdges.length > 1) {
            for (let i = 0; i < activeEdges.length; i = i + 2) {
              const nexti = i + 1;
              if (nexti >= activeEdges.length) {
                break;
              }
              const ce = activeEdges[i].edge;
              const ne = activeEdges[nexti].edge;
              lines.push([ [ Math.round(ce.x), y ], [ Math.round(ne.x), y ] ]);
            }
          }
        }
        y += hachureStepOffset;
        activeEdges.forEach((ae => {
          ae.edge.x = ae.edge.x + hachureStepOffset * ae.edge.islope;
        }));
        iteration++;
      }
      return lines;
    }
    // ./node_modules/roughjs/bin/fillers/scan-line-hachure.js
    function polygonHachureLines(polygonList, o) {
      var _a;
      const angle = o.hachureAngle + 90;
      let gap = o.hachureGap;
      if (gap < 0) {
        gap = o.strokeWidth * 4;
      }
      gap = Math.round(Math.max(gap, .1));
      let skipOffset = 1;
      if (o.roughness >= 1) {
        if ((((_a = o.randomizer) === null || _a === void 0 ? void 0 : _a.next()) || Math.random()) > .7) {
          skipOffset = gap;
        }
      }
      return hachureLines(polygonList, gap, angle, skipOffset || 1);
    }
    // ./node_modules/roughjs/bin/fillers/hachure-filler.js
    class HachureFiller {
      constructor(helper) {
        this.helper = helper;
      }
      fillPolygons(polygonList, o) {
        return this._fillPolygons(polygonList, o);
      }
      _fillPolygons(polygonList, o) {
        const lines = polygonHachureLines(polygonList, o);
        const ops = this.renderLines(lines, o);
        return {
          type: "fillSketch",
          ops
        };
      }
      renderLines(lines, o) {
        const ops = [];
        for (const line of lines) {
          ops.push(...this.helper.doubleLineOps(line[0][0], line[0][1], line[1][0], line[1][1], o));
        }
        return ops;
      }
    }
    // ./node_modules/roughjs/bin/geometry.js
    function lineLength(line) {
      const p1 = line[0];
      const p2 = line[1];
      return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }
    // ./node_modules/roughjs/bin/fillers/zigzag-filler.js
    class ZigZagFiller extends HachureFiller {
      fillPolygons(polygonList, o) {
        let gap = o.hachureGap;
        if (gap < 0) {
          gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, .1);
        const o2 = Object.assign({}, o, {
          hachureGap: gap
        });
        const lines = polygonHachureLines(polygonList, o2);
        const zigZagAngle = Math.PI / 180 * o.hachureAngle;
        const zigzagLines = [];
        const dgx = gap * .5 * Math.cos(zigZagAngle);
        const dgy = gap * .5 * Math.sin(zigZagAngle);
        for (const [p1, p2] of lines) {
          if (lineLength([ p1, p2 ])) {
            zigzagLines.push([ [ p1[0] - dgx, p1[1] + dgy ], [ ...p2 ] ], [ [ p1[0] + dgx, p1[1] - dgy ], [ ...p2 ] ]);
          }
        }
        const ops = this.renderLines(zigzagLines, o);
        return {
          type: "fillSketch",
          ops
        };
      }
    }
    // ./node_modules/roughjs/bin/fillers/hatch-filler.js
    class HatchFiller extends HachureFiller {
      fillPolygons(polygonList, o) {
        const set = this._fillPolygons(polygonList, o);
        const o2 = Object.assign({}, o, {
          hachureAngle: o.hachureAngle + 90
        });
        const set2 = this._fillPolygons(polygonList, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
      }
    }
    // ./node_modules/roughjs/bin/fillers/dot-filler.js
    class DotFiller {
      constructor(helper) {
        this.helper = helper;
      }
      fillPolygons(polygonList, o) {
        o = Object.assign({}, o, {
          hachureAngle: 0
        });
        const lines = polygonHachureLines(polygonList, o);
        return this.dotsOnLines(lines, o);
      }
      dotsOnLines(lines, o) {
        const ops = [];
        let gap = o.hachureGap;
        if (gap < 0) {
          gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, .1);
        let fweight = o.fillWeight;
        if (fweight < 0) {
          fweight = o.strokeWidth / 2;
        }
        const ro = gap / 4;
        for (const line of lines) {
          const length = lineLength(line);
          const dl = length / gap;
          const count = Math.ceil(dl) - 1;
          const offset = length - count * gap;
          const x = (line[0][0] + line[1][0]) / 2 - gap / 4;
          const minY = Math.min(line[0][1], line[1][1]);
          for (let i = 0; i < count; i++) {
            const y = minY + offset + i * gap;
            const cx = x - ro + Math.random() * 2 * ro;
            const cy = y - ro + Math.random() * 2 * ro;
            const el = this.helper.ellipse(cx, cy, fweight, fweight, o);
            ops.push(...el.ops);
          }
        }
        return {
          type: "fillSketch",
          ops
        };
      }
    }
    // ./node_modules/roughjs/bin/fillers/dashed-filler.js
    class DashedFiller {
      constructor(helper) {
        this.helper = helper;
      }
      fillPolygons(polygonList, o) {
        const lines = polygonHachureLines(polygonList, o);
        return {
          type: "fillSketch",
          ops: this.dashedLine(lines, o)
        };
      }
      dashedLine(lines, o) {
        const offset = o.dashOffset < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashOffset;
        const gap = o.dashGap < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashGap;
        const ops = [];
        lines.forEach((line => {
          const length = lineLength(line);
          const count = Math.floor(length / (offset + gap));
          const startOffset = (length + gap - count * (offset + gap)) / 2;
          let p1 = line[0];
          let p2 = line[1];
          if (p1[0] > p2[0]) {
            p1 = line[1];
            p2 = line[0];
          }
          const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
          for (let i = 0; i < count; i++) {
            const lstart = i * (offset + gap);
            const lend = lstart + offset;
            const start = [ p1[0] + lstart * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha) + startOffset * Math.sin(alpha) ];
            const end = [ p1[0] + lend * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lend * Math.sin(alpha) + startOffset * Math.sin(alpha) ];
            ops.push(...this.helper.doubleLineOps(start[0], start[1], end[0], end[1], o));
          }
        }));
        return ops;
      }
    }
    // ./node_modules/roughjs/bin/fillers/zigzag-line-filler.js
    class ZigZagLineFiller {
      constructor(helper) {
        this.helper = helper;
      }
      fillPolygons(polygonList, o) {
        const gap = o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap;
        const zo = o.zigzagOffset < 0 ? gap : o.zigzagOffset;
        o = Object.assign({}, o, {
          hachureGap: gap + zo
        });
        const lines = polygonHachureLines(polygonList, o);
        return {
          type: "fillSketch",
          ops: this.zigzagLines(lines, zo, o)
        };
      }
      zigzagLines(lines, zo, o) {
        const ops = [];
        lines.forEach((line => {
          const length = lineLength(line);
          const count = Math.round(length / (2 * zo));
          let p1 = line[0];
          let p2 = line[1];
          if (p1[0] > p2[0]) {
            p1 = line[1];
            p2 = line[0];
          }
          const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
          for (let i = 0; i < count; i++) {
            const lstart = i * 2 * zo;
            const lend = (i + 1) * 2 * zo;
            const dz = Math.sqrt(2 * Math.pow(zo, 2));
            const start = [ p1[0] + lstart * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha) ];
            const end = [ p1[0] + lend * Math.cos(alpha), p1[1] + lend * Math.sin(alpha) ];
            const middle = [ start[0] + dz * Math.cos(alpha + Math.PI / 4), start[1] + dz * Math.sin(alpha + Math.PI / 4) ];
            ops.push(...this.helper.doubleLineOps(start[0], start[1], middle[0], middle[1], o), ...this.helper.doubleLineOps(middle[0], middle[1], end[0], end[1], o));
          }
        }));
        return ops;
      }
    }
    // ./node_modules/roughjs/bin/fillers/filler.js
    const fillers = {};
    function getFiller(o, helper) {
      let fillerName = o.fillStyle || "hachure";
      if (!fillers[fillerName]) {
        switch (fillerName) {
         case "zigzag":
          if (!fillers[fillerName]) {
            fillers[fillerName] = new ZigZagFiller(helper);
          }
          break;

         case "cross-hatch":
          if (!fillers[fillerName]) {
            fillers[fillerName] = new HatchFiller(helper);
          }
          break;

         case "dots":
          if (!fillers[fillerName]) {
            fillers[fillerName] = new DotFiller(helper);
          }
          break;

         case "dashed":
          if (!fillers[fillerName]) {
            fillers[fillerName] = new DashedFiller(helper);
          }
          break;

         case "zigzag-line":
          if (!fillers[fillerName]) {
            fillers[fillerName] = new ZigZagLineFiller(helper);
          }
          break;

         case "hachure":
         default:
          fillerName = "hachure";
          if (!fillers[fillerName]) {
            fillers[fillerName] = new HachureFiller(helper);
          }
          break;
        }
      }
      return fillers[fillerName];
    }
    // ./node_modules/roughjs/bin/math.js
    function randomSeed() {
      return Math.floor(Math.random() * 2 ** 31);
    }
    class Random {
      constructor(seed) {
        this.seed = seed;
      }
      next() {
        if (this.seed) {
          return (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
        } else {
          return Math.random();
        }
      }
    }
    // ./node_modules/path-data-parser/lib/parser.js
    const COMMAND = 0;
    const NUMBER = 1;
    const EOD = 2;
    const PARAMS = {
      A: 7,
      a: 7,
      C: 6,
      c: 6,
      H: 1,
      h: 1,
      L: 2,
      l: 2,
      M: 2,
      m: 2,
      Q: 4,
      q: 4,
      S: 4,
      s: 4,
      T: 2,
      t: 2,
      V: 1,
      v: 1,
      Z: 0,
      z: 0
    };
    function tokenize(d) {
      const tokens = new Array;
      while (d !== "") {
        if (d.match(/^([ \t\r\n,]+)/)) {
          d = d.substr(RegExp.$1.length);
        } else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
          tokens[tokens.length] = {
            type: COMMAND,
            text: RegExp.$1
          };
          d = d.substr(RegExp.$1.length);
        } else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
          tokens[tokens.length] = {
            type: NUMBER,
            text: `${parseFloat(RegExp.$1)}`
          };
          d = d.substr(RegExp.$1.length);
        } else {
          return [];
        }
      }
      tokens[tokens.length] = {
        type: EOD,
        text: ""
      };
      return tokens;
    }
    function isType(token, type) {
      return token.type === type;
    }
    function parsePath(d) {
      const segments = [];
      const tokens = tokenize(d);
      let mode = "BOD";
      let index = 0;
      let token = tokens[index];
      while (!isType(token, EOD)) {
        let paramsCount = 0;
        const params = [];
        if (mode === "BOD") {
          if (token.text === "M" || token.text === "m") {
            index++;
            paramsCount = PARAMS[token.text];
            mode = token.text;
          } else {
            return parsePath("M0,0" + d);
          }
        } else if (isType(token, NUMBER)) {
          paramsCount = PARAMS[mode];
        } else {
          index++;
          paramsCount = PARAMS[token.text];
          mode = token.text;
        }
        if (index + paramsCount < tokens.length) {
          for (let i = index; i < index + paramsCount; i++) {
            const numbeToken = tokens[i];
            if (isType(numbeToken, NUMBER)) {
              params[params.length] = +numbeToken.text;
            } else {
              throw new Error("Param not a number: " + mode + "," + numbeToken.text);
            }
          }
          if (typeof PARAMS[mode] === "number") {
            const segment = {
              key: mode,
              data: params
            };
            segments.push(segment);
            index += paramsCount;
            token = tokens[index];
            if (mode === "M") mode = "L";
            if (mode === "m") mode = "l";
          } else {
            throw new Error("Bad segment: " + mode);
          }
        } else {
          throw new Error("Path data ended short");
        }
      }
      return segments;
    }
    function serialize(segments) {
      const tokens = [];
      for (const {key, data} of segments) {
        tokens.push(key);
        switch (key) {
         case "C":
         case "c":
          tokens.push(data[0], `${data[1]},`, data[2], `${data[3]},`, data[4], data[5]);
          break;

         case "S":
         case "s":
         case "Q":
         case "q":
          tokens.push(data[0], `${data[1]},`, data[2], data[3]);
          break;

         default:
          tokens.push(...data);
          break;
        }
      }
      return tokens.join(" ");
    }
    // ./node_modules/path-data-parser/lib/absolutize.js
    // Translate relative commands to absolute commands
    function absolutize(segments) {
      let cx = 0, cy = 0;
      let subx = 0, suby = 0;
      const out = [];
      for (const {key, data} of segments) {
        switch (key) {
         case "M":
          out.push({
            key: "M",
            data: [ ...data ]
          });
          [cx, cy] = data;
          [subx, suby] = data;
          break;

         case "m":
          cx += data[0];
          cy += data[1];
          out.push({
            key: "M",
            data: [ cx, cy ]
          });
          subx = cx;
          suby = cy;
          break;

         case "L":
          out.push({
            key: "L",
            data: [ ...data ]
          });
          [cx, cy] = data;
          break;

         case "l":
          cx += data[0];
          cy += data[1];
          out.push({
            key: "L",
            data: [ cx, cy ]
          });
          break;

         case "C":
          out.push({
            key: "C",
            data: [ ...data ]
          });
          cx = data[4];
          cy = data[5];
          break;

         case "c":
          {
            const newdata = data.map(((d, i) => i % 2 ? d + cy : d + cx));
            out.push({
              key: "C",
              data: newdata
            });
            cx = newdata[4];
            cy = newdata[5];
            break;
          }

         case "Q":
          out.push({
            key: "Q",
            data: [ ...data ]
          });
          cx = data[2];
          cy = data[3];
          break;

         case "q":
          {
            const newdata = data.map(((d, i) => i % 2 ? d + cy : d + cx));
            out.push({
              key: "Q",
              data: newdata
            });
            cx = newdata[2];
            cy = newdata[3];
            break;
          }

         case "A":
          out.push({
            key: "A",
            data: [ ...data ]
          });
          cx = data[5];
          cy = data[6];
          break;

         case "a":
          cx += data[5];
          cy += data[6];
          out.push({
            key: "A",
            data: [ data[0], data[1], data[2], data[3], data[4], cx, cy ]
          });
          break;

         case "H":
          out.push({
            key: "H",
            data: [ ...data ]
          });
          cx = data[0];
          break;

         case "h":
          cx += data[0];
          out.push({
            key: "H",
            data: [ cx ]
          });
          break;

         case "V":
          out.push({
            key: "V",
            data: [ ...data ]
          });
          cy = data[0];
          break;

         case "v":
          cy += data[0];
          out.push({
            key: "V",
            data: [ cy ]
          });
          break;

         case "S":
          out.push({
            key: "S",
            data: [ ...data ]
          });
          cx = data[2];
          cy = data[3];
          break;

         case "s":
          {
            const newdata = data.map(((d, i) => i % 2 ? d + cy : d + cx));
            out.push({
              key: "S",
              data: newdata
            });
            cx = newdata[2];
            cy = newdata[3];
            break;
          }

         case "T":
          out.push({
            key: "T",
            data: [ ...data ]
          });
          cx = data[0];
          cy = data[1];
          break;

         case "t":
          cx += data[0];
          cy += data[1];
          out.push({
            key: "T",
            data: [ cx, cy ]
          });
          break;

         case "Z":
         case "z":
          out.push({
            key: "Z",
            data: []
          });
          cx = subx;
          cy = suby;
          break;
        }
      }
      return out;
    }
    // ./node_modules/path-data-parser/lib/normalize.js
    // Normalize path to include only M, L, C, and Z commands
    function normalize(segments) {
      const out = [];
      let lastType = "";
      let cx = 0, cy = 0;
      let subx = 0, suby = 0;
      let lcx = 0, lcy = 0;
      for (const {key, data} of segments) {
        switch (key) {
         case "M":
          out.push({
            key: "M",
            data: [ ...data ]
          });
          [cx, cy] = data;
          [subx, suby] = data;
          break;

         case "C":
          out.push({
            key: "C",
            data: [ ...data ]
          });
          cx = data[4];
          cy = data[5];
          lcx = data[2];
          lcy = data[3];
          break;

         case "L":
          out.push({
            key: "L",
            data: [ ...data ]
          });
          [cx, cy] = data;
          break;

         case "H":
          cx = data[0];
          out.push({
            key: "L",
            data: [ cx, cy ]
          });
          break;

         case "V":
          cy = data[0];
          out.push({
            key: "L",
            data: [ cx, cy ]
          });
          break;

         case "S":
          {
            let cx1 = 0, cy1 = 0;
            if (lastType === "C" || lastType === "S") {
              cx1 = cx + (cx - lcx);
              cy1 = cy + (cy - lcy);
            } else {
              cx1 = cx;
              cy1 = cy;
            }
            out.push({
              key: "C",
              data: [ cx1, cy1, ...data ]
            });
            lcx = data[0];
            lcy = data[1];
            cx = data[2];
            cy = data[3];
            break;
          }

         case "T":
          {
            const [x, y] = data;
            let x1 = 0, y1 = 0;
            if (lastType === "Q" || lastType === "T") {
              x1 = cx + (cx - lcx);
              y1 = cy + (cy - lcy);
            } else {
              x1 = cx;
              y1 = cy;
            }
            const cx1 = cx + 2 * (x1 - cx) / 3;
            const cy1 = cy + 2 * (y1 - cy) / 3;
            const cx2 = x + 2 * (x1 - x) / 3;
            const cy2 = y + 2 * (y1 - y) / 3;
            out.push({
              key: "C",
              data: [ cx1, cy1, cx2, cy2, x, y ]
            });
            lcx = x1;
            lcy = y1;
            cx = x;
            cy = y;
            break;
          }

         case "Q":
          {
            const [x1, y1, x, y] = data;
            const cx1 = cx + 2 * (x1 - cx) / 3;
            const cy1 = cy + 2 * (y1 - cy) / 3;
            const cx2 = x + 2 * (x1 - x) / 3;
            const cy2 = y + 2 * (y1 - y) / 3;
            out.push({
              key: "C",
              data: [ cx1, cy1, cx2, cy2, x, y ]
            });
            lcx = x1;
            lcy = y1;
            cx = x;
            cy = y;
            break;
          }

         case "A":
          {
            const r1 = Math.abs(data[0]);
            const r2 = Math.abs(data[1]);
            const angle = data[2];
            const largeArcFlag = data[3];
            const sweepFlag = data[4];
            const x = data[5];
            const y = data[6];
            if (r1 === 0 || r2 === 0) {
              out.push({
                key: "C",
                data: [ cx, cy, x, y, x, y ]
              });
              cx = x;
              cy = y;
            } else {
              if (cx !== x || cy !== y) {
                const curves = arcToCubicCurves(cx, cy, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
                curves.forEach((function(curve) {
                  out.push({
                    key: "C",
                    data: curve
                  });
                }));
                cx = x;
                cy = y;
              }
            }
            break;
          }

         case "Z":
          out.push({
            key: "Z",
            data: []
          });
          cx = subx;
          cy = suby;
          break;
        }
        lastType = key;
      }
      return out;
    }
    function degToRad(degrees) {
      return Math.PI * degrees / 180;
    }
    function rotate(x, y, angleRad) {
      const X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
      const Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
      return [ X, Y ];
    }
    function arcToCubicCurves(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, recursive) {
      const angleRad = degToRad(angle);
      let params = [];
      let f1 = 0, f2 = 0, cx = 0, cy = 0;
      if (recursive) {
        [f1, f2, cx, cy] = recursive;
      } else {
        [x1, y1] = rotate(x1, y1, -angleRad);
        [x2, y2] = rotate(x2, y2, -angleRad);
        const x = (x1 - x2) / 2;
        const y = (y1 - y2) / 2;
        let h = x * x / (r1 * r1) + y * y / (r2 * r2);
        if (h > 1) {
          h = Math.sqrt(h);
          r1 = h * r1;
          r2 = h * r2;
        }
        const sign = largeArcFlag === sweepFlag ? -1 : 1;
        const r1Pow = r1 * r1;
        const r2Pow = r2 * r2;
        const left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
        const right = r1Pow * y * y + r2Pow * x * x;
        const k = sign * Math.sqrt(Math.abs(left / right));
        cx = k * r1 * y / r2 + (x1 + x2) / 2;
        cy = k * -r2 * x / r1 + (y1 + y2) / 2;
        f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
        f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));
        if (x1 < cx) {
          f1 = Math.PI - f1;
        }
        if (x2 < cx) {
          f2 = Math.PI - f2;
        }
        if (f1 < 0) {
          f1 = Math.PI * 2 + f1;
        }
        if (f2 < 0) {
          f2 = Math.PI * 2 + f2;
        }
        if (sweepFlag && f1 > f2) {
          f1 = f1 - Math.PI * 2;
        }
        if (!sweepFlag && f2 > f1) {
          f2 = f2 - Math.PI * 2;
        }
      }
      let df = f2 - f1;
      if (Math.abs(df) > Math.PI * 120 / 180) {
        const f2old = f2;
        const x2old = x2;
        const y2old = y2;
        if (sweepFlag && f2 > f1) {
          f2 = f1 + Math.PI * 120 / 180 * 1;
        } else {
          f2 = f1 + Math.PI * 120 / 180 * -1;
        }
        x2 = cx + r1 * Math.cos(f2);
        y2 = cy + r2 * Math.sin(f2);
        params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [ f2, f2old, cx, cy ]);
      }
      df = f2 - f1;
      const c1 = Math.cos(f1);
      const s1 = Math.sin(f1);
      const c2 = Math.cos(f2);
      const s2 = Math.sin(f2);
      const t = Math.tan(df / 4);
      const hx = 4 / 3 * r1 * t;
      const hy = 4 / 3 * r2 * t;
      const m1 = [ x1, y1 ];
      const m2 = [ x1 + hx * s1, y1 - hy * c1 ];
      const m3 = [ x2 + hx * s2, y2 - hy * c2 ];
      const m4 = [ x2, y2 ];
      m2[0] = 2 * m1[0] - m2[0];
      m2[1] = 2 * m1[1] - m2[1];
      if (recursive) {
        return [ m2, m3, m4 ].concat(params);
      } else {
        params = [ m2, m3, m4 ].concat(params);
        const curves = [];
        for (let i = 0; i < params.length; i += 3) {
          const r1 = rotate(params[i][0], params[i][1], angleRad);
          const r2 = rotate(params[i + 1][0], params[i + 1][1], angleRad);
          const r3 = rotate(params[i + 2][0], params[i + 2][1], angleRad);
          curves.push([ r1[0], r1[1], r2[0], r2[1], r3[0], r3[1] ]);
        }
        return curves;
      }
    }
    // ./node_modules/roughjs/bin/renderer.js
    const helper = {
      randOffset,
      randOffsetWithRange,
      ellipse,
      doubleLineOps: doubleLineFillOps
    };
    function line(x1, y1, x2, y2, o) {
      return {
        type: "path",
        ops: _doubleLine(x1, y1, x2, y2, o)
      };
    }
    function linearPath(points, close, o) {
      const len = (points || []).length;
      if (len > 2) {
        const ops = [];
        for (let i = 0; i < len - 1; i++) {
          ops.push(..._doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
        }
        if (close) {
          ops.push(..._doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
        }
        return {
          type: "path",
          ops
        };
      } else if (len === 2) {
        return line(points[0][0], points[0][1], points[1][0], points[1][1], o);
      }
      return {
        type: "path",
        ops: []
      };
    }
    function polygon(points, o) {
      return linearPath(points, true, o);
    }
    function rectangle(x, y, width, height, o) {
      const points = [ [ x, y ], [ x + width, y ], [ x + width, y + height ], [ x, y + height ] ];
      return polygon(points, o);
    }
    function curve(inputPoints, o) {
      if (inputPoints.length) {
        const p1 = inputPoints[0];
        const pointsList = typeof p1[0] === "number" ? [ inputPoints ] : inputPoints;
        const o1 = _curveWithOffset(pointsList[0], 1 * (1 + o.roughness * .2), o);
        const o2 = o.disableMultiStroke ? [] : _curveWithOffset(pointsList[0], 1.5 * (1 + o.roughness * .22), cloneOptionsAlterSeed(o));
        for (let i = 1; i < pointsList.length; i++) {
          const points = pointsList[i];
          if (points.length) {
            const underlay = _curveWithOffset(points, 1 * (1 + o.roughness * .2), o);
            const overlay = o.disableMultiStroke ? [] : _curveWithOffset(points, 1.5 * (1 + o.roughness * .22), cloneOptionsAlterSeed(o));
            for (const item of underlay) {
              if (item.op !== "move") {
                o1.push(item);
              }
            }
            for (const item of overlay) {
              if (item.op !== "move") {
                o2.push(item);
              }
            }
          }
        }
        return {
          type: "path",
          ops: o1.concat(o2)
        };
      }
      return {
        type: "path",
        ops: []
      };
    }
    function ellipse(x, y, width, height, o) {
      const params = generateEllipseParams(width, height, o);
      return ellipseWithParams(x, y, o, params).opset;
    }
    function generateEllipseParams(width, height, o) {
      const psq = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) / 2));
      const stepCount = Math.ceil(Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * psq));
      const increment = Math.PI * 2 / stepCount;
      let rx = Math.abs(width / 2);
      let ry = Math.abs(height / 2);
      const curveFitRandomness = 1 - o.curveFitting;
      rx += _offsetOpt(rx * curveFitRandomness, o);
      ry += _offsetOpt(ry * curveFitRandomness, o);
      return {
        increment,
        rx,
        ry
      };
    }
    function ellipseWithParams(x, y, o, ellipseParams) {
      const [ap1, cp1] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1, ellipseParams.increment * _offset(.1, _offset(.4, 1, o), o), o);
      let o1 = _curve(ap1, null, o);
      if (!o.disableMultiStroke && o.roughness !== 0) {
        const [ap2] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1.5, 0, o);
        const o2 = _curve(ap2, null, o);
        o1 = o1.concat(o2);
      }
      return {
        estimatedPoints: cp1,
        opset: {
          type: "path",
          ops: o1
        }
      };
    }
    function arc(x, y, width, height, start, stop, closed, roughClosure, o) {
      const cx = x;
      const cy = y;
      let rx = Math.abs(width / 2);
      let ry = Math.abs(height / 2);
      rx += _offsetOpt(rx * .01, o);
      ry += _offsetOpt(ry * .01, o);
      let strt = start;
      let stp = stop;
      while (strt < 0) {
        strt += Math.PI * 2;
        stp += Math.PI * 2;
      }
      if (stp - strt > Math.PI * 2) {
        strt = 0;
        stp = Math.PI * 2;
      }
      const ellipseInc = Math.PI * 2 / o.curveStepCount;
      const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
      const ops = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
      if (!o.disableMultiStroke) {
        const o2 = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
        ops.push(...o2);
      }
      if (closed) {
        if (roughClosure) {
          ops.push(..._doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o), ..._doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
        } else {
          ops.push({
            op: "lineTo",
            data: [ cx, cy ]
          }, {
            op: "lineTo",
            data: [ cx + rx * Math.cos(strt), cy + ry * Math.sin(strt) ]
          });
        }
      }
      return {
        type: "path",
        ops
      };
    }
    function svgPath(path, o) {
      const segments = normalize(absolutize(parsePath(path)));
      const ops = [];
      let first = [ 0, 0 ];
      let current = [ 0, 0 ];
      for (const {key, data} of segments) {
        switch (key) {
         case "M":
          {
            current = [ data[0], data[1] ];
            first = [ data[0], data[1] ];
            break;
          }

         case "L":
          ops.push(..._doubleLine(current[0], current[1], data[0], data[1], o));
          current = [ data[0], data[1] ];
          break;

         case "C":
          {
            const [x1, y1, x2, y2, x, y] = data;
            ops.push(..._bezierTo(x1, y1, x2, y2, x, y, current, o));
            current = [ x, y ];
            break;
          }

         case "Z":
          ops.push(..._doubleLine(current[0], current[1], first[0], first[1], o));
          current = [ first[0], first[1] ];
          break;
        }
      }
      return {
        type: "path",
        ops
      };
    }
    // Fills
        function solidFillPolygon(polygonList, o) {
      const ops = [];
      for (const points of polygonList) {
        if (points.length) {
          const offset = o.maxRandomnessOffset || 0;
          const len = points.length;
          if (len > 2) {
            ops.push({
              op: "move",
              data: [ points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o) ]
            });
            for (let i = 1; i < len; i++) {
              ops.push({
                op: "lineTo",
                data: [ points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o) ]
              });
            }
          }
        }
      }
      return {
        type: "fillPath",
        ops
      };
    }
    function patternFillPolygons(polygonList, o) {
      return getFiller(o, helper).fillPolygons(polygonList, o);
    }
    function patternFillArc(x, y, width, height, start, stop, o) {
      const cx = x;
      const cy = y;
      let rx = Math.abs(width / 2);
      let ry = Math.abs(height / 2);
      rx += _offsetOpt(rx * .01, o);
      ry += _offsetOpt(ry * .01, o);
      let strt = start;
      let stp = stop;
      while (strt < 0) {
        strt += Math.PI * 2;
        stp += Math.PI * 2;
      }
      if (stp - strt > Math.PI * 2) {
        strt = 0;
        stp = Math.PI * 2;
      }
      const increment = (stp - strt) / o.curveStepCount;
      const points = [];
      for (let angle = strt; angle <= stp; angle = angle + increment) {
        points.push([ cx + rx * Math.cos(angle), cy + ry * Math.sin(angle) ]);
      }
      points.push([ cx + rx * Math.cos(stp), cy + ry * Math.sin(stp) ]);
      points.push([ cx, cy ]);
      return patternFillPolygons([ points ], o);
    }
    function randOffset(x, o) {
      return _offsetOpt(x, o);
    }
    function randOffsetWithRange(min, max, o) {
      return _offset(min, max, o);
    }
    function doubleLineFillOps(x1, y1, x2, y2, o) {
      return _doubleLine(x1, y1, x2, y2, o, true);
    }
    // Private helpers
        function cloneOptionsAlterSeed(ops) {
      const result = Object.assign({}, ops);
      result.randomizer = undefined;
      if (ops.seed) {
        result.seed = ops.seed + 1;
      }
      return result;
    }
    function random(ops) {
      if (!ops.randomizer) {
        ops.randomizer = new Random(ops.seed || 0);
      }
      return ops.randomizer.next();
    }
    function _offset(min, max, ops, roughnessGain = 1) {
      return ops.roughness * roughnessGain * (random(ops) * (max - min) + min);
    }
    function _offsetOpt(x, ops, roughnessGain = 1) {
      return _offset(-x, x, ops, roughnessGain);
    }
    function _doubleLine(x1, y1, x2, y2, o, filling = false) {
      const singleStroke = filling ? o.disableMultiStrokeFill : o.disableMultiStroke;
      const o1 = _line(x1, y1, x2, y2, o, true, false);
      if (singleStroke) {
        return o1;
      }
      const o2 = _line(x1, y1, x2, y2, o, true, true);
      return o1.concat(o2);
    }
    function _line(x1, y1, x2, y2, o, move, overlay) {
      const lengthSq = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
      const length = Math.sqrt(lengthSq);
      let roughnessGain = 1;
      if (length < 200) {
        roughnessGain = 1;
      } else if (length > 500) {
        roughnessGain = .4;
      } else {
        roughnessGain = -.0016668 * length + 1.233334;
      }
      let offset = o.maxRandomnessOffset || 0;
      if (offset * offset * 100 > lengthSq) {
        offset = length / 10;
      }
      const halfOffset = offset / 2;
      const divergePoint = .2 + random(o) * .2;
      let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
      let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
      midDispX = _offsetOpt(midDispX, o, roughnessGain);
      midDispY = _offsetOpt(midDispY, o, roughnessGain);
      const ops = [];
      const randomHalf = () => _offsetOpt(halfOffset, o, roughnessGain);
      const randomFull = () => _offsetOpt(offset, o, roughnessGain);
      const preserveVertices = o.preserveVertices;
      if (move) {
        if (overlay) {
          ops.push({
            op: "move",
            data: [ x1 + (preserveVertices ? 0 : randomHalf()), y1 + (preserveVertices ? 0 : randomHalf()) ]
          });
        } else {
          ops.push({
            op: "move",
            data: [ x1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain)), y1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain)) ]
          });
        }
      }
      if (overlay) {
        ops.push({
          op: "bcurveTo",
          data: [ midDispX + x1 + (x2 - x1) * divergePoint + randomHalf(), midDispY + y1 + (y2 - y1) * divergePoint + randomHalf(), midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomHalf(), midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomHalf(), x2 + (preserveVertices ? 0 : randomHalf()), y2 + (preserveVertices ? 0 : randomHalf()) ]
        });
      } else {
        ops.push({
          op: "bcurveTo",
          data: [ midDispX + x1 + (x2 - x1) * divergePoint + randomFull(), midDispY + y1 + (y2 - y1) * divergePoint + randomFull(), midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomFull(), midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomFull(), x2 + (preserveVertices ? 0 : randomFull()), y2 + (preserveVertices ? 0 : randomFull()) ]
        });
      }
      return ops;
    }
    function _curveWithOffset(points, offset, o) {
      if (!points.length) {
        return [];
      }
      const ps = [];
      ps.push([ points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o) ]);
      ps.push([ points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o) ]);
      for (let i = 1; i < points.length; i++) {
        ps.push([ points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o) ]);
        if (i === points.length - 1) {
          ps.push([ points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o) ]);
        }
      }
      return _curve(ps, null, o);
    }
    function _curve(points, closePoint, o) {
      const len = points.length;
      const ops = [];
      if (len > 3) {
        const b = [];
        const s = 1 - o.curveTightness;
        ops.push({
          op: "move",
          data: [ points[1][0], points[1][1] ]
        });
        for (let i = 1; i + 2 < len; i++) {
          const cachedVertArray = points[i];
          b[0] = [ cachedVertArray[0], cachedVertArray[1] ];
          b[1] = [ cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6 ];
          b[2] = [ points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6 ];
          b[3] = [ points[i + 1][0], points[i + 1][1] ];
          ops.push({
            op: "bcurveTo",
            data: [ b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1] ]
          });
        }
        if (closePoint && closePoint.length === 2) {
          const ro = o.maxRandomnessOffset;
          ops.push({
            op: "lineTo",
            data: [ closePoint[0] + _offsetOpt(ro, o), closePoint[1] + _offsetOpt(ro, o) ]
          });
        }
      } else if (len === 3) {
        ops.push({
          op: "move",
          data: [ points[1][0], points[1][1] ]
        });
        ops.push({
          op: "bcurveTo",
          data: [ points[1][0], points[1][1], points[2][0], points[2][1], points[2][0], points[2][1] ]
        });
      } else if (len === 2) {
        ops.push(..._line(points[0][0], points[0][1], points[1][0], points[1][1], o, true, true));
      }
      return ops;
    }
    function _computeEllipsePoints(increment, cx, cy, rx, ry, offset, overlap, o) {
      const coreOnly = o.roughness === 0;
      const corePoints = [];
      const allPoints = [];
      if (coreOnly) {
        increment = increment / 4;
        allPoints.push([ cx + rx * Math.cos(-increment), cy + ry * Math.sin(-increment) ]);
        for (let angle = 0; angle <= Math.PI * 2; angle = angle + increment) {
          const p = [ cx + rx * Math.cos(angle), cy + ry * Math.sin(angle) ];
          corePoints.push(p);
          allPoints.push(p);
        }
        allPoints.push([ cx + rx * Math.cos(0), cy + ry * Math.sin(0) ]);
        allPoints.push([ cx + rx * Math.cos(increment), cy + ry * Math.sin(increment) ]);
      } else {
        const radOffset = _offsetOpt(.5, o) - Math.PI / 2;
        allPoints.push([ _offsetOpt(offset, o) + cx + .9 * rx * Math.cos(radOffset - increment), _offsetOpt(offset, o) + cy + .9 * ry * Math.sin(radOffset - increment) ]);
        const endAngle = Math.PI * 2 + radOffset - .01;
        for (let angle = radOffset; angle < endAngle; angle = angle + increment) {
          const p = [ _offsetOpt(offset, o) + cx + rx * Math.cos(angle), _offsetOpt(offset, o) + cy + ry * Math.sin(angle) ];
          corePoints.push(p);
          allPoints.push(p);
        }
        allPoints.push([ _offsetOpt(offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * .5), _offsetOpt(offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * .5) ]);
        allPoints.push([ _offsetOpt(offset, o) + cx + .98 * rx * Math.cos(radOffset + overlap), _offsetOpt(offset, o) + cy + .98 * ry * Math.sin(radOffset + overlap) ]);
        allPoints.push([ _offsetOpt(offset, o) + cx + .9 * rx * Math.cos(radOffset + overlap * .5), _offsetOpt(offset, o) + cy + .9 * ry * Math.sin(radOffset + overlap * .5) ]);
      }
      return [ allPoints, corePoints ];
    }
    function _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
      const radOffset = strt + _offsetOpt(.1, o);
      const points = [];
      points.push([ _offsetOpt(offset, o) + cx + .9 * rx * Math.cos(radOffset - increment), _offsetOpt(offset, o) + cy + .9 * ry * Math.sin(radOffset - increment) ]);
      for (let angle = radOffset; angle <= stp; angle = angle + increment) {
        points.push([ _offsetOpt(offset, o) + cx + rx * Math.cos(angle), _offsetOpt(offset, o) + cy + ry * Math.sin(angle) ]);
      }
      points.push([ cx + rx * Math.cos(stp), cy + ry * Math.sin(stp) ]);
      points.push([ cx + rx * Math.cos(stp), cy + ry * Math.sin(stp) ]);
      return _curve(points, null, o);
    }
    function _bezierTo(x1, y1, x2, y2, x, y, current, o) {
      const ops = [];
      const ros = [ o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + .3 ];
      let f = [ 0, 0 ];
      const iterations = o.disableMultiStroke ? 1 : 2;
      const preserveVertices = o.preserveVertices;
      for (let i = 0; i < iterations; i++) {
        if (i === 0) {
          ops.push({
            op: "move",
            data: [ current[0], current[1] ]
          });
        } else {
          ops.push({
            op: "move",
            data: [ current[0] + (preserveVertices ? 0 : _offsetOpt(ros[0], o)), current[1] + (preserveVertices ? 0 : _offsetOpt(ros[0], o)) ]
          });
        }
        f = preserveVertices ? [ x, y ] : [ x + _offsetOpt(ros[i], o), y + _offsetOpt(ros[i], o) ];
        ops.push({
          op: "bcurveTo",
          data: [ x1 + _offsetOpt(ros[i], o), y1 + _offsetOpt(ros[i], o), x2 + _offsetOpt(ros[i], o), y2 + _offsetOpt(ros[i], o), f[0], f[1] ]
        });
      }
      return ops;
    }
    // ./node_modules/points-on-curve/lib/curve-to-bezier.js
    function clone(p) {
      return [ ...p ];
    }
    function curveToBezier(pointsIn, curveTightness = 0) {
      const len = pointsIn.length;
      if (len < 3) {
        throw new Error("A curve must have at least three points.");
      }
      const out = [];
      if (len === 3) {
        out.push(clone(pointsIn[0]), clone(pointsIn[1]), clone(pointsIn[2]), clone(pointsIn[2]));
      } else {
        const points = [];
        points.push(pointsIn[0], pointsIn[0]);
        for (let i = 1; i < pointsIn.length; i++) {
          points.push(pointsIn[i]);
          if (i === pointsIn.length - 1) {
            points.push(pointsIn[i]);
          }
        }
        const b = [];
        const s = 1 - curveTightness;
        out.push(clone(points[0]));
        for (let i = 1; i + 2 < points.length; i++) {
          const cachedVertArray = points[i];
          b[0] = [ cachedVertArray[0], cachedVertArray[1] ];
          b[1] = [ cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6 ];
          b[2] = [ points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6 ];
          b[3] = [ points[i + 1][0], points[i + 1][1] ];
          out.push(b[1], b[2], b[3]);
        }
      }
      return out;
    }
    // ./node_modules/points-on-curve/lib/index.js
    // distance between 2 points
    function distance(p1, p2) {
      return Math.sqrt(distanceSq(p1, p2));
    }
    // distance between 2 points squared
        function distanceSq(p1, p2) {
      return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
    }
    // Sistance squared from a point p to the line segment vw
        function distanceToSegmentSq(p, v, w) {
      const l2 = distanceSq(v, w);
      if (l2 === 0) {
        return distanceSq(p, v);
      }
      let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
      t = Math.max(0, Math.min(1, t));
      return distanceSq(p, lerp(v, w, t));
    }
    function lerp(a, b, t) {
      return [ a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t ];
    }
    // Adapted from https://seant23.wordpress.com/2010/11/12/offset-bezier-curves/
        function flatness(points, offset) {
      const p1 = points[offset + 0];
      const p2 = points[offset + 1];
      const p3 = points[offset + 2];
      const p4 = points[offset + 3];
      let ux = 3 * p2[0] - 2 * p1[0] - p4[0];
      ux *= ux;
      let uy = 3 * p2[1] - 2 * p1[1] - p4[1];
      uy *= uy;
      let vx = 3 * p3[0] - 2 * p4[0] - p1[0];
      vx *= vx;
      let vy = 3 * p3[1] - 2 * p4[1] - p1[1];
      vy *= vy;
      if (ux < vx) {
        ux = vx;
      }
      if (uy < vy) {
        uy = vy;
      }
      return ux + uy;
    }
    function getPointsOnBezierCurveWithSplitting(points, offset, tolerance, newPoints) {
      const outPoints = newPoints || [];
      if (flatness(points, offset) < tolerance) {
        const p0 = points[offset + 0];
        if (outPoints.length) {
          const d = distance(outPoints[outPoints.length - 1], p0);
          if (d > 1) {
            outPoints.push(p0);
          }
        } else {
          outPoints.push(p0);
        }
        outPoints.push(points[offset + 3]);
      } else {
        // subdivide
        const t = .5;
        const p1 = points[offset + 0];
        const p2 = points[offset + 1];
        const p3 = points[offset + 2];
        const p4 = points[offset + 3];
        const q1 = lerp(p1, p2, t);
        const q2 = lerp(p2, p3, t);
        const q3 = lerp(p3, p4, t);
        const r1 = lerp(q1, q2, t);
        const r2 = lerp(q2, q3, t);
        const red = lerp(r1, r2, t);
        getPointsOnBezierCurveWithSplitting([ p1, q1, r1, red ], 0, tolerance, outPoints);
        getPointsOnBezierCurveWithSplitting([ red, r2, q3, p4 ], 0, tolerance, outPoints);
      }
      return outPoints;
    }
    function simplify(points, distance) {
      return simplifyPoints(points, 0, points.length, distance);
    }
    // Ramer–Douglas–Peucker algorithm
    // https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm
        function simplifyPoints(points, start, end, epsilon, newPoints) {
      const outPoints = newPoints || [];
      // find the most distance point from the endpoints
            const s = points[start];
      const e = points[end - 1];
      let maxDistSq = 0;
      let maxNdx = 1;
      for (let i = start + 1; i < end - 1; ++i) {
        const distSq = distanceToSegmentSq(points[i], s, e);
        if (distSq > maxDistSq) {
          maxDistSq = distSq;
          maxNdx = i;
        }
      }
      // if that point is too far, split
            if (Math.sqrt(maxDistSq) > epsilon) {
        simplifyPoints(points, start, maxNdx + 1, epsilon, outPoints);
        simplifyPoints(points, maxNdx, end, epsilon, outPoints);
      } else {
        if (!outPoints.length) {
          outPoints.push(s);
        }
        outPoints.push(e);
      }
      return outPoints;
    }
    function pointsOnBezierCurves(points, tolerance = .15, distance) {
      const newPoints = [];
      const numSegments = (points.length - 1) / 3;
      for (let i = 0; i < numSegments; i++) {
        const offset = i * 3;
        getPointsOnBezierCurveWithSplitting(points, offset, tolerance, newPoints);
      }
      if (distance && distance > 0) {
        return simplifyPoints(newPoints, 0, newPoints.length, distance);
      }
      return newPoints;
    }
    // ./node_modules/points-on-path/lib/index.js
    function pointsOnPath(path, tolerance, distance) {
      const segments = parsePath(path);
      const normalized = normalize(absolutize(segments));
      const sets = [];
      let currentPoints = [];
      let start = [ 0, 0 ];
      let pendingCurve = [];
      const appendPendingCurve = () => {
        if (pendingCurve.length >= 4) {
          currentPoints.push(...pointsOnBezierCurves(pendingCurve, tolerance));
        }
        pendingCurve = [];
      };
      const appendPendingPoints = () => {
        appendPendingCurve();
        if (currentPoints.length) {
          sets.push(currentPoints);
          currentPoints = [];
        }
      };
      for (const {key, data} of normalized) {
        switch (key) {
         case "M":
          appendPendingPoints();
          start = [ data[0], data[1] ];
          currentPoints.push(start);
          break;

         case "L":
          appendPendingCurve();
          currentPoints.push([ data[0], data[1] ]);
          break;

         case "C":
          if (!pendingCurve.length) {
            const lastPoint = currentPoints.length ? currentPoints[currentPoints.length - 1] : start;
            pendingCurve.push([ lastPoint[0], lastPoint[1] ]);
          }
          pendingCurve.push([ data[0], data[1] ]);
          pendingCurve.push([ data[2], data[3] ]);
          pendingCurve.push([ data[4], data[5] ]);
          break;

         case "Z":
          appendPendingCurve();
          currentPoints.push([ start[0], start[1] ]);
          break;
        }
      }
      appendPendingPoints();
      if (!distance) {
        return sets;
      }
      const out = [];
      for (const set of sets) {
        const simplifiedSet = simplify(set, distance);
        if (simplifiedSet.length) {
          out.push(simplifiedSet);
        }
      }
      return out;
    }
    // ./node_modules/roughjs/bin/generator.js
    const NOS = "none";
    class RoughGenerator {
      constructor(config) {
        this.defaultOptions = {
          maxRandomnessOffset: 2,
          roughness: 1,
          bowing: 1,
          stroke: "#000",
          strokeWidth: 1,
          curveTightness: 0,
          curveFitting: .95,
          curveStepCount: 9,
          fillStyle: "hachure",
          fillWeight: -1,
          hachureAngle: -41,
          hachureGap: -1,
          dashOffset: -1,
          dashGap: -1,
          zigzagOffset: -1,
          seed: 0,
          disableMultiStroke: false,
          disableMultiStrokeFill: false,
          preserveVertices: false,
          fillShapeRoughnessGain: .8
        };
        this.config = config || {};
        if (this.config.options) {
          this.defaultOptions = this._o(this.config.options);
        }
      }
      static newSeed() {
        return randomSeed();
      }
      _o(options) {
        return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
      }
      _d(shape, sets, options) {
        return {
          shape,
          sets: sets || [],
          options: options || this.defaultOptions
        };
      }
      line(x1, y1, x2, y2, options) {
        const o = this._o(options);
        return this._d("line", [ line(x1, y1, x2, y2, o) ], o);
      }
      rectangle(x, y, width, height, options) {
        const o = this._o(options);
        const paths = [];
        const outline = rectangle(x, y, width, height, o);
        if (o.fill) {
          const points = [ [ x, y ], [ x + width, y ], [ x + width, y + height ], [ x, y + height ] ];
          if (o.fillStyle === "solid") {
            paths.push(solidFillPolygon([ points ], o));
          } else {
            paths.push(patternFillPolygons([ points ], o));
          }
        }
        if (o.stroke !== NOS) {
          paths.push(outline);
        }
        return this._d("rectangle", paths, o);
      }
      ellipse(x, y, width, height, options) {
        const o = this._o(options);
        const paths = [];
        const ellipseParams = generateEllipseParams(width, height, o);
        const ellipseResponse = ellipseWithParams(x, y, o, ellipseParams);
        if (o.fill) {
          if (o.fillStyle === "solid") {
            const shape = ellipseWithParams(x, y, o, ellipseParams).opset;
            shape.type = "fillPath";
            paths.push(shape);
          } else {
            paths.push(patternFillPolygons([ ellipseResponse.estimatedPoints ], o));
          }
        }
        if (o.stroke !== NOS) {
          paths.push(ellipseResponse.opset);
        }
        return this._d("ellipse", paths, o);
      }
      circle(x, y, diameter, options) {
        const ret = this.ellipse(x, y, diameter, diameter, options);
        ret.shape = "circle";
        return ret;
      }
      linearPath(points, options) {
        const o = this._o(options);
        return this._d("linearPath", [ linearPath(points, false, o) ], o);
      }
      arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._o(options);
        const paths = [];
        const outline = arc(x, y, width, height, start, stop, closed, true, o);
        if (closed && o.fill) {
          if (o.fillStyle === "solid") {
            const fillOptions = Object.assign({}, o);
            fillOptions.disableMultiStroke = true;
            const shape = arc(x, y, width, height, start, stop, true, false, fillOptions);
            shape.type = "fillPath";
            paths.push(shape);
          } else {
            paths.push(patternFillArc(x, y, width, height, start, stop, o));
          }
        }
        if (o.stroke !== NOS) {
          paths.push(outline);
        }
        return this._d("arc", paths, o);
      }
      curve(points, options) {
        const o = this._o(options);
        const paths = [];
        const outline = curve(points, o);
        if (o.fill && o.fill !== NOS) {
          if (o.fillStyle === "solid") {
            const fillShape = curve(points, Object.assign(Object.assign({}, o), {
              disableMultiStroke: true,
              roughness: o.roughness ? o.roughness + o.fillShapeRoughnessGain : 0
            }));
            paths.push({
              type: "fillPath",
              ops: this._mergedShape(fillShape.ops)
            });
          } else {
            const polyPoints = [];
            const inputPoints = points;
            if (inputPoints.length) {
              const p1 = inputPoints[0];
              const pointsList = typeof p1[0] === "number" ? [ inputPoints ] : inputPoints;
              for (const points of pointsList) {
                if (points.length < 3) {
                  polyPoints.push(...points);
                } else if (points.length === 3) {
                  polyPoints.push(...pointsOnBezierCurves(curveToBezier([ points[0], points[0], points[1], points[2] ]), 10, (1 + o.roughness) / 2));
                } else {
                  polyPoints.push(...pointsOnBezierCurves(curveToBezier(points), 10, (1 + o.roughness) / 2));
                }
              }
            }
            if (polyPoints.length) {
              paths.push(patternFillPolygons([ polyPoints ], o));
            }
          }
        }
        if (o.stroke !== NOS) {
          paths.push(outline);
        }
        return this._d("curve", paths, o);
      }
      polygon(points, options) {
        const o = this._o(options);
        const paths = [];
        const outline = linearPath(points, true, o);
        if (o.fill) {
          if (o.fillStyle === "solid") {
            paths.push(solidFillPolygon([ points ], o));
          } else {
            paths.push(patternFillPolygons([ points ], o));
          }
        }
        if (o.stroke !== NOS) {
          paths.push(outline);
        }
        return this._d("polygon", paths, o);
      }
      path(d, options) {
        const o = this._o(options);
        const paths = [];
        if (!d) {
          return this._d("path", paths, o);
        }
        d = (d || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
        const hasFill = o.fill && o.fill !== "transparent" && o.fill !== NOS;
        const hasStroke = o.stroke !== NOS;
        const simplified = !!(o.simplification && o.simplification < 1);
        const distance = simplified ? 4 - 4 * (o.simplification || 1) : (1 + o.roughness) / 2;
        const sets = pointsOnPath(d, 1, distance);
        const shape = svgPath(d, o);
        if (hasFill) {
          if (o.fillStyle === "solid") {
            if (sets.length === 1) {
              const fillShape = svgPath(d, Object.assign(Object.assign({}, o), {
                disableMultiStroke: true,
                roughness: o.roughness ? o.roughness + o.fillShapeRoughnessGain : 0
              }));
              paths.push({
                type: "fillPath",
                ops: this._mergedShape(fillShape.ops)
              });
            } else {
              paths.push(solidFillPolygon(sets, o));
            }
          } else {
            paths.push(patternFillPolygons(sets, o));
          }
        }
        if (hasStroke) {
          if (simplified) {
            sets.forEach((set => {
              paths.push(linearPath(set, false, o));
            }));
          } else {
            paths.push(shape);
          }
        }
        return this._d("path", paths, o);
      }
      opsToPath(drawing, fixedDecimals) {
        let path = "";
        for (const item of drawing.ops) {
          const data = typeof fixedDecimals === "number" && fixedDecimals >= 0 ? item.data.map((d => +d.toFixed(fixedDecimals))) : item.data;
          switch (item.op) {
           case "move":
            path += `M${data[0]} ${data[1]} `;
            break;

           case "bcurveTo":
            path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
            break;

           case "lineTo":
            path += `L${data[0]} ${data[1]} `;
            break;
          }
        }
        return path.trim();
      }
      toPaths(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.defaultOptions;
        const paths = [];
        for (const drawing of sets) {
          let path = null;
          switch (drawing.type) {
           case "path":
            path = {
              d: this.opsToPath(drawing),
              stroke: o.stroke,
              strokeWidth: o.strokeWidth,
              fill: NOS
            };
            break;

           case "fillPath":
            path = {
              d: this.opsToPath(drawing),
              stroke: NOS,
              strokeWidth: 0,
              fill: o.fill || NOS
            };
            break;

           case "fillSketch":
            path = this.fillSketch(drawing, o);
            break;
          }
          if (path) {
            paths.push(path);
          }
        }
        return paths;
      }
      fillSketch(drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
          fweight = o.strokeWidth / 2;
        }
        return {
          d: this.opsToPath(drawing),
          stroke: o.fill || NOS,
          strokeWidth: fweight,
          fill: NOS
        };
      }
      _mergedShape(input) {
        return input.filter(((d, i) => {
          if (i === 0) {
            return true;
          }
          if (d.op === "move") {
            return false;
          }
          return true;
        }));
      }
    }
    // ./node_modules/roughjs/bin/canvas.js
    class RoughCanvas {
      constructor(canvas, config) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.gen = new RoughGenerator(config);
      }
      draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const ctx = this.ctx;
        const precision = drawable.options.fixedDecimalPlaceDigits;
        for (const drawing of sets) {
          switch (drawing.type) {
           case "path":
            ctx.save();
            ctx.strokeStyle = o.stroke === "none" ? "transparent" : o.stroke;
            ctx.lineWidth = o.strokeWidth;
            if (o.strokeLineDash) {
              ctx.setLineDash(o.strokeLineDash);
            }
            if (o.strokeLineDashOffset) {
              ctx.lineDashOffset = o.strokeLineDashOffset;
            }
            this._drawToContext(ctx, drawing, precision);
            ctx.restore();
            break;

           case "fillPath":
            {
              ctx.save();
              ctx.fillStyle = o.fill || "";
              const fillRule = drawable.shape === "curve" || drawable.shape === "polygon" || drawable.shape === "path" ? "evenodd" : "nonzero";
              this._drawToContext(ctx, drawing, precision, fillRule);
              ctx.restore();
              break;
            }

           case "fillSketch":
            this.fillSketch(ctx, drawing, o);
            break;
          }
        }
      }
      fillSketch(ctx, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
          fweight = o.strokeWidth / 2;
        }
        ctx.save();
        if (o.fillLineDash) {
          ctx.setLineDash(o.fillLineDash);
        }
        if (o.fillLineDashOffset) {
          ctx.lineDashOffset = o.fillLineDashOffset;
        }
        ctx.strokeStyle = o.fill || "";
        ctx.lineWidth = fweight;
        this._drawToContext(ctx, drawing, o.fixedDecimalPlaceDigits);
        ctx.restore();
      }
      _drawToContext(ctx, drawing, fixedDecimals, rule = "nonzero") {
        ctx.beginPath();
        for (const item of drawing.ops) {
          const data = typeof fixedDecimals === "number" && fixedDecimals >= 0 ? item.data.map((d => +d.toFixed(fixedDecimals))) : item.data;
          switch (item.op) {
           case "move":
            ctx.moveTo(data[0], data[1]);
            break;

           case "bcurveTo":
            ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
            break;

           case "lineTo":
            ctx.lineTo(data[0], data[1]);
            break;
          }
        }
        if (drawing.type === "fillPath") {
          ctx.fill(rule);
        } else {
          ctx.stroke();
        }
      }
      get generator() {
        return this.gen;
      }
      getDefaultOptions() {
        return this.gen.defaultOptions;
      }
      line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
      }
      rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
      }
      ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
      }
      circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        this.draw(d);
        return d;
      }
      linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        this.draw(d);
        return d;
      }
      polygon(points, options) {
        const d = this.gen.polygon(points, options);
        this.draw(d);
        return d;
      }
      arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
      }
      curve(points, options) {
        const d = this.gen.curve(points, options);
        this.draw(d);
        return d;
      }
      path(d, options) {
        const drawing = this.gen.path(d, options);
        this.draw(drawing);
        return drawing;
      }
    }
    // ./node_modules/roughjs/bin/core.js
    const SVGNS = "http://www.w3.org/2000/svg";
    // ./node_modules/roughjs/bin/svg.js
    class RoughSVG {
      constructor(svg, config) {
        this.svg = svg;
        this.gen = new RoughGenerator(config);
      }
      draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const doc = this.svg.ownerDocument || window.document;
        const g = doc.createElementNS(SVGNS, "g");
        const precision = drawable.options.fixedDecimalPlaceDigits;
        for (const drawing of sets) {
          let path = null;
          switch (drawing.type) {
           case "path":
            {
              path = doc.createElementNS(SVGNS, "path");
              path.setAttribute("d", this.opsToPath(drawing, precision));
              path.setAttribute("stroke", o.stroke);
              path.setAttribute("stroke-width", o.strokeWidth + "");
              path.setAttribute("fill", "none");
              if (o.strokeLineDash) {
                path.setAttribute("stroke-dasharray", o.strokeLineDash.join(" ").trim());
              }
              if (o.strokeLineDashOffset) {
                path.setAttribute("stroke-dashoffset", `${o.strokeLineDashOffset}`);
              }
              break;
            }

           case "fillPath":
            {
              path = doc.createElementNS(SVGNS, "path");
              path.setAttribute("d", this.opsToPath(drawing, precision));
              path.setAttribute("stroke", "none");
              path.setAttribute("stroke-width", "0");
              path.setAttribute("fill", o.fill || "");
              if (drawable.shape === "curve" || drawable.shape === "polygon") {
                path.setAttribute("fill-rule", "evenodd");
              }
              break;
            }

           case "fillSketch":
            {
              path = this.fillSketch(doc, drawing, o);
              break;
            }
          }
          if (path) {
            g.appendChild(path);
          }
        }
        return g;
      }
      fillSketch(doc, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
          fweight = o.strokeWidth / 2;
        }
        const path = doc.createElementNS(SVGNS, "path");
        path.setAttribute("d", this.opsToPath(drawing, o.fixedDecimalPlaceDigits));
        path.setAttribute("stroke", o.fill || "");
        path.setAttribute("stroke-width", fweight + "");
        path.setAttribute("fill", "none");
        if (o.fillLineDash) {
          path.setAttribute("stroke-dasharray", o.fillLineDash.join(" ").trim());
        }
        if (o.fillLineDashOffset) {
          path.setAttribute("stroke-dashoffset", `${o.fillLineDashOffset}`);
        }
        return path;
      }
      get generator() {
        return this.gen;
      }
      getDefaultOptions() {
        return this.gen.defaultOptions;
      }
      opsToPath(drawing, fixedDecimalPlaceDigits) {
        return this.gen.opsToPath(drawing, fixedDecimalPlaceDigits);
      }
      line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        return this.draw(d);
      }
      rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        return this.draw(d);
      }
      ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        return this.draw(d);
      }
      circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        return this.draw(d);
      }
      linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        return this.draw(d);
      }
      polygon(points, options) {
        const d = this.gen.polygon(points, options);
        return this.draw(d);
      }
      arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
      }
      curve(points, options) {
        const d = this.gen.curve(points, options);
        return this.draw(d);
      }
      path(d, options) {
        const drawing = this.gen.path(d, options);
        return this.draw(drawing);
      }
    }
    // ./node_modules/roughjs/bin/rough.js
    /* harmony default export */ const rough = {
      canvas(canvas, config) {
        return new RoughCanvas(canvas, config);
      },
      svg(svg, config) {
        return new RoughSVG(svg, config);
      },
      generator(config) {
        return new RoughGenerator(config);
      },
      newSeed() {
        return RoughGenerator.newSeed();
      }
    };
    // ./src/sprite.js
    class Sprite {
      /**
   * @param {string} name
   * @param {HTMLCanvasElement} spriteSheet
   * @param {SpriteSheetCell[]} variations
   */
      constructor(name, spriteSheet, variations) {
        this.name = name;
        this.spriteSheet = spriteSheet;
        this.variations = variations;
      }
    }
    class SpriteSheetCell {
      /**
   * @param {number} xOff
   * @param {number} yOff
   * @param {number} sWidth
   * @param {number} sHeight
   */
      constructor(xOff, yOff, sWidth, sHeight) {
        this.xOff = xOff;
        this.yOff = yOff;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
      }
    }
    class Sprites {
      /** @type {Sprite} */
      bear;
      /** @type {Sprite} */
      moose;
      /** @type {Sprite} */
      whale;
      /** @type {Sprite} */
      rabbit;
      /** @type {Sprite} */
      wolf;
      /** @type {Sprite} */
      wolfLarge;
      /** @type {Sprite} */
      wolfTalkLarge;
      /** @type {Sprite} */
      pig;
      /** @type {Sprite} */
      elephant;
      /** @type {Sprite} */
      chicken;
      /** @type {Sprite} */
      cursor0;
      /** @type {Sprite} */
      cursor1;
      /** @type {Sprite} */
      cursor2;
      /** @type {Sprite} */
      touchCursor0;
      /** @type {Sprite} */
      touchCursor1;
      /** @type {Sprite} */
      touchCursor2;
      /** @type {Sprite} */
      door;
      /** @type {Sprite} */
      doorClosed;
    }
    class AnimatedSprite {
      /**
   * @param {Sprite[]} sprites
   * @param {number} frameRate
   */
      constructor(sprites, frameRate) {
        this.sprites = sprites;
        this.frameRate = frameRate;
      }
      /**
   * @param {number} time
   * @returns {Sprite}
   */      getFrame(time) {
        const index = Math.floor(time * this.frameRate) % this.sprites.length;
        return this.sprites[index];
      }
    }
    // ./node_modules/zzfx/ZzFX.js
    /*

ZzFX - Zuper Zmall Zound Zynth v1.3.0 by Frank Force
https://github.com/KilledByAPixel/ZzFX

ZzFX Features

- Tiny synth engine with 20 controllable parameters.
- Play sounds via code, no need for sound assed files!
- Compatible with most modern web browsers.
- Small code footprint, the micro version is under 1 kilobyte.
- Can produce a huge variety of sound effect types.
- Sounds can be played with a short call. zzfx(...[,,,,.1,,,,9])
- A small bit of randomness appied to sounds when played.
- Use ZZFX.GetNote to get frequencies on a standard diatonic scale.
- Sounds can be saved out as wav files for offline playback.
- No additional libraries or dependencies are required.

*/
    /*

  ZzFX MIT License
  
  Copyright (c) 2019 - Frank Force
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  
*/
    // play a zzfx sound
    function zzfx(...parameters) {
      return ZZFX.play(...parameters);
    }
    // zzfx object with some extra functionalty
        const ZZFX = {
      // master volume scale
      volume: .3,
      // sample rate for audio
      sampleRate: 44100,
      // create shared audio context
      x: new AudioContext,
      // play a sound from zzfx paramerters
      play: function(...parameters) {
        // build samples and start sound
        return this.playSamples(this.buildSamples(...parameters));
      },
      // play an array of samples
      playSamples: function(...samples) {
        // create buffer and source
        const buffer = this.x.createBuffer(samples.length, samples[0].length, this.sampleRate), source = this.x.createBufferSource();
        samples.map(((d, i) => buffer.getChannelData(i).set(d)));
        source.buffer = buffer;
        source.connect(this.x.destination);
        source.start();
        return source;
      },
      // build an array of samples
      buildSamples: function(volume = 1, randomness = .05, frequency = 220, attack = 0, sustain = 0, release = .1, shape = 0, shapeCurve = 1, slide = 0, deltaSlide = 0, pitchJump = 0, pitchJumpTime = 0, repeatTime = 0, noise = 0, modulation = 0, bitCrush = 0, delay = 0, sustainVolume = 1, decay = 0, tremolo = 0, filter = 0) {
        // init parameters
        let PI2 = Math.PI * 2, sign = v => v < 0 ? -1 : 1, sampleRate = this.sampleRate, startSlide = slide *= 500 * PI2 / sampleRate / sampleRate, startFrequency = frequency *= (1 + randomness * 2 * Math.random() - randomness) * PI2 / sampleRate, b = [], t = 0, tm = 0, i = 0, j = 1, r = 0, c = 0, s = 0, f, length, 
        // biquad LP/HP filter
        quality = 2, w = PI2 * Math.abs(filter) * 2 / sampleRate, cos = Math.cos(w), alpha = Math.sin(w) / 2 / quality, a0 = 1 + alpha, a1 = -2 * cos / a0, a2 = (1 - alpha) / a0, b0 = (1 + sign(filter) * cos) / 2 / a0, b1 = -(sign(filter) + cos) / a0, b2 = b0, x2 = 0, x1 = 0, y2 = 0, y1 = 0;
        // scale by sample rate
                attack = attack * sampleRate + 9;
 // minimum attack to prevent pop
                decay *= sampleRate;
        sustain *= sampleRate;
        release *= sampleRate;
        delay *= sampleRate;
        deltaSlide *= 500 * PI2 / sampleRate ** 3;
        modulation *= PI2 / sampleRate;
        pitchJump *= PI2 / sampleRate;
        pitchJumpTime *= sampleRate;
        repeatTime = repeatTime * sampleRate | 0;
        volume *= this.volume;
        // generate waveform
                for (length = attack + decay + sustain + release + delay | 0; i < length; b[i++] = s * volume) // sample
        {
          if (!(++c % (bitCrush * 100 | 0))) // bit crush
          {
            s = shape ? shape > 1 ? shape > 2 ? shape > 3 ? // wave shape
            Math.sin(t * t) : // 4 noise
            Math.max(Math.min(Math.tan(t), 1), -1) : // 3 tan
            1 - (2 * t / PI2 % 2 + 2) % 2 : // 2 saw
            1 - 4 * Math.abs(Math.round(t / PI2) - t / PI2) : // 1 triangle
            Math.sin(t);
 // 0 sin
                        s = (repeatTime ? 1 - tremolo + tremolo * Math.sin(PI2 * i / repeatTime) : 1) * sign(s) * Math.abs(s) ** shapeCurve * (// curve
            i < attack ? i / attack : // attack
            i < attack + decay ? // decay
            1 - (i - attack) / decay * (1 - sustainVolume) : // decay falloff
            i < attack + decay + sustain ? // sustain
            sustainVolume : // sustain volume
            i < length - delay ? // release
            (length - i - delay) / release * // release falloff
            sustainVolume : // release volume
            0);
 // post release
                        s = delay ? s / 2 + (delay > i ? 0 : // delay
            (i < length - delay ? 1 : (length - i) / delay) * // release delay 
            b[i - delay | 0] / 2 / volume) : s;
 // sample delay
                        if (filter) // apply filter
            s = y1 = b2 * x2 + b1 * (x2 = x1) + b0 * (x1 = s) - a2 * y2 - a1 * (y2 = y1);
          }
          f = (frequency += slide += deltaSlide) * // frequency
          Math.cos(modulation * tm++);
 // modulation
                    t += f + f * noise * Math.sin(i ** 5);
 // noise
                    if (j && ++j > pitchJumpTime) // pitch jump
          {
            frequency += pitchJump;
 // apply pitch jump
                        startFrequency += pitchJump;
 // also apply to start
                        j = 0;
 // stop pitch jump time
                    }
          if (repeatTime && !(++r % repeatTime)) // repeat
          {
            frequency = startFrequency;
 // reset frequency
                        slide = startSlide;
 // reset slide
                        j = j || 1;
 // reset pitch jump time
                    }
        }
        return b;
      },
      // get frequency of a musical note on a diatonic scale
      getNote: function(semitoneOffset = 0, rootNoteFrequency = 440) {
        return rootNoteFrequency * 2 ** (semitoneOffset / 12);
      }
    };
 // ./src/config.js
        class Config {
      setValues(values) {
        for (const [key, value] of Object.entries(values)) {
          this[key] = value;
        }
      }
    }
    const config = new Config;
    /* harmony default export */    const src_config = config;
    class DebugConfig {
      constructor() {
        this.isEnabled = false;
      }
    }
    const debugConfig = new DebugConfig;
    // ./src/utils.js
    /**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @returns {number}
 */
    function utils_lerp(a, b, t) {
      return a + (b - a) * t;
    }
    /**

 * @param {Matter.Vector} a
 * @param {Matter.Vector} b
 * @param {number} t
 * @returns {Matter.Vector}
 */    function lerpVector(a, b, t) {
      return matter.Vector.create(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    }
    /**
 * @param {number} x
 * @returns {number}
 */    function easeOutBack(x) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    }
    /**
 * @param {number} x
 * @returns {number}
 */    function easeOutBounce(x) {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + .75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + .9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + .984375;
      }
    }
    function easeOutCubic(x) {
      return 1 - Math.pow(1 - x, 3);
    }
    /**
 *
 * @param {number} x
 * @returns {number}
 */    function easeInExpo(x) {
      return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }
    function easeInOutBounce(x) {
      return x < .5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;
    }
    /**
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */    function wrap(n, min, max) {
      const range = max - min;
      return ((n - min) % range + range) % range + min;
    }
    /**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} ellipseX
 * @param {number} ellipseY
 * @param {number} radiusX
 * @param {number} radiusY
 * @returns
 */    function isPointInEllipse(x, y, ellipseX, ellipseY, radiusX, radiusY) {
      const dx = x - ellipseX;
      const dy = y - ellipseY;
      return dx * dx / (radiusX * radiusX) + dy * dy / (radiusY * radiusY) <= 1;
    }
    function isPointInRotatedEllipse(px, py, h, k, a, b, angleRad) {
      const cos = Math.cos(angleRad);
      const sin = Math.sin(angleRad);
      // Translate point to ellipse center
            const dx = px - h;
      const dy = py - k;
      // Rotate point by -angleRad
            const xRot = cos * dx + sin * dy;
      const yRot = -sin * dx + cos * dy;
      // Check against standard ellipse equation
            return xRot * xRot / (a * a) + yRot * yRot / (b * b) <= 1;
    }
    /**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */    function randRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    function randItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    /**
 *
 * @param {Vector} a
 * @param {Vector} b
 * @returns {number}
 */    function utils_distance(a, b) {
      return matter.Vector.magnitude(matter.Vector.sub(a, b));
    }
    const zzfxIndex = {
      volume: 0,
      randomness: 1,
      frequency: 2,
      waveShape: 3,
      shapeCurve: 4,
      attack: 5,
      decay: 6,
      sustain: 7,
      release: 8,
      sustainVolume: 9,
      slide: 10,
      deltaSlide: 11,
      pitchJump: 12,
      pitchJumpTime: 13,
      repeatTime: 14,
      tremolo: 15,
      noise: 16,
      bitCrush: 17,
      delay: 18,
      modulation: 19,
      filter: 20
    };
    /**
 * @param {number[]} sound
 */    function playSound(sound) {
      const globalVolume = src_config.globalVolume ?? 1;
      if (globalVolume != 1) {
        sound = [ ...sound ];
        sound[zzfxIndex.volume] *= globalVolume;
      }
      if (sound[0] <= 0) return;
      zzfx(...sound);
    }
    function formatStr(str, values) {
      return str.replace(/{(\w+)}/g, ((match, key) => key in values ? values[key] : match));
    }
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [ array[j], array[i] ];
      }
      return array;
    }
    // ./src/renderer.js
    class Renderer {
      /**
   * @param {HTMLCanvasElement} canvas
   */
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.rc = rough.canvas(canvas, {
          options: {
            seed: 100
          }
        });
      }
      newSeed() {
        rough.newSeed();
      }
      clear() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = "#f0f0f0";
        ctx.rect(0, 0, 390, 300);
        ctx.fill();
      }
      rectangle(x, y, width, height) {
        this.rc.rectangle(x - width / 2, y - height / 2, width, height, {
          fill: "red",
          bowing: 6,
          stroke: "green",
          strokeWidth: 3
        });
      }
      circle(x, y, radius, seed, angle) {
        this.rc.circle(x, y, radius * 2, {
          fill: "red",
          bowing: 6,
          stroke: "green",
          strokeWidth: 0,
          hachureGap: 4 - Math.random(),
          hachureAngle: angle,
          roughness: 2,
          seed
        });
      }
      /**
   * @param {import("./sprite").Sprite} sprite
   * @param {DrawSvgOptions} options
   */      sprite(sprite, options) {
        this.ctx.save();
        const cell = sprite.variations[Math.floor(Math.random() * sprite.variations.length)];
        const scale = options.scale ?? 1;
        const rotation = options.rotation ?? 0;
 //Math.PI * 2 * (frame / 30);
                this.ctx.scale(scale, scale);
        const offset = matter.Vector.create(cell.sWidth * .5, cell.sHeight * .5);
        this.ctx.rotate(rotation);
        this.ctx.translate(-offset.x, -offset.y);
        const inv = inverseRotatePoint(options.x * (1 / scale), options.y * (1 / scale), -offset.x * 0, -offset.y * 0, rotation);
        this.ctx.translate(inv.x, inv.y);
        this.ctx.drawImage(sprite.spriteSheet, cell.xOff, cell.yOff, cell.sWidth, cell.sHeight, 0, 0, cell.sWidth, cell.sHeight);
        this.ctx.restore();
      }
    }
    function inverseRotatePoint(px, py, cx, cy, angle) {
      // Translate point to origin
      const dx = px - cx;
      const dy = py - cy;
      // Apply inverse rotation (negative angle)
            const cos = Math.cos(-angle);
      const sin = Math.sin(-angle);
      const xNew = dx * cos - dy * sin;
      const yNew = dx * sin + dy * cos;
      // Translate back
            return {
        x: xNew + cx,
        y: yNew + cy
      };
    }
    /**
 * @param {number} px
 * @param {number} py
 * @param {Matter.Body} body
 * @returns {number}
 */    function toWorld(px, py, body) {
      const point = inverseRotatePoint(px, py, 0, 0, body.angle);
      point.x += body.position.x;
      point.y += body.position.y;
      return point;
    }
    function resetText(ctx) {
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";
    }
    /**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {*} messages
 * @param {number} time
 * @param {Object} contextVariables
 */    function drawMessages(ctx, messages, time, contextVariables) {
      ctx.resetTransform();
      for (const line of messages) {
        let text = line.text;
        if (contextVariables !== undefined) {
          text = formatStr(text, contextVariables);
        }
        if (line.bevel !== false) {
          drawMessage(ctx, line, text, "black", 1, 1, time);
          resetText(ctx);
          drawMessage(ctx, line, text, "white", -1, -1, time);
          resetText(ctx);
        }
        drawMessage(ctx, line, text, null, 0, 0, time);
        resetText(ctx);
      }
    }
    /**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {*} line
 * @param {string} text
 * @param {string} fillStyle
 * @param {number} xOff
 * @param {number} yOff
 * @param {number} time
 */    function drawMessage(ctx, line, text, fillStyle, xOff, yOff, time) {
      let x = line.x;
      let y = line.y;
      let rotation = line.rotation ?? 0;
      let visible = line.visible !== false ? 1 : 0;
      const to = line.to;
      if (to) {
        let t = Math.max(time - (to.delay ?? 0), 0) / to.duration;
        switch (to.loop) {
         case "repeat":
          t = t % 1;
          break;

         case "pingpong":
          t = Math.abs(1 - (t + 1) % 2);
          break;

         default:
          t = Math.max(Math.min(t, 1), 0);
        }
        switch (to.easing) {
         case "easeOutBounce":
          t = easeOutBounce(t);
          break;

         case "easeOutBack":
          t = easeOutBack(t);
          break;

         case "easeInOutBounce":
          t = easeInOutBounce(t);
          break;

         case "easeOutCubic":
          t = easeOutCubic(t);
          break;
        }
        x = utils_lerp(x, to.x ?? x, t);
        y = utils_lerp(y, to.y ?? y, t);
        rotation = utils_lerp(rotation, to.rotation ?? rotation, t);
        visible = utils_lerp(visible, to.visible ?? visible ? 1 : 0, t);
      }
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
      } else if (line.style) {
        ctx.fillStyle = line.style;
      }
      if (line.font) {
        ctx.font = line.font;
      }
      if (line.textAlign) {
        ctx.textAlign = line.textAlign;
      }
      if (line.textBasline) {
        ctx.textBaseline = line.textBaseline;
      }
      if (Math.round(visible)) {
        ctx.rotate(rotation);
        const p = inverseRotatePoint(x + xOff, y + yOff, 0, 0, rotation);
        ctx.fillText(text, p.x, p.y);
        ctx.resetTransform();
      }
    }
    function drawGradient(ctx, width, height, cfg) {
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(width * cfg.x0, height * cfg.y0, width * cfg.x1, height * cfg.y1);
      // Add color stops
            for (const [offset, color] of cfg.stops) {
        gradient.addColorStop(offset, color);
      }
      // Use the gradient as fill style
            ctx.rect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();
    }
    /**
 * @param {number} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} lineWidth
 * @param {number} progress
 */    function drawProgress(ctx, x, y, radius, lineWidth, progress) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#eee";
      ctx.lineWidth = lineWidth;
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, radius, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
      ctx.strokeStyle = "#09f";
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.closePath();
    }
    /**
 * @param {number} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} lineWidth
 * @param {number} speed
 * @param {number} offset
 */    function drawIndeterminateProgress(ctx, x, y, radius, lineWidth, speed, offset) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#eee";
      ctx.lineWidth = lineWidth;
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      offset = speed * Math.PI * 2 * offset;
      ctx.arc(x, y, radius, -Math.PI / 2 + offset, -Math.PI / 2 + offset + Math.PI * .5);
      ctx.strokeStyle = "#09f";
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.closePath();
    }
    // ./src/svg-data.js
    class SvgData {
      /**
   * @param {number} x
   * @param {number} y
   * @param {PathData[]} paths
   * @param {CanvasImageSource} spriteSheet
   * @param {BakedSvg[]} baked
   */
      constructor(width, height, paths, spriteSheet, baked) {
        this.width = width;
        this.height = height;
        this.paths = paths;
        this.spriteSheet = spriteSheet;
        this.baked = baked;
      }
    }
    // ./src/sprite-sheet-generator.js
    /**
 * @typedef {Object} Rule
 * @property {string} id
 * @property {number} numVariations
 * @property {number} scale
 * @property {import("roughjs/bin/core.js").Options} options
 */
    /**
 * @typedef {Object} Operation
 * @property {SvgData} data
 * @property {number} scale
 */
    class SpriteSheetGenerator {
      /**
   * @param {HTMLCanvasElement} canvas
   * @param {Object.<string, Rule>} rules
   * @returns {Promise.<Sprites>}
   */
      async create(canvas, rules) {
        /** @type {Operation[]} */
        const operations = [];
        for (const [name, rule] of Object.entries(rules)) {
          const svgData = parseSvgXml(rule.id, rule.options);
          for (let index = 0; index < rule.numVariations; index++) {
            operations.push(new Operation(name, svgData, rule));
          }
          await new Promise((resolve => setTimeout(resolve, 0)));
        }
        operations.sort(((a, b) => {
          b.data.height - a.data.height;
        }));
        const ctx = canvas.getContext("2d");
        const rc = rough.canvas(canvas);
        const width = canvas.width;
        const height = canvas.height;
        const padding = 16;
        let xOff = 0;
        let yOff = 0;
        let rowHeight = 0;
        const cells = [];
        for (const {name, data, rule} of operations) {
          const sWidth = data.width * 2 * (rule.scale ?? 1);
          const sHeight = data.height * 2 * (rule.scale ?? 1);
          rowHeight = Math.max(rowHeight, sHeight);
          if (xOff + sWidth + padding > width) {
            yOff += rowHeight + padding;
            xOff = padding;
            rowHeight = sHeight;
            console.assert(yOff + rowHeight < height);
          }
          renderSvg(rc, ctx, data, {
            x: xOff + sWidth / 2,
            y: yOff + sHeight / 2,
            scale: rule.scale ?? 1
          });
          cells.push({
            name,
            cell: new SpriteSheetCell(xOff, yOff, sWidth, sHeight)
          });
          xOff += sWidth + padding;
          await new Promise((resolve => setTimeout(resolve, 0)));
        }
        const grouped = cells.reduce(((acc, item) => {
          const key = item.name;
          if (!acc[key]) {
            acc[key] = new Sprite(item.name, canvas, []);
          }
          acc[key].variations.push(item.cell);
          return acc;
        }), {});
        console.log("Sprite sheet generated");
        return grouped;
      }
    }
    class Operation {
      /**
   * @param {string} name
   * @param {SvgData} data
   * @param {Rule} rule
   */
      constructor(name, data, rule) {
        console.assert(name != null);
        console.assert(data != null);
        console.assert(rule != null);
        this.name = name;
        this.data = data;
        this.rule = rule;
      }
    }
    /**
 * @param {string} elementId
 * @param {import("roughjs/bin/core.js").Options} options
 * @returns {SvgData}
 */    function parseSvgXml(elementId, options) {
      console.assert(elementId != null);
      console.log(elementId);
      /** @type {HTMLScriptElement} */      const svgScript = document.getElementById(elementId);
      const svgText = svgScript.textContent.trim();
      const parser = new DOMParser;
      const xmlDoc = parser.parseFromString(svgText, "image/svg+xml");
      const svgNode = xmlDoc.querySelector("svg");
      const width = parseFloat(svgNode.getAttribute("width"));
      const height = parseFloat(svgNode.getAttribute("height"));
      const pathNodes = xmlDoc.querySelectorAll("path");
      const data = [];
      for (const node of pathNodes) {
        data.push(new PathData(node.getAttribute("id"), node.getAttribute("d"), {
          fill: node.getAttribute("fill"),
          stroke: node.getAttribute("stroke"),
          hachureGap: 1.3,
          bowing: 40,
          roughness: 1,
          hachureAngle: 45,
          fillWeight: 1,
          strokeWidth: 1,
          ...options
        }));
      }
      return new SvgData(width, height, data);
    }
    /**
 * @param {RoughCanvas} rc
 * @param {CanvasRenderingContext2D} ctx
 * @param {SvgData} data
 * @param {DrawSvgOptions} options
 */    function renderSvg(rc, ctx, data, options) {
      ctx.save();
      const scale = options.scale ?? 1;
      const rotation = options.rotation ?? 0;
      ctx.scale(scale, scale);
      const offset = options.baked ? matter.Vector.create(data.baked[0].width * .5, data.baked[0].height * .5) : matter.Vector.create(data.width * .5, data.height * .5);
      ctx.rotate(rotation);
      ctx.translate(-offset.x, -offset.y);
      const inv = inverseRotatePoint(options.x * (1 / scale), options.y * (1 / scale), -offset.x * 0, -offset.y * 0, rotation);
      ctx.translate(inv.x, inv.y);
      for (const path of data.paths) {
        rc.path(path.path, {
          ...path.options,
          hachureAngle: Math.random() * 360,
          hachureGap: Math.random() + .5,
          seed: 1,
          fillStyle: Math.random() > .6 ? "solid" : null
        });
      }
      ctx.restore();
    }
    class PathData {
      /**
   * @param {string} id
   * @param {string} path
   * @param {import("roughjs/bin/core.js").Options} options
   */
      constructor(id, path, options) {
        this.id = id;
        this.path = path;
        this.options = options;
      }
    }
    // ./src/levels/level.js
    const level = [ {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 195,
          y: 350
        },
        globalRotation: 0,
        id: 1001,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 200
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 390,
          y: 100
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: 440,
          y: -100
        },
        globalRotation: 0,
        id: 1002,
        name: "CollisionShape2D3",
        position: {
          x: 245,
          y: -250
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 100,
          y: 1e3
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: -50,
          y: -100
        },
        globalRotation: 0,
        id: 1003,
        name: "CollisionShape2D4",
        position: {
          x: -245,
          y: -250
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 100,
          y: 1e3
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: 195,
          y: -550
        },
        globalRotation: 0,
        id: 1004,
        name: "CollisionShape2D2",
        position: {
          x: 0,
          y: -700
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 390,
          y: 100
        },
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      friction: 1,
      globalPosition: {
        x: 195,
        y: 150
      },
      globalRotation: 0,
      id: 1e3,
      isBody: true,
      name: "StaticBody2D3",
      position: {
        x: 195,
        y: 150
      },
      rotation: 0,
      type: "StaticBody2D"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 56.834,
          y: 282.359
        },
        globalRotation: 0,
        id: 1006,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: 77.114,
            y: 35.904
          },
          verts: "-60.834 62.641 -66.763 -3.269 22.166 0.641 349.166 55.641"
        }, {
          center: {
            x: 228.387,
            y: 19.578
          },
          verts: "349.166 14.641 349.166 55.641 22.166 0.641 178.166 -3.359"
        }, {
          center: {
            x: 314.4,
            y: -28.675
          },
          verts: "291.166 -66.359 343.166 -61.359 349.166 14.641 270.166 -12.359"
        }, {
          center: {
            x: 101.726,
            y: -26.28
          },
          verts: "57.763 -58.253 159.166 -51.359 178.166 -3.359 22.166 0.641"
        }, {
          center: {
            x: 265.833,
            y: -.359
          },
          verts: "349.166 14.641 178.166 -3.359 270.166 -12.359"
        } ],
        position: {
          x: -3.166,
          y: -2.641
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 3,
      collisionMask: 3,
      friction: 1,
      globalPosition: {
        x: 60,
        y: 285
      },
      globalRotation: 0,
      id: 1005,
      isBody: true,
      name: "RigidBody2D8",
      position: {
        x: 60,
        y: 285
      },
      rotation: 0,
      type: "StaticBody2D"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 171,
            y: 74
          },
          globalRotation: 0,
          id: 1009,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 171,
            y: 74
          },
          globalRotation: 1.571,
          id: 1010,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: -.07,
        friction: 1,
        globalPosition: {
          x: 171,
          y: 74
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1008,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 171,
          y: 74
        },
        globalRotation: 0,
        id: 1011,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 171,
        y: 74
      },
      globalRotation: 0,
      id: 1007,
      name: "Windmill",
      position: {
        x: 171,
        y: 74
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 183,
            y: 219
          },
          globalRotation: 0,
          id: 1014,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 183,
            y: 219
          },
          globalRotation: 1.571,
          id: 1015,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 183,
          y: 219
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1013,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 183,
          y: 219
        },
        globalRotation: 0,
        id: 1016,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 183,
        y: 219
      },
      globalRotation: 0,
      id: 1012,
      name: "Windmill2",
      position: {
        x: 183,
        y: 219
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 345,
            y: 216
          },
          globalRotation: 0,
          id: 1019,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 345,
            y: 216
          },
          globalRotation: 1.571,
          id: 1020,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 345,
          y: 216
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1018,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 345,
          y: 216
        },
        globalRotation: 0,
        id: 1021,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 345,
        y: 216
      },
      globalRotation: 0,
      id: 1017,
      name: "Windmill9",
      position: {
        x: 345,
        y: 216
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 307,
            y: 145
          },
          globalRotation: 0,
          id: 1024,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 307,
            y: 145
          },
          globalRotation: 1.571,
          id: 1025,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 307,
          y: 145
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1023,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 307,
          y: 145
        },
        globalRotation: 0,
        id: 1026,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 307,
        y: 145
      },
      globalRotation: 0,
      id: 1022,
      name: "Windmill5",
      position: {
        x: 307,
        y: 145
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 270,
            y: 128
          },
          globalRotation: 0,
          id: 1029,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 270,
            y: 128
          },
          globalRotation: 1.571,
          id: 1030,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 270,
          y: 128
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1028,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 270,
          y: 128
        },
        globalRotation: 0,
        id: 1031,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 270,
        y: 128
      },
      globalRotation: 0,
      id: 1027,
      name: "Windmill6",
      position: {
        x: 270,
        y: 128
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 242,
            y: 95
          },
          globalRotation: 0,
          id: 1034,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 242,
            y: 95
          },
          globalRotation: 1.571,
          id: 1035,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 242,
          y: 95
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1033,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 242,
          y: 95
        },
        globalRotation: 0,
        id: 1036,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 242,
        y: 95
      },
      globalRotation: 0,
      id: 1032,
      name: "Windmill8",
      position: {
        x: 242,
        y: 95
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 54,
            y: 186
          },
          globalRotation: 0,
          id: 1039,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 54,
            y: 186
          },
          globalRotation: 1.571,
          id: 1040,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 54,
          y: 186
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1038,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 54,
          y: 186
        },
        globalRotation: 0,
        id: 1041,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 54,
        y: 186
      },
      globalRotation: 0,
      id: 1037,
      name: "Windmill3",
      position: {
        x: 54,
        y: 186
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 98,
            y: 111
          },
          globalRotation: 0,
          id: 1044,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 98,
            y: 111
          },
          globalRotation: 1.571,
          id: 1045,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 98,
          y: 111
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1043,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 98,
          y: 111
        },
        globalRotation: 0,
        id: 1046,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 98,
        y: 111
      },
      globalRotation: 0,
      id: 1042,
      name: "Windmill4",
      position: {
        x: 98,
        y: 111
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 100,
            y: 185
          },
          globalRotation: 0,
          id: 1049,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 100,
            y: 185
          },
          globalRotation: 1.571,
          id: 1050,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 100,
          y: 185
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1048,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 100,
          y: 185
        },
        globalRotation: 0,
        id: 1051,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 100,
        y: 185
      },
      globalRotation: 0,
      id: 1047,
      name: "Windmill13",
      position: {
        x: 100,
        y: 185
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 301,
            y: 35
          },
          globalRotation: 0,
          id: 1054,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 301,
            y: 35
          },
          globalRotation: 1.571,
          id: 1055,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 301,
          y: 35
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1053,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 301,
          y: 35
        },
        globalRotation: 0,
        id: 1056,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 301,
        y: 35
      },
      globalRotation: 0,
      id: 1052,
      name: "Windmill14",
      position: {
        x: 301,
        y: 35
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 192,
            y: 151
          },
          globalRotation: 0,
          id: 1059,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 192,
            y: 151
          },
          globalRotation: 1.571,
          id: 1060,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 192,
          y: 151
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1058,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 192,
          y: 151
        },
        globalRotation: 0,
        id: 1061,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 192,
        y: 151
      },
      globalRotation: 0,
      id: 1057,
      name: "Windmill16",
      position: {
        x: 192,
        y: 151
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 62,
            y: 33
          },
          globalRotation: 0,
          id: 1064,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 62,
            y: 33
          },
          globalRotation: 1.571,
          id: 1065,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 62,
          y: 33
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1063,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 62,
          y: 33
        },
        globalRotation: 0,
        id: 1066,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 62,
        y: 33
      },
      globalRotation: 0,
      id: 1062,
      name: "Windmill17",
      position: {
        x: 62,
        y: 33
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 74,
            y: 94
          },
          globalRotation: 0,
          id: 1069,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 74,
            y: 94
          },
          globalRotation: 1.571,
          id: 1070,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 74,
          y: 94
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1068,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 74,
          y: 94
        },
        globalRotation: 0,
        id: 1071,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 74,
        y: 94
      },
      globalRotation: 0,
      id: 1067,
      name: "Windmill7",
      position: {
        x: 74,
        y: 94
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 364,
            y: 51
          },
          globalRotation: 0,
          id: 1074,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 364,
            y: 51
          },
          globalRotation: 1.571,
          id: 1075,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 30
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 364,
          y: 51
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1073,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 364,
          y: 51
        },
        globalRotation: 0,
        id: 1076,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 364,
        y: 51
      },
      globalRotation: 0,
      id: 1072,
      name: "Windmill11",
      position: {
        x: 364,
        y: 51
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        children: [ {
          children: [],
          globalPosition: {
            x: 0,
            y: 0
          },
          globalRotation: 0,
          id: 1079,
          name: "CollisionPolygon2D",
          polygons: [ {
            center: {
              x: 0,
              y: 0
            },
            verts: "-20.0 -40.0 20.0 -40.0 40.0 -20.0 40.0 20.0 20.0 40.0 -20.0 40.0 -40.0 20.0 -40.0 -20.0"
          } ],
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          type: "CollisionPolygon2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        gravity: 1,
        id: 1078,
        isBody: true,
        name: "Touch",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "GravityWell"
      }, {
        children: [ {
          children: [],
          globalPosition: {
            x: 0,
            y: 0
          },
          globalRotation: 0,
          id: 1081,
          name: "CollisionPolygon2D",
          polygons: [ {
            center: {
              x: 0,
              y: 0
            },
            verts: "-10.0 -20.0 10.0 -20.0 20.0 -10.0 20.0 10.0 10.0 20.0 -10.0 20.0 -20.0 10.0 -20.0 -10.0"
          } ],
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          type: "CollisionPolygon2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        gravity: 1,
        id: 1080,
        isBody: true,
        name: "Mouse",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "GravityWell"
      } ],
      id: 1077,
      name: "PushController",
      type: "PushController"
    }, {
      children: [],
      id: 1082,
      name: "DestroyEntityScenario",
      type: "DestroyEntityScenario"
    }, {
      children: [ {
        children: [],
        globalPosition: {
          x: 282,
          y: 247
        },
        globalRotation: 0,
        id: 1084,
        name: "Door",
        path: "res://images/door.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 282,
          y: 247
        },
        globalRotation: 0,
        id: 1085,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 10,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      globalPosition: {
        x: 282,
        y: 247
      },
      globalRotation: 0,
      id: 1083,
      isBody: true,
      name: "DeathDoor",
      position: {
        x: 282,
        y: 247
      },
      rotation: 0,
      type: "DeathDoor"
    }, {
      children: [],
      globalPosition: {
        x: 84,
        y: -349
      },
      globalRotation: 0,
      id: 1086,
      name: "CritterSpawner",
      position: {
        x: 84,
        y: -349
      },
      rotation: 0,
      type: "CritterSpawner"
    }, {
      children: [],
      globalPosition: {
        x: 186,
        y: -248
      },
      globalRotation: 0,
      id: 1087,
      name: "CritterSpawner2",
      position: {
        x: 186,
        y: -248
      },
      rotation: 0,
      type: "CritterSpawner"
    }, {
      children: [],
      globalPosition: {
        x: 207,
        y: -389
      },
      globalRotation: 0,
      id: 1088,
      name: "CritterSpawner4",
      position: {
        x: 207,
        y: -389
      },
      rotation: 0,
      type: "CritterSpawner"
    }, {
      children: [],
      globalPosition: {
        x: 87,
        y: -158
      },
      globalRotation: 0,
      id: 1089,
      name: "CritterSpawner5",
      position: {
        x: 87,
        y: -158
      },
      rotation: 0,
      type: "CritterSpawner"
    }, {
      children: [],
      globalPosition: {
        x: 271,
        y: -154
      },
      globalRotation: 0,
      id: 1090,
      name: "CritterSpawner6",
      position: {
        x: 271,
        y: -154
      },
      rotation: 0,
      type: "CritterSpawner"
    }, {
      children: [],
      globalPosition: {
        x: 327,
        y: -293
      },
      globalRotation: 0,
      id: 1091,
      name: "CritterSpawner3",
      position: {
        x: 327,
        y: -293
      },
      rotation: 0,
      type: "CritterSpawner"
    } ];
 // ./src/levels/level-2.js
        const level_2_level = [ {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 254,
          y: 230
        },
        globalRotation: -.657,
        id: 1001,
        name: "CollisionShape2D",
        position: {
          x: 254,
          y: 230
        },
        rotation: -.657,
        shape: "rectangle",
        size: {
          x: 133,
          y: 17
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: 294.841,
          y: 75.886
        },
        globalRotation: -2.092,
        id: 1002,
        name: "CollisionShape2D3",
        position: {
          x: 294.841,
          y: 75.886
        },
        rotation: -2.092,
        shape: "rectangle",
        size: {
          x: 133,
          y: 82.98
        },
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      id: 1e3,
      isBody: true,
      name: "StaticBody2D",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "StaticBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 38,
          y: 214
        },
        globalRotation: 0,
        id: 1004,
        name: "CollisionShape2D",
        position: {
          x: -191,
          y: -24
        },
        radius: 16,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      friction: 1,
      globalPosition: {
        x: 229,
        y: 238
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1003,
      isBody: true,
      mass: 1,
      name: "RigidBody2D",
      position: {
        x: 229,
        y: 238
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 352,
          y: 35
        },
        globalRotation: 0,
        id: 1006,
        name: "CollisionShape2D",
        position: {
          x: 316,
          y: -15
        },
        radius: 21.024,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 2,
      collisionMask: 2,
      friction: 1,
      globalPosition: {
        x: 36,
        y: 50
      },
      globalRotation: 0,
      gravityScale: 0,
      id: 1005,
      isBody: true,
      mass: 1,
      name: "RigidBody2D2",
      position: {
        x: 36,
        y: 50
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 80,
          y: 93
        },
        globalRotation: 0,
        id: 1008,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 16,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 2,
      collisionMask: 2,
      friction: 1,
      globalPosition: {
        x: 80,
        y: 93
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1007,
      isBody: true,
      mass: 1,
      name: "RigidBody2D3",
      position: {
        x: 80,
        y: 93
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 65,
          y: 162
        },
        globalRotation: 0,
        id: 1010,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 16,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 2,
      collisionMask: 3,
      friction: 1,
      globalPosition: {
        x: 65,
        y: 162
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1009,
      isBody: true,
      mass: 1,
      name: "RigidBody2D4",
      position: {
        x: 65,
        y: 162
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 76,
          y: 201
        },
        globalRotation: 0,
        id: 1012,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 16,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 2,
      collisionMask: 3,
      friction: 1,
      globalPosition: {
        x: 76,
        y: 201
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1011,
      isBody: true,
      mass: 1,
      name: "RigidBody2D5",
      position: {
        x: 76,
        y: 201
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 70,
          y: 31
        },
        globalRotation: 0,
        id: 1014,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 8,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 2,
      collisionMask: 3,
      friction: 1,
      globalPosition: {
        x: 70,
        y: 31
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1013,
      isBody: true,
      mass: 1,
      name: "RigidBody2D6",
      position: {
        x: 70,
        y: 31
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 79,
          y: 265
        },
        globalRotation: 0,
        id: 1016,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 16,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 2,
      collisionMask: 3,
      friction: 1,
      globalPosition: {
        x: 79,
        y: 265
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1015,
      isBody: true,
      mass: 1,
      name: "RigidBody2D7",
      position: {
        x: 79,
        y: 265
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      children: [ {
        children: [],
        globalPosition: {
          x: 230,
          y: 267
        },
        globalRotation: 0,
        id: 1018,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 10,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      globalPosition: {
        x: 230,
        y: 267
      },
      globalRotation: 0,
      id: 1017,
      isBody: true,
      name: "Area2D",
      position: {
        x: 230,
        y: 267
      },
      rotation: 0,
      type: "Area2D"
    }, {
      children: [],
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      id: 1019,
      name: "Node2D",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Roar"
    }, {
      children: [],
      globalPosition: {
        x: 36,
        y: 135
      },
      globalRotation: 0,
      id: 1020,
      name: "Marker2D",
      position: {
        x: 36,
        y: 135
      },
      rotation: 0,
      type: "Marker2D"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 195,
          y: 350
        },
        globalRotation: 0,
        id: 1022,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 200
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 390,
          y: 100
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: 440,
          y: 150
        },
        globalRotation: 0,
        id: 1023,
        name: "CollisionShape2D3",
        position: {
          x: 245,
          y: 0
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 100,
          y: 500
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: -50,
          y: 150
        },
        globalRotation: 0,
        id: 1024,
        name: "CollisionShape2D4",
        position: {
          x: -245,
          y: 0
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 100,
          y: 500
        },
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: 195,
          y: -50
        },
        globalRotation: 0,
        id: 1025,
        name: "CollisionShape2D2",
        position: {
          x: 0,
          y: -200
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 390,
          y: 100
        },
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      friction: 1,
      globalPosition: {
        x: 195,
        y: 150
      },
      globalRotation: 0,
      id: 1021,
      isBody: true,
      name: "StaticBody2D3",
      position: {
        x: 195,
        y: 150
      },
      rotation: 0,
      type: "StaticBody2D"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 166,
          y: 14
        },
        globalRotation: 0,
        id: 1027,
        name: "CollisionShape2D",
        position: {
          x: 101,
          y: -148
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 83,
          y: 20
        },
        type: "CollisionShape2D"
      } ],
      collisionLayer: 3,
      collisionMask: 3,
      friction: 1,
      globalPosition: {
        x: 65,
        y: 162
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1026,
      isBody: true,
      mass: 1,
      name: "RigidBody2D8",
      position: {
        x: 65,
        y: 162
      },
      rotation: 0,
      type: "RigidBody2D"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 135,
            y: 103
          },
          globalRotation: 0,
          id: 1030,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 40
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 135,
            y: 103
          },
          globalRotation: 1.571,
          id: 1031,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 40
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 135,
          y: 103
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1029,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 135,
          y: 103
        },
        globalRotation: 0,
        id: 1032,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 135,
        y: 103
      },
      globalRotation: 0,
      id: 1028,
      name: "Windmill",
      position: {
        x: 135,
        y: 103
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 97,
            y: 144
          },
          globalRotation: 0,
          id: 1035,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          shape: "rectangle",
          size: {
            x: 10,
            y: 40
          },
          type: "CollisionShape2D"
        }, {
          children: [],
          globalPosition: {
            x: 97,
            y: 144
          },
          globalRotation: 1.571,
          id: 1036,
          name: "CollisionShape2D2",
          position: {
            x: 0,
            y: 0
          },
          rotation: 1.571,
          shape: "rectangle",
          size: {
            x: 10,
            y: 40
          },
          type: "CollisionShape2D"
        } ],
        collisionLayer: 2,
        collisionMask: 2,
        constantTorque: .07,
        friction: 1,
        globalPosition: {
          x: 97,
          y: 144
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1034,
        isBody: true,
        mass: 32.1759986877441,
        name: "Body",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      }, {
        children: [],
        globalPosition: {
          x: 97,
          y: 144
        },
        globalRotation: 0,
        id: 1037,
        name: "Pin",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Pin"
      } ],
      globalPosition: {
        x: 97,
        y: 144
      },
      globalRotation: 0,
      id: 1033,
      name: "Windmill2",
      position: {
        x: 97,
        y: 144
      },
      rotation: 0,
      type: "Windmill"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 349,
            y: 242
          },
          globalRotation: 0,
          id: 1040,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          radius: 11.402,
          rotation: 0,
          shape: "circle",
          type: "CollisionShape2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        friction: 1,
        globalPosition: {
          x: 349,
          y: 242
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1039,
        isBody: true,
        mass: 1,
        name: "RigidBody2D",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      } ],
      globalPosition: {
        x: 349,
        y: 242
      },
      globalRotation: 0,
      id: 1038,
      name: "Ball",
      position: {
        x: 349,
        y: 242
      },
      rotation: 0,
      type: "Ball"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 317,
            y: 273
          },
          globalRotation: 0,
          id: 1043,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          radius: 11.402,
          rotation: 0,
          shape: "circle",
          type: "CollisionShape2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        friction: 1,
        globalPosition: {
          x: 317,
          y: 273
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1042,
        isBody: true,
        mass: 1,
        name: "RigidBody2D",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      } ],
      globalPosition: {
        x: 317,
        y: 273
      },
      globalRotation: 0,
      id: 1041,
      name: "Ball2",
      position: {
        x: 317,
        y: 273
      },
      rotation: 0,
      type: "Ball"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 21,
            y: 67
          },
          globalRotation: 0,
          id: 1046,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          radius: 11.402,
          rotation: 0,
          shape: "circle",
          type: "CollisionShape2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        friction: 1,
        globalPosition: {
          x: 21,
          y: 67
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1045,
        isBody: true,
        mass: 1,
        name: "RigidBody2D",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      } ],
      globalPosition: {
        x: 21,
        y: 67
      },
      globalRotation: 0,
      id: 1044,
      name: "Ball6",
      position: {
        x: 21,
        y: 67
      },
      rotation: 0,
      type: "Ball"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 350,
            y: 271
          },
          globalRotation: 0,
          id: 1049,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          radius: 11.402,
          rotation: 0,
          shape: "circle",
          type: "CollisionShape2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        friction: 1,
        globalPosition: {
          x: 350,
          y: 271
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1048,
        isBody: true,
        mass: 1,
        name: "RigidBody2D",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      } ],
      globalPosition: {
        x: 350,
        y: 271
      },
      globalRotation: 0,
      id: 1047,
      name: "Ball3",
      position: {
        x: 350,
        y: 271
      },
      rotation: 0,
      type: "Ball"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 376,
            y: 278
          },
          globalRotation: 0,
          id: 1052,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          radius: 11.402,
          rotation: 0,
          shape: "circle",
          type: "CollisionShape2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        friction: 1,
        globalPosition: {
          x: 376,
          y: 278
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1051,
        isBody: true,
        mass: 1,
        name: "RigidBody2D",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      } ],
      globalPosition: {
        x: 376,
        y: 278
      },
      globalRotation: 0,
      id: 1050,
      name: "Ball4",
      position: {
        x: 376,
        y: 278
      },
      rotation: 0,
      type: "Ball"
    }, {
      children: [ {
        bounce: 0,
        children: [ {
          children: [],
          globalPosition: {
            x: 370,
            y: 219
          },
          globalRotation: 0,
          id: 1055,
          name: "CollisionShape2D",
          position: {
            x: 0,
            y: 0
          },
          radius: 11.402,
          rotation: 0,
          shape: "circle",
          type: "CollisionShape2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        friction: 1,
        globalPosition: {
          x: 370,
          y: 219
        },
        globalRotation: 0,
        gravityScale: 1,
        id: 1054,
        isBody: true,
        mass: 1,
        name: "RigidBody2D",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "RigidBody2D"
      } ],
      globalPosition: {
        x: 370,
        y: 219
      },
      globalRotation: 0,
      id: 1053,
      name: "Ball5",
      position: {
        x: 370,
        y: 219
      },
      rotation: 0,
      type: "Ball"
    }, {
      children: [ {
        children: [],
        globalPosition: {
          x: 194,
          y: 74
        },
        globalRotation: 0,
        id: 1057,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 31.257,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      }, {
        children: [],
        globalPosition: {
          x: 235,
          y: 23
        },
        globalRotation: 0,
        id: 1058,
        name: "Node2D",
        position: {
          x: 41,
          y: -51
        },
        rotation: 0,
        type: "Node2D"
      }, {
        children: [],
        globalPosition: {
          x: 230,
          y: 129.5
        },
        globalRotation: 0,
        id: 1059,
        name: "CollisionShape2D2",
        position: {
          x: 36,
          y: 55.5
        },
        rotation: 0,
        shape: "rectangle",
        size: {
          x: 20,
          y: 41
        },
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      direction: {
        x: .627,
        y: -.779
      },
      globalPosition: {
        x: 194,
        y: 74
      },
      globalRotation: 0,
      id: 1056,
      isBody: true,
      name: "GravityField",
      position: {
        x: 194,
        y: 74
      },
      rotation: 0,
      type: "GravityField"
    }, {
      bounce: 0,
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "chicken",
      friction: 1,
      globalPosition: {
        x: 260,
        y: 169
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1060,
      isBody: true,
      mass: 1,
      name: "Chicken",
      position: {
        x: 260,
        y: 169
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "elephant",
      friction: 1,
      globalPosition: {
        x: 354,
        y: 159
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1061,
      isBody: true,
      mass: 1,
      name: "Elephant",
      position: {
        x: 354,
        y: 159
      },
      rotation: 0,
      type: "Critter"
    }, {
      children: [ {
        children: [ {
          children: [],
          globalPosition: {
            x: 0,
            y: 0
          },
          globalRotation: 0,
          id: 1064,
          name: "CollisionPolygon2D",
          polygons: [ {
            center: {
              x: 0,
              y: 0
            },
            verts: "-20.0 -40.0 20.0 -40.0 40.0 -20.0 40.0 20.0 20.0 40.0 -20.0 40.0 -40.0 20.0 -40.0 -20.0"
          } ],
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          type: "CollisionPolygon2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        gravity: 1,
        id: 1063,
        isBody: true,
        name: "Touch",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "GravityWell"
      }, {
        children: [ {
          children: [],
          globalPosition: {
            x: 0,
            y: 0
          },
          globalRotation: 0,
          id: 1066,
          name: "CollisionPolygon2D",
          polygons: [ {
            center: {
              x: 0,
              y: 0
            },
            verts: "-10.0 -20.0 10.0 -20.0 20.0 -10.0 20.0 10.0 10.0 20.0 -10.0 20.0 -20.0 10.0 -20.0 -10.0"
          } ],
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          type: "CollisionPolygon2D"
        } ],
        collisionLayer: 1,
        collisionMask: 1,
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        gravity: 1,
        id: 1065,
        isBody: true,
        name: "Mouse",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "GravityWell"
      } ],
      id: 1062,
      name: "PushController",
      type: "PushController"
    }, {
      children: [ {
        children: [],
        globalPosition: {
          x: 115,
          y: 219
        },
        globalRotation: -.15,
        id: 1068,
        name: "Door",
        path: "res://images/door.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 115,
          y: 219
        },
        globalRotation: -.15,
        id: 1069,
        name: "CollisionShape2D",
        position: {
          x: 0,
          y: 0
        },
        radius: 6,
        rotation: 0,
        shape: "circle",
        type: "CollisionShape2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      globalPosition: {
        x: 115,
        y: 219
      },
      globalRotation: -.15,
      id: 1067,
      isBody: true,
      name: "Door",
      position: {
        x: 115,
        y: 219
      },
      rotation: -.15,
      type: "Door"
    } ];
 // ./src/levels.js
        const levels = {
      level,
      level2: level_2_level
    };
    // ./src/challenge.js
    class Challenge {
      _challengeIsComplete=false;
      dispose() {
        matter.Events.off(this);
      }
      complete() {
        if (this._challengeIsComplete) return;
        this._challengeIsComplete = true;
        console.log("Challenge has completed");
        matter.Events.trigger(this, "complete");
      }
    }
    // ./src/ad-challenge/ad-challenge-state.js
    class AdChallengeState {
      /**
   * @param {AdChallenge} challenge
   */
      constructor(challenge) {
        this.challenge = challenge;
      }
      dispose() {}
      enter() {}
      /**
   * @param {number} delta
   */      update(delta) {}
      draw() {}
    }
    // ./src/ad-challenge/states/ad-education-screen.js
    class AdEducationScreen extends AdChallengeState {
      /**
   * @param {AdChallenge} challenge
   */
      constructor(challenge) {
        super(challenge);
        this.timePresent = 0;
        this.completeTime = 10;
      }
      /**
   * @returns {number}
   */      get progress() {
        return Math.min(this.timePresent / this.completeTime);
      }
      enter() {
        super.enter();
        const presence = this.challenge.presence;
        presence.steering = Math.random() * Math.PI * 2;
        presence.position.x = 390 / 2;
        presence.position.y = 300 / 2;
        this.challenge.video.style.display = "block";
        this.challenge.configurePresence();
      }
      /**
   * @param {number} delta
   */      update(delta) {
        const presence = this.challenge.presence;
        const t = this.timePresent / this.completeTime;
        presence.update(delta, utils_lerp(presence.moveSpeed.min * .1, presence.moveSpeed.min, t), utils_lerp(presence.steeringSpeed.min * .1, presence.steeringSpeed.min, t));
        if (presence.pointIsInRadius(this.challenge.inputController.mousePos)) {
          this.timePresent += delta;
        }
        if (this.timePresent >= this.completeTime) {
          this.challenge.changeState(new AdPlayScreen(this.challenge));
        }
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   */      draw(ctx) {
        ctx.save();
        const cfg = src_config.ad.education;
        ctx.clearRect(0, 0, this.challenge.canvas.width, this.challenge.canvas.height);
        let alpha = 1 - easeInExpo(this.progress);
        ctx.globalAlpha = alpha;
        if (cfg.gradient) {
          drawGradient(ctx, this.challenge.canvas.width, this.challenge.canvas.height, cfg.gradient);
        }
        ctx.globalAlpha = 1;
        const r = rough.canvas(this.challenge.canvas);
        drawProgress(ctx, this.challenge.presence.position.x, this.challenge.presence.position.y, this.challenge.presence.radius, 5, this.progress, r);
        this.challenge.presence.draw(ctx, this.challenge.mouse);
        drawMessages(ctx, cfg.messages ?? [], this.timePresent);
        ctx.restore();
      }
    }
    // ./src/captcha-button.js
    class CaptchaButton {
      /**
   * @param {EllipticalButtonConfig} cfg
   */
      constructor(cfg) {
        this.cfg = cfg;
        this._isHovered = false;
        this.rotation = 0;
        this.position = matter.Vector.create(cfg.position?.x ?? 0, cfg.position?.y ?? 0);
        this.timeSpent = 0;
        this.spinSpeed = cfg.spinSpeed ?? 0;
        this.rotationScale = cfg.rotationScale ?? 0;
        this.clickSound = cfg.clickSound ?? src_config.defaultButtonClickSound;
      }
      get isHovered() {
        return this._isHovered;
      }
      dispose() {
        matter.Events.off(this);
      }
      set isHovered(value) {
        if (value == this._isHovered) return;
        this._isHovered = value;
        playSound(src_config.ad.failure.retryHoverSound);
      }
      /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */      pointIntersects(x, y) {
        return isPointInRotatedEllipse(x, y, this.position.x, this.position.y, this.cfg.radiusX, this.cfg.radiusY, this.rotation);
      }
      /**
   * @param {number} delta
   * @param {Matter.Vector} mousePos
   */      update(delta, mousePos) {
        this.timeSpent += delta;
        let r = Math.sin(this.timeSpent * this.spinSpeed) * this.rotationScale;
        this.rotation = r;
        if (mousePos && this.pointIntersects(mousePos.x, mousePos.y)) {
          this.isHovered = true;
        } else {
          this.isHovered = false;
        }
      }
      checkClick(mousePos) {
        if (this.pointIntersects(mousePos.x, mousePos.y)) {
          playSound(this.clickSound);
          matter.Events.trigger(this, "click");
        }
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   */      draw(ctx) {
        ctx.save();
        ctx.rotate(this.rotation);
        const cfg = this.cfg;
        const pos = this.position;
        let {x: x0, y: y0} = inverseRotatePoint(pos.x - 2, pos.y - 2, 0, 0, this.rotation);
        let {x: x1, y: y1} = inverseRotatePoint(pos.x + 2, pos.y + 2, 0, 0, this.rotation);
        let {x, y} = inverseRotatePoint(pos.x, pos.y, 0, 0, this.rotation);
        const style = this.isHovered ? cfg.hoverStyle : cfg.style;
        ctx.strokeStyle = "#333";
        ctx.lineWidth = style.lineWidth;
        ctx.fillStyle = "#333";
        ctx.beginPath();
        ctx.ellipse(x1, y1, cfg.radiusX, cfg.radiusY, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = "#eee";
        ctx.lineWidth = style.lineWidth;
        ctx.fillStyle = "#eee";
        ctx.beginPath();
        ctx.ellipse(x0, y0, cfg.radiusX, cfg.radiusY, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = style.stroke;
        ctx.lineWidth = style.lineWidth;
        ctx.fillStyle = style.fillStyle;
        ctx.beginPath();
        ctx.ellipse(x, y, cfg.radiusX, cfg.radiusY, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.font = style.font;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // Shadow (bottom-right, dark)
                ctx.fillStyle = "#333";
        ctx.fillText(cfg.text, x + 2, y + 2);
        // Highlight (top-left, light)
                ctx.fillStyle = "#eee";
        ctx.fillText(cfg.text, x - 2, y - 2);
        // Main text (middle, colored)
                ctx.fillStyle = style.color;
        ctx.fillText(this.cfg.text, x, y);
        ctx.restore();
      }
    }
    // ./src/ad-challenge/states/ad-failure-screen.js
    class AdFailureScreen extends AdChallengeState {
      /**
   * @param {AdChallenge} challenge
   */
      constructor(challenge) {
        super(challenge);
        this.canvas = this.challenge.canvas;
        this.timeSpent = 0;
        this.retry = new CaptchaButton(src_config.ad.failure.retry);
        this.buttons = [ this.retry ];
        this.renderer = new Renderer(this.canvas);
        this.bgSprites = src_config.ad.failure.bgSprites?.map((e => new BgSprite(e, this.challenge.sprites)));
        this.bounceSoundCooldown = .5;
        this.prevRetryDot = 0;
        this.onClick = this.onClick.bind(this);
        this.onRetry = this.onRetry.bind(this);
        matter.Events.on(this.retry, "click", this.onRetry);
      }
      enter() {
        matter.Events.on(this.challenge.inputController, "click", this.onClick);
        playSound(src_config.ad.failure.failureSound);
      }
      dispose() {
        matter.Events.off(this.challenge.inputController, "click", this.onClick);
        super.dispose();
      }
      onClick(position) {
        for (const button of this.buttons) {
          button.checkClick(position);
        }
      }
      onRetry() {
        this.challenge.changeState(new AdEducationScreen(this.challenge));
      }
      updateRetryPosition(time) {
        let t = Math.max(Math.min((time - src_config.ad.failure.retryPosition.delay) / src_config.ad.failure.retryPosition.duration, 1), 0);
        t = easeOutBounce(t);
        const pos = lerpVector(src_config.ad.failure.retryPosition.start, src_config.ad.failure.retryPosition.end, t);
        const playBounceSound = utils_distance(pos, src_config.ad.failure.retryPosition.end) < 10 && t < 1;
        if (playBounceSound && this.bounceSoundCooldown <= 0) {
          this.bounceSoundCooldown = .1;
          playSound(src_config.ad.failure.retryBounceSound);
        }
        this.retry.position = pos;
      }
      update(delta) {
        this.timeSpent += delta;
        this.updateRetryPosition(this.timeSpent);
        this.bounceSoundCooldown = Math.max(this.bounceSoundCooldown - delta, 0);
        // this.retry.update(delta, this.challenge.inputController.mousePos);
                for (const button of this.buttons) {
          button.update(delta, this.challenge.inputController.mousePos);
        }
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   */      draw(ctx) {
        ctx.save();
        const cfg = src_config.ad.failure;
        drawGradient(ctx, this.challenge.canvas.width, this.challenge.canvas.height, cfg.gradient);
        for (const bgSprite of this.bgSprites) {
          bgSprite.draw(ctx, this.timeSpent, this.renderer);
        }
        ctx.fillStyle = "yellow";
        drawMessages(ctx, cfg.messages, this.timeSpent);
        for (const button of this.buttons) {
          button.draw(ctx);
        }
        ctx.restore();
      }
    }
    // ./src/ad-challenge/ad-presence.js
    class AdPresence {
      /**
   * @param {Matter.Vector} position
   * @param {number} radius
   * @param {number} steering
   * @param {import('../speed-slider').SpeedSlider} steeringSpeed
   * @param {import('../speed-slider').SpeedSlider} moveSpeed
   */
      constructor(position, radius, steering, steeringSpeed, moveSpeed) {
        this.position = position;
        this.radius = radius;
        this.steering = steering;
        this.steeringSpeed = steeringSpeed;
        this.moveSpeed = moveSpeed;
      }
      get visualPosition() {
        return matter.Vector.add(this.position, matter.Vector.create(-16, -16));
      }
      /**
   * @param {Matter.Vector} position
   * @returns {boolean}
   */      pointIsInRadius(position) {
        return matter.Vector.magnitude(matter.Vector.sub(this.position, position)) <= this.radius;
      }
      /**
   *
   * @param {number} delta
   * @param {number} fixedMoveSpeed
   * @param {number} fixedSteering
   */      update(delta, fixedMoveSpeed, fixedSteering) {
        if (fixedMoveSpeed !== undefined) {
          this.moveSpeed.value = fixedMoveSpeed;
        } else {
          this.moveSpeed.update(delta);
        }
        if (fixedSteering !== undefined) {
          this.steeringSpeed.value = fixedSteering;
        } else {
          this.steeringSpeed.update(delta);
        }
        const moveSpeed = this.moveSpeed.value;
        const steeringSpeed = this.steeringSpeed.value;
        this.steering += (Math.random() * 2 - 1) * steeringSpeed * delta;
        const x = Math.cos(this.steering) * moveSpeed;
        const y = Math.sin(this.steering) * moveSpeed;
        this.position.x += x;
        this.position.y += y;
        if (this.position.x > 370 || this.position.x < 20 || this.position.y > 280 || this.position.y < 20) {
          this.steering = Math.atan2(150 - this.position.y, 390 / 2 - this.position.x);
          const sound = [ ...src_config.ad.play.presenceBounceSound ];
          const percent = (moveSpeed - this.moveSpeed.min) / (this.moveSpeed.max - this.moveSpeed.min);
          sound[zzfxIndex.volume] += percent;
          playSound(sound);
        }
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   */      draw(ctx, mouse) {
        ctx.save();
        const pos = this.visualPosition;
        ctx.drawImage(mouse, pos.x, pos.y);
        ctx.restore();
      }
    }
    // ./src/speed-slider.js
    class SpeedSlider {
      /**
   * @param {number} min
   * @param {number} max
   * @param {number} changePeriod
   * @param {number} changeRandomness
   */
      constructor(min, max, changePeriod, changeRandomness) {
        this.min = min;
        this.max = max;
        this.start = min;
        this.target = randRange(min, max);
        this.value = this.start;
        this.timeSinceChange = 0;
        this.changePeriod = changePeriod;
        this.changeRandomness = changeRandomness;
        this.interval = this.changePeriod + randRange(-this.changeRandomness * .5, this.changeRandomness * .5);
      }
      /**
   * @param {number} delta
   */      update(delta) {
        this.timeSinceChange += delta;
        if (this.timeSinceChange >= this.interval) {
          this.start = this.target;
          this.target = randRange(this.min, this.max);
          this.timeSinceChange = 0;
          this.interval = this.changePeriod + randRange(-this.changeRandomness * .5, this.changeRandomness * .5);
        }
        let t = Math.min(this.timeSinceChange / this.interval, this.interval);
        // t = easeOutBounce(t);
                this.value = utils_lerp(this.start, this.target, t);
      }
    }
    // ./src/ad-challenge/states/ad-success-screen.js
    class AdSuccessScreen extends AdChallengeState {
      /**
   * @param {import('../ad-challenge.js').AdChallenge} challenge
   */
      constructor(challenge) {
        super(challenge);
        const yes = new CaptchaButton(src_config.ad.success.yes);
        const no = new CaptchaButton(src_config.ad.success.no);
        this.buttons = [ yes, no ];
        this.timeSpent = 0;
        this.bgSprites = src_config.ad.success.bgSprites?.map((e => new BgSprite(e, this.challenge.sprites)));
        this.renderer = new Renderer(this.challenge.canvas);
        this.onClick = this.onClick.bind(this);
        this.onYes = this.onYes.bind(this);
        this.onNo = this.onNo.bind(this);
        matter.Events.on(yes, "click", this.onYes);
        matter.Events.on(no, "click", this.onNo);
      }
      enter() {
        matter.Events.on(this.challenge.inputController, "click", this.onClick);
        zzfx(...src_config.ad.success.loadSound);
      }
      dispose() {
        matter.Events.off(this.challenge.inputController, "click", this.onClick);
        for (const button of this.buttons) {
          button.dispose();
        }
        super.dispose();
      }
      /**
   * @param {number} delta
   */      update(delta) {
        this.timeSpent += delta;
        for (const button of this.buttons) {
          button.update(delta, this.challenge.inputController.mousePos);
        }
      }
      /** @param {CanvasRenderingContext2D} ctx */      draw(ctx) {
        ctx.save();
        const cfg = src_config.ad.success;
        if (cfg.gradient) {
          drawGradient(ctx, this.challenge.canvas.width, this.challenge.canvas.height, cfg.gradient);
        }
        for (const bgSprite of this.bgSprites) {
          bgSprite.draw(ctx, this.timeSpent, this.renderer);
        }
        drawMessages(ctx, cfg.messages, this.timeSpent);
        for (const button of this.buttons) {
          button.draw(ctx);
        }
        ctx.restore();
      }
      onClick(position) {
        for (const button of this.buttons) {
          button.checkClick(position);
        }
      }
      onYes() {
        this.challenge.changeState(new AdEducationScreen(this.challenge));
      }
      onNo() {
        this.challenge.complete();
      }
    }
    // ./src/ad-challenge/states/ad-play-screen.js
    class AdPlayScreen extends AdChallengeState {
      /**
   * @param {AdChallenge} challenge
   */
      constructor(challenge) {
        super(challenge);
        this.timePresent = 0;
        this.timeAbsent = 0;
        // this._inputController = new InputController(this.canvas);
                this.mouseTrailLifeTime = src_config.ad.mouseTrailLifeTime ?? 1;
        this.timeSpent = 0;
        this._duration = 30;
        this.onEnded = this.onEnded.bind(this);
        if (this.mouseTrailLifeTime > 0) {
          this.mouseTrail = new MouseTrail(this.challenge.canvas, src_config.ad.mouseTrailSpread ?? 10, src_config.ad.maxMouseTrails);
          this.presenceTrail = new MouseTrail(this.challenge.canvas, src_config.ad.mouseTrailSpread ?? 10, src_config.ad.maxMouseTrails);
        }
      }
      /**
   * @returns {HTMLVideoElement}
   */      get captchaVideo() {
        return this.challenge.video;
      }
      enter() {
        super.enter();
        this.captchaVideo.addEventListener("ended", this.onEnded);
        this.captchaVideo.style.display = "block";
        this.captchaVideo.currentTime = 0;
        this.captchaVideo.play();
        this.challenge.attempts++;
      }
      dispose() {
        this.captchaVideo.style.display = "none";
        this.captchaVideo.removeEventListener("ended", this.onEnded);
        this.captchaVideo.pause();
        this.captchaVideo.currentTime = 0;
        super.dispose();
      }
      onEnded() {
        src_config.ad.leniency;
        const index = Math.min(this.challenge.attempts, src_config.ad.leniency.length - 1);
        const minScoreRequired = src_config.ad.leniency[index];
        const score = this.timePresent / this.timeSpent;
        console.log(`Score ${score} min ${minScoreRequired}`);
        if (score >= minScoreRequired) {
          this.challenge.changeState(new AdSuccessScreen(this.challenge));
        } else {
          this.challenge.changeState(new AdFailureScreen(this.challenge));
        }
      }
      /**
   * @param {number} delta
   */      update(delta) {
        this.timeSpent += delta;
        const presence = this.challenge.presence;
        presence.update(delta);
        this.mouseTrail?.update(this.challenge.inputController.mousePos);
        this.presenceTrail?.update(presence.visualPosition);
        if (presence.pointIsInRadius(this.challenge.inputController.mousePos)) {
          this.timePresent += delta;
        } else {
          this.timeAbsent += delta;
        }
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   */      draw(ctx) {
        const progress = this.captchaVideo.currentTime / this.captchaVideo.duration;
        ctx.save();
        ctx.clearRect(0, 0, this.challenge.canvas.width, this.challenge.canvas.height);
        drawMessages(ctx, src_config.ad.play.messages, this.timeSpent);
        this.challenge.presence.draw(ctx, this.challenge.mouse);
        if (this.mouseTrail) {
          this.mouseTrail.draw(ctx, this.challenge.mouse, this.mouseTrailLifeTime);
        }
        if (this.presenceTrail) {
          this.presenceTrail.draw(ctx, this.challenge.mouse, this.mouseTrailLifeTime);
        }
        ctx.beginPath();
        // ctx.rect(0, 20, this.presence.x, 40);
                ctx.strokeStyle = "#09f";
        ctx.lineWidth = 1;
        ctx.rect(0, 20, this.presence * 10, 40);
        ctx.strokeStyle = "#09f";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
        ctx.resetTransform();
        const radius = src_config.ad.progressRadius ?? 10;
        const progressThickness = src_config.ad.progressThickness ?? 10;
        drawProgress(ctx, 370, 280, radius, progressThickness, progress);
        ctx.restore();
      }
    }
    // ./src/ad-challenge/ad-challenge-debug.js
    class AdChallengeDebug {
      /**
   * @param {import('./ad-challenge').AdChallenge} challenge
   */
      constructor(challenge) {
        this.challenge = challenge;
        this.onKeyUp = this.onKeyUp.bind(this);
        window.addEventListener("keyup", this.onKeyUp);
      }
      dispose() {
        window.removeEventListener("keyup", this.onKeyUp);
      }
      /**
   * @param {KeyboardEvent} event
   */      onKeyUp(event) {
        if (!debugConfig.isEnabled) return;
        switch (event.code) {
         case "Digit1":
          this.challenge.changeState(new AdEducationScreen(this.challenge));
          break;

         case "Digit2":
          this.challenge.changeState(new AdPlayScreen(this.challenge));
          break;

         case "Digit3":
          this.challenge.changeState(new AdFailureScreen(this.challenge));
          break;

         case "Digit4":
          this.challenge.changeState(new AdSuccessScreen(this.challenge));
          break;
        }
      }
    }
    // ./src/ad-challenge/ad-challenge.js
    class AdChallenge extends Challenge {
      /**
   * @param {HTMLCanvasElement} canvas
   * @param {HTMLVideoElement} video
   * @param {HTMLImageElement} mouse
   * @param {import("../sprite").Sprites} sprites
   */
      constructor(canvas, video, mouse, sprites) {
        super();
        this.isDisposed = false;
        this.canvas = canvas;
        this.video = video;
        this.mouse = mouse;
        this.sprites = sprites;
        this.attempts = -1;
        this.onUpdate = this.onUpdate.bind(this);
        this.inputController = new InputController(this.canvas);
        this._state = new AdEducationScreen(this);
        // this._state = new AdSuccessScreen(this);
        // this._state = new AdPlayScreen(this);
        // this._state = new AdFailureScreen(this);
                this.lastUpdate = performance.now();
        this.configurePresence();
        this.debug = new AdChallengeDebug(this);
        requestAnimationFrame((timestamp => {
          if (this.isDisposed) return;
          this._state.enter();
          this.lastFrame = timestamp;
          requestAnimationFrame(this.onUpdate);
        }));
      }
      dispose() {
        console.log("Disposed ad challenge.");
        this.isDisposed = true;
        this._state.dispose();
        this.inputController.dispose();
        this.debug.dispose();
        super.dispose();
      }
      configurePresence() {
        const index = Math.max(Math.min(this.attempts + 1, src_config.ad.difficulties.length - 1), 0);
        console.log(`Difficulty: ${index}`);
        const difficulty = src_config.ad.difficulties[index];
        const steeringConfig = difficulty.steeringSpeed;
        const moveSpeedConfig = difficulty.moveSpeed;
        this.presence = new AdPresence(matter.Vector.create(390 / 2, 300 / 2), difficulty.presenceRadius ?? 10, 0, new SpeedSlider(steeringConfig?.min ?? 10, steeringConfig?.max ?? 10, steeringConfig?.changePeriod ?? 1, steeringConfig?.changeRandomness ?? 0), new SpeedSlider(moveSpeedConfig?.min ?? 1, moveSpeedConfig?.max ?? 1, moveSpeedConfig?.changePeriod ?? 1, moveSpeedConfig?.changeRandomness ?? 0));
      }
      /**
   * @param {State} newState
   */      changeState(newState) {
        this._queuedState = newState;
      }
      onUpdate(now) {
        if (this.isDisposed) return;
        const delta = (now - this.lastUpdate) * .001;
        this.lastUpdate = now;
        if (this._queuedState) {
          const oldState = this._state;
          oldState.dispose();
          this._state = this._queuedState;
          this._state.enter();
          this._queuedState = null;
        }
        const ctx = this.canvas.getContext("2d");
        if (this._state) {
          this._state.update(delta);
          this._state.draw(ctx);
        }
        if (this.inputController.showMouse) {
          ctx.drawImage(this.mouse, this.inputController.mousePos.x, this.inputController.mousePos.y);
        }
        requestAnimationFrame(this.onUpdate);
      }
    }
    class InputController {
      /**
   * @param {HTMLCanvasElement} canvas
   */
      constructor(canvas) {
        this.canvas = canvas;
        this.mousePos = matter.Vector.create(-1e3, -1e3);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchCancel = this.onTouchCancel.bind(this);
        this._touchStart = null;
        this.showMouse = false;
        this.canvas.addEventListener("mousemove", this.onMouseMove);
        this.canvas.addEventListener("click", this.onClick);
        this.canvas.addEventListener("touchstart", this.onTouchStart, {
          passive: false
        });
        this.canvas.addEventListener("touchmove", this.onTouchMove, {
          passive: false
        });
        this.canvas.addEventListener("touchend", this.onTouchEnd);
        this.canvas.addEventListener("touchcancel", this.onTouchCancel);
      }
      dispose() {
        this.canvas.removeEventListener("mousemove", this.onMouseMove);
        this.canvas.removeEventListener("click", this.onClick);
        this.canvas.removeEventListener("touchstart", this.onTouchStart);
        this.canvas.removeEventListener("touchmove", this.onTouchMove);
        this.canvas.removeEventListener("touchend", this.onTouchEnd);
        this.canvas.addEventListener("touchcancel", this.onTouchCancel);
        matter.Events.off(this);
      }
      /**
   * @param {MouseEvent} event
   */      onMouseMove(event) {
        if (this._touchStart != null && new Date - this._touchStart < 500) {
          return;
        }
        this.showMouse = true;
        this.mousePos.x = event.x;
        this.mousePos.y = event.y;
      }
      /**
   * @param {MouseEvent} event
   */      onClick(event) {
        matter.Events.trigger(this, "click", matter.Vector.create(event.x, event.y));
      }
      /**
   * @param {TouchEvent} event
   */      onTouchStart(event) {
        this.mousePos.x = event.touches[0].clientX;
        this.mousePos.y = event.touches[0].clientY;
        matter.Events.trigger(this, "click", matter.Vector.create(event.touches[0].clientX, event.touches[0].clientY));
        event.preventDefault();
      }
      /**
   * @param {TouchEvent} event
   */      onTouchMove(event) {
        this.mousePos.x = event.touches[0].clientX;
        this.mousePos.y = event.touches[0].clientY;
        event.preventDefault();
      }
      /**
   * @param {TouchEvent} event
   */      onTouchEnd(event) {
        this.mousePos.x = -1e3;
        this.mousePos.y = -1e3;
      }
      /**
   * @param {TouchEvent} event
   */      onTouchCancel(event) {
        this.mousePos.x = -1e3;
        this.mousePos.y = -1e3;
      }
    }
    class MouseTrail {
      constructor(canvas, spread, trailLength) {
        this.canvas = canvas;
        this._spread = spread;
        this._points = Array.from({
          length: trailLength
        }, ((_, __) => new MouseTrailPoint(matter.Vector.create(0, 0), -Infinity)));
        this._lastIndex = 0;
      }
      _getPoint(offset) {
        let index = (this._lastIndex - offset) % this._points.length;
        if (index < 0) {
          index = this._points.length + index;
        }
        return this._points[index];
      }
      /**
   *
   * @param {Matter.Vector} mousePos
   */      update(mousePos) {
        const pos = matter.Vector.clone(mousePos);
        const now = performance.now();
        const prevMinus1 = this._getPoint(1);
        if (utils_distance(prevMinus1.pos, pos) < this._spread) {
          const prev = this._getPoint(0);
          prev.pos = pos;
          prev.timestamp = now;
          return;
        }
        const point = new MouseTrailPoint(pos, now);
        const nextIndex = (this._lastIndex + 1) % this._points.length;
        this._points[nextIndex] = point;
        this._lastIndex = nextIndex;
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLCanvasElement} canvas
   * @param {number} maxAge
   */      draw(ctx, mouse, maxAge) {
        maxAge ??= 0;
        if (maxAge == 0) return;
        if (this._points.length < 2) return;
        const lastPoint = this._getPoint(0);
        if (lastPoint == null) return;
        const now = performance.now();
        ctx.save();
        for (let offset = this._points.length - 1; offset >= 0; offset--) {
          const point = this._getPoint(offset);
          const age = (now - point.timestamp) * .001;
          if (age > maxAge) continue;
          ctx.globalAlpha = 1 - age / maxAge;
          ctx.drawImage(mouse, point.pos.x, point.pos.y);
        }
        ctx.restore();
      }
    }
    class MouseTrailPoint {
      /**
   * @param {Matter.Vector} pos
   * @param {number} timestamp
   */
      constructor(pos, timestamp) {
        this.pos = pos;
        this.timestamp = timestamp;
      }
    }
    class BgSprite {
      constructor(cfg, sprites) {
        this.positions = cfg.positions.map((e => matter.Vector.create(e.x, e.y)));
        this.bounceRate = cfg.bounceRate ?? 0;
        this.spinRate = cfg.spinRate ?? 0;
        this.spinRange = cfg.spinRange ?? 0;
        this.animatedSprite = new AnimatedSprite(cfg.sprites.map((name => {
          const sprite = sprites[name];
          console.assert(sprite != null);
          return sprite;
        })), cfg.frameRate ?? 1);
      }
      /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} time
   * @param {import("../renderer").Renderer} renderer
   */      draw(ctx, time, renderer) {
        const sprite = this.animatedSprite.getFrame(time);
        const posIndex = Math.floor(time * this.bounceRate % this.positions.length);
        const rotation = Math.sin(time * this.spinRate) * this.spinRange;
        renderer.sprite(sprite, {
          x: this.positions[posIndex].x,
          y: this.positions[posIndex].y,
          rotation
        });
      }
    }
    // ./src/subscription.js
    class Subscription {
      constructor(object, event, callback) {
        console.assert(object != null);
        console.assert(event != null);
        console.assert(callback != null);
        this.object = object;
        this.event = event;
        this.callback = callback;
        matter.Events.on(object, event, callback);
      }
      dispose() {
        if (this.object == null) return;
        matter.Events.off(this.object, this.event, this.callback);
        this.object = null;
        this.event = null;
        this.callback = null;
      }
    }
    // ./src/entities/entity.js
    let _nextId = 1;
    class Entity {
      /**
   * @type {number}
   */
      id;
      queueFree;
      /**
   * @type {Challenge}
   */
      challenge;
      _drawSubscriptions=[];
      /**
   * @returns {Matter.World}
   */
      get world() {
        return this.challenge.engine.world;
      }
      get canvas() {
        return this.challenge.renderer.canvas;
      }
      /**
   *
   * @param {Challenge} challenge
   */      constructor(challenge) {
        this.id = _nextId++;
        this.challenge = challenge;
        this.queueFree = false;
        /**
     * @type {Subscription[]}
     */        this._subscriptions = [];
        /** @type {import('./component').Component[]}*/        this.components = [];
      }
      /**
   *
   * @param {number} delta
   */      update(delta) {}
      onRemoved() {
        for (const component of this.components) {
          component.dispose();
        }
        for (const subscription of this._subscriptions) {
          subscription.dispose();
        }
        this._subscriptions.length = 0;
        for (const callback of this._drawSubscriptions) {
          this.challenge.unregisterDraw(callback);
        }
        matter.Events.off(this);
      }
      subscribeTo(object, event, callback) {
        this._subscriptions.push(new Subscription(object, event, callback.bind(this)));
      }
      registerDraw(callback, depth) {
        callback = callback.bind(this);
        this._drawSubscriptions.push(callback);
        this.challenge.registerDraw(callback, depth);
      }
    }
    class EntityCollision {
      /**
   *
   * @param {Matter.pair} pair
   * @param {Matter.Body} otherBody
   * @param {Entity} other
   */
      constructor(pair, otherBody, other) {
        this.pair = pair;
        this.otherBody = otherBody;
        this.other = other;
      }
    }
    // ./src/entities/windmill.js
    class Windmill extends Entity {
      /**
   * @type {Body}
   */
      body;
      /**
   * @type {number}
   */
      speed;
      /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {number} speed
   */
      constructor(challenge, body, speed) {
        super(challenge);
        speed *= Math.sign(Math.random() - .5);
        this.body = body;
        this.speed = speed;
        this.subscribeTo(this.challenge, "beforeUpdate", this._onUpdate);
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
      _onUpdate() {
        matter.Body.setAngularVelocity(this.body, this.speed);
      }
    }
    // ./src/captcha-plugin.js
    class CaptchaPlugin {
      entity;
      /**
   *
   * @param {number} entity
   */
      constructor(entity) {
        this.entity = entity;
      }
    }
    // ./src/entities/gravity-well.js
    class GravityWell extends Entity {
      /**
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {number} gravity
   */
      constructor(challenge, body, gravity) {
        console.assert(body != null);
        super(challenge);
        this.body = body;
        this.gravity = gravity;
        body.plugin = new CaptchaPlugin(this.id);
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
    }
    // ./src/entities/gravity-field.js
    class GravityField extends Entity {
      /**
   * @type {Matter.Vector}
   */
      direction;
      /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {Matter.Vector} direction
   */
      constructor(challenge, body, direction) {
        super(challenge, body);
        console.assert(body != null);
        console.assert(direction != null);
        body.plugin = new CaptchaPlugin(this.id);
        this.body = body;
        this.direction = direction;
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
    }
    // ./src/entities/component.js
    class Component {
      constructor() {
        /**
     * @type {Subscription[]}
     */
        this._subscriptions = [];
      }
      dispose() {
        for (const subscription of this._subscriptions) {
          subscription.dispose();
        }
        this._subscriptions.length = 0;
      }
      subscribeTo(object, event, callback) {
        this._subscriptions.push(new Subscription(object, event, callback.bind(this)));
      }
    }
    // ./src/entities/hopper.js
    class Hopper extends Component {
      /**
   * @param {import('./critter').Critter} critter
   */
      constructor(critter) {
        super();
        this.critter = critter;
        this.critter.challenge;
        this.beforeUpdate = this.beforeUpdate.bind(this);
        this.hopCooldown = randRange(src_config.hopCooldown[0], src_config.hopCooldown[1]);
        this.hopChargeUp = 0;
        matter.Events.on(this.critter.challenge, "beforeUpdate", this.beforeUpdate);
      }
      dispose() {
        matter.Events.off(this.critter.challenge, "beforeUpdate", this.beforeUpdate);
        super.dispose();
      }
      beforeUpdate() {
        if (this.hopCooldown > 0) {
          this.hopCooldown -= this.critter.challenge.delta;
          if (this.hopCooldown <= 0) {
            playSound(src_config.hopSound);
          }
          return;
        }
        this.hopChargeUp += this.critter.challenge.delta;
        if (this.hopChargeUp < src_config.hopChargeTime) return;
        this.hopCooldown = randRange(src_config.hopCooldown[0], src_config.hopCooldown[1]);
        this.hopChargeUp = 0;
        const body = this.critter.body;
        let vel = inverseRotatePoint(0, randRange(src_config.hopSpeed[0], src_config.hopSpeed[1]), 0, 0, -body.angle);
        vel = matter.Vector.add(vel, body.velocity);
        matter.Body.setVelocity(body, vel);
      }
    }
    // ./src/entities/pushable.js
    class Pushable extends Component {
      /**
   * @param {Critter} critter
   */
      constructor(critter) {
        super();
        this.critter = critter;
        /** @type {number[]} */        this.gravityManipulators = [];
        this.subscribeTo(this.critter.challenge, "afterUpdate", this.onAfterUpdate);
        this.subscribeTo(this.critter, "collisionStart", this.onCollisionStart);
        this.subscribeTo(this.critter, "collisionEnd", this.onCollisionEnd);
      }
      onAfterUpdate() {
        const manipulators = this.gravityManipulators.map((id => this.critter.challenge.getEntity(id))).filter((e => e != null));
        if (manipulators.length == 0) {
          this.critter.body.plugin.gravity = null;
          return;
        }
        const sum = matter.Vector.create(0, 0);
        for (const manipulator of manipulators) {
          if (manipulator instanceof GravityWell) {
            const diff = matter.Vector.sub(this.critter.body.position, manipulator.body.position);
            let v = matter.Vector.mult(matter.Vector.normalise(diff), manipulator.gravity);
            v.x = Math.round(v.x / .25) * .25;
            v.y = Math.round(v.y / .25) * .25;
            sum.x += v.x;
            sum.y += v.y;
          } else if (manipulator instanceof GravityField) {
            sum.x += manipulator.direction.x;
            sum.y += manipulator.direction.y;
          }
        }
        this.critter.body.plugin.gravity = matter.Vector.div(sum, manipulators.length);
      }
      /**
   * @param {EntityCollision} collision
   */      onCollisionStart(collision) {
        if (collision.other instanceof GravityWell || collision.other instanceof GravityField) {
          const id = collision.other.id;
          const index = this.gravityManipulators.indexOf(id);
          if (index != -1) return;
          this.gravityManipulators.push(id);
        }
      }
      /**
   * @param {EntityCollision} collision
   */      onCollisionEnd(collision) {
        if (collision.other instanceof GravityWell || collision.other instanceof GravityField) {
          const id = collision.other.id;
          const index = this.gravityManipulators.indexOf(id);
          if (index == -1) return;
          this.gravityManipulators.splice(index, 1);
        }
      }
    }
    // ./src/entities/hit-sounder.js
    class HitSounder extends Component {
      /**
   * @param {Critter} critter
   */
      constructor(critter) {
        super();
        this.critter = critter;
        this.prevPosition = matter.Vector.create(this.critter.body.position.x, this.critter.body.position.y);
        this.subscribeTo(this.critter.challenge, "afterUpdate", this.onAfterUpdate);
        this.subscribeTo(this.critter, "collisionStart", this.onCollisionStart);
        this.subscribeTo(this.critter, "bodyCollision", this.onBodyCollision);
      }
      onAfterUpdate() {
        this.timeSinceHitSoundPlayed += this.critter.challenge.delta;
        this.prevPosition.x = this.critter.body.position.x;
        this.prevPosition.y = this.critter.body.position.y;
      }
      /**
   * @param {EntityCollision} collision
   */      onCollisionStart(collision) {
        if (collision.otherBody.isSensor) return;
        if (this.timeSinceHitSoundPlayed < src_config.hitSoundCritterCooldown) return;
        this.playHitSound();
      }
      onBodyCollision() {
        if (this.timeSinceHitSoundPlayed < src_config.hitSoundBodyCooldown) return;
        if (utils_distance(this.prevPosition, this.critter.body.position) <= src_config.hitSoundMinPositionDiff) return;
        this.playHitSound();
      }
      playHitSound() {
        const hitSound = src_config.critterSounds.hit[this.critter.type];
        if (!hitSound) return;
        this.timeSinceHitSoundPlayed = 0;
        playSound(hitSound);
      }
    }
    // ./src/entities/destroyer.js
    class Destroyer extends Entity {
      /**
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   */
      constructor(challenge, body, gravity) {
        console.assert(body != null);
        super(challenge);
        this.body = body;
        body.plugin = new CaptchaPlugin(this.id);
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
    }
    // ./src/death-door.js
    class DeathDoor extends Entity {
      /**
   * @param {import('./challenge.js').Challenge} challenge
   * @param {Matter.Body} body
   */
      constructor(challenge, body) {
        console.assert(challenge != null);
        console.assert(body != null);
        super(challenge);
        this.challenge = challenge;
        this.body = body;
        this.timeCritterInDoor = 0;
        /** @type {Critter[]} */        this.crittersInDoor = [];
        body.plugin = new CaptchaPlugin(this.id);
        this.registerDraw(this._onDraw, -1e4);
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
      _onDraw() {
        this.challenge.renderer.sprite(this.challenge.sprites.door, {
          x: this.body.position.x,
          y: this.body.position.y,
          rotation: this.body.angle,
          baked: true
        });
      }
    }
    // ./src/entities/destroyable.js
    class Destroyable extends Component {
      /**
   * @param {Critter} critter
   */
      constructor(critter) {
        super();
        this.critter = critter;
        this.subscribeTo(critter.challenge, "beforeUpdate", this.onBeforeUpdate);
        this.subscribeTo(critter, "collisionStart", this.onCollisionStart);
      }
      onBeforeUpdate() {
        if (matter.Vector.magnitude(this.critter.body.position) > 2e3) {
          console.log(`Entity out of bounds ${this.critter.id} ${this.critter.type} ${this.critter.body.position.x} ${this.critter.body.position.y}`);
          this.critter.queueFree = true;
        }
      }
      /**
   * @param {EntityCollision} collision
   */      onCollisionStart(collision) {
        if (collision.other instanceof Destroyer || collision.other instanceof DeathDoor) {
          this.critter.queueFree = true;
        }
      }
    }
    // ./src/entities/critter.js
    class Critter extends Entity {
      /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {string} image
   * @param {string} type
   * @param {*} def
   */
      constructor(challenge, body, image, type, def) {
        super(challenge);
        body.plugin = new CaptchaPlugin(this.id);
        this.body = body;
        this.image = image;
        this.type = type;
        this.def = matter.Common.clone(def);
        this.registerDraw(this._onDraw, 100);
        if (src_config.hoppers.some((e => this.type == e))) {
          this.components.push(new Hopper(this));
        }
        this.components.push(new Pushable(this));
        this.components.push(new HitSounder(this));
        this.components.push(new Destroyable(this));
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
      _onDraw() {
        this.challenge.renderer.sprite(this.challenge.sprites[this.image], {
          rotation: this.body.angle,
          x: this.body.position.x,
          y: this.body.position.y
        });
      }
    }
    // ./src/door.js
    class Door extends Entity {
      /**
   * @param {import('./challenge.js').Challenge} challenge
   * @param {Matter.Body} body
   */
      constructor(challenge, body) {
        console.assert(challenge != null);
        console.assert(body != null);
        super(challenge);
        this.challenge = challenge;
        this.body = body;
        this.timeCritterInDoor = 0;
        /** @type {Critter[]} */        this.crittersInDoor = [];
        body.plugin = new CaptchaPlugin(this.id);
        this.subscribeTo(this.challenge, "beforeUpdate", this._beforeUpdate);
        this.subscribeTo(this, "collisionStart", this._onCollisionStart);
        this.subscribeTo(this, "collisionEnd", this._onCollisionEnd);
        this.registerDraw(this._onDraw, -1e4);
      }
      onRemoved() {
        matter.Composite.remove(this.world, this.body);
        super.onRemoved();
      }
      _onDraw() {
        this.challenge.renderer.sprite(this.crittersInDoor.length > 0 ? this.challenge.sprites.door : this.challenge.sprites.doorClosed, {
          x: this.body.position.x,
          y: this.body.position.y,
          rotation: this.body.angle,
          baked: true
        });
      }
      _beforeUpdate() {
        if (this.crittersInDoor.length > 0) {
          this.timeCritterInDoor += this.challenge.delta;
          if (this.timeCritterInDoor > 5) {
            this.challenge.complete();
          }
        } else {
          this.timeCritterInDoor = 0;
        }
      }
      /**
   * @param {import('./entities/entity').EntityCollision} collision
   */      _onCollisionStart(collision) {
        if (collision.other instanceof Critter) {
          console.log("Critter entered door");
          playSound(src_config.doorOpenSound);
          if (this.crittersInDoor.indexOf(collision.other) != -1) return;
          this.crittersInDoor.push(collision.other);
        }
      }
      /**
   * @param {import('./entities/entity').EntityCollision} collision
   */      _onCollisionEnd(collision) {
        if (collision.other instanceof Critter) {
          playSound(src_config.doorOpenSound);
          console.log("Critter left door");
          const index = this.crittersInDoor.indexOf(collision.other);
          if (index == -1) return;
          this.crittersInDoor.splice(index, 1);
        }
      }
    }
    // ./src/critters.js
    const critterDefs = [ {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1001,
        name: "Bear",
        path: "res://images/bear.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1002,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -16.014,
            y: -11.843
          },
          verts: "-21.0 -7.2 -21.0 -13.0 -15.0 -18.0 -9.0 -15.0 -17.0 -5.0"
        }, {
          center: {
            x: 15.848,
            y: -12.531
          },
          verts: "15.0 -18.0 20.0 -15.0 21.0 -9.4 17.0 -6.0 9.0 -15.0"
        }, {
          center: {
            x: .054,
            y: .258
          },
          verts: "0.0 -17.0 9.0 -15.0 17.0 -6.0 16.0 6.0 10.0 15.0 0.0 18.0 -10.0 15.0 -16.0 6.0 -17.0 -5.0 -9.0 -15.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "bear",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1e3,
      isBody: true,
      mass: 1,
      name: "Bear",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1004,
        name: "Chicken",
        path: "res://images/chicken.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1005,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: .222,
            y: -16.667
          },
          verts: "-3.0 -20.0 4.0 -20.0 7.0 -14.0 -7.0 -14.0"
        }, {
          center: {
            x: .078,
            y: 2.353
          },
          verts: "17.0 -3.0 16.0 10.0 9.0 18.0 0.0 20.0 -8.0 18.0 -16.0 10.0 -17.0 -2.0 -13.0 -10.0 -7.0 -14.0 7.0 -14.0 13.0 -10.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "chicken",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1003,
      isBody: true,
      mass: 1,
      name: "Chicken",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1007,
        name: "Cow",
        path: "res://images/cow.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1008,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -.308,
            y: -13.009
          },
          verts: "-15.0 -18.0 0.0 -19.0 15.0 -18.0 20.0 -15.0 16.0 -8.0 -16.0 -7.0 -20.0 -15.0"
        }, {
          center: {
            x: .017,
            y: 3.217
          },
          verts: "-16.0 -7.0 16.0 -8.0 17.0 1.0 12.0 12.0 0.0 18.0 -12.0 13.0 -17.0 1.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "cow",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1006,
      isBody: true,
      mass: 1,
      name: "Cow",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1010,
        name: "Elephant",
        path: "res://images/elephant.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1011,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -16.157,
            y: -7.648
          },
          verts: "-22.0 0.0 -24.0 -10.0 -17.0 -20.0 -9.0 -19.0 -13.0 8.0"
        }, {
          center: {
            x: 3.65,
            y: -2.454
          },
          verts: "-11.0 17.0 -13.0 8.0 -9.0 -19.0 -1.0 -21.0 16.0 -20.0 24.0 -11.0 23.0 -2.0 13.0 9.0 -3.0 21.0"
        }, {
          center: {
            x: 6.375,
            y: 16.417
          },
          verts: "3.0 21.0 -3.0 21.0 13.0 9.0 11.0 17.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "elephant",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1009,
      isBody: true,
      mass: 1,
      name: "Elephant",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 1,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1013,
        name: "Frog",
        path: "res://images/frog.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1014,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -.082,
            y: 2.585
          },
          verts: "13.0 -10.0 18.0 -7.0 19.0 3.0 12.0 18.0 -13.0 18.0 -19.0 3.0 -17.0 -7.0 -13.0 -11.0 0.0 -14.0"
        }, {
          center: {
            x: -7.273,
            y: -15.469
          },
          verts: "-12.0 -18.0 -4.6 -20.0 0.0 -14.0 -13.0 -11.0"
        }, {
          center: {
            x: 7.421,
            y: -15.14
          },
          verts: "12.0 -18.0 13.0 -10.0 0.0 -14.0 5.0 -20.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "frog",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1012,
      isBody: true,
      mass: 1,
      name: "Frog",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1016,
        name: "Giraffe",
        path: "res://images/giraffe.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1017,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: 0,
            y: -16.631
          },
          verts: "8.0 -11.0 -8.0 -11.0 -9.0 -21.0 0.0 -23.0 9.0 -21.0"
        }, {
          center: {
            x: 15.206,
            y: -7.86
          },
          verts: "16.0 -13.0 21.0 -7.0 17.0 -1.0 8.0 -11.0"
        }, {
          center: {
            x: -.782,
            y: -.975
          },
          verts: "16.0 13.0 -17.0 -1.0 -21.0 -6.0 -17.0 -13.0 -8.0 -11.0 17.0 -1.0"
        }, {
          center: {
            x: 5.667,
            y: -7.667
          },
          verts: "-8.0 -11.0 8.0 -11.0 17.0 -1.0"
        }, {
          center: {
            x: -2.945,
            y: 12.454
          },
          verts: "-16.0 13.0 -17.0 -1.0 16.0 13.0 7.0 22.0 -7.0 22.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "giraffe",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1015,
      isBody: true,
      mass: 1,
      name: "Giraffe",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1019,
        name: "Goat",
        path: "res://images/goat.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1020,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -11.667,
            y: -16
          },
          verts: "-13.0 -10.0 -16.0 -23.0 -6.0 -15.0"
        }, {
          center: {
            x: 1.852,
            y: 1.498
          },
          verts: "-6.0 17.0 -15.0 10.0 6.0 -15.0 16.0 -23.0 13.0 -10.0 6.0 17.0"
        }, {
          center: {
            x: 19.484,
            y: -5.813
          },
          verts: "13.0 -10.0 25.0 -9.0 24.0 -3.0 18.0 0.0"
        }, {
          center: {
            x: -19.484,
            y: -5.813
          },
          verts: "-24.0 -3.0 -25.0 -9.0 -13.0 -10.0 -18.0 0.0"
        }, {
          center: {
            x: 0,
            y: 19.222
          },
          verts: "6.0 17.0 3.0 22.0 -3.0 22.0 -6.0 17.0"
        }, {
          center: {
            x: 12.501,
            y: 4.012
          },
          verts: "13.0 -10.0 18.0 0.0 15.0 10.0 6.0 17.0"
        }, {
          center: {
            x: -8.235,
            y: -5.196
          },
          verts: "-13.0 -10.0 -6.0 -15.0 6.0 -15.0 -15.0 10.0 -18.0 0.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "goat",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1018,
      isBody: true,
      mass: 1,
      name: "Goat",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1022,
        name: "Monkey",
        path: "res://images/monkey.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1023,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -18.465,
            y: -4.076
          },
          verts: "-23.0 -1.0 -21.0 -10.0 -14.0 -11.0 -17.0 5.0"
        }, {
          center: {
            x: 9.373,
            y: .508
          },
          verts: "14.0 -11.0 20.0 -10.0 23.0 -1.0 17.0 5.0 -12.0 12.0"
        }, {
          center: {
            x: -4.085,
            y: -5.288
          },
          verts: "-12.0 12.0 -17.0 5.0 -14.0 -11.0 -6.0 -17.0 6.0 -17.0 14.0 -11.0"
        }, {
          center: {
            x: 2.957,
            y: 11.987
          },
          verts: "-12.0 12.0 17.0 5.0 12.0 13.0 5.0 17.0 -6.0 17.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "monkey",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1021,
      isBody: true,
      mass: 1,
      name: "Monkey",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1025,
        name: "Moose",
        path: "res://images/moose.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1026,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: 25.255,
            y: -8.951
          },
          verts: "13.0 -9.0 33.5 -22.4 36.0 -16.0 35.0 -9.0 26.0 1.0 18.0 3.0"
        }, {
          center: {
            x: -25.544,
            y: -9.242
          },
          verts: "-26.0 0.0 -34.0 -7.0 -36.0 -17.0 -33.5 -22.5 -14.0 -9.0 -17.0 2.0"
        }, {
          center: {
            x: .04,
            y: 3.217
          },
          verts: "13.0 -9.0 18.0 3.0 14.0 16.0 5.0 22.0 -6.0 21.0 -16.0 13.0 -17.0 2.0 -14.0 -9.0 -4.0 -16.0 4.5 -15.8"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "moose",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1024,
      isBody: true,
      mass: 1,
      name: "Moose",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1028,
        name: "Panda",
        path: "res://images/panda.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1029,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -18.249,
            y: -5.819
          },
          verts: "-24.0 -2.0 -23.0 -9.0 -19.0 -14.0 -12.0 -13.0 -17.0 5.0"
        }, {
          center: {
            x: 18.327,
            y: -6.723
          },
          verts: "12.0 -13.0 18.0 -14.0 23.0 -9.0 24.0 -4.0 18.0 3.0"
        }, {
          center: {
            x: .161,
            y: .612
          },
          verts: "-6.0 -16.0 6.0 -16.0 12.0 -13.0 18.0 3.0 13.0 12.0 6.0 17.0 -6.0 17.0 -13.0 13.0 -17.0 5.0 -12.0 -13.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "panda",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1027,
      isBody: true,
      mass: 1,
      name: "Panda",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1031,
        name: "Pig",
        path: "res://images/pig.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1032,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -15.667,
            y: -9.909
          },
          verts: "-20.0 -7.0 -18.0 -16.0 -9.0 -14.0 -18.0 -1.0"
        }, {
          center: {
            x: 15.852,
            y: -10.404
          },
          verts: "10.0 -15.0 17.0 -16.0 20.0 -8.0 18.0 -2.0"
        }, {
          center: {
            x: .234,
            y: .736
          },
          verts: "10.0 -15.0 18.0 -2.0 16.0 9.0 6.0 18.0 -6.0 18.0 -16.0 9.0 -18.0 -1.0 -9.0 -14.0 0.0 -18.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "pig",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1030,
      isBody: true,
      mass: 1,
      name: "Pig",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1034,
        name: "Rabbit",
        path: "res://images/rabbit.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1035,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: 7.81,
            y: -13.714
          },
          verts: "8.0 -21.0 12.0 -22.0 12.0 -6.0 0.0 -11.0"
        }, {
          center: {
            x: -7.984,
            y: -13.874
          },
          verts: "-13.0 -6.0 -12.0 -22.0 -7.0 -21.0 0.0 -11.0"
        }, {
          center: {
            x: -.116,
            y: 5.952
          },
          verts: "16.0 13.0 6.0 22.0 -6.0 22.0 -16.0 13.0 -17.0 1.0 -13.0 -6.0 0.0 -11.0 12.0 -6.0 17.0 2.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "rabbit",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1033,
      isBody: true,
      mass: 1,
      name: "Rabbit",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1037,
        name: "Whale",
        path: "res://images/whale.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1038,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: 1.453,
            y: 2.463
          },
          verts: "12.0 -10.0 17.0 -3.0 18.0 6.0 19.0 21.5 0.102 21.5 -18.0 6.0 -18.0 -3.0 -13.0 -10.0 0.112 -21.398"
        }, {
          center: {
            x: -12.299,
            y: 16.333
          },
          verts: "0.102 21.5 -19.0 21.5 -18.0 6.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "whale",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1036,
      isBody: true,
      mass: 1,
      name: "Whale",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    }, {
      bounce: 0,
      children: [ {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1040,
        name: "Wolf",
        path: "res://images/wolf.svg",
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "Sprite2D"
      }, {
        children: [],
        globalPosition: {
          x: 0,
          y: 0
        },
        globalRotation: 0,
        id: 1041,
        name: "CollisionPolygon2D",
        polygons: [ {
          center: {
            x: -11.333,
            y: -14
          },
          verts: "-15.0 -7.0 -13.0 -22.0 -6.0 -13.0"
        }, {
          center: {
            x: 11.333,
            y: -14
          },
          verts: "6.0 -13.0 13.0 -22.0 15.0 -7.0"
        }, {
          center: {
            x: 0,
            y: 3.864
          },
          verts: "6.0 -13.0 15.0 -7.0 18.0 9.0 7.0 21.0 -7.0 21.0 -18.0 9.0 -15.0 -7.0 -6.0 -13.0"
        } ],
        position: {
          x: 0,
          y: 0
        },
        rotation: 0,
        type: "CollisionPolygon2D"
      } ],
      collisionLayer: 1,
      collisionMask: 1,
      critterType: "wolf",
      friction: 1,
      globalPosition: {
        x: 0,
        y: 0
      },
      globalRotation: 0,
      gravityScale: 1,
      id: 1039,
      isBody: true,
      mass: 1,
      name: "Wolf",
      position: {
        x: 0,
        y: 0
      },
      rotation: 0,
      type: "Critter"
    } ];
 // ./src/push-controller.js
        class PushController extends Entity {
      /**
   * @type {Date}
   */
      _touchStart;
      /**
   * @param {Challenge} challenge
   * @param {GravityWell} touch
   * @param {GravityWell} mouse
   * @param {HTMLElement} element
   * @param {number} gravityScalar
   */
      constructor(challenge, touch, mouse, element, gravityScalar) {
        console.assert(challenge != null);
        console.assert(touch != null);
        console.assert(mouse != null);
        console.assert(element != null);
        super(challenge);
        this.touch = touch;
        this.mouse = mouse;
        this.element = element;
        this.touch.gravity *= gravityScalar ?? 1;
        this.mouse.gravity *= gravityScalar ?? 1;
        this._onMouseMove = this._onMouseMove.bind(this);
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._onTouchCancel = this._onTouchCancel.bind(this);
        this.element.addEventListener("mousemove", this._onMouseMove);
        this.element.addEventListener("touchstart", this._onTouchStart, {
          passive: false
        });
        this.element.addEventListener("touchmove", this._onTouchMove, {
          passive: false
        });
        this.element.addEventListener("touchend", this._onTouchEnd);
        this.element.addEventListener("touchcancel", this._onTouchCancel);
        matter.Body.setPosition(this.touch.body, _outOfBounds());
        matter.Body.setPosition(this.mouse.body, _outOfBounds());
        this.registerDraw(this._onDraw, 1e4);
      }
      onRemoved() {
        this.element.removeEventListener("mousemove", this._onMouseMove);
        this.element.removeEventListener("touchstart", this._onTouchStart);
        this.element.removeEventListener("touchmove", this._onTouchMove);
        this.element.removeEventListener("touchend", this._onTouchEnd);
        this.element.addEventListener("touchcancel", this._onTouchCancel);
        super.onRemoved();
      }
      /**
   * @param {MouseEvent} event
   */      _onMouseMove(event) {
        if (this._touchStart != null && new Date - this._touchStart < 500) {
          return;
        }
        const tl = matter.Vector.create(this.canvas.x, this.canvas.y);
        let rel = matter.Vector.sub(matter.Vector.create(event.clientX, event.clientY), tl);
        matter.Body.setPosition(this.mouse.body, rel);
        matter.Body.setPosition(this.touch.body, _outOfBounds());
      }
      /**
   * @param {TouchEvent} event
   */      _onTouchStart(event) {
        matter.Body.setPosition(this.mouse.body, _outOfBounds());
        this._touchStart = new Date;
        event.preventDefault();
      }
      /**
   * @param {TouchEvent} event
   */      _onTouchMove(event) {
        this._moveToTouchEvent(event);
        event.preventDefault();
      }
      /**
   * @param {TouchEvent} event
   */      _onTouchEnd(event) {
        matter.Body.setPosition(this.touch.body, _outOfBounds());
      }
      /**
   * @param {TouchEvent} event
   */      _onTouchCancel(event) {
        matter.Body.setPosition(this.touch.body, _outOfBounds());
      }
      _moveToTouchEvent(event) {
        const tl = matter.Vector.create(this.canvas.x, this.canvas.y);
        let rel = matter.Vector.sub(matter.Vector.create(event.touches[0].clientX, event.touches[0].clientY), tl);
        matter.Body.setPosition(this.touch.body, rel);
      }
      frame=0;
      frames=[ "cursor0", "cursor0", "cursor1", "cursor2", "cursor2", "cursor2" ];
      touchFrames=[ "touchCursor0", "touchCursor0", "touchCursor1", "touchCursor2", "touchCursor2", "touchCursor2" ];
      rotation=0;
      _onDraw() {
        let body = null;
        let frames = this.frames;
        if (matter.Vector.magnitude(matter.Vector.sub(this.mouse.body.position, _outOfBounds())) > 1) {
          body = this.mouse.body;
        } else if (matter.Vector.magnitude(matter.Vector.sub(this.touch.body.position, _outOfBounds())) > 1) {
          body = this.touch.body;
          frames = this.touchFrames;
        }
        if (body == null) return;
        this.challenge.renderer.sprite(this.challenge.sprites[frames[this.frame]], {
          x: body.position.x,
          y: body.position.y,
          rotation: this.rotation
        });
        this.frame = (this.frame + 1) % this.frames.length;
        this.rotation += Math.PI / 4;
      }
    }
    function _outOfBounds() {
      return matter.Vector.create(-1e4, -1e4);
    }
    // ./src/critter-spawner.js
    let nextId = 1e6;
    class CritterSpawner extends Entity {
      /**
   * @param {Challenge} challenge
   * @param {Matter.Vector} position
   */
      constructor(challenge, position) {
        super(challenge);
        this.position = matter.Vector.clone(position);
        this.queue = [];
        this.spawnCooldown = 0;
        this.maxQueueSize = src_config.maxSpawnerQueue;
        this.subscribeTo(this.challenge, "afterUpdate", this.onAfterUpdate);
      }
      onAfterUpdate() {
        this.spawnCooldown -= this.challenge.delta;
        if (this.spawnCooldown <= 0 && this.queue.length > 0) {
          const def = this.queue.shift();
          this.spawn(def);
        }
      }
      queueSpawn(type) {
        const id = nextId;
        nextId++;
        const def = {
          bounce: Math.random(),
          collisionLayer: 1,
          collisionMask: 1,
          critterType: type,
          friction: 1,
          globalPosition: {
            x: this.position.x,
            y: this.position.y
          },
          globalRotation: 0,
          gravityScale: 1,
          id,
          isBody: true,
          mass: 1,
          name: "Critter" + id,
          position: {
            x: this.position.x,
            y: this.position.y
          },
          rotation: 0,
          type: "Critter"
        };
        this.queue.push(def);
        if (this.queue.length > this.maxQueueSize) {
          this.queue.splice(0, this.queue.length - this.maxQueueSize);
        }
      }
      spawn(def) {
        this.spawnCooldown = src_config.spawnerCooldown;
        const numCritters = this.challenge.entities.reduce(((acc, ent) => ent instanceof Critter ? acc + 1 : acc), 0);
        if (numCritters >= src_config.maxCritters) {
          console.log("Max critters reached.");
          return;
        }
        const critter = new LevelProcessor(this.challenge).createCritter(this.challenge.engine, {
          ...matter.Common.clone(def),
          globalPosition: matter.Vector.clone(this.position)
        });
        this.challenge.addEntity(critter);
      }
    }
    // ./src/entities/destroy-entity-scenario.js
    class DestroyEntityScenario extends Entity {
      /**
   * @param {PhysicsChallenge} challenge
   * @param {number} difficulty
   */
      constructor(challenge) {
        super(challenge);
        this.difficulty = this.challenge.difficulty ?? 1;
        this.lifeTime = 0;
        this.challengeCompleteChargeUp = 0;
        if (src_config.destroy.difficulty[this.difficulty].desireHoppers) {
          this.desiredType = randItem(src_config.hoppers);
        } else {
          const availableTypes = src_config.critters.filter((e => src_config.hoppers.indexOf(e) == -1 && e != "moose"));
          this.desiredType = randItem(availableTypes);
        }
        this.numDesiredEvicted = 0;
        const evictCritters = [ ...src_config.critters ];
        evictCritters.splice(evictCritters.indexOf(this.desiredType), 1);
        this.initialSpawn = [ ...Array.from({
          length: src_config.destroy.difficulty[this.difficulty].initialDesiredSpawnCount
        }, (() => this.desiredType)), ...Array.from({
          length: src_config.destroy.difficulty[this.difficulty].initialEvictSpawnCount
        }, (() => randItem(evictCritters))) ];
        shuffle(this.initialSpawn);
        this.spawnDelay = 0;
        this.subscribeTo(challenge, "beforeUpdate", this.onBeforeUpdate);
        this.subscribeTo(challenge, "afterUpdate", this.onAfterUpdate);
        this.subscribeTo(challenge, "removingEntity", this.onRemovingEntity);
        this.registerDraw(this.onDraw, 1e6);
      }
      onBeforeUpdate() {
        this.lifeTime += this.challenge.delta;
        this.spawnDelay -= this.challenge.delta;
        if (this.spawnDelay > 0) return;
        if (this.initialSpawn.length > 0) {
          this.queueSpawn(1, [ this.initialSpawn.pop() ]);
          this.spawnDelay = src_config.destroy.difficulty[this.difficulty].populateCooldown;
        } else if (this.spawnDelay <= 0) {
          let numDesired = 0;
          for (const ent of this.challenge.entities) {
            if (ent instanceof Critter) {
              if (ent.type == this.desiredType) {
                numDesired++;
              }
            }
          }
          if (numDesired < src_config.destroy.difficulty[this.difficulty].minDesiredCount) {
            this.queueSpawn(1, [ this.desiredType ]);
            this.spawnDelay = src_config.destroy.difficulty[this.difficulty].populateCooldown;
          }
        }
      }
      onAfterUpdate() {
        if (this.lifeTime <= 4) return;
        let numToEvict = 0;
        for (const ent of this.challenge.entities) {
          if (ent instanceof Critter) {
            if (ent.type != this.desiredType) {
              numToEvict++;
            }
          }
        }
        if (numToEvict == 0) {
          this.challengeCompleteChargeUp += this.challenge.delta;
        } else {
          this.challengeCompleteChargeUp = 0;
        }
        if (this.challengeCompleteChargeUp > 2) {
          this.challenge.complete();
        }
      }
      onDraw() {
        /** @type {CanvasRenderingContext2D} */
        const ctx = this.challenge.renderer.ctx;
        let critterCount = this.challenge.entities.reduce(((acc, ent) => {
          if (ent instanceof Critter) {
            if (this.desiredType == ent.type) {
              acc.numDesired++;
            } else {
              acc.numToEvict++;
            }
            acc.total++;
          }
          return acc;
        }), {
          numDesired: 0,
          numToEvict: 0,
          total: 0
        });
        ctx.save();
        drawMessages(ctx, src_config.destroy.messages, this.lifeTime, {
          ...critterCount,
          desiredType: this.desiredType,
          numDesiredEvicted: this.numDesiredEvicted
        });
        ctx.restore();
      }
      /**
   * @param {{id: number}} id
   */      onRemovingEntity(event) {
        const ent = this.challenge.getEntity(event.id);
        if (ent instanceof Critter) {
          let numToSpawn = 0;
          if (ent.type == this.desiredType) {
            playSound(src_config.badDestroySound);
            this.numDesiredEvicted++;
            const ramp = src_config.destroy.difficulty[this.difficulty].spawnCountRamp;
            let index = this.numDesiredEvicted - 1;
            if (index >= ramp.length) {
              index = ramp.length - 1;
            }
            numToSpawn = ramp[index];
          } else {
            playSound(src_config.destroySound);
          }
          let respawnTypes;
          if (src_config.destroy.difficulty[this.difficulty].canRespawnEvictTypes) {
            if (Math.random() > .66) {
              respawnTypes = [ ...src_config.critters ];
              respawnTypes.splice(respawnTypes.indexOf("moose"), 1);
            } else {
              respawnTypes = src_config.critters;
            }
          } else {
            respawnTypes = [ this.desiredType ];
          }
          this.queueSpawn(numToSpawn, respawnTypes);
        }
      }
      queueSpawn(numToSpawn, critterPool) {
        if (numToSpawn == 0) return;
        const spawners = [];
        for (const ent of this.challenge.entities) {
          if (ent instanceof CritterSpawner) {
            spawners.push(ent);
          }
        }
        for (let i = 0; i < numToSpawn; i++) {
          randItem(spawners).queueSpawn(randItem(critterPool));
        }
      }
    }
    // ./src/level-processor.js
    class LevelProcessor {
      constructor(challenge) {
        this.challenge = challenge;
        this.engine = challenge.engine;
      }
      /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Entity[]}
   */      processLevelDef(levelDef) {
        for (const objDef of levelDef) {
          this._processDefinition(objDef);
        }
      }
      _processDefinition(obj) {
        const engine = this.engine;
        switch (obj.type) {
         case "DestroyEntityScenario":
          {
            const ent = new DestroyEntityScenario(this.challenge);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "Windmill":
          {
            if (Math.random() < .1) return null;
            const ent = this._createWindmill(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "GravityWell":
          {
            const ent = this._createGravityWell(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "GravityField":
          {
            const ent = this._createGravityField(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "Destroyer":
          {
            const ent = this._createDestroyer(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "Door":
          {
            const ent = this._createDoor(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "DeathDoor":
          {
            const ent = this._createDeathDoor(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "Critter":
          {
            const ent = this.createCritter(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "CritterSpawner":
          {
            const ent = this._createCritterSpawner(obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         case "PushController":
          {
            const ent = this._createPushController(engine, obj);
            this.challenge.addEntity(ent);
            return ent;
          }

         default:
          return this._processBody(engine, obj);
        }
      }
      /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Windmill}
   */      _createWindmill(engine, obj) {
        const bodyDef = obj.children.find((e => e.isBody === true));
        const body = this._processBody(engine, bodyDef);
        const pinDef = obj.children.find((e => e.type === "Pin"));
        const pin = matter.Bodies.circle(pinDef.globalPosition.x, pinDef.globalPosition.y, 0, {
          isStatic: true,
          collisionFilter: {
            group: 0,
            category: 0,
            mask: 0
          }
        });
        const constraint = matter.Constraint.create({
          bodyA: body,
          bodyB: pin
        });
        matter.Composite.add(engine.world, [ pin, constraint ]);
        return new Windmill(this.challenge, body, bodyDef.constantTorque ?? 0);
      }
      /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {GravityWell}
   */      _createGravityWell(engine, obj) {
        const body = this._processBody(engine, obj);
        return new GravityWell(this.challenge, body, obj.gravity);
      }
      /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {GravityField}
   */      _createGravityField(engine, obj) {
        const body = this._processBody(engine, obj);
        return new GravityField(this.challenge, body, matter.Vector.clone(obj.direction));
      }
      /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Destroyer}
   */      _createDestroyer(engine, obj) {
        const body = this._processBody(engine, obj);
        return new Destroyer(this.challenge, body);
      }
      /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Door}
   */      _createDoor(engine, obj) {
        const body = this._processBody(engine, obj);
        return new Door(this.challenge, body);
      }
      /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {DeathDoor}
   */      _createDeathDoor(engine, obj) {
        const body = this._processBody(engine, obj);
        return new DeathDoor(this.challenge, body);
      }
      /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Critter}
   */      createCritter(engine, obj) {
        const def = critterDefs.find((e => e.critterType == obj.critterType));
        const body = this._processBody(engine, def);
        matter.Body.setPosition(body, matter.Vector.create(obj.globalPosition.x, obj.globalPosition.y));
        matter.Body.setAngle(body, obj.rotation);
        const spriteDef = def.children.find((e => e.type == "Sprite2D"));
        const image = getFileNameWithoutExtension(spriteDef.path);
        const critter = new Critter(this.challenge, body, image, obj.critterType, obj);
        return critter;
      }
      /**
   * @param {*} obj
   * @returns {CritterSpawner}
   */      _createCritterSpawner(obj) {
        return new CritterSpawner(this.challenge, matter.Vector.create(obj.globalPosition.x, obj.globalPosition.y));
      }
      /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {PushController}
   */      _createPushController(engine, obj) {
        const touchDef = obj.children.find((e => e.name == "Touch"));
        const mouseDef = obj.children.find((e => e.name == "Mouse"));
        const touch = this._processDefinition(touchDef);
        console.assert(touch instanceof GravityWell);
        const mouse = this._processDefinition(mouseDef);
        console.assert(mouse instanceof GravityWell);
        return new PushController(this.challenge, touch, mouse, window);
      }
      _processBody(engine, obj) {
        switch (obj.type) {
         case "StaticBody2D":
          return this._createBody(engine, obj, true, false);

         case "GravityWell":
         case "GravityField":
         case "Destroyer":
         case "Door":
         case "DeathDoor":
         case "Area2D":
          return this._createBody(engine, obj, true, true);

         case "Critter":
         case "RigidBody2D":
          return this._createBody(engine, obj, false, false);

         default:
          return null;
        }
      }
      /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @param {bool} isStatic
   * @param {bool} isSensor
   * @returns {Matter.Body}
   */      _createBody(engine, obj, isStatic, isSensor) {
        const friction = obj.friction;
        const bounce = obj.bounce;
        var parts = [];
        /**
     *
     * @returns {Matter.ICollisionFilter}
     */        function collisionFilter() {
          return {
            mask: obj.collisionMask ?? 1,
            group: obj.collisionLayer ?? 1
          };
        }
        for (const child of obj.children) {
          switch (child.type) {
           case "CollisionShape2D":
            switch (child.shape) {
             case "rectangle":
              {
                let body = matter.Bodies.rectangle(child.globalPosition.x, child.globalPosition.y, child.size.x, child.size.y, {
                  mass: child.mass,
                  isStatic,
                  isSensor,
                  angle: child.globalRotation,
                  friction,
                  restitution: bounce,
                  label: child.name,
                  collisionFilter: collisionFilter()
                });
                body.gravityScale = obj.gravityScale;
                parts.push(body);
                break;
              }

             case "circle":
              {
                const body = matter.Bodies.circle(child.globalPosition.x, child.globalPosition.y, child.radius, {
                  mass: child.mass,
                  isStatic,
                  isSensor,
                  angle: child.globalRotation,
                  friction,
                  restitution: bounce,
                  label: child.name,
                  collisionFilter: collisionFilter()
                });
                body.gravityScale = obj.gravityScale;
                parts.push(body);
                break;
              }
            }
            break;

           case "CollisionPolygon2D":
            {
              for (const polygon of child.polygons) {
                const verts = matter.Vertices.fromPath(polygon.verts);
                const body = matter.Bodies.fromVertices(child.globalPosition.x, child.globalPosition.y, verts, {
                  mass: child.mass,
                  isStatic,
                  isSensor,
                  friction,
                  restitution: bounce,
                  label: child.name,
                  collisionFilter: collisionFilter()
                });
                matter.Body.setPosition(body, matter.Vector.create(child.globalPosition.x + polygon.center.x, child.globalPosition.y + polygon.center.y));
                body.gravityScale = obj.gravityScale;
                parts.push(body);
              }
              break;
            }
          }
        }
        // Composite.add(engine.world, [...parts]);
                if (parts.length > 1) {
          const compound = matter.Body.create({
            parts: [ ...parts ],
            isStatic,
            isSensor,
            friction,
            restitution: bounce
          });
          compound.label = obj.name;
          matter.Composite.add(engine.world, [ compound ]);
          compound.gravityScale = obj.gravityScale;
          return compound;
        } else if (parts.length == 1) {
          parts[0].label = obj.name;
          matter.Composite.add(engine.world, parts);
          return parts[0];
        } else {
          return null;
        }
      }
    }
    function getFileNameWithoutExtension(path) {
      const fileName = path.split("/").pop();
      return fileName.split(".").slice(0, -1).join(".");
    }
    // ./src/physics-challenge.js
    class PhysicsChallenge extends Challenge {
      /**
   * @typedef {Object} DrawCallback
   * @property {function(): void} callback
   * @property {number} depth
   */
      /**
   * @param {HTMLCanvasElement} canvas
   * @param {import("../sprite").Sprites} sprites
   * @param {Object[]} levelDef
   * @param {number} difficulty
   */
      constructor(canvas, sprites, levelDef, difficulty) {
        super();
        this.renderer = new Renderer(canvas);
        this.levelDef = levelDef;
        console.log(`Challenge difficulty: ${difficulty}`);
        this.difficulty = difficulty;
        this.delta = 0;
        /** @type {import('./entities/entity').Entity[]} */        this.entities = [];
        this.entityCache = {};
        this.sprites = sprites;
        this.maxFps = src_config.physics.maxFps;
        /** @type {DrawCallback[]} */        this.drawCallbacks = [];
        this.collisionCount = {};
        /** @type {Matter.Engine} */        this.engine = matter.Engine.create();
        this.engine.enableSleeping = false;
        this.onCollisionStart = this.onCollisionStart.bind(this);
        this.onCollisionEnd = this.onCollisionEnd.bind(this);
        this.beforeUpdate = this.beforeUpdate.bind(this);
        this.onAfterUpdate = this.onAfterUpdate.bind(this);
        this.runner = matter.Runner.create();
      }
      run() {
        matter.Runner.run(this.runner, this.engine);
        matter.Events.on(this.engine, "collisionStart", this.onCollisionStart);
        matter.Events.on(this.engine, "collisionEnd", this.onCollisionEnd);
        matter.Events.on(this.engine, "beforeUpdate", this.beforeUpdate);
        matter.Events.on(this.engine, "afterUpdate", this.onAfterUpdate);
      }
      /**
   * @param {Matter.Engine} engine
   * @param {Renderer} renderer
   */      loadLevel() {
        this.timeToNewSeed = 0;
        console.log("Initialize challenge");
        new LevelProcessor(this).processLevelDef(this.levelDef);
      }
      dispose() {
        console.log("Dispose door challenge");
        this.state.dispose();
        for (const ent of this.entities) {
          ent.onRemoved();
        }
        this.entities.length = 0;
        matter.Engine.clear(this.engine);
        if (this.runner.enabled) {
          matter.Runner.stop(this.runner);
        }
        matter.Events.off(this.engine);
        matter.Events.off(this);
        super.dispose();
      }
      /**
   * @param {Matter.IEventCollision} event
   */      onCollisionStart(event) {
        for (const pair of event.pairs) {
          const parentA = _getBaseParent(pair.bodyA);
          const parentB = _getBaseParent(pair.bodyB);
          const entA = this.getEntity(parentA.plugin?.entity);
          const entB = this.getEntity(parentB.plugin?.entity);
          if (entA && entB) {
            this.trackCollisionStart(pair, entA, entB);
            this.trackCollisionStart(pair, entB, entA);
          } else {
            if (entA && !pair.bodyB.isSensor) {
              matter.Events.trigger(entA, "bodyCollision", event);
            }
            if (entB && !pair.bodyA.isSensor) {
              matter.Events.trigger(entB, "bodyCollision", event);
            }
          }
        }
      }
      /**
   * @param {Matter.Pair} pair
   * @param {Entity} entA
   * @param {Entity} entB
   */      trackCollisionStart(pair, entA, entB) {
        this.collisionCount[entA.id] ??= {};
        this.collisionCount[entA.id][entB.id] = (this.collisionCount[entA.id][entB.id] ?? 0) + 1;
        if (this.collisionCount[entA.id][entB.id] == 1) {
          matter.Events.trigger(entA, "collisionStart", new EntityCollision(pair, pair.bodyB, entB));
        }
      }
      /**
   * @param {Matter.Pair[]} event
   */      onCollisionEnd(event) {
        for (const pair of event.pairs) {
          const parentA = _getBaseParent(pair.bodyA);
          const parentB = _getBaseParent(pair.bodyB);
          const entA = this.getEntity(parentA.plugin?.entity);
          const entB = this.getEntity(parentB.plugin?.entity);
          if (entA && entB) {
            this.trackCollisionEnd(pair, entA, entB);
            this.trackCollisionEnd(pair, entB, entA);
          }
        }
      }
      /**
   * @param {Matter.Pair} pair
   * @param {Entity} entA
   * @param {Entity} entB
   */      trackCollisionEnd(pair, entA, entB) {
        this.collisionCount[entA.id] ??= {};
        this.collisionCount[entA.id][entB.id] = (this.collisionCount[entA.id][entB.id] ?? 1) - 1;
        if (this.collisionCount[entA.id][entB.id] <= 0) {
          matter.Events.trigger(entA, "collisionEnd", new EntityCollision(pair, pair.bodyB, entB));
        }
      }
      addEntity(ent) {
        console.assert(ent != null);
        this.entities.push(ent);
        this.entityCache[ent.id] = ent;
      }
      /**
   * @param {number} id
   * @returns {Entity}
   */      getEntity(id) {
        if (!id) return null;
        return this.entityCache[id];
      }
      /**
   * @param {import("matter-js").IEventTimestamped<Matter.Engine>} event
   */      beforeUpdate(event) {
        this.delta = event.source.timing.lastDelta * .001;
        matter.Events.trigger(this, "beforeUpdate");
      }
      seed=1;
      framesSinceClear=0;
      onAfterUpdate() {
        for (let i = this.entities.length - 1; i >= 0; i--) {
          const ent = this.entities[i];
          if (!ent.queueFree) continue;
          matter.Events.trigger(this, "removingEntity", {
            id: ent.id
          });
          this.entities.splice(i, 1);
          delete this.entityCache[ent.id];
          ent.onRemoved();
          matter.Events.trigger(this, "removedEntity", ent);
        }
        matter.Events.trigger(this, "afterUpdate");
        this.timeToNewSeed -= this.delta;
        if (this.timeToNewSeed <= 0) {
          this.timeToNewSeed = 1 / this.maxFps;
          this.renderer.newSeed();
          this.seed += 1;
        } else {
          return;
        }
        if (this.framesSinceClear >= 0) {
          this.renderer.clear();
          this.framesSinceClear = 0;
        } else {
          this.framesSinceClear++;
        }
        for (const body of matter.Composite.allBodies(this.engine.world)) {
          this.renderBody(body, this.renderer, this.seed);
        }
        for (const {callback} of this.drawCallbacks) {
          callback();
        }
        matter.Events.trigger(this, "draw");
      }
      registerDraw(callback, depth) {
        this.drawCallbacks.push({
          callback,
          depth
        });
        this.drawCallbacks.sort(((a, b) => a.depth - b.depth));
      }
      unregisterDraw(callback) {
        const index = this.drawCallbacks.findIndex((e => e.callback == callback));
        if (index == -1) return;
        this.drawCallbacks.splice(index, 1);
      }
      /**
   * @param {Matter.Body} body
   * @param {number[]} set
   */      renderBody(body, renderer, seed) {
        if (body.plugin instanceof CaptchaPlugin) return;
        for (const part of body.parts) {
          if (part.id == body.id) continue;
          this.renderBody(part, renderer, seed);
        }
        if (body.parts.length > 1) return;
        if (body.isSensor) return;
        if (body.circleRadius) {
          renderer.circle(body.position.x, body.position.y, body.circleRadius, body.id ^ seed, -45 + (Math.random() * 45 - 22.5));
        } else {
          this.renderer.rc.polygon(body.vertices.map((e => [ e.x, e.y ])), {
            seed: body.id ^ this.seed
          });
        }
      }
    }
    /**
 * @param {Matter.Body} body
 */    function _getBaseParent(body) {
      let parent = body;
      while (parent.parent != null && parent.parent != parent) {
        parent = parent.parent;
      }
      return parent;
    }
    // ./src/door-challenge/states/door-challenge-state.js
    class DoorChallengeState {}
    // ./src/door-challenge/states/door-play-screen.js
    class DoorPlayScreen extends DoorChallengeState {
      /**
   * @param {DoorChallenge} challenge
   */
      constructor(challenge) {
        super();
        this.challenge = challenge;
      }
      enter() {
        this.challenge.run();
        this.challenge.loadLevel();
      }
      dispose() {}
      update(delta) {}
    }
    // ./src/door-challenge/door-challenge.js
    class DoorChallenge extends PhysicsChallenge {
      /**
   * @param {HTMLCanvasElement} canvas
   * @param {import("../sprite").Sprites} sprites
   * @param {Object[]} levelDef
   * @param {number} difficulty
   */
      constructor(canvas, sprites, levelDef, difficulty) {
        super(canvas, sprites, levelDef, difficulty);
        this.state = new DoorPlayScreen(this);
        this.state.enter();
      }
    }
    // ./src/loading-challenge.js
    class LoadingChallenge extends Challenge {
      /**
   * @param {HTMLCanvasElement} canvas
   */
      constructor(canvas) {
        super();
        this.canvas = canvas;
        this.isDisposed = false;
        this.timeSpent = 0;
        this.minLoadingTime = NaN;
        this.onUpdate = this.onUpdate.bind(this);
        this.lastUpdate = performance.now();
        requestAnimationFrame((timestamp => {
          if (this.isDisposed) return;
          this.lastFrame = timestamp;
          requestAnimationFrame(this.onUpdate);
        }));
      }
      dispose() {
        this.isDisposed = true;
        super.dispose();
      }
      get progress() {
        if (isNaN(this.minLoadingTime)) return 0;
        return Math.min(this.timeSpent / this.minLoadingTime, 1);
      }
      configureLoadTime() {
        this.minLoadingTime = randRange(src_config.loading.duration[0], src_config.loading.duration[1]);
      }
      onUpdate() {
        if (this.isDisposed) return;
        const now = performance.now();
        const delta = (now - this.lastUpdate) * .001;
        this.timeSpent += delta;
        this.lastUpdate = now;
        this.onDraw();
        if (!isNaN(this.minLoadingTime) && this.timeSpent >= this.minLoadingTime) {
          matter.Events.trigger(this, "complete");
        }
        requestAnimationFrame(this.onUpdate);
      }
      onDraw() {
        const ctx = this.canvas.getContext("2d");
        ctx.save();
        drawMessages(ctx, src_config.loading.messages, this.timeSpent);
        drawIndeterminateProgress(ctx, src_config.loading.progress.x, src_config.loading.progress.y, src_config.loading.progressRadius, src_config.loading.progressThickness, src_config.loading.progressSpeed, this.timeSpent);
        ctx.restore();
      }
    }
    // ./src/manager.js
    class Manager {
      constructor() {
        this.onChallengeComplete = this.onChallengeComplete.bind(this);
        this.onLoadingChallengeComplete = this.onLoadingChallengeComplete.bind(this);
        /** @type {HTMLCanvasElement} */        this.canvas = document.getElementById("challenge");
        /** @type {import("./ad-challenge/ad-challenge").Challenge} */        this._challenge = null;
        this.spritesheet = new OffscreenCanvas(2048, 4096);
        this.loadingChallengeCompleter = createCompleter();
        /** @type {import("./sprite").Sprites} */        this.sprites = null;
        this.onKeyUp = this.onKeyUp.bind(this);
        this.startTime = performance.now();
        this.numChallengesCompleted = 0;
        this.plan = [ () => {
          console.log("Challenge 0");
          if (!src_config.doorChallenge) return false;
          this.startDoorChallenge(0);
          return true;
        }, () => {
          console.log("Challenge 1");
          if (!src_config.doorChallenge) return false;
          this.startDoorChallenge(1);
          return true;
        }, () => {
          console.log("Challenge 2");
          if (!src_config.doorChallenge) return false;
          if (this.runTime < src_config.destroy.advancedDifficultyExpiry && this.numChallengesCompleted < 5) {
            return () => {
              this.startDoorChallenge(2);
              return true;
            };
          }
          return false;
        }, () => {
          console.log("Challenge 3");
          if (!src_config.adChallenge) return false;
          this.startAdChallenge();
          return true;
        } ];
      }
      get runTime() {
        return (performance.now() - this.startTime) * .001;
      }
      planDifficulty(index) {
        return src_config.planDifficulty[index < src_config.planDifficulty.length ? index : src_config.planDifficulty.length - 1];
      }
      async start() {
        const challenge = this.startLoadingChallenge();
        /** @type {HTMLScriptElement} */        const configElement = document.getElementById("data-config");
        src_config.setValues(JSON.parse(configElement.textContent));
        challenge.configureLoadTime();
        await this._createSpriteSheet();
        await this.loadingChallengeCompleter.promise;
        window.addEventListener("keyup", this.onKeyUp);
        this.nextChallenge();
      }
      async _createSpriteSheet() {
        /** @type {HTMLScriptElement} */
        const element = document.getElementById("data-sprites");
        const definitions = JSON.parse(element.textContent);
        const generator = new SpriteSheetGenerator;
        this.sprites = await generator.create(this.spritesheet, definitions);
        console.log("Loaded sprites");
      }
      startLoadingChallenge() {
        const challenge = new LoadingChallenge(this.canvas);
        matter.Events.on(challenge, "complete", this.onLoadingChallengeComplete);
        this.startChallenge(challenge);
        return challenge;
      }
      /**
   * @param {number} difficulty
   */      startDoorChallenge(difficulty) {
        console.assert(this.sprites != null);
        const challenge = new DoorChallenge(this.canvas, this.sprites, levels.level, difficulty);
        matter.Events.on(challenge, "complete", this.onChallengeComplete);
        this.startChallenge(challenge);
      }
      startAdChallenge() {
        const challenge = new AdChallenge(this.canvas, document.getElementById("captcha-video"), document.getElementById("image-mouse"), this.sprites);
        matter.Events.on(challenge, "complete", this.onChallengeComplete);
        this.startChallenge(challenge);
      }
      /**
   * @param {import("./ad-challenge/ad-challenge").Challenge} challenge
   */      startChallenge(challenge) {
        console.log("Start new challenge");
        this._challenge?.dispose();
        this._challenge = challenge;
      }
      completeCaptcha() {
        window.top.postMessage("success", "*");
      }
      onLoadingChallengeComplete() {
        this.loadingChallengeCompleter.resolve();
      }
      onChallengeComplete() {
        console.log(`Challenge completed in ${this.runTime}`);
        this.numChallengesCompleted++;
        this._challenge?.dispose();
        this._challenge = null;
        this.nextChallenge();
      }
      nextChallenge() {
        while (this.plan.length > 0) {
          const next = this.plan[0];
          const result = next();
          if (result === true) {
            this.plan.shift();
            return;
          } else if (result === false) {
            this.plan.shift();
          } else {
            this.plan.unshift(result);
          }
        }
        this.completeCaptcha();
      }
      /**
   * @param {KeyboardEvent} event
   */      onKeyUp(event) {
        if (!debugConfig.isEnabled) return;
        switch (event.code) {
         case "KeyQ":
          this.startDoorChallenge(0);
          break;

         case "KeyW":
          this.startDoorChallenge(1);
          break;

         case "KeyE":
          this.startDoorChallenge(2);
          break;

         case "KeyR":
          this.startAdChallenge();
          break;

         case "KeyT":
          this.onChallengeComplete();
        }
      }
    }
    function createCompleter() {
      let resolve, reject;
      const promise = new Promise(((res, rej) => {
        resolve = res;
        reject = rej;
      }));
      return {
        promise,
        resolve,
        reject
      };
    }
    // ./src/index.js
    /**
 * Applies gravitational acceleration to all `bodies`.
 * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
 *
 * @method _bodiesApplyGravity
 * @private
 * @param {Matter.Body[]} bodies
 * @param {Matter.Vector} gravity
 */
    matter.Engine._bodiesApplyGravity = function(bodies, gravity) {
      var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : .001, bodiesLength = bodies.length;
      for (var i = 0; i < bodiesLength; i++) {
        var body = bodies[i];
        if (body.isStatic || body.isSleeping) continue;
        let scale = gravityScale * (body.plugin?.gravityScale ?? 1);
        if (scale === 0) continue;
        let bodyGravity = body.plugin?.gravity ?? gravity;
        // add the resultant force of gravity
                body.force.y += body.mass * bodyGravity.y * scale;
        body.force.x += body.mass * bodyGravity.x * scale;
      }
    };
    (async () => {
      const prevKeys = [];
      window.addEventListener("keyup", (event => {
        if (!src_config.allowDebug) return;
        prevKeys.push(event.code);
        if (prevKeys.length > 5) {
          prevKeys.splice(0, prevKeys.length - 5);
        }
        if (prevKeys[0] == "KeyD" && prevKeys[1] == "KeyB" && prevKeys[2] == "KeyG" && prevKeys[3] == "KeyM" && prevKeys[4] == "KeyD") {
          debugConfig.isEnabled = !debugConfig.isEnabled;
          console.log(`Debug mode: ${debugConfig.isEnabled}`);
          if (debugConfig.isEnabled) {
            playSound([ 1, .05, 234, .01, .26, .41, 0, 2.3, 0, 0, -184, .08, .02, 0, 0, .1, 0, .84, .21, 0, 0 ]);
          } else {
            playSound([ 1.2, .05, 55, .08, .19, .5, 2, 1.5, 0, 0, 0, 0, 0, .9, 0, .8, .3, .35, .29, 0, 1880 ]);
          }
        }
      }));
      const manager = new Manager;
      await manager.start();
    })();
  })();
  /******/})();