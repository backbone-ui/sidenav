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
			"click .ui-sidenav-control": "toggle",
		},
		
		/*initialize: function() {
			if( app && app.state && !app.state.mobile ){ 
				$(window).bind("resize", _.bind(this.resize, this));
			}
		},*/
		
		toggle: function() {
			$(this.el).toggleClass('ui-sidenav-active');
		}
		
		/*resize: function() {
			// $(this.el).removeClass('ui-sidenav-active');
			
		}, */
		
		/*remove: function() {
			// unbind the namespaced 
			$(window).unbind("resize");
	
			// don't forget to call the original remove() function
			Backbone.View.prototype.remove.call(this);
		}*/
	});
	
})(this._, this.Backbone);