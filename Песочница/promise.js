'use strict';

// const delay = (time) => new Promise((res) => setTimeout(() => res(), time));

// delay(1000).then(() => console.log('after 1 sec'));

// Promise.race([delay(1000), delay(4000)]).then(() => console.log('race'));
// Promise.all([delay(1000), delay(4000)]).then(() => console.log('all'));

console.log('Запрос дынных...');

new Promise((res, rej) => {
  const data = {
    name: 'TV',
    cost: 200,
  };
  setTimeout(() => {
    console.log('Данный получены...');
    res(data);
  }, 2000);
})
  .then((data) => {
    return new Promise((res, rej) => {
      data.id = 24;
      setTimeout(() => {
        console.log('Данный обрабатываются...');
        Math.random() < 0.5 ? res(data) : rej();
      }, 2000);
    });
  })
  .then((data) => {
    console.log('Готовые данные');
    data.modified = true;
    console.log(data);
  })
  .catch((err) => {
    console.log('Error!');
  })
  .finally(() => console.log('End'));
