# week13js_questions

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.

let newDate0 = new Date (2021,0,24,22,51);
let newDate1 = new Date(2021-0-24);
console.log(newDate0);
console.log(newDate1);

2. Для чего предназначен метод getDay()?

- getDay возвращает день недели, отсчёт с 0 (Sunday) до 6(Suturday)

3. Как посчитать, сколько секунд осталось до завтра?

let nowDate = Date.now();
let tomorrow =

4. Для чего предназначен метод getDate()?

5. Что выведет console.log(d) ?

   let d = new Date(2016, 2, 9);

   console.log(d);

​6. Что делает getTimezoneOffset() ?

7. Что выведет консоль?

let date = new Date();

console.log(date.getUTCHours());

​8. Для чего предназначен метод getHours() объекта Date? 9. Что выведет консоль?

let d = new Date();
let y = d.getFullYear();
console.log(y);

​10. В чём ошибка в коде?

let y = new Date();
let d = y.getDate();
console.log(d);
