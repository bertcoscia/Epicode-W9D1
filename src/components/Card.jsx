import ImageComponent from "./ImageComponent";
import ButtonsContainer from "./ButtonsContainer";

const Card = props => {
  return (
    <div className={props.className} style={props.style}>
      <ImageComponent src={props.imgSrc} alt={props.cardTxt} className=" card-img-top" />
      <div class="card-body">
        <p class="card-text">{props.cardTxt}</p>
      </div>
      <ButtonsContainer className="container d-flex justify-content-between align-items-center" imgUrl={props.imgSrc} />
    </div>
  );
};

export default Card;
