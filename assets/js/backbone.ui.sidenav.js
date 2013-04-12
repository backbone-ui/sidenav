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
		
		events: {
			"click .ui-sidenav-control": "toggle",
		},
		
		toggle: function() {
			$(this.el).toggleClass('ui-sidenav-active');
		}, 
		
		resize: function() {
			$(this.el).removeClass('ui-sidenav-active');
		}
		
	});
	
})(this._, this.Backbone);