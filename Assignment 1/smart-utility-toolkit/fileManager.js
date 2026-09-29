const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

function createFile() {
  logger.info("Creating File...");
  fs.writeFileSync(filePath, "Hello Node.js\n");
  logger.success("File Created");
}

function readFile() {
  logger.info("Reading File");
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(data.trim());
  } catch (err) {
    logger.error(`Could not read file: ${err.message}`);
  }
}

function updateFile() {
  logger.info("Updating File...");
  try {
    fs.appendFileSync(filePath, "Learning FS Module\n");
    logger.success("File Updated");
  } catch (err) {
    logger.error(`Could not update file: ${err.message}`);
  }
}

function deleteFile() {
  try {
    fs.unlinkSync(filePath);
    logger.success("File Deleted");
  } catch (err) {
    // Handle missing file errors gracefully
    if (err.code === "ENOENT") {
      logger.warn("File does not exist, nothing to delete.");
    } else {
      logger.error(`Could not delete file: ${err.message}`);
    }
  }
}

function main() {
  createFile();
  readFile();
  updateFile();
  readFile();
  deleteFile();
}

main();