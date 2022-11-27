/*Создайте класс Калькулятор, который будет содержать 4 статических метода 
- Сложение, Умножение, Вычитание и Деление. 
Доработайте свою страничку с калькулятором, 
чтобы в ней использовались методы этого класса.*/
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let button = document.querySelectorAll("[operation]");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");

class Calculator {
  constructor(n1, n2) {
    this.n1 = +n1; //число 1
    this.n2 = +n2; //число 2
  }

  static ButtonClick(plus) {
     plus = this.n1 + this.n2;
    return plus;
    
    //console.log(`Результат вычисления = ${this.n1 + this.n2}`);
  }

  static ButtonClick2() {
    console.log(`Результат вычисления = ${this.n1 - this.n2}`);
  }

  static ButtonClick3() {
    console.log(`Результат вычисления = ${this.n1 * this.n2}`);
  }

  static ButtonClick4() {
    if (n2 == 0) {
      console.log(`На ноль делить нельзя`);
    }
    console.log(`Результат вычисления = ${this.n1 / this.n2}`);
  }
}
//let myCalc = new Calculator();
//let result=plus.addEventListener('click', console.log( Calculator.ButtonClick));

console.log(Calculator.ButtonClick(plus));
console.log(Calculator.ButtonClick2());
console.log(Calculator.ButtonClick3());
console.log(Calculator.ButtonClick4());

