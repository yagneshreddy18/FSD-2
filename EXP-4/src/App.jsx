import CounterLocalState from "./components/CounterLocalState";
import CounterContextParent from "./components/CounterGlobalContextParent";
import CounterReduxParent from "./components/CounterGlobalReduxParent";

function App() {
  return (
    <>
      <h2>Experiment-4: State Management</h2>

      <hr />

      <CounterLocalState />

      <hr />

      <CounterContextParent cno="Counter-1" />
      <CounterContextParent cno="Counter-2" />

      <hr />

      <CounterReduxParent cno="Counter-1" />
      <CounterReduxParent cno="Counter-2" />
    </>
  );
}

export default App;
