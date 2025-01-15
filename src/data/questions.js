const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: "HyperText Markup Language",
    },
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["4", "22", "NaN"],
      answer: "22",
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["color", "font-color", "text-color"],
      answer: "color",
    },
    {
      question: "What is the correct way to declare a JavaScript variable?",
      options: ["var x;", "let x;", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["undefined", "boolean", "integer"],
      answer: "integer",
    },
    {
      question: "Which method is used to add an element to the end of an array in JavaScript?",
      options: ["push()", "pop()", "shift()"],
      answer: "push()",
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "def myFunction()", "function:myFunction()"],
      answer: "function myFunction()",
    },
    {
      question: "What is the correct syntax for referring to an external script called 'app.js'?",
      options: ["<script src='app.js'>", "<script href='app.js'>", "<script ref='app.js'>"],
      answer: "<script src='app.js'>",
    },
    {
      question: "Which of the following is the correct way to write a comment in JavaScript?",
      options: ["// This is a comment", "# This is a comment", "<!-- This is a comment -->"],
      answer: "// This is a comment",
    },
    {
      question: "Which operator is used to assign a value to a variable in JavaScript?",
      options: ["=", "==", "==="],
      answer: "=",
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["It refers to the current object", "It refers to the global object", "It refers to the parent function"],
      answer: "It refers to the current object",
    },
    {
      question: "What is the correct syntax to output 'Hello World' in JavaScript?",
      options: ["console.log('Hello World')", "echo('Hello World')", "print('Hello World')"],
      answer: "console.log('Hello World')",
    },
    {
      question: "Which of the following is used to compare both value and type in JavaScript?",
      options: ["==", "===", "!="],
      answer: "===",
    },
    {
      question: "What will the following code return? Boolean(10 > 9)",
      options: ["true", "false", "NaN"],
      answer: "true",
    },
    {
      question: "How do you write an infinite loop in JavaScript?",
      options: ["for(;;)", "while(true)", "Both A and B"],
      answer: "Both ",
    },
    {
      question: "Which method is used to remove the last element of an array in JavaScript?",
      options: ["pop()", "shift()", "splice()"],
      answer: "pop()",
    },
    {
      question: "Which of the following is used to define a constant in JavaScript?",
      options: ["let", "var", "const"],
      answer: "const",
    },
    {
      question: "What is the default value of a variable declared with 'var' outside of a function?",
      options: ["undefined", "null", "NaN"],
      answer: "undefined",
    },
    {
      question: "Which function can be used to convert a string to an integer in JavaScript?",
      options: ["parseInt()", "parseFloat()", "toInteger()"],
      answer: "parseInt()",
    },
    {
      question: "Which of the following is NOT a valid JavaScript loop?",
      options: ["for", "while", "loop"],
      answer: "loop",
    },
    {
      question: "Which of the following methods is used to add an event listener to an element in JavaScript?",
      options: ["addEventListener()", "onEvent()", "listen()"],
      answer: "addEventListener()",
    },
    {
      question: "What is the purpose of the 'setInterval' function in JavaScript?",
      options: ["To execute code at regular intervals", "To stop the code execution", "To execute code once"],
      answer: "To execute code at regular intervals",
    },
    {
      question: "Which method is used to remove an element from the beginning of an array in JavaScript?",
      options: ["shift()", "pop()", "unshift()"],
      answer: "shift()",
    },
    {
      question: "What is the purpose of the 'localStorage' object in JavaScript?",
      options: ["To store data persistently in the browser", "To store temporary data", "To create session cookies"],
      answer: "To store data persistently in the browser",
    },
    {
      question: "What does the 'JSON.stringify()' method do?",
      options: ["Converts a JavaScript object into a JSON string", "Converts a JSON string into a JavaScript object", "Converts a number into a string"],
      answer: "Converts a JavaScript object into a JSON string",
    },
    {
      question: "Which of the following is used to stop the execution of a function in JavaScript?",
      options: ["return", "stop", "break"],
      answer: "return",
    },
    {
      question: "What does the 'typeof' operator do in JavaScript?",
      options: ["Returns the type of a variable", "Returns the value of a variable", "Checks if a variable is an object"],
      answer: "Returns the type of a variable",
    },
    {
      question: "Which function is used to parse a string into a floating point number in JavaScript?",
      options: ["parseFloat()", "parseInt()", "toFloat()"],
      answer: "parseFloat()",
    },
    {
      question: "What is the value of 'null == undefined' in JavaScript?",
      options: ["true", "false", "undefined"],
      answer: "true",
    },
    {
      question: "What is a promise in JavaScript?",
      options: ["An object that represents the completion of an asynchronous operation", "A function that returns a value", "An object that executes a function"],
      answer: "An object that represents the completion of an asynchronous operation",
    },
    {
      question: "Which of the following methods can be used to iterate over an array in JavaScript?",
      options: ["forEach()", "map()", "Both A and B"],
      answer: "Both A and B",
    },
    {
      question: "What is the purpose of the 'call()' method in JavaScript?",
      options: ["To invoke a function with a specified 'this' value", "To define a new function", "To declare a variable"],
      answer: "To invoke a function with a specified 'this' value",
    },
    {
      question: "What does the 'Array.isArray()' method do?",
      options: ["Checks if a value is an array", "Creates a new array", "Converts a value into an array"],
      answer: "Checks if a value is an array",
    },
    {
      question: "Which method is used to get the index of an element in an array in JavaScript?",
      options: ["indexOf()", "getIndex()", "findIndex()"],
      answer: "indexOf()",
    },
    {
      question: "What does 'NaN' represent in JavaScript?",
      options: ["Not a Number", "Null", "Not available"],
      answer: "Not a Number",
    },
    {
      question: "How do you access the second element of an array named 'arr' in JavaScript?",
      options: ["arr[1]", "arr[2]", "arr(2)"],
      answer: "arr[1]",
    },
    {
      question: "Which operator is used to compare two values in JavaScript without type conversion?",
      options: ["==", "===", "!="],
      answer: "===",
    },
    {
      question: "What is the default value of the 'this' keyword in a regular function?",
      options: ["undefined", "global object", "null"],
      answer: "undefined",
    },
    {
      question: "Which of the following methods can be used to add an element to the beginning of an array?",
      options: ["unshift()", "shift()", "push()"],
      answer: "unshift()",
    },
    // Adding 61 more JavaScript-specific questions:
    {
      question: "Which method is used to find the first index of a value in an array?",
      options: ["findIndex()", "indexOf()", "search()"],
      answer: "indexOf()",
    },
    {
      question: "How can you prevent a form from being submitted in JavaScript?",
      options: ["e.preventDefault()", "e.stopPropagation()", "form.preventSubmit()"],
      answer: "e.preventDefault()",
    },
    {
      question: "How do you check if an object is an array?",
      options: ["Array.isArray()", "typeof Array", "isArray()"],
      answer: "Array.isArray()",
    },
    {
      question: "What does the 'concat()' method do in JavaScript?",
      options: ["Combines two or more arrays", "Finds the intersection of two arrays", "Sorts an array"],
      answer: "Combines two or more arrays",
    },
    {
      question: "What does the 'filter()' method return?",
      options: ["A new array with all elements that pass the test", "A boolean value", "A single element from an array"],
      answer: "A new array with all elements that pass the test",
    },
    {
      question: "What will 'console.log([1] == [1])' return?",
      options: ["true", "false", "error"],
      answer: "false",
    },
    {
      question: "Which method is used to remove elements from an array in JavaScript?",
      options: ["splice()", "slice()", "delete()"],
      answer: "splice()",
    },
    {
      question: "What is the result of '[] + []' in JavaScript?",
      options: ["[]", "''", "undefined"],
      answer: "''",
    },
    {
      question: "Which method can be used to sort an array alphabetically in JavaScript?",
      options: ["sort()", "order()", "arrange()"],
      answer: "sort()",
    },
    {
      question: "Which method adds one or more elements to the end of an array?",
      options: ["push()", "pop()", "shift()"],
      answer: "push()",
    },
    {
        question: "What is the output of '[] == ![]' in JavaScript?",
        options: ["true", "false", "undefined"],
        answer: "true",
      },
      {
        question: "What is the purpose of the 'setTimeout()' function?",
        options: ["Executes a function after a delay", "Executes a function repeatedly", "Stops the function from executing"],
        answer: "Executes a function after a delay",
      },
      {
        question: "What is the default return value of a JavaScript function?",
        options: ["undefined", "null", "0"],
        answer: "undefined",
      },
      {
        question: "Which of the following will cause a syntax error in JavaScript?",
        options: ["function(){}", "function myFunction", "function()"],
        answer: "function myFunction",
      },
      {
        question: "How can you get the length of an array in JavaScript?",
        options: ["array.length", "array.size", "array.count"],
        answer: "array.length",
      },
      {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: ["'==' compares value, '===' compares value and type", "'==' compares type, '===' compares value", "There is no difference"],
        answer: "'==' compares value, '===' compares value and type",
      },
      {
        question: "What is the purpose of the 'break' statement in JavaScript?",
        options: ["Exit a loop", "Exit a function", "Continue the loop"],
        answer: "Exit a loop",
      },
      {
        question: "What is the result of 'typeof NaN' in JavaScript?",
        options: ["'number'", "'NaN'", "'undefined'"],
        answer: "'number'",
      },
      {
        question: "What is the purpose of the 'continue' statement in JavaScript?",
        options: ["Skip the current iteration of a loop", "Exit the loop", "End the function execution"],
        answer: "Skip the current iteration of a loop",
      },
      {
        question: "Which of the following methods can be used to round a number to the nearest integer in JavaScript?",
        options: ["Math.round()", "Math.floor()", "Math.ceil()"],
        answer: "Math.round()",
      },
      {
        question: "How do you create an object in JavaScript?",
        options: ["var obj = {}", "var obj = Object()", "Both A and B"],
        answer: "Both A and B",
      },
      {
        question: "What does 'JSON.parse()' do in JavaScript?",
        options: ["Converts a JSON string into a JavaScript object", "Converts a JavaScript object into a JSON string", "Converts a number into a string"],
        answer: "Converts a JSON string into a JavaScript object",
      },
      {
        question: "What will the code 'console.log([1] + [1])' output in JavaScript?",
        options: ["'1,1'", "'[1,1]'", "'NaN'"],
        answer: "'1,1'",
      },
      {
        question: "What is the result of 'false + 1' in JavaScript?",
        options: ["0", "1", "NaN"],
        answer: "1",
      },
      {
        question: "Which operator is used to perform division in JavaScript?",
        options: ["/", "%", "*"],
        answer: "/",
      },
      {
        question: "Which method is used to find the last index of a value in an array?",
        options: ["lastIndexOf()", "indexOf()", "findLast()"],
        answer: "lastIndexOf()",
      },
      {
        question: "What will the code 'console.log(1 + '1' - 1)' return in JavaScript?",
        options: ["'11'", "NaN", "0"],
        answer: "0",
      },
      {
        question: "How do you create a regular expression in JavaScript?",
        options: ["/abc/", "new RegExp('abc')", "Both A and B"],
        answer: "Both A and B",
      },
      {
        question: "What is the purpose of the 'window' object in JavaScript?",
        options: ["Represents the browser window", "Represents a new JavaScript object", "Represents a global variable"],
        answer: "Represents the browser window",
      },
      {
        question: "How can you check if an array is empty in JavaScript?",
        options: ["arr.length == 0", "arr.isEmpty()", "arr == []"],
        answer: "arr.length == 0",
      },
      {
        question: "Which method is used to remove whitespace from the beginning and end of a string in JavaScript?",
        options: ["trim()", "strip()", "remove()"],
        answer: "trim()",
      },
      {
        question: "What is the result of 'typeof null' in JavaScript?",
        options: ["'object'", "'null'", "'undefined'"],
        answer: "'object'",
      },
      {
        question: "What does the 'join()' method do in JavaScript?",
        options: ["Concatenates all elements of an array into a string", "Joins two arrays together", "Adds an element to the end of an array"],
        answer: "Concatenates all elements of an array into a string",
      },
      {
        question: "Which method is used to get the last element of an array in JavaScript?",
        options: ["pop()", "slice(-1)", "last()"],
        answer: "pop()",
      },
      {
        question: "Which of the following is used to create an empty object in JavaScript?",
        options: ["{}", "Object()", "Both A and B"],
        answer: "Both A and B",
      },
      {
        question: "How can you trigger a function automatically after a delay?",
        options: ["setTimeout()", "setInterval()", "both"],
        answer: "setTimeout()",
      },
      {
        question: "Which method returns a new array with the elements that pass a test in JavaScript?",
        options: ["map()", "filter()", "forEach()"],
        answer: "filter()",
      },
      {
        question: "How do you add a new property to an object in JavaScript?",
        options: ["object.property = value", "object['property'] = value", "Both A and B"],
        answer: "Both A and B",
      },
      {
        question: "Which method is used to find if a specific value exists in an array?",
        options: ["includes()", "has()", "exist()"],
        answer: "includes()",
      },
      {
        question: "What is the output of 'console.log([] + {})' in JavaScript?",
        options: ["'[object Object]'", "'NaN'", "'[object Array]'"],
        answer: "'[object Object]'",
      },
      {
        question: "Which of the following methods can be used to parse a JSON string in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()"],
        answer: "JSON.parse()",
      },
      {
        question: "How can you prevent a number from being automatically converted to a string in JavaScript?",
        options: ["Use strict mode", "Use explicit conversion", "Use the Number() function"],
        answer: "Use explicit conversion",
      },
      {
        question: "Which method would you use to round a number up in JavaScript?",
        options: ["Math.ceil()", "Math.floor()", "Math.round()"],
        answer: "Math.ceil()",
      },
      {
        question: "Which method is used to execute code repeatedly at regular intervals?",
        options: ["setInterval()", "setTimeout()", "repeat()"],
        answer: "setInterval()",
      },
      {
        question: "What is the result of '1 + 2 + '3'' in JavaScript?",
        options: ["'33'", "6", "'123'"],
        answer: "'33'",
      },
      {
        question: "How do you define a constant in JavaScript?",
        options: ["const x = 10;", "var x = 10;", "let x = 10;"],
        answer: "const x = 10;",
      },
      {
        question: "What will the following code return? 'NaN' === NaN",
        options: ["true", "false", "undefined"],
        answer: "false",
      },
      {
        question: "What is the output of 'console.log([] == ![])' in JavaScript?",
        options: ["true", "false", "undefined"],
        answer: "true",
      },
      {
        question: "Which of the following methods is used to create a shallow copy of an array in JavaScript?",
        options: ["slice()", "copy()", "clone()"],
        answer: "slice()",
      },
      {
        question: "What will the code 'console.log(0.1 + 0.2 == 0.3)' return in JavaScript?",
        options: ["true", "false", "NaN"],
        answer: "false",
      },
      {
        question: "What will be the result of 'console.log(1 + '2' - 1)' in JavaScript?",
        options: ["'21'", "NaN", "2"],
        answer: "2",
      },
      {
        question: "What does the 'bind()' method do in JavaScript?",
        options: ["Creates a new function that, when called, has its 'this' value set to the provided value", "Sets a function to be executed in a different context", "Executes a function immediately"],
        answer: "Creates a new function that, when called, has its 'this' value set to the provided value",
      },
      {
        question: "What will 'console.log([1, 2] == [1, 2])' return in JavaScript?",
        options: ["true", "false", "NaN"],
        answer: "false",
      },
      {
        question: "What is the purpose of 'Object.freeze()' in JavaScript?",
        options: ["Makes an object immutable", "Creates a new object", "Prevents an object from being deleted"],
        answer: "Makes an object immutable",
      },
      {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        options: ["'null' is an object, while 'undefined' is a primitive type", "'null' is an object, while 'undefined' represents the absence of a value", "'undefined' is an object, while 'null' is a primitive type"],
        answer: "'null' is an object, while 'undefined' represents the absence of a value",
      },
      {
        question: "Which method is used to check if an object is a valid JSON string in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.isValid()"],
        answer: "JSON.parse()",
      },
      {
        question: "What is the result of '0.1 + 0.2 === 0.3' in JavaScript?",
        options: ["true", "false", "NaN"],
        answer: "false",
      },
      {
        question: "Which of the following will cause a 'TypeError' in JavaScript?",
        options: ["null.toString()", "undefined + 1", "3 * 4"],
        answer: "null.toString()",
      },
      {
        question: "What does the 'Object.create()' method do in JavaScript?",
        options: ["Creates a new object with the specified prototype object and properties", "Clones an object", "Creates a new empty object"],
        answer: "Creates a new object with the specified prototype object and properties",
      },
      {
        question: "What will be the result of 'console.log(1 == [1])' in JavaScript?",
        options: ["true", "false", "NaN"],
        answer: "true",
      },
      {
        question: "What will be the output of 'console.log([] == false)' in JavaScript?",
        options: ["true", "false", "NaN"],
        answer: "true",
      }
  ];
  
  export default questions;
  