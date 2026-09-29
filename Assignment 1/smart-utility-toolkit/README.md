# Smart Utility Toolkit

Lab Assignment 1 — Web Dev III (Node.js & Express Backend), Unit 1.

A collection of mini backend utilities built with **only Node.js core modules**
(`process`, `http`, `fs`, `crypto`) — no npm packages, no Express.

## Folder Structure

```
smart-utility-toolkit/
├── calculator.js       # CLI calculator (process.argv)
├── app.js               # Demonstrates custom module reuse
├── server.js             # HTTP server with routing (http module)
├── fileManager.js       # File CRUD operations (fs module)
├── dice.js               # Secure random dice generator (crypto module)
├── test.txt               # Sample file used by fileManager.js
├── modules/
│   ├── isEven.js         # Custom module: checks even/odd numbers
│   └── logger.js         # Custom module: timestamped, colored console logs
└── README.md
```

## 1. CLI Calculator

```bash
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

Supported operations: `add`, `sub`/`subtract`, `mul`/`multiply`, `div`/`divide`.
Invalid operations or non-numeric inputs are handled gracefully with a clear
error message.

## 2. Custom Modules — `isEven` & `logger`

- `modules/isEven.js` exports a single function via `module.exports` that
  returns `true`/`false` for a given number.
- `modules/logger.js` exports an object with `info`, `success`, `warn`, and
  `error` methods that print timestamped, color-coded log lines.
- `app.js` imports both with `require()` and demonstrates reusing them
  across a loop of numbers.

Run:

```bash
node app.js
```

## 3. HTTP Server

```bash
node server.js
```

Then visit (browser or Postman):

| Route          | Response              |
|----------------|------------------------|
| `/`            | Welcome to Node Server |
| `/about`       | About Page             |
| `/contact`     | Contact Page           |
| anything else  | 404 Error: Page Not Found |

## 4. File Manager (fs module)

```bash
node fileManager.js
```

Performs, in order: **create** `test.txt` → **read** it → **update**
(append) it → **read** again → **delete** it. Missing-file errors on delete
are caught and logged instead of crashing the process.

## 5. Dice Generator (crypto module)

```bash
node dice.js        # single roll
node dice.js 5       # roll 5 times
```

Uses `crypto.randomInt(1, 7)` for cryptographically secure randomness
instead of `Math.random()`.

## Notes on Execution Flow

Every script logs through the shared `logger` module so you can trace
execution order in the terminal (`console.log` before/after each major
operation), and observe synchronous (`fs.*Sync`) behavior in
`fileManager.js` versus the event-driven nature of `server.js`.

## Bonus Challenges Implemented

- ✅ Colored terminal output via ANSI escape codes (`modules/logger.js`)
- ✅ Timestamped logs (`modules/logger.js`)
- ✅ Calculator supports 4 operations (add/sub/mul/div) instead of just 2
