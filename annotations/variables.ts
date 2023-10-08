let apples: number = 5;
//const cannot be changed, let can be.
let speed: string = "fast";

let nothingMuch: null = null;

let nothing: undefined = undefined;

//built in objeccts
let now: Date = new Date();

//Array, different ways to declare types of array
let colors: string[] = ["red", "green", "blue"];
let colors2: Array<string> = ["purple", "yellow", "orange"];
let count: number[] = [1, 2, 3];
let count2: Array<number> = [4, 5, 6];
let truths: boolean[] = [true, true, false];

//Classes
class Car {
  //creating the class here
}
let car: Car = new Car(); //capital C Car --> referring to the type of class car,  car : instance of Car

//Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
//void : return nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Use annotations
// 1: Fn that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
