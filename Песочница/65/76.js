'use strict';
// 1)
// function sayHi() {
//   function say() {
//     console.log(this);
//   }
//   say();
// }
// sayHi();

//2)
// const obj = {
//   a: 24,
//   b: 33,
//   sum: function () {
//     console.log(this.a + this.b);
//   },
// };

// obj.sum();

// 3)
// const nums = {
//   a: 12,
//   b: 22,
// };

// function sum() {
//   console.log(this.a + this.b);
// }

// sum.call(nums);

// 4)
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello! I am ${name} and I am ${this.age} years`);
  };
}

User.prototype.profession = function (prof) {
  console.log(`${this.name} is a ${prof}`);
};

const user = new User('Pavel', 34);
user.greet();
user.profession('teacher');
