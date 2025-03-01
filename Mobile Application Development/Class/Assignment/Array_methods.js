//Arrays methods
const countries = ["New Zealand", "USA", "Canada", "UAE"];
// to finds the length of an array
console.log(countries.length);
// to access the first element of an array
console.log(countries[0]);
// to add an element to the end of an array
console.log(countries.push("Australia"));
// to remove the last element of an array
console.log(countries.pop());
// to remove the first element of an array
console.log(countries.shift());
// to add an element to the beginning of an array
console.log(countries.unshift("India"));
// to find the index of an element in an array
console.log(countries.indexOf("India"));
// to find the last index of an element in an array
console.log(countries.lastIndexOf("India"));
// to check if an element is in an array
console.log(countries.includes("Pakistan"));
// to join all elements of an array into a string
console.log(countries.join(" "));
// to join all elements of an array into a string with a separator
console.log(countries.join(", "));
// to join all elements of an array into a string with a separator and a prefix
console.log(countries.join(", ", 2));
// to join all elements of an array into a string with a separator and a limit
console.log(countries.join(", ", 2, 4));
// to concatenate two arrays
console.log(countries.concat(["Pakistan", "Afghanistan"]));
// to slice an array
console.log(countries.slice(1, 3));
// to splice an array
console.log(countries.splice(1, 2,3,4,5));
// to reverse an array
console.log(countries.reverse());
// to sort an array
console.log(countries.sort());
// to convert an array to a string
console.log(countries.toString());
// to convert an array to a string with a separator
console.log(countries.toString(", "));
// flat an array
console.log(countries.flat());
