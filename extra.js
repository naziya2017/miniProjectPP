function BACKSPC() {
    var a = document.calcul.result.value;
    document.calcul.result.value = a.substr(0, a.length - 1);
  }
  function square() {
    document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
  }
  function sqrt2() {
    document.calcul.result.value = Math.sqrt(document.calcul.result.value); // Use Math.sqrt for square root
  }
  function sqrt3() {
    document.calcul.result.value = Math.cbrt(document.calcul.result.value); // Use Math.cbrt for cube root
  }
  function number(value) {
    document.calcul.result.value += value;
  }
  function remv() {
    document.calcul.result.value = "";
    localStorage.clear(); // Fix localStorage.clear
  }
  function PI() {
    document.calcul.result.value += Math.PI;
  }
  function equal() {
    let expression = document.calcul.result.value;
  
    if (expression.includes("^")) {
      // Handle "^" operator
      let parts = expression.split("^");
      let x = parseFloat(parts[0]);
      let y = parseFloat(parts[1]);
      document.calcul.result.value = Math.pow(x, y);
    } else if (expression.includes("sin")) {
      // Handle sine function
      let inputValue = parseFloat(expression.slice(3)); // Parse the value
      let ans = Math.sin((inputValue * Math.PI) / 180); // Convert degrees to radians
      document.calcul.result.value = ans;
    } else if (expression.includes("cos")) {
      // Handle cosine function
      let inputValue = parseFloat(expression.slice(3)); // Parse the value
      let ans = Math.cos((inputValue * Math.PI) / 180); // Convert degrees to radians
      document.calcul.result.value = ans;
    } else if (expression.includes("tan")) {
      // Handle tangent function
      let inputValue = parseFloat(expression.slice(3)); // Parse the value
      let ans = Math.tan((inputValue * Math.PI) / 180); // Convert degrees to radians
      document.calcul.result.value = ans;
    } else {
      // Evaluate the expression using 'eval'
      try {
        const result = eval(expression);
        document.calcul.result.value = result;
      } catch (error) {
        document.calcul.result.value = "Error";
      }
    }
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
  debugger
  
  document.getElementById("convertButton").addEventListener("click", function () {
    var fromBase = parseInt(document.getElementById("fromBase").value);
    var toBase = parseInt(document.getElementById("toBase").value);
    var number = document.getElementById("number").value;
  
    var converted = convertBase(number, fromBase, toBase);
    document.getElementById("result").textContent = converted;
  });
  