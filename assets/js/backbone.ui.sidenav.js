Backbone.UI = {};

Backbone.UI.Sidenav = Backbone.View.extend({
	
	events: {
		"click #nav-collapse": "toggle"
	},

	toggle: function() {
		$(this.el).toggleClass('shift');
	}

});