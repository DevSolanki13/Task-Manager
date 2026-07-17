
# Task Manager

Task Manager is a small practice project that demonstrates a CRUD REST API built with Express and MongoDB, plus a minimal static frontend served from `public/`.

## Features

- Create, read, update, and delete tasks
- Minimal static frontend that consumes the API
- Error handling middleware and a reusable async wrapper

## Tech Stack

- Node.js + Express
- MongoDB (Mongoose)
- Vanilla HTML/CSS/JS for the frontend
- Nodemon for development

## Requirements

- Node.js (v16+ recommended)
- npm
- A MongoDB URI (Atlas or local)

## Setup

1. Copy the example env file and set your MongoDB connection string:

```bash
cp .env.example .env
# then open .env and set MONGO_URI
```

Example `MONGO_URI` values:

- Local MongoDB: `mongodb://localhost:27017/task-manager`
- Atlas (replace user/password): `mongodb+srv://<user>:<pass>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority`

2. Install dependencies:

```bash
npm install
```

3. Start the app (development):

```bash
npm start
```

The server listens on the `PORT` environment variable or `5000` by default.

## API

Base path: `/api/v1/tasks`

- `GET /api/v1/tasks` — list all tasks
- `POST /api/v1/tasks` — create a task (JSON body: `{ "name": "..." }`)
- `GET /api/v1/tasks/:id` — get a single task
- `PATCH /api/v1/tasks/:id` — update a task
- `DELETE /api/v1/tasks/:id` — delete a task

Example `curl` (create task):

```bash
curl -X POST http://localhost:5000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"name":"Buy milk"}'
```

## Frontend

Open `http://localhost:5000/` in your browser to use the UI in `public/index.html`.

## Troubleshooting

- If the server exits with an error on start, check that `MONGO_URI` is set and reachable. Common fixes:
  - Start a local MongoDB instance or use MongoDB Atlas
  - Ensure credentials in `MONGO_URI` are correct
  - Check network/whitelist settings when using Atlas

## Next Steps / Learning Suggestions

- Add a `.gitignore` (exclude `.env`, `node_modules`)
- Add tests with Jest + Supertest for the API
- Add a small seed script to populate sample tasks
- Explore MongoDB Atlas for a managed DB experience

