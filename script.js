const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  //console.log(date.getDay());

  //date.setMonth(8)

  //const month = date.getMonth();

  //console.log(date);
  //console.log(month);

  const monthDays = document.querySelector('.days');

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // date.getMonth() + 1, 0) : this thisplay the las dey of the current month

  //console.log(lastDay);

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  //console.log(nextDays)

  //console.log(lastDayIndex);

  //console.log(prevLastDay);

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

  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = '';

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else days += `<div>${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
