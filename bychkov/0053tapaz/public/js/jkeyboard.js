
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
; (function ($, window, document, undefined) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "jkeyboard",
        defaults = {
            layout: "english",
            input: $('#input')
        };


    var function_keys = {
        backspace: {
            text: '&nbsp;',
        },
        return: {
            text: 'Enter'
        },
        shift: {
            text: '&nbsp;'
        },
        space: {
            text: '&nbsp;'
        },
        numeric_switch: {
            text: '123',
            command: function () {
                this.createKeyboard('numeric');
                this.events();
            }
				},
					// кастомные клавы
					numeric_switch__mail: {
						text: '123',
            command: function () {
							this.createKeyboard('numeric__mail');
							this.events();
            }
					},
					
					rus_switch__mail: {
						text: 'РУС',
            command: function () {
							this.createKeyboard('russian__mail');
							this.events();
            }
					},
					
					eng_switch__mail: {
						text: 'Eng',
            command: function () {
							this.createKeyboard('english__mail');
							this.events();
            }
					},
					symbol_switch__mail: {
						text: '#+=',
						command: function () {
							this.createKeyboard('symbolic__mail');
							this.events();
						}
					},
					// /кастомные клавы
				
        layout_switch: {
            text: '&nbsp;',
            command: function () {
                var l = this.toggleLayout();
                this.createKeyboard(l);
                this.events();
            }
        },
        character_switch: {
            text: 'ABC',
            command: function () {
                this.createKeyboard(layout);
                this.events();
            }
        },
        symbol_switch: {
            text: '#+=',
            command: function () {
                this.createKeyboard('symbolic');
                this.events();
            }
				},
				
        symbol_inner: {
            text: 'ввести',
            command: function () {
                // this.createKeyboard('symbolic');
                this.events();
            }
				},
				
        symbol_rl: {
            text: 'руб.',
            command: function () {
                // this.createKeyboard('symbolic');
                this.events();
            }
				}

				
    };


    var layouts = {
        selectable: ['english__mail', 'russian__mail', 'russian'],
        
				// кастомные клавы
				english__mail: [
					['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'backspace',],
					['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',],
					[  'z', 'x', 'c', 'v', 'b', 'n', 'm', '@','.' ],
					['numeric_switch__mail', 'rus_switch__mail', '_', '-']
				],

				russian__mail: [
					['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'backspace', ],
					['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
					[ 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '@', '.'],
					['numeric_switch__mail', 'eng_switch__mail', '_', '-']
				],
        numeric__mail: [
					['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace'],
					['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
					['eng_switch__mail', 'symbol_switch__mail', '.', ',', "'", '?', '!', 'symbol_switch__mail'],
				 
				],
				symbolic__mail: [
						['[', ']', '{', '}', '#', '%', '^', '*', '+', '=', 'backspace'],
						['_', '\\', '|', '~', '<', '>'],
						['eng_switch__mail', 'numeric_switch', '.', ',', '?', '!', "'"],
				],
        numbers_only: [
					['1', '2', '3',],
					['4', '5', '6',],
					['7', '8', '9',],
					['0', 'backspace'],
				],
				
        litter: [
					['10 л', '500 ₽', ],
					['15 л', '1000 ₽', ],
					['20 л', '1500 ₽', ],
					['25 л', 'symbol_inner'],
				],
				numbers_only_2: [
					['1', '2', '3', ],
					['4', '5', '6', ],
					['7', '8', '9', ],
					['symbol_rl', '0', 'C'],
				],
				// /кастомные клавы
				
			}

    var shift = false, capslock = false, layout = 'english', layout_id = 0;

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            layout = this.settings.layout;
            this.createKeyboard(layout);
            this.events();
        },

        createKeyboard: function (layout) {
            shift = false;
            capslock = false;

            var keyboard_container = $('<ul/>').addClass('jkeyboard'),
                me = this;

            layouts[layout].forEach(function (line, index) {
                var line_container = $('<li/>').addClass('jline');
                line_container.append(me.createLine(line));
                keyboard_container.append(line_container);
            });

            $(this.element).html('').append(keyboard_container);
        },

        createLine: function (line) {
            var line_container = $('<div/>');

            line.forEach(function (key, index) {
                var key_container = $('<button type="button"/>').addClass('jkey').data('command', key);

                if (function_keys[key]) {
                    key_container.addClass(key).html(function_keys[key].text);
                }
                else {
                    key_container.addClass('letter').html(key);
                }

                line_container.append(key_container);
            })

            return line_container;
        },

        events: function () {
            var letters = $(this.element).find('.letter'),
                shift_key = $(this.element).find('.shift'),
                space_key = $(this.element).find('.space'),
                backspace_key = $(this.element).find('.backspace'),
                return_key = $(this.element).find('.return'),

                me = this,
                fkeys = Object.keys(function_keys).map(function (k) {
                    return '.' + k;
                }).join(',');

            letters.on('click', function () {
                me.type((shift || capslock) ? $(this).text().toUpperCase() : $(this).text());
            });

            space_key.on('click', function () {
                me.type(' ');
            });

            return_key.on('click', function () {
                me.type("\n");
                me.settings.input.parents('form').submit();
            });

            backspace_key.on('click', function () {
                me.backspace();
            });

            shift_key.on('click', function () {
                if (capslock) {
                    me.toggleShiftOff();
                    capslock = false;
                } else {
                    me.toggleShiftOn();
                }
            }).on('dblclick', function () {
                capslock = true;
            });


            $(fkeys).on('click', function () {
                var command = function_keys[$(this).data('command')].command;
                if (!command) return;

                command.call(me);
            });
        },

        type: function (key) {
            var input = this.settings.input,
                val = input.val(),
                input_node = input.get(0),
                start = input_node.selectionStart,
                end = input_node.selectionEnd;

            var max_length = $(input).attr("maxlength");
            if (start == end && end == val.length) {
                if (!max_length || val.length < max_length) {
                    input.val(val + key);
                }
            } else {
                var new_string = this.insertToString(start, end, val, key);
                input.val(new_string);
                start++;
                end = start;
                input_node.setSelectionRange(start, end);
            }

            // input.trigger('focus');

            if (shift && !capslock) {
                this.toggleShiftOff();
            }
        },

        backspace: function () {
            var input = this.settings.input,
                val = input.val();

            input.val(val.substr(0, val.length - 1));
        },

        toggleShiftOn: function () {
            var letters = $(this.element).find('.letter'),
                shift_key = $(this.element).find('.shift');

            letters.addClass('uppercase');
            shift_key.addClass('active')
            shift = true;
        },

        toggleShiftOff: function () {
            var letters = $(this.element).find('.letter'),
                shift_key = $(this.element).find('.shift');

            letters.removeClass('uppercase');
            shift_key.removeClass('active');
            shift = false;
        },

        toggleLayout: function () {
            layout_id = layout_id || 0;
            var plain_layouts = layouts.selectable;
            layout_id++;

            var current_id = layout_id % plain_layouts.length;
            return plain_layouts[current_id];
        },

        insertToString: function (start, end, string, insert_string) {
            return string.substring(0, start) + insert_string + string.substring(end, string.length);
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
