/*! Girdle v1.0.0 - 2013-09-01 05:09:01 
 *  Vince Allen 
 *  Brooklyn, NY 
 *  vince@vinceallen.com 
 *  @vinceallenvince 
 *  License: MIT */

var Girdle = {}, exports = Girdle;

(function(exports) {

"use strict";

function Foot(opt_options) {
  var options = opt_options || {};
  this.message = options.message || 'You found a foothold.';
  this.name = 'Foot';
}

/**
 * Prints message to the body.
 */
Foot.prototype.slip = function() {
  document.body.innerText = this.message;
};


exports.Foot = Foot;

}(exports));