import React from "react";
import CardComponent from "./CardComponent";

class CardContainerComponent extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=18" cardTxt="A husky puppy in the snow" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=198" cardTxt="A chihuahua sticking its tongue out" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=26" cardTxt="A pug laying on a sofa" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=33" cardTxt="A poodle sitting on a sofa" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=10" cardTxt="A dog playing in the nature" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=23" cardTxt="A dog wearing coloured sun glasses" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=99" cardTxt="A brown dog posing for a picture" />
        <CardComponent className="card" style={{ width: "18rem" }} imgSrc="https://placedog.net/400/529?id=37" cardTxt="A white dog smiling in a park" />
      </div>
    );
  }
}

export default CardContainerComponent;
