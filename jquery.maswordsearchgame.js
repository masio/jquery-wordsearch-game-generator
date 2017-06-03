;( function ($, window, document, undefined) {

	// undefined is asked as parameter in order to get the real undefined value for EMCAScript < 5 in which the undefined variable value can be mutated.
	// window and document are passed here in order to be (sightly) quicker to access, and specially to help in minification.
	// Both ideas are taken from 'github.com/jquery-boilerplate/jquery-boilerplate'.
	
	var pluginName = 'masWordSearchGame';
	var defaultProperties = {
		propertyname: 'value'
	};
	
	function Plugin (element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	
	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function() {
			this.otherInit('Word search game');
		},
		otherInit: function (text) {
			$(this.element).text(text);
		}
	});
	
	$.fn[pluginName] = function (options) {
	return this.each( function () {
		if (!$.data( this, "plugin_" + pluginName ) ) {
			$.data( this, 'plugin_' + pluginName, new Plugin( this, options) );
		}
	});
})(jQuery, window, document);
