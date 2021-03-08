/*
// ====================================
// GENERICS EXAMPLE
// ====================================
// Array<string>. the string is an example of generics. an array must consist of string
const names: Array<string> = ["Manuel", "Max"];
// names[0].split("") <= would work since split is a string method and array MUST contain strings
// names[0].isNan() wouldn't work since generics tells us that names consist of strings only

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

// split works cuz we know Promise return value will be a string
// isNan won't work cuz Promise won't return a value that's a number
promise.then((data) => data.split(""));
// promise.then((data) => data.isNan()); :(
*/

/*
// ====================================
// GENERICS WITH FUNCTIONS
// ====================================

// merge takes in an object of types T and U, and returns a type that's an intersection of T and U
// we don't care about what's inside the T and U
// with extends, we say T or U must be an object
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

// without T and U. we don't really know what's inside output object.
// Generics makes it really simple to object consists something
let output1 = merge({ name: "Rick Wayne" }, { age: 23, gender: "Female" });
// Though output 2 has different values than output 1, with generics
// TS can infer that favFood prop exists within output 2
let output2 = merge({ weight: 100 }, { favFood: "green", favColor: "Pasta" });
console.log(output1.name);
console.log(output2.favFood);
*/

/*
// ====================================
// KEYOF PROPERTY
// ====================================

// 'keyof' property says if U is a key within T object
// this function will be fine
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

let output = extractAndConvert({ name: "Gianna" }, "name");
console.log(output);
*/

// ====================================
// GENERIC CLASSES
// ====================================

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}
