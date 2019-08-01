var initialState = {
  input: 0,
  aState: "0",
  bState: "0",
  operator: "",
  newCalculation: false,
}

var state = Object.assign({}, initialState);

function reset() {
  state = Object.assign({}, initialState);
  updateInput(state.input);
}

function updateInput(value) {
  document.getElementById('value').value = value;
}

function addDigit(x) {
    var a = state.aState;
    if (x == 0 && state.input == 0) {
      a = "0";
    } else {
        if (a === "0" && x == ".") {
          a = a.concat(x);
        } else if (x == "." && a.indexOf(".") === -1) {
          a = a.concat(x);
        } else if (state.newCalculation === true) {
          a = x.toString(10);
        } else if (a == "0") {
          a = x.toString(10);
        } else {
          a = a.concat(x.toString(10));
        }
      state.input = a;
      updateInput(state.input);
      state.aState = a;
      state.newCalculation = false;
    }
  }

function operation(x) {
  var operator = x;
  state.operator = operator;

  var a = state.aState;
  var b = state.bState;

  if (a !=="0"  && b !=="0") {
    var result = calculation(a, b, operator);
    state.bState = result.toString(10);
    state.input = result;
    updateInput(state.input);
    state.aState = "0";
  } else {
    state.bState = a;
    state.aState = "0";
  }
}

function calculation(a, b, operator) {
  operator = state.operator;
  a = Number(a);
  b = Number(b);
  var result = 0;
  if(operator === "+") {
    result = a + b;
  }
  else if(operator === "-") {
    result = b - a;
  }
  else if(operator === "/" && (b === 0 || a === 0)) {
    result = 0;
  }
  else if (operator === "/") {
    result = b / a;
  } else {
    result = a * b;
  }
  return result;
}

function equals() {
  var toPrint = calculation(state.aState, state.bState, state.operator);
  state.aState = toPrint.toString(10);
  state.input = toPrint;
  updateInput(state.input);
  state.bState = "0";
  state.newCalculation = true;
}

function plusMinus() {
  var displayed = state.aState;
  if (displayed[0] == "-") {
    displayed = displayed.substring(1);
  } else if (displayed[0] == "0" && displayed.indexOf(".") === -1) {
    return displayed;
  }  else {
    displayed = "-" + displayed;
  }
  state.input = displayed;
  updateInput(state.input);
  state.aState = displayed;
}

function percent() {
  var displayed = state.aState;
  displayed = (Number(displayed) / 100).toString(10);
  state.input = displayed;
  updateInput(state.input);
  state.aState = displayed;
}
