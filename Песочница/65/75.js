'use strict';

function Calculator() {}

Calculator.prototype.read = function () {
  this.a = +prompt('Num 1?');
  this.b = +prompt('Num 2?');
};

Calculator.prototype.sum = function () {
  return this.a + this.b;
};

Calculator.prototype.mul = function () {
  return this.a * this.b;
};

let calculator = new Calculator();

// calculator.read();
// console.log('Sum=' + calculator.sum());
// console.log('Mul=' + calculator.mul());

/////////////////////////

// function Accumulator(startingValue) {
//   this.value = startingValue;
// }

// Accumulator.prototype.read = function () {
//   const num = +prompt('New Num?');
//   this.value += num;
// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений

/////////////////////////
class Rectaengle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}

const square = new Rectaengle(10, 10);
const long = new Rectaengle(200, 10);

// console.log(square);
// console.log(square.calcArea());
// console.log(long.calcArea());

class ColoredRectengleText extends Rectaengle {
  constructor(width, height, text, bgColor) {
    super(width, height);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyRect() {
    return `    ${this.calcArea()} - площадь\n
    ${this.text} - текст\n
    ${this.bgColor} - цвет`;
  }
}

const redRect = new ColoredRectengleText(20, 20, 'Hello World', 'red');
console.log(redRect.showMyRect());
