/*let newDate0 = new Date (2021,0,24,22,51);
let newDate1 = new Date(2021-0-24);
//let newDate2 = getTime(2021,0,24,22,51);
console.log(newDate0);
console.log(newDate1);
//console.log(newDate2);*/

let now = new Date();
let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1);
let differenceMs = tomorrow - now;
let differenceSec = Math.floor(differenceMs / 1000 );

console.log(differenceSec);