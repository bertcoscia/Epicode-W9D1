import "./App.css";
import PageHeadingComponent from "./components/PageHeadingComponent";
import CardContainerComponent from "./components/CardContainerComponent";

function App() {
  return (
    <div className="App">
      <div className="main my-3">
        <PageHeadingComponent className="text-center d-block" text="Placedog.net" />
        <CardContainerComponent className="container d-flex flex-wrap column-gap-3 row-gap-3 my-3" />
      </div>
    </div>
  );
}

export default App;
