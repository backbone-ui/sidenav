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
	
	
	Backbone.UI.Sidenav = Backbone.View.extend({
		
		events: {
			"click .ui-sidenav-control": "toggle"
		},
	
		toggle: function() {
			$(this.el).toggleClass('ui-sidenav-active');
		}
	
	});
	
})(this._, this.Backbone);