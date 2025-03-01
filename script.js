let a = '';
let b = 7;
let c = null;
let d = 2;
let e;

alert (a || c && b || d);
alert (e || c && b && d)
alert ( e || c || b || e && d)


let name = prompt("Введите ваше имя");

if(name == 'Денис') {
  alert('Добрый день, учитель');
} else if (name == 'Алиса'
 || name == 'Иван'
 || name == 'Анастасия'
 || name == 'Андрей') {
  alert( 'Привет, одногрупник' );
} else {
  alert( 'Ты не из нашей песочницы!'  );
}

let age = prompt("Введите ваш возраст")

switch (age) {
  case '15':
    alert ("Вы еще слишком юны");
    break;
  case '25':
    alert ("Вы в расцвете сил");
    break;
  case '80':
  case '90':
    alert( "Вы уже слишком стар для этого" );
    break;
  default:
    alert( "Мы не готовы принять вашу заявку" );
    break;
}

let number = prompt('Введите число');
let degree = prompt('Введите степень числа');
let result = 1;
let i = 0;

while (i < degree) {
  result *= number;
  i++;
  
}
alert (result);


do {
  result *= number;
  i++;
} while (i < degree);
alert (result);

for (let i = 0; i < degree; i++) {
  result *= number;
}
alert (result);