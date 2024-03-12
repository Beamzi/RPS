


let addition = (a, b) => {
  return a + b;
}

let multiply = (a, b) => {
  return a * b;
}

let division = (a, b) => {
  return a / b;
}

let calc = (num1, num2, callBack) => {
  return callBack(num1, num2);
}

console.log(calc(20, 50, division));
