import ErrorRepository from '../js/error-repository';

test('test creating an object', () => {
  const obj = new ErrorRepository();
  expect(obj).toHaveProperty('errors');
  expect(obj.errors).toBeInstanceOf(Map);
});

test('test of the "translate" method', () => {
  const obj = new ErrorRepository();
  obj.errors.set(1, 'Описание ошибки с кодом 1');
  expect(obj.translate(1)).toBe('Описание ошибки с кодом 1');
  expect(obj.translate(2)).toBe('Unknown error');
});
