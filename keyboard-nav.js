
;(function(window){
	"use strict";

	function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
	}
	var defConfig = {
		activeSelector: '.active',
		prevCode: 37,
		nextCode: 39
	};

	function KeyboardNav (config) {
		config = extend(defConfig, config) ;
		config[config.prevCode] = prevFunction;
		config[config.nextCode] = nextFunction;

		window.document.addEventListener('keyup', handleKeyup(config));
	}

	function handleKeyup (config) {
		return function(e){
			var code = e.keyCode || e.whitch;
			if(config[code]){
				var active = selectActive(config);
				var action = config[code];
				goToNext(action(active));
			}
		}
	}

	function selectActive (config) {
		return window.document.querySelector(config.activeSelector);
	}

	function prevFunction (element) {
		var next = element.previousElementSibling;
		if(!next){
			next = element.parentElement.lastElementChild;
		}
		return next;
	}
	function nextFunction (element) {
		var next = element.nextElementSibling;
		if(!next){
			next = element.parentElement.firstElementChild;
		}
		return next;
	}

	function goToNext(element){
		if(element)
			window.document.location.href = element.querySelector('a').getAttribute('href');
	}

	window.KeyboardNav = KeyboardNav;

}(this));