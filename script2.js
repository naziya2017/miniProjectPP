function BACKSPC() {
  var resultField = document.calcul.result;
  resultField.value = resultField.value.slice(0, -1);
}

function square() {
  var resultField = document.calcul.result;
  resultField.value = Math.pow(resultField.value, 2);
}

function sqrt2() {
  var resultField = document.calcul.result;
  resultField.value = Math.sqrt(resultField.value);
}

function sqrt3() {
  var resultField = document.calcul.result;
  resultField.value = Math.cbrt(resultField.value);
}

function number(value) {
  var resultField = document.calcul.result;
  resultField.value += value;
}

function remv() {
  var resultField = document.calcul.result;
  resultField.value = "";
  localStorage.clear();
}

function PI() {
  var resultField = document.calcul.result;
  resultField.value += Math.PI;
}

function evaluateExpression(expression) {
  if (expression.includes("^")) {
    // Handle "^" operator
    let parts = expression.split("^");
    let x = parseFloat(parts[0]);
    let y = parseFloat(parts[1]);
    return Math.pow(x, y);
  } else if (expression.includes("sin")) {
    // Handle sine function
    let inputValue = parseFloat(expression.slice(3)); // Parse the value
    return Math.sin((inputValue * Math.PI) / 180); // Convert degrees to radians
  } else if (expression.includes("cos")) {
    // Handle cosine function
    let inputValue = parseFloat(expression.slice(3)); // Parse the value
    let ans = Math.cos((inputValue * Math.PI) / 180); // Convert degrees to radians
    // Round the result to 10 decimal places to avoid precision issues
    return ans.toFixed(10);
  } else if (expression.includes("tan")) {
    // Handle tangent function
    let inputValue = parseFloat(expression.slice(3)); // Parse the value
    return Math.tan((inputValue * Math.PI) / 180); // Convert degrees to radians
  } else {
    // Evaluate the expression using 'eval'
    try {
      return eval(expression);
    } catch (error) {
      return "Error";
    }
  }
}

function equal() {
  var resultField = document.calcul.result;
  let expression = resultField.value;
  resultField.value = evaluateExpression(expression);
}

function convertBase(num, fromBase, toBase) {
  var decimalValue = convertToDecimal(num, fromBase);
  var result = convertFromDecimal(decimalValue, toBase);
  return result;
}

function convertToDecimal(num, fromBase) {
  var decimalValue = 0;
  var length = num.length;
  for (var i = 0; i < length; i++) {
    var digit = num.charAt(i);
    var digitValue = parseInt(digit, fromBase);
    decimalValue += digitValue * Math.pow(fromBase, length - i - 1);
  }
  return decimalValue;
}

function convertFromDecimal(decimalValue, toBase) {
  var result = '';
  while (decimalValue > 0) {
    var remainder = decimalValue % toBase;
    if (toBase === 16 && remainder >= 10) {
      // Convert values 10-15 to A-F for base 16
      result = String.fromCharCode(65 + remainder - 10) + result;
    } else {
      result = String(remainder) + result;
    }
    decimalValue = Math.floor(decimalValue / toBase);
  }
  return result || '0';
}

document.getElementById("convertButton").addEventListener("click", function () {
  var fromBase = parseInt(document.getElementById("fromBase").value);
  var toBase = parseInt(document.getElementById("toBase").value);
  var number = document.getElementById("number").value;

  var converted = convertBase(number, fromBase, toBase);
  document.getElementById("result").textContent = converted;
});
