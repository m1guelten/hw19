describe('Перевірка ageClassification(n)', () => {
  const arr = [
    null,
    'детский возраст',
    'молодой возраст',
    'средний возраст',
    'пожилой возраст',
    'старческий возраст',
    'долгожители',
  ];
  it('перевіряємо діапазон неіснуючого значення', () => {
    expect(ageClassification(-1)).toBe(arr[0]);
    expect(ageClassification(122.01)).toBe(arr[0]);
    expect(ageClassification(150)).toBe(arr[0]);
  });
  it('перевіряємо діапазон дитячого віку', () => {
    expect(ageClassification(1)).toBe(arr[1]);
    expect(ageClassification(24)).toBe(arr[1]);
  });
  it('перевіряємо діапазон молодого віку', () => {
    expect(ageClassification(44)).toBe(arr[2]);
    expect(ageClassification(24.01)).toBe(arr[2]);
  });
  it('перевіряємо діапазон середнього віку', () => {
    expect(ageClassification(44.01)).toBe(arr[3]);
    expect(ageClassification(65)).toBe(arr[3]);
  });
  it('перевіряємо діапазон похилого віку', () => {
    expect(ageClassification(75)).toBe(arr[4]);
    expect(ageClassification(65.1)).toBe(arr[4]);
  });
  it('перевіряємо діапазон старезного віку', () => {
    expect(ageClassification(90)).toBe(arr[5]);
    expect(ageClassification(75.01)).toBe(arr[5]);
  });
  it('перевіряємо діапазон довгожителів', () => {
    expect(ageClassification(122)).toBe(arr[6]);
    expect(ageClassification(90.01)).toBe(arr[6]);
  });
});
