# week13js_questions

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.

let newDate0 = new Date (2021,0,24,22,51);
let newDate1 = new Date('2021-01-24');
console.log(newDate0);
console.log(newDate1);

2. Для чего предназначен метод getDay()?

- getDay возвращает день недели, отсчёт с 0 (Sunday) до 6(Suturday)

3. Как посчитать, сколько секунд осталось до завтра?

let now = new Date();
let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1);
let differenceMs = tomorrow - now;
let differenceSec = Math.floor(differenceMs / 1000 );

console.log(differenceSec);

4. Для чего предназначен метод getDate()?

- ьетод getDate предназначен для извлечения информации о дне месяца (от 1 до 31) из объекта Date

5. Что выведет console.log(d) ?

   let d = new Date(2016, 2, 9);
   console.log(d);

   - выведет дату 9 марта 2016г 00:00:00 местного времени Wed Mar 09 2016 00:00:00 GMT+0300 (Москва, стандартное время)

​6. Что делает getTimezoneOffset() ?

- показывает разницу между местным в ременем и UTC + 0 в минутах

7. Что выведет консоль?

let date = new Date();

console.log(date.getUTCHours());

- выведет выведет время(час) по UTC шкале в зоне UTC+0(лондонское время без учёта летнего)

​8. Для чего предназначен метод getHours() объекта Date?

- getHours() предназначен для получения значения часа в местном часовом поясе из объекта Date

9. Что выведет консоль?

let d = new Date();
let y = d.getFullYear();
console.log(y);

- выведет значение года в местном часовом поясе

​10. В чём ошибка в коде?

let y = new Date();
let d = y.getDate();
console.log(d);

- ошибки нет
