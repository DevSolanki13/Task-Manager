# Task Manager

Simple task management REST API with a static frontend. This repository contains a small Express + MongoDB backend and a static `public/` frontend that interacts with the API.

**Quick Summary**
- **Purpose:**: demo CRUD API for tasks and minimal browser UI.
- **Backend entry:**: [src/index.js](src/index.js#L1)
- **Frontend:**: static files served from `public/` (served by the server).

**Project Structure**
- **`src/`**: application source (controllers, routes, models, middleware).
- **`public/`**: static frontend (HTML, CSS, browser JS).
- **`.env.example`**: example environment variables.
- **`package.json`**: scripts and dependencies.

**Requirements**
- **Node.js**: v16 or newer recommended.
- **MongoDB**: a MongoDB URI (Atlas or local).

**Environment**
- Copy `.env.example` to `.env` and fill values:

```bash
cp .env.example .env
# edit .env and set MONGO_URI
```

- The important variable is `MONGO_URI` (see `.env.example`).

**Install & Run**
- Install dependencies:

```bash
npm install
```

- Start the app in development (uses `nodemon`):

```bash
npm start
```

- By default the server listens on the `PORT` value from `.env` (or `5000`).

**API**
- Base path: `/api/v1/tasks`
- Endpoints:
  - `GET /api/v1/tasks` — list tasks
  - `POST /api/v1/tasks` — create a task (JSON: `{ "name": "..." }`)
  - `GET /api/v1/tasks/:id` — get single task
  - `PATCH /api/v1/tasks/:id` — update task
  - `DELETE /api/v1/tasks/:id` — delete task

Example using `curl` (create a task):

```bash
curl -X POST http://localhost:5000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"name":"Buy milk"}'
```

**Frontend**
- Open a browser to `http://localhost:5000/` to use the static UI in `public/index.html`.

**Notes & Next steps**
- Add a `.gitignore` to exclude `.env` and `node_modules` if not present.
- Consider adding tests in a `tests/` folder and a `README` section for contribution guidelines.
