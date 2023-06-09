'use strict';
function checkNumber() {
  let num;
  do {
    num = prompt("Введите число больше 100:");
  } while (num !== null && (isNaN(num) || +num <= 100));
}

function checkPrime() {
  const n = prompt("Введите число:");

  nextPrime:
  for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}
