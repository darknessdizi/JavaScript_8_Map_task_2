import ErrorRepository from './error-repository';

const list = [
  [1, 'Описание ошибки с кодом 1'],
  [2, 'Описание ошибки с кодом 2'],
  [3, 'Описание ошибки с кодом 3'],
  [4, 'Описание ошибки с кодом 4'],
];

const errors = new ErrorRepository(list);

// for (const element of list) {
//   errors.errors.set(...element)
// }

console.log(errors.translate(2));
console.log(errors.translate(200));
console.log(errors);
