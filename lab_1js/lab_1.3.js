'use strict';
let number;

    do {
      number = prompt("Введите число больше 100:", "");
    } while (number <= 100 && number != null);

    if (Number(number) != number) {
      alert("Вы ввели не число");
    } else if (number !== null) {
      alert("Спасибо, вы ввели число больше 100: " + number);
    } else {
      alert("Вы отменили ввод.");
    }
