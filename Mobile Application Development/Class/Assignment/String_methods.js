//String methods 
let name="Muhammad Attaullah";
//length of string: length property
console.log(name.length);
//toUppercase and toLowercase: toUpperCase() and toLowerCase() methods
console.log(name.toUpperCase());
console.log(name.toLowerCase());
//Slice: slice is useed to extract a part of a string and return the extracted part in a new string.
console.log(name.slice(0,4));
//charAt: charAt() method returns the character at the specified index in a string.
console.log(name.charAt(3));
//charCodeAt: charCodeAt() method returns the Unicode of the character at the specified index in a string.
console.log(name.charCodeAt(3));
//indexOf: indexOf() method returns the index of the first occurrence of a specified value in a string.
console.log(name.indexOf("o"));
//lastIndexOf: lastIndexOf() method returns the index of the last occurrence of a specified value in a string.
console.log(name.lastIndexOf("o"));
//serach: search() method searches a string for a specified value and returns the position of the match.
console.log(name.search("o"));
//repeatt: repeat() method returns a new string with a specified number of copies of the string it was called on.
console.log(name.repeat(3));
//split: split() method splits a string into an array of substrings.
console.log(name.split(" "));
//substr: substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
console.log(name.substr(3,5));
//substring: substring() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
console.log(name.substring(3,5));
//replace: replace() method replaces a specified value with another value in a string.
console.log(name.replace("o","a"));
//replaceAll: replaceAll() method replaces all occurrences of a specified value with another value in a string.
console.log(name.replaceAll("o","a"));
//concat: concat() method is used to join two or more strings.
console.log(name.concat(" is a coder"));
//trim: trim() method removes whitespace from both ends of a string.
console.log(name.trim());
//includess: includes() method returns true if a string contains a specified value.
console.log(name.includes("John"));
//startsWith: startsWith() method returns true if a string begins with a specified value.
console.log(name.startsWith("John"));
//endsWith: endsWith() method returns true if a string ends with a specified value.
console.log(name.endsWith("Doe"));
//charsCodeAt: charCodeAt() method returns the Unicode of the character at the specified index in a string.
console.log(name.charCodeAt(3));
console.log(name.charCodeAt(3).toString(16));
//trimStart: trimStart() method removes whitespace from the beginning of a string.
console.log(name.trimStart());
//trimEnd: trimEnd() method removes whitespace from the end of a string.
console.log(name.trimEnd());
//padStart: padStart() method pads a string with another string.
console.log(name.padStart(10,"*"));
//padEnd: padEnd() method pads a string with another string.
console.log(name.padEnd(10,"*"));
//match: match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
console.log(name.match("Muhammad Attaullah"));
//matchAll: matchAll() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
console.log(name.matchAll("John"));
//typeof: typeof operator returns the type of a variable or an expression.
console.log(name.typeof);