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
