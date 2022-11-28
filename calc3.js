/*Создайте класс Калькулятор, который будет содержать 4 статических метода 
- Сложение, Умножение, Вычитание и Деление. 
Доработайте свою страничку с калькулятором, 
чтобы в ней использовались методы этого класса.*/

//let button = document.querySelectorAll("[operation]");
/*let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");*/
const buttons = document.querySelectorAll(".button");
for (button of buttons) { 
button.addEventListener("click", function onClick() {
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;
class Calculator {
  static ButtonClick() {
    +n1 + +n2;
    return +n1 + +n2;
  }

  static ButtonClick2() {
    +n1 - +n2;
    return  +n1 - +n2;
  }

  static ButtonClick3() {
    +n1 * +n2;
    return +n1 * +n2;
  }

  static ButtonClick4() {
    if (+n2 == 0) {
      console.log(`На ноль делить нельзя`);
      return false;
    }
    +n1 / +n2;
    return +n1 / +n2;
  }
}

console.log(Calculator.ButtonClick());
console.log(Calculator.ButtonClick2());
console.log(Calculator.ButtonClick3());
console.log(Calculator.ButtonClick4());
});
}
