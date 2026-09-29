const http = require("http");
const logger = require("./modules/logger");

const PORT = process.env.PORT || 3000;

const routes = {
  "/": "Welcome to Node Server",
  "/about": "About Page",
  "/contact": "Contact Page",
};

const server = http.createServer((req, res) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  if (Object.prototype.hasOwnProperty.call(routes, req.url)) {
    res.writeHead(200);
    res.end(routes[req.url]);
    logger.success(`Responded 200 for ${req.url}`);
  } else {
    res.writeHead(404);
    res.end("404 Error: Page Not Found");
    logger.warn(`Responded 404 for ${req.url}`);
  }
});

server.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}/`);
});
