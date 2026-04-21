# Experiment 16 - Unit Testing

## Backend

* The Flask backend is tested with `pytest`
* Core CRUD routes are covered through unit tests

Run:
```bash
cd Testing/Backend
pytest
```

---

## Frontend

* The React frontend is tested with `vitest`
* Form behavior and UI rendering are validated through component tests

Run:
```bash
cd Testing/Frontend
npm install
npm run test
```

---

## GitHub Actions

* Tests are triggered automatically on every push
* Both backend and frontend test suites are included in CI

---

## Result

All configured tests completed successfully.
