function ageClassification(n) {
  return n < 0
    ? null
    : n <= 24
    ? 'детский возраст'
    : n <= 44
    ? 'молодой возраст'
    : n <= 65
    ? 'средний возраст'
    : n <= 75
    ? 'пожилой возраст'
    : n <= 90
    ? 'старческий возраст'
    : n <= 122
    ? 'долгожители'
    : null;
}
function evenFn(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) arr.push(i);
  }
  return arr;
}
// console.log(evenFn());
// console.log(evenFn(15));
// console.log(evenFn(20));
