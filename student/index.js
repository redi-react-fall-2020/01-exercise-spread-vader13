// Exercise 0
// Given a string,
// return the string
function returnTheString(string) {
  return string;
}

// Exercise 1
// Given a string,
// turn it into an array of the letters in the string
function splitTheString(string) {
  return [...string];
}

// Exercise 2
// Given an object,
// return a shallow copy of the object
function shallowCopyObject(object) {
  return { ...object };
}

// Exercise 3
// Given an array,
// return a shallow copy of the array
function shallowCopyArray(array) {
  return [...array];
}

// Exercise 4
// Given two objects,
// turn them into one object that contains the properties of both objects
function mergeTwoObjects(object1, object2) {
  return { ...object1, ...object2 };
}

// Exercise 5
// Given two arrays,
// turn them into one array containing all elements of both arrays
function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}

module.exports = {
  returnTheString,
  splitTheString,
  shallowCopyObject,
  shallowCopyArray,
  mergeTwoObjects,
  combineTwoArrays
};
