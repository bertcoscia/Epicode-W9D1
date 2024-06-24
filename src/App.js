import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="d-flex">
        <ButtonComponent btnText="Click me" className="btn btn-success rounded-pill px-3 py-2 align-self-center" />
        <ButtonComponent btnText="Click em" className="btn btn-warning rounded-pill px-3 py-2 align-self-center" />
        <ImageComponent src="https://placedog.net/400/529?id=18" alt="a husky puppy" />
        <ImageComponent src="https://placedog.net/400/438?id=198" alt="chihuahua sticking its tongue out" />
      </header>
    </div>
  );
}

export default App;
