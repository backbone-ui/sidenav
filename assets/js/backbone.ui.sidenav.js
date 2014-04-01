// Backbone.js Sidenav extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/sidenav
//
// Licensed under the MIT license:
// http://makesites.org/licenses/MIT

(function(_, Backbone) {

	// support for Backbone APP() view if available...
	var isAPP = ( typeof APP !== "undefined" && typeof APP.View !== "undefined" );
	var View = ( isAPP ) ? APP.View : Backbone.View;

	var Sidenav = View.extend({

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



	// Support module loaders
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = Sidenav;
	} else {
		// Register as a named AMD module, used in Require.js
		if ( typeof define === "function" && define.amd ) {
			define( [], function () { return Sidenav; } );
		}
	}
	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.Backbone = Backbone;
		// update APP namespace
		if( typeof APP != "undefined" && (_.isUndefined( APP.UI ) || _.isUndefined( APP.UI.Sidenav ) ) ){
			APP.UI = APP.UI || {};
			APP.UI.Sidenav = Backbone.UI.Sidenav;
			window.APP = APP;
		}
	}

})(this._, this.Backbone);