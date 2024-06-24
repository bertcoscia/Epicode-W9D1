import React from "react";
import ButtonComponent from "./ButtonComponent";
import ClipboardButtonComponent from "./ClipboardButtonComponent";

class ButtonsContainerComponent extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <ButtonComponent btnText="Open image in new tab" className="btn btn-success rounded-pill px-3 py-2 mb-3 align-self-center" url={this.props.imgUrl} />
        <ClipboardButtonComponent className="btn" url={this.props.imgUrl} />
      </div>
    );
  }
}

export default ButtonsContainerComponent;
