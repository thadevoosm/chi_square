function calculateChiSquare() {
  var observedValues = document.getElementById('observed').value;
  var expectedValues = document.getElementById('expected').value;

  var observedArray = observedValues.split(',');
  var expectedArray = expectedValues.split(',');

  // Remove any leading/trailing spaces from each value
  observedArray = observedArray.map(function (value) {
    return parseFloat(value.trim());
  });

  expectedArray = expectedArray.map(function (value) {
    return parseFloat(value.trim());
  });

  var chiSquare = 0;

  for (var i = 0; i < observedArray.length; i++) {
    chiSquare += Math.pow((observedArray[i] - expectedArray[i]), 2) / expectedArray[i];
  }

  document.getElementById('result').value = chiSquare.toFixed(4);
}
