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
      state.aState = a;
      state.newCalculation = false;
    }
  }
