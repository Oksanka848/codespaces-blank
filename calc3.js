/*Создайте класс Калькулятор, который будет содержать 4 статических метода 
- Сложение, Умножение, Вычитание и Деление. 
Доработайте свою страничку с калькулятором, 
чтобы в ней использовались методы этого класса.*/

//let button = document.querySelectorAll("[operation]");
/*let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");*/

class Calculator {
 
  static ButtonClick() {
     plus = +n1 + +n2;
    return plus;
  }

  static ButtonClick2() {
   minus = +n1 - +n2;
    return minus;
  }

  static ButtonClick3() {
    multi = +n1 * +n2;
    return multi;
  }

  static ButtonClick4() {
    if (+n2 == 0) {
       console.log(`На ноль делить нельзя`);
     return false;
    }
    divide = +n1 * +n2;
    return divide;
  }
}
//let myCalc = new Calculator();
//let result=plus.addEventListener('click', console.log( Calculator.ButtonClick));
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;
let button = document.addEventListener('click', function() { Calculator.ButtonClick()});

console.log(Calculator.ButtonClick());
console.log(Calculator.ButtonClick2());
console.log(Calculator.ButtonClick3());
console.log(Calculator.ButtonClick4());

