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
// Generics makes it really simple to object consists of something
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

/*
// ====================================
// GENERIC CLASSES
// ====================================

// By adding generic of T
// I can instantiate this class such that T can be any type. (Look below at examples)
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return this.data;
  }
}

// Since I added a T generic
// T can be number, string, boolean, etc.
const stringStore = new DataStorage<string>();
stringStore.addItem("Pokemon");
stringStore.addItem("Dracula");
stringStore.removeItem("Pokemon");
console.log(stringStore.getItem());

const numberStore = new DataStorage<number>();
numberStore.addItem(10);
numberStore.addItem(14);
numberStore.removeItem(10);
console.log(numberStore.getItem());
*/

/*
// ====================================
// GENERIC UTILITY EXAMPLES
// ====================================

interface CourseGoals {
  courses: string[];
  dateCompleted: Date;
  rating: number;
}

// Partial keywords makes forced props from interface optional
// Then you can input the changes like so below
// return as CourseGoals for extra type safety
function createCourseGoal(
  courses: string[],
  date: Date,
  rating: number
): CourseGoals {
  let goalsObj: Partial<CourseGoals> = {}; // Partial Keyword HERE
  goalsObj.courses = courses;
  goalsObj.dateCompleted = date;
  goalsObj.rating = rating;
  return goalsObj as CourseGoals;
}
*/
