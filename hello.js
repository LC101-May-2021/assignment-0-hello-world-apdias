function hello() {
	// TODO: change this string so that your program prints "Hello world!" 
	// when you hit the replit run button
	return "Hello world!";
}
 
module.exports = hello;


/*
"A JavaScript function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). The code to be executed, by the function, is placed inside curly brackets: {}. The code inside the function will execute when "something" invokes (calls) the function:
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)."

"The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. It is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module. You must specify ./ as a path of root folder to import a local module. However, you do not need to specify the path to import Node.js core modules or NPM modules in the require() function."
*/