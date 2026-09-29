const logger = require("./modules/logger");

const [, , operation, arg1, arg2] = process.argv;

function calculate(op, a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error("Both operands must be valid numbers.");
  }

  switch (op) {
    case "add":
      return num1 + num2;
    case "sub":
    case "subtract":
      return num1 - num2;
    case "mul":
    case "multiply":
      return num1 * num2;
    case "div":
    case "divide":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    default:
      throw new Error(
        `Unknown operation "${op}". Supported: add, sub, mul, div`
      );
  }
}

function main() {
  if (!operation || arg1 === undefined || arg2 === undefined) {
    logger.warn("Missing arguments.");
    console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
    console.log("Example: node calculator.js add 10 5");
    process.exit(1);
  }

  try {
    logger.info(`Running operation "${operation}" on ${arg1} and ${arg2}`);
    const result = calculate(operation, arg1, arg2);
    console.log(`Result: ${result}`);
    logger.success("Calculation completed successfully.");
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
}


main();
