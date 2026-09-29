# Assignment 2 – Student Management REST API

Web Dev III (Node.js & Express Backend) | Unit 2

## Run
```bash
npm install
npm start
```
Server runs at http://localhost:3000

## Endpoints
| Method | URL | Description | Success | Errors |
|--------|-----|-------------|---------|--------|
| GET | /students | All students | 200 | – |
| GET | /students/:id | One student | 200 | 400, 404 |
| POST | /students | Add student `{ "name", "course" }` | 201 | 400 |
| PUT | /students/:id | Update `name` and/or `course` | 200 | 400, 404 |
| DELETE | /students/:id | Delete student | 200 | 400, 404 |

## Structure
```
app.js
routes/studentRoutes.js
middleware/logger.js
data/students.js
```
Data is stored in an in-memory array (no database).
