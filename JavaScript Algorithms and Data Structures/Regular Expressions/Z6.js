let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/;
let result = reRegex.test(repeatNum);
//Reuse Patterns Using Capture Groups