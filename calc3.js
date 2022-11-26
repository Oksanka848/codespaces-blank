/*Создайте класс Калькулятор, который будет содержать 4 статических метода 
- Сложение, Умножение, Вычитание и Деление. 
Доработайте свою страничку с калькулятором, 
чтобы в ней использовались методы этого класса.*/
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;
let operation = document.querySelectorAll("[operation]");

class Calculator {
  constructor(n1, n2) {
    this.n1 = +n1; //число 1
    this.n2 = +n2; //число 2
  }

  ButtonClick() {
    console.log(`Результат вычисления = ${this.n1 + this.n2}`);
  }

  ButtonClick2() {
    console.log(`Результат вычисления = ${this.n1 - this.n2}`);
  }

  ButtonClick3() {
    console.log(`Результат вычисления = ${this.n1 * this.n2}`);
  }

  ButtonClick4() {
    if (n2 == 0) {
      console.log(`На ноль делить нельзя`);
    }
    console.log(`Результат вычисления = ${this.n1 / this.n2}`);
  }
}

let calculator = new Calculator(n1, n2);

calculator.ButtonClick();
calculator.ButtonClick2();
calculator.ButtonClick3();
calculator.ButtonClick4();
let button = document.addEventListener('click')
