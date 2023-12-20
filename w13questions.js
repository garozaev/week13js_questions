// просто тренировка
// попробовал сделать короче
// не понял зачем Math.abs
/*не совсем понял как пересчитываутя разница
в милсек(diffInMilliseconds) в год(2003),
получается пересчитывает в дату?!, 
поэтому приходится вычитать 1970?!*/
/*прикольно, если задать текущую дату и дату рождения
методом Date.now то, видно что обработку уходит 1 милисек
или меньше*/ 
//function calculateAge(birthDate) {
    //let currentDate = Date.now();/*.getUTCFullYear();*/
    //console.log(currentDate);
    //let diffInMilliseconds = currentDate - birthDate;
    //console.log(diffInMilliseconds);  
    // Конвертируем разницу в миллисекундах в годы
    //let ageDate = new Date(diffInMilliseconds).getUTCFullYear();
    //console.log(ageDate);
    //let age = Math.abs(ageDate/*.getUTCFullYear()*/ - 1970);
    //console.log(age);
    //return age;
  //}
  
  //let birthDate =/*Date.now()*/new Date('1990-05-15');/*.getUTCFullYear();*/
  //console.log(birthDate);
  //let age = calculateAge(birthDate);
  //console.log("Возраст: " + age + " лет");

  // это то же, только currentDate создаёт метод Date.now
  function calculateAge(birthDate) {
    let currentDate = Date.now();
    console.log(currentDate);
    let diffInMilliseconds = currentDate - birthDate;
    console.log(diffInMilliseconds);
    // Конвертируем разницу в миллисекундах в годы
    let ageDate = new Date(diffInMilliseconds);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(ageDate);
    console.log(age);
    return age;
  }
  
  let birthDate = new Date('1990-05-15');
  let age = calculateAge(birthDate);
  console.log("Возраст: " + age + " лет");

// сделал короче

function calculateAge1(birthDate1) {
    let currentDate = new Date().getUTCFullYear();
    let age1 = currentDate - birthDate1;
    return age1;
  }
  
  let birthDate1 = new Date('1990-05-15').getUTCFullYear();
  let age1 = calculateAge1(birthDate1);
  console.log("Возраст: " + age1 + " лет");



// 1 задание 

let newDate0 = new Date (2021,0,24,22,51);
let newDate1 = new Date('2021-01-24T22:51');
console.log(newDate0);
console.log(newDate1);

// 3 Задание 

let now = new Date();
let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1);
let differenceMs = tomorrow - now;
let differenceSec = Math.floor(differenceMs / 1000 );

console.log(differenceSec);

// 5 задание

let d = new Date(2016, 2, 9);
console.log(d);

// 7 Задание

let date = new Date();
console.log(date.getUTCHours());

// 9 Задание

let d1 = new Date();
let y1 = d1.getFullYear();
console.log(y1);

// 10 Задание

let y2 = new Date();
let d2 = y2.getDate();
console.log(d2);


