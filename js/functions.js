// 1. Функция по проверке длины строки
function getStringLength (charset, maxlength) {

  if (charset.length <= maxlength) {
    console.log('Строка правильная');
  } else {
    console.log('Попробуйте другую строку');
  }
}

// 2. Проверка на палиндром
function checkPalindrome(str) {
  let normalizeString = str.replaceAll().toLowerCase();
  let reverseString = normalizeString.split('').reverse().join('');
  if (normalizeString !== reverseString) {
    console.log('Строка - не палиндром');
  } else {
    console.log('Строка -  палиндром');
  }
}

// Здесь вызовы функций
getStringLength('аff', 10);
checkPalindrome('Топот');
