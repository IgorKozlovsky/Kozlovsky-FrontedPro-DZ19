// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function powRec(num, degree) {
  if (degree === 0) {
    return 1;
  }
  if (degree < 0) {
    return powRec(num, degree + 1) / num;
  } else {
    return num * powRec(num, degree - 1);
  }
}
console.log(powRec(2, 4));
console.log(powRec(2, -4));
console.log(powRec(2, 0));
console.log(powRec(2, 1));
console.log(powRec(2, -1));
