# Experiment-4: State Management in React

This experiment demonstrates **State Management in React** using three approaches:
1. Local State
2. Global State using Context API
3. Global State using Redux

The goal is to understand how state behaves at component level and application level.

---

##  Aim
To study and implement **state management techniques in React** using Local State, Context API, and Redux.

---

##  Theory

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

##  Technologies Used
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

##  Execution Flow

1. `main.jsx` wraps the application with:
   - Redux `<Provider>`
   - Context API Provider
2. `App.jsx` renders:
   - Local State Counter
   - Context API Counters
   - Redux Counters
3. State updates are reflected based on the state management technique used.

---

##  How to Run the Project

### 1. Install dependenciesExperiment-4: State Management in React

This experiment explains State Management in React using three simple methods:

Local State

Global State using Context API

Global State using Redux

The main purpose is to understand how data (state) is handled inside a component and across the whole application.

These are the main dependencies that we need to run the experiment succesfully

npm install
after this 
2. Install Redux libraries
npm install redux react-redux
3. Run the application
npm run dev
4. Open in browser
http://localhost:5173


🎯 Aim

To understand and implement state management in React using:

Local State

Context API

Redux

🧠 Theory
1. Local State

Local state is managed using the useState() hook.
It is used inside a single component only.
When the state changes, only that component re-renders.

2. Global State using Context API

Context API is used to share data between multiple components without passing props again and again.
When the value in context changes, all components using that context get updated.

3. Global State using Redux

Redux is used to manage state for the entire application from one central place called the store.
State changes happen using actions and reducers, making data flow easy to track and control.

TECHNOLOGIES USED:

React (Vite)

JavaScript

Context API

Redux

React Redux

📂 Project Structure
src
│
├── components
│   ├── CounterLocalState.jsx
│   ├── CounterGlobalContextParent.jsx
│   ├── CounterGlobalReduxParent.jsx
│   └── context
│       └── CounterGlobalContextAPI.jsx
│
├── store
│   ├── Store.jsx
│   └── CounterReducer.jsx
│
├── App.jsx
├── main.jsx
└── index.css

 Execution Flow

main.jsx wraps the application with:

Redux Provider

Context API Provider

App.jsx displays:

Counter using Local State

Counter using Context API

Counter using Redux

When buttons are clicked, the state updates based on the method used.


 Conclusion:
These are the key conclusions or things that learned from this experiment

How local state works inside a component

How Context API shares data globally

How Redux manages state in large applications

It gives a clear idea of when and why each state management technique is used.

