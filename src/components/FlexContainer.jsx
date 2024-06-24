import React from "react";
import Card from "./Card";

class FlexContainer extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=18" cardTxt="A husky puppy in the snow" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=198" cardTxt="A chihuahua sticking its tongue out" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=26" cardTxt="A pug laying on a sofa" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=33" cardTxt="A poodle sitting on a sofa" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=10" cardTxt="A dog playing in the nature" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=23" cardTxt="A dog wearing coloured sun glasses" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=99" cardTxt="A brown dog posing for a picture" />
        <Card className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=37" cardTxt="A white dog smiling in a park" />
      </div>
    );
  }
}

export default FlexContainer;
