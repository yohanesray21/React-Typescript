const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//  array
const numbers: number[] = [1, 2, 3];
const colors: string[] = ['red', 'white'];
const truths: boolean[] = [true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal

const point: { x: number; y: number } = {
  x: 1,
  y: 2,
};

const geNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When the functions return any type, and we need to clarify the value
const json = '{"x": 1, "y" : 2}';
const parse: { x: number; y: number } = JSON.parse(json);
console.log(parse);

// When the variable declare in one line
// and initialize it later
const arrays = ['red', 'white', 'green'];

let findRed: boolean;

for (let i = 0; arrays.length > i; i++) {
  if (arrays[i] === 'red') {
    findRed = true;
  }
}

// console.log(findRed);

// When we want a variable to have a type that can be inferred

const angka: number[] = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < angka.length; i++) {
  if (angka[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
console.log(numberAboveZero);
