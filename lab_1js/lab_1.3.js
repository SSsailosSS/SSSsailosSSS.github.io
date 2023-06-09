'use strict';
function number() {
  let number;

  let num;
  do {
      num = prompt('Введите число большее 100');
      if (num === null) return; // выход из функции, если нажали "Отмена"
      if (num === '') continue; // продолжаем цикл, если введена пустая строка
  } while (num <= 100 ||  isNaN(num));
  return ('Вы ввели ', num, '> 100');
}

function simple() {
  let n = prompt("Введите число:");

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}
