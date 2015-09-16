(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

	var one = {
		un1: 'aaron@theironyard.com',
		un2: 'admin@google.com',
		un3: 'troyacosta@sbcglobal.net',
		pw1: 'password123',
		pw2: 'pandas',
		pw3: 'honeycrisp'
	};
	function link() {
		window.location.replace('http://theironyard.com');
	}
	function logIn() {
		var user = $('#userName').val();
		var password = $('#password').val();
		if (user === one.un1 && password === one.pw1 || user === one.un2 && password === one.pw2 || user === one.un3 && password === one.pw3) {
			link();
			return true;
		}
		if (user === '') {
			$('#userNameError').html('Please enter an email address before logging in.');
		} else {
			$('#userNameError').html('Your username was not found.');
		}
		if (password === '') {
			$('#passwordError').html('Please enter a password before logging in.');
		} else {
			$('#passwordError').html('The password you entered is incorrect.');
		}
	}

	$('form').on('submit', function (e) {
		e.preventDefault();
		logIn();
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map