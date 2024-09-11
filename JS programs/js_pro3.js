// Run this code in the source section in the inspect and make a snippet of this code
const BMICheck = () => {
     const name = prompt(`Enter your name: `);
     const height = prompt(`Enter your height in meters: `);
     const weight = prompt(`Enter your weight in kilograms: `);
     const result = weight / (height ** 2);
     
     if (result < 18.5) {
          alert(`${name} Your BMI is ${result} and you are Underweight.`);
     } else if (result >= 18.5 && result <= 24.9) {
          alert(`${name} Your BMI is ${result} and you are healthy.`);
     } else if (result >= 24.9 && result <= 29.9) {
          alert(`${name} Your BMI is ${result} and you are Overweight.`);
     } else if (result >= 30) {
          alert(`${name} Your BMI is ${result} and you are Obese.`)
     }
};

BMICheck();