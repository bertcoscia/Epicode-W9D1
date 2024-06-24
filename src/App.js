import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent btnText="Click me" />
        <ButtonComponent btnText="Click em" />
        <ImageComponent src="https://placedog.net/400/529?id=18" alt="a husky puppy" />
        <ImageComponent src="https://placedog.net/400/438?id=198" alt="chihuahua sticking its tongue out" />
      </header>
    </div>
  );
}

export default App;
