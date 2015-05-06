"use strict";

module.exports = function(ms) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, ms);
	});
};