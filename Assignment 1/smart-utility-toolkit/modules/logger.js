const COLORS = {
  reset: "\x1b[0m",
  info: "\x1b[36m",   // cyan
  success: "\x1b[32m", // green
  warn: "\x1b[33m",   // yellow
  error: "\x1b[31m",  // red
};

function timestamp() {
  return new Date().toISOString();
}

function log(message, level = "info") {
  const color = COLORS[level] || COLORS.info;
  console.log(`${color}[${timestamp()}] [${level.toUpperCase()}] ${message}${COLORS.reset}`);
}

module.exports = {
  info: (msg) => log(msg, "info"),
  success: (msg) => log(msg, "success"),
  warn: (msg) => log(msg, "warn"),
  error: (msg) => log(msg, "error"),
};
