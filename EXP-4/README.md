# Experiment-4: State Management in React

This experiment demonstrates **State Management in React** using three approaches:
1. Local State
2. Global State using Context API
3. Global State using Redux

The goal is to understand how state behaves at component level and application level.

---

## 🎯 Aim
To study and implement **state management techniques in React** using Local State, Context API, and Redux.

---

## 🧠 Theory

### 1. Local State
Local state is managed using the `useState()` hook and is limited to a single component.  
Changes in local state affect only that component.

### 2. Global State using Context API
Context API allows data to be shared globally without passing props manually.  
All components consuming the same context reflect changes instantly.

### 3. Global State using Redux
Redux provides a centralized store to manage application state.  
Components interact with the store using actions and reducers.

---

## 🛠️ Technologies Used
- React (Vite)
- JavaScript (ES6)
- Context API
- Redux
- React Redux

---

## 📂 Project Structure

src
│
├── components
│ ├── CounterLocalState.jsx
│ ├── CounterGlobalContextParent.jsx
│ ├── CounterGlobalReduxParent.jsx
│ └── context
│ └── CounterGlobalContextAPI.jsx
│
├── store
│ ├── Store.jsx
│ └── CounterReducer.jsx
│
├── App.jsx
├── main.jsx
└── index.css

---

## 🔄 Execution Flow

1. `main.jsx` wraps the application with:
   - Redux `<Provider>`
   - Context API Provider
2. `App.jsx` renders:
   - Local State Counter
   - Context API Counters
   - Redux Counters
3. State updates are reflected based on the state management technique used.

---

## ▶️ How to Run the Project

### 1. Install dependencies
```bash
npm install
