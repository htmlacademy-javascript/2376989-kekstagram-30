// 1. Функция по проверке длины строки
function getStringLength (charset, maxlength) {

  if (charset.length <= maxlength) {
    console.log('Строка правильная');
  } else {
    console.log('Попробуйте другую строку');
  }
}

getStringLength('аff', 10);
