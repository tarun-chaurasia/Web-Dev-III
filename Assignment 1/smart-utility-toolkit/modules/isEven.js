function isEven(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("isEven() expects a valid number");
  }
  return num % 2 === 0;
}

module.exports = isEven;



// node -e "const isEven = require('./modules/isEven'); console.log(isEven(7))"