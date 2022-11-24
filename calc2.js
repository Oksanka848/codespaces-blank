//Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
//window.onload = init;
//function init() {
 // let button = document.getElementById();
 // button.onclick = ButtonClick;
 let n1 = document.getElementById('n1').value;
 let n2 = document.getElementById('n2').value;
 let operationButtons = document.querySelectorAll('[operation]');

class Calculator {
    constructor(n1, n2) {
      this.n1 = n1; //число 1
      this.n2 = n2; //число 2 
    }
    chooseOperation(operation) {
      if (this.n1 === '') return
      if (this.n2 !== '') {
        this.ButtonClick()
      }
      this.operation = operation
      this.n1 = this.n2
      this.n1 = ''
    }

    ButtonClick() {
      let result
      const n1 = parseFloat(this.n1)
      const n2 = parseFloat(this.n2)
      if (isNaN(n1) || isNaN(n2)) return
      switch (this.operation) {
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
  const calculator = new Calculator(n1, n2);
  
    operationButtons.addEventListener('click', () => {
      calculator.ButtonClick()
      
    });
  
  
  //let plus = document.getElementById("plus");
  //let v= plus.addEventListener('click',Calculator.ButtonClick2());
  //console.log('v');

  

  //let car1 = new Car('Tesla', '3');
  //car1.drive(); //Поехали на Tesla 3!
  
  //let car2 = new Car('Land Cruiser', '200');
  //car2.drive(); //Поехали на Land Cruiser 200!
  //https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/
