//Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
//window.onload = init;
//function init() {
 // let button = document.getElementById();
 // button.onclick = ButtonClick;
 let n1 = document.getElementById('n1').value;
 let n2 = document.getElementById('n2').value;
 //let operation = document.querySelectorAll('[operation]');
 let button = document.getElementById("button");
let op;
 class Calculator {
    constructor(n1, n2) {
      this.n1 = n1; //число 1
      this.n2 = n2; //число 2 
    }  
    
    ButtonClick() {
      let result;
      
      switch (result) {
        case '+':
          result = n1 + n2
          break
        case '-':
          result = n1 - n2
          break
        case '*':
          result = n1 * n2
          break
        case '÷':
          result = n1 / n2
          break
        default:
          return
      }
    }
    }

  let calculator = new Calculator(n1, n2);
  
  document.getElementById("result").innerHTML=result;
/*  button.addEventListener('click',calculator
      
    );*/
 
  
  //let plus = document.getElementById("plus");
  //let v= plus.addEventListener('click',Calculator.ButtonClick2());
  //console.log('v');

  

  //let car1 = new Car('Tesla', '3');
  //car1.drive(); //Поехали на Tesla 3!
  
  //let car2 = new Car('Land Cruiser', '200');
  //car2.drive(); //Поехали на Land Cruiser 200!
  //https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/
