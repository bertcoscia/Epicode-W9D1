import "./App.css";
/* import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent"; */
import PageHeading from "./components/PageHeading";
import FlexContainer from "./components/FlexContainer";

function App() {
  return (
    <div className="App">
      <div className="main">
        <PageHeading className="text-center d-block" text="Placedog.net" />
        <FlexContainer className="container d-flex flex-wrap column-gap-3 row-gap-3 my-3" />
        {/*  <ButtonComponent btnText="Click me" className="btn btn-success rounded-pill px-3 py-2 align-self-center" />
        <ButtonComponent btnText="Click em" className="btn btn-warning rounded-pill px-3 py-2 align-self-center" />
        <ImageComponent src="https://placedog.net/400/529?id=18" alt="a husky puppy" className="rounded-2 align-self-center" />
        <ImageComponent src="https://placedog.net/400/438?id=198" alt="chihuahua sticking its tongue out" className="rounded-2 align-self-center" /> */}
      </div>
    </div>
  );
}

export default App;
