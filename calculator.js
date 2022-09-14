const calculator = {
  add: function (a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
  },
  minus: function (a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
  },
  multi: function (a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
  },
  div: function (a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
  },
  power: function (a, b) {
    console.log(`${a} ** ${b} = ${a ** b}`);
  },
};

calculator.power(5, 2);
