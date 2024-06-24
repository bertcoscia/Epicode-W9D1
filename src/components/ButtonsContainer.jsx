import React from "react";
import ButtonComponent from "./ButtonComponent";
import ClipboardButton from "./ClipboardButton";

class ButtonsContainer extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <ButtonComponent btnText="Open image in new tab" className="btn btn-success rounded-pill px-3 py-2 mb-3 align-self-center" url={this.props.imgUrl} />
        <ClipboardButton className="btn" url={this.props.imgUrl} />
      </div>
    );
  }
}

export default ButtonsContainer;
