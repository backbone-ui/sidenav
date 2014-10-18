/*
 * Backbone UI: Sidenav
 * Source: https://github.com/backbone-ui/sidenav
 * Copyright © Makesites.org
 *
 * Initiated by Lyndel Thomas (@ryndel)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function (lib) {

	//"use strict";

	// Support module loaders
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery', 'underscore', 'backbone'], lib);
	} else if ( typeof module === "object" && module && typeof module.exports === "object" ){
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = lib;
	} else {
		// Browser globals
		lib(window.jQuery, window._, window.Backbone);
	}

}(function ($, _, Backbone) {

	// support for Backbone APP() view if available...
	var isAPP = ( typeof APP !== "undefined" && typeof APP.View !== "undefined" );
	var View = ( isAPP ) ? APP.View : Backbone.View;


	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;

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


	// update Backbone namespace regardless
	Backbone.UI = Backbone.UI ||{};
	Backbone.UI.Sidenav = Sidenav;

	// If there is a window object, that at least has a document property...
	if ( typeof window === "object" && typeof window.document === "object" ) {
		// update APP namespace
		if( isAPP ){
			APP.UI = APP.UI ||{};
			APP.UI.Sidenav = Sidenav;
			// save namespace
			window.APP = APP;
		}
		window.Backbone = Backbone;
	}

	// for module loaders:
	return Sidenav;


}));
