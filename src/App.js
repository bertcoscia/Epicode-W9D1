import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent btnText="Click me" />
        <ButtonComponent btnText="Click em" />
      </header>
    </div>
  );
}

export default App;
