//1

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));

  //2

function isAdult(age) {
    if(age >= 18) {
    return `Adult`;
  } else {
    return `Minor`;
    
  }
  }

  console.log(isAdult(21));
  console.log(isAdult(5));

  //3

  function isCharAVowel(vowel) {
    if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
        return `true`
  } else {
    return `false`
  }
}

  console.log(isCharAVowel("a"));
  console.log(isCharAVowel("h"));

  //4

  function generateEmail(name, domain) {
    return name + `@` + `example.com`

  }

  console.log(generateEmail("johnsmith", "example.com"));
  console.log(generateEmail("asff", "example.com"));

  //5

  function greetUser(name, timeOfDay) {
    return "Good" + `${timeOfDay}, ${name}!`

  }

  console.log(greetUser("Sam", "morning"));

  //6

  function maxOfThree(num1, num2, num3){
     return Math.max(num1, num2, num3)
  }

  console.log(maxOfThree(20, 10, 8));

  //7

  function calculateTip(bill, tipPercent) {
    return bill / 100 * tipPercent

  }

  console.log(calculateTip(50, 20));

  //8

  function convertTemperature(temp, scale) {
    if( scale === 'c') {
        return (temp * 9/5) + 32 + ' Fahrenheit'
    } else  (scale === 'F') 
        return (temp - 32) * 5/9 + 'celsius'

    }
  
  console.log(convertTemperature(32, 'c'));

  //9

  function basicCalculator(num1, num2, Operation) {
    if (Operation === "add")
        return num1 + num2 
    else if (Operation === "subtract")
        return num1 - num2
    else if (Operation === "multiply")
        return num1 * num2
    else if(Operation === "divide")
        return num1 / num2
  }

  console.log(basicCalculator(10, 5, "subtract"));
  console.log(basicCalculator(100, 2, "multiply"));






