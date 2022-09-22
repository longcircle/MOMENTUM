const calculator = {
  add: function (a, b) {
    return `${a} + ${b} = ${a + b}`;
  },
  minus: function (a, b) {
    return `${a} - ${b} = ${a - b}`;
  },
  multi: function (a, b) {
    return `${a} * ${b} = ${a * b}`;
  },
  div: function (a, b) {
    return `${a} / ${b} = ${a / b}`;
  },
  power: function (a, b) {
    return `${a} ** ${b} = ${a ** b}`;
  },
};

console.log(typeof calculator.power(5, 2));
