// 1. Проверка на палиндром

function isPalindrome(str) {
    // Убираем пробелы между словами с помощью replaceAll(/\s/g, '') и все буквы делаем в нижнем регистре toLowerCase()
    strForward = str.toLowerCase().replaceAll(/\s/g, '')
    // Разбиваем строку посимвольно и превращаем её в массив с помощью split(''), потом применяем к нему метод reverse(), собираем все символы в строку с помощью join(''), убираем пробелы и делаем нижний регистр   
    strReverse = str.toLowerCase().split('').reverse().join('').replaceAll(/\s/g, '')
    if (strReverse == strForward) {
      return true;
    } else {
      return false;
    }
  }
console.log(isPalindrome("А роза упала на лапу Азора")) // true
console.log(isPalindrome("Привет")) // false

// 2. FizzBuzz

function fizzBuzz() {
  // проверяем каждый элемент на возможность деления без остатка на 3 и 5
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBizz");
        }
        else if (i % 5 === 0) {
            console.log("Bizz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz();

// 3. Разбиение массива на части





