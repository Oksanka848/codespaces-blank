//Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
//window.onload = init;
//function init() {
 // let button = document.getElementById();
 // button.onclick = ButtonClick;
 const n1 = document.getElementById('n1').value;
 const n2 = document.getElementById('n2').value;
 const operationButtons = document.querySelectorAll('[operation]');

class Calculator {
    constructor(n1, n2) {
      this.n1 = n1; //число 1
      this.n2 = n2; //число 2 
    }
    

    ButtonClick() {
      
        document.getElementsByTagName('output').innerHTML+=`Результат вычисления = ${this.n1 + this.n2}`;
    }

    ButtonClick2() {
        console.log(`Результат вычисления = ${this.n1 - this.n2}`);
    }

    ButtonClick3() {
        console.log(`Результат вычисления = ${this.n1 * this.n2}`);
    }

    ButtonClick4() {
        if (n2 == 0) {
            alert(`На ноль делить нельзя`);
          }
        console.log(`Результат вычисления = ${this.n1 / this.n2}`);
    }
    
  }
  
  const calculator = new Calculator(n1, n2);
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.ButtonClick()
      calculator.ButtonClick2()
      calculator.ButtonClick3()
      calculator.ButtonClick4()
    })
  })
  
  //let plus = document.getElementById("plus");
  //let v= plus.addEventListener('click',Calculator.ButtonClick2());
  //console.log('v');

  

  //let car1 = new Car('Tesla', '3');
  //car1.drive(); //Поехали на Tesla 3!
  
  //let car2 = new Car('Land Cruiser', '200');
  //car2.drive(); //Поехали на Land Cruiser 200!
  //https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/