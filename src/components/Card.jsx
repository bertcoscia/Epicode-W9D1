import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ButtonComponent";

const Card = props => {
  return (
    <div className={props.className} style={props.style}>
      <ImageComponent src={props.imgSrc} alt={props.cardTxt} className=" card-img-top" />
      <div class="card-body">
        <p class="card-text">{props.cardTxt}</p>
      </div>
      <ButtonComponent btnText="Open image in new tab" className="btn btn-success rounded-pill px-3 py-2 mb-3 align-self-center" url={props.imgSrc} />
    </div>
  );
};

export default Card;
