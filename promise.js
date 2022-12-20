'use strict';

// console.log('Запрос данных...')

// const promise = new Promise( function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Поиск товара...');

//     const product = {
//       name: 'Samsung',
//       price: 1990,
//     };

//     resolve(product);
//   }, 2000);
// }); 

// promise.then((product) => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       product.status = 'ordered';
//       resolve(product);
//     }, 2000);
//   });
// }).then(product => {
//   console.log(`Товар найден: Модель:${product.name}, Цена: ${product.price}, Статус товара: ${product.status} `);
// }).finally(() => {
//   console.log('Поиск завершен');
// });

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  });
};

test(1000).then(() => console.log('1000 ms'));
test(3000).then(() => console.log('3000 ms'));