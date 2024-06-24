import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ButtonComponent";
import ClipboardButton from "./ClipboardButton";

const Card = props => {
  return (
    <div className={props.className} style={props.style}>
      <ImageComponent src={props.imgSrc} alt={props.cardTxt} className=" card-img-top" />
      <div class="card-body">
        <p class="card-text">{props.cardTxt}</p>
      </div>
      <div className="container d-flex justify-content-between align-items-center">
        <ButtonComponent btnText="Open image in new tab" className="btn btn-success rounded-pill px-3 py-2 mb-3 align-self-center" url={props.imgSrc} />
        <ClipboardButton className="btn" url={props.imgSrc} />
      </div>
    </div>
  );
};

export default Card;
