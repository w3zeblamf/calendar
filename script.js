const date = new Date();

//const month = date.getMonth();

//console.log(date);
//console.log(month);

const months = [
  'January', // [0]
  'February', // [1]
  'March', // [2]
  'April', // [3]
  'May', // [4]
  'June', // [5]
  'July', // [6]
  'August', // [7]
  'September', // [8]
  'October', // [9]
  'November', // [10]
  'December', // [11]
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = '';

for (let i = 1; i <= 31; i++) {}
