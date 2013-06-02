// Backbone.js Sidenav extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/sidenav
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	Backbone.UI.Sidenav = View.extend({
		
		el : '.ui-sidenav',
		
		options : {
			navEl : "nav", 
			mainEl : ".main"
		},
		
		events: {
			"click .ui-sidenav-control": "toggle",
		},
		
		toggle: function() {
			$(this.el).toggleClass('ui-sidenav-active');
		}, 
		
		resize: function() {
			$(this.el).removeClass('ui-sidenav-active');
		},
		
		postRender: function() {
			// check if we have the sidenav control
			var control = $(this.el).find(".ui-sidenav-control");
			if( !control.length ) { 
				// add it to the el
				var $el = $('<div class="container"><a class="ui-sidenav-control"></a></div>');
				$(this.el).find("header").prepend($el);
				// add relative classes to elements
				$( this.options.navEl ).addClass("ui-sidenav-nav");
				$( this.options.mainEl ).addClass("ui-sidenav-main");
			}
		}
		
	});
	
})(this._, this.Backbone);