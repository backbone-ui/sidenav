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
			"click #nav-collapse": "toggle"
		},
	
		toggle: function() {
			$(this.el).toggleClass('shift');
		}
	
	});
	
<<<<<<< HEAD
	events: {
		"click #nav-collapse": "toggle"
	},

	toggle: function() {
		$(this.el).toggleClass('ui-sidenav-shift');
	}
=======
>>>>>>> 38bb00384360de81eb05c94a4170f0137bef0060

})(this._, this.Backbone);
