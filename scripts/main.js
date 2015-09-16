'use strict';
$(document).ready(function () {

var one = {
	un1: 'aaron@theironyard.com',
	un2: 'admin@google.com',
	un3: 'troyacosta@sbcglobal.net',
	pw1: 'password123',
	pw2: 'pandas',
	pw3: 'honeycrisp'
}
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
	}
	else {
		$('#userNameError').html('Your username was not found.');
	}
	if (password === '') {
		$('#passwordError').html('Please enter a password before logging in.');
	}
	else {
		$('#passwordError').html('The password you entered is incorrect.');
	}
	


}

$('form').on('submit', function(e) {
	e.preventDefault();
	logIn();
})
});