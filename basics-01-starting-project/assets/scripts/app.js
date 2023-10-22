let currentResult = 0;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, userEnteredInput) {
  const calcDesc = `${resultBeforeCalc} ${operator} ${userEnteredInput}`;
  outputResult(currentResult, calcDesc);
}

function outputLogs(operation, initialResult, userInput, endResult) {
  const logEntry = {
    operation: operation,
    initialResult: initialResult,
    userInput: userInput,
    endResult: endResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const initialResult = currentResult;
  const userEnteredInput = getUserInput();

  if (calculationType === "ADD") {
    currentResult += userEnteredInput;
    mathOperator = '+'
  } else if (calculationType === "SUBTRACT") {
    currentResult -= userEnteredInput;
    mathOperator = '-'
  } else if (calculationType === "MULTIPLY") {
    currentResult *= userEnteredInput;
    mathOperator = '*'
  } else if (calculationType === "DIVIDE") {
    currentResult /= userEnteredInput;
    mathOperator = '/'
  }
  
  createAndWriteOutput(mathOperator, initialResult, userEnteredInput);
  outputLogs(calculationType, initialResult, userEnteredInput, currentResult);
}

function add() {
  calculateResult('ADD')
}

function subtract() {
  calculateResult('SUBTRACT')
}

function multiply() {
  calculateResult('MULTIPLY')
}

function divide() {
  calculateResult('DIVIDE')
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
