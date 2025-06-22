export function generateQuestion(topic) {
  let a, b, operator, answer;

  switch (topic) {
    case "addition":
      a = randInt(100, 999);
      b = randInt(10, 999);
      operator = "+";
      answer = a + b;
      break;

    case "subtraction":
      a = randInt(100, 999);
      b = randInt(10, a);
      operator = "-";
      answer = a - b;
      break;

    case "multiplication":
      a = randInt(2, 12);
      b = randInt(2, 12);
      operator = "×";
      answer = a * b;
      break;

    case "division":
      b = randInt(2, 12);
      answer = randInt(2, 12);
      a = b * answer;
      operator = "÷";
      break;

    case "fractions":
      const numerator = randInt(1, 9);
      const denominator = randInt(numerator + 1, 12);
      a = `${numerator}/${denominator}`;
      b = "";
      operator = "";
      answer = parseFloat((numerator / denominator).toFixed(2));
      break;

    default:
      a = b = 0;
      operator = "?";
      answer = 0;
  }

  return { a, b, operator, answer };
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

