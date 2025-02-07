// Run this code in the source section in the inspect and make a snippet of this code
function answer(operator, value1, value2, result) {
     if (operator == '+') {
          result = value1 + value2;
     } else if (operator == '-') {
          result = value1 - value2;
     } else if (operator == '*') {
          result = value1 * value2;
     } else if (operator == '/') {
          result = value1 / value2;
     }
     return result;
}

const operator = prompt(`Enter operator (+, -, *, / ): `);
const value1 = parseFloat(prompt(`Enter first value: `));
const value2 = parseFloat(prompt(`Enter second value: `));

const result = answer(operator, value1, value2, result);
alert(`${value1} ${operator} ${value2} = ${result}`);