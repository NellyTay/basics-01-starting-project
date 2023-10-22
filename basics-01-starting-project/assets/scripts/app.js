let currentResult = 0;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc) {
  const calcDesc = `${resultBeforeCalc} ${operator} ${getUserInput()}`;
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

function add() {
  const initialResult = currentResult;
  currentResult += getUserInput();
  createAndWriteOutput("+", initialResult);
  outputLogs("ADD", initialResult, getUserInput(), currentResult);
}

function subtract() {
  const initialResult = currentResult;
  currentResult -= getUserInput();
  createAndWriteOutput("-", initialResult);
  outputLogs("SUBTRACT", initialResult, getUserInput(), currentResult);
}

function multiply() {
  const initialResult = currentResult;
  currentResult *= getUserInput();
  createAndWriteOutput("*", initialResult);
  outputLogs("MULTIPLY", initialResult, getUserInput(), currentResult);
}

function divide() {
  const initialResult = currentResult;
  currentResult /= getUserInput();
  createAndWriteOutput("/", initialResult);
  outputLogs("DIVIDE", initialResult, getUserInput(), currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
