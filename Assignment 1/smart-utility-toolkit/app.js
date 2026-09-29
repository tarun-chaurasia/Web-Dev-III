const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

const numbersToCheck = [2, 7, 10, 15, 42, 101];

logger.info("Starting isEven module demonstration...");

numbersToCheck.forEach((num) => {
  const result = isEven(num);
  if (result) {
    logger.success(`${num} is Even`);
  } else {
    logger.warn(`${num} is Odd`);
  }
});

logger.info("Demonstration complete. Module reused successfully via require().");
