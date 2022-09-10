describe('Перевірка evenFn()', () => {
  let a = 1;
  let j = 0;
  const arr2 = [];
  beforeEach(function () {
    arr2.push(2 * a++);
    j += 2;
  });
  it('перевіряємо значення в діапазоні значень 2-3', () => {
    expect(evenFn(j)).toEqual(arr2);
    console.log(`j=${j}`);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 4-5', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 6-7', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 8-9', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 10-11', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 12-13', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 14-15', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 16-17', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 18-19', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
  it('перевіряємо значення в діапазоні значень 20-21', () => {
    expect(evenFn(j)).toEqual(arr2);
    expect(evenFn(j + 1)).toEqual(arr2);
  });
});
