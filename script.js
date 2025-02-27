var a = '';
var b = 7;
var c = null;
var d = 2;
var e;

alert (a || c && b || d);
alert (e || c && b && d)
alert ( e || c || b || e && d)


var name = prompt("Введите ваше имя");

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

var age = prompt("")


var age = prompt("Введите ваш возраст");

if (age == 15) {
alert("Вы еще слишком юны");
}
if (a == 25) {
alert("Вы в расцвете сил");
}

if (a == 80 || a == 90) {
alert( "Вы уже слишком стар для этого" );
}

if (a != 80 && a != 90 && a != 15 && a != 25) {
alert( "Мы не готовы принять вашу заявку" );
}