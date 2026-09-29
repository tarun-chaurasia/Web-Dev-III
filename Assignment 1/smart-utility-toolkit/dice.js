const crypto = require("crypto");
const logger = require("./modules/logger");

function rollDice() {
  return crypto.randomInt(1, 7);
}

function main() {
  const rolls = Number(process.argv[2]) || 1;

  logger.info(`Rolling the dice ${rolls} time(s)...`);

  for (let i = 1; i <= rolls; i++) {
    const value = rollDice();
    console.log(`Dice Rolled: ${value}`);
  }

  logger.success("Dice rolling complete.");
}

main();
