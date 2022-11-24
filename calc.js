//window.onload = init;

//function init() {
  //let button = document.getElementById();
  //button.onclick = ButtonClick;
//}

function ButtonClick() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 + +n2}`);
}

function ButtonClick2() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 - +n2}`);
}

function ButtonClick3() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 * +n2}`);
}

function ButtonClick4() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  if (n2 == 0) {
    alert(`На ноль делить нельзя`);
  }
  alert(`Результат вычисления = ${+n1 / +n2}`);
}