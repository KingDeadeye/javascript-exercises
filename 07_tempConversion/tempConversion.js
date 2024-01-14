const convertToCelsius = function (number) {
  let x=((number - 32) * 5 / 9);
  return +(x.toFixed(1));
};
//(0°C × 9/5) + 32
const convertToFahrenheit = function (number) {
  // (32°F − 32) × 5/9
  let y=((number * (9 / 5)) + 32);
  return +(y.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
