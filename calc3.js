let n1 = document.getElementById('n1').value;
 let n2 = document.getElementById('n2').value;
 let operationButtons = document.querySelectorAll('[operation]');

class Calculator {
    constructor(n1, n2) {
      this.n1 = n1; //число 1
      this.n2 = n2; //число 2 
    }
    

    ButtonClick() {
      let plus = document.getElementById('result');
      plus.innerHTML+=`Результат вычисления = ${this.n1 + this.n2}`;
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
  
  let calculator = new Calculator(n1, n2);
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.ButtonClick()
      calculator.ButtonClick2()
      calculator.ButtonClick3()
      calculator.ButtonClick4()
    })
  })
  