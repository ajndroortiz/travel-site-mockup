var $ = require('jquery');
var Person = require('./modules/MobileMenu');

alert('This is a test for our webpack automation');

var john = new Person('John Doe', 'blue');
var jane = new Person('Jane Smith', 'green');
john.greet();
jane.greet();
