import ImageComponent from "./ImageComponent";
import ButtonsContainerComponent from "./ButtonsContainerComponent";

const CardComponent = props => {
  return (
    <div className={props.className} style={props.style}>
      <ImageComponent src={props.imgSrc} alt={props.cardTxt} className=" card-img-top" />
      <div class="card-body">
        <p class="card-text">{props.cardTxt}</p>
      </div>
      <ButtonsContainerComponent className="container d-flex justify-content-between align-items-center" imgUrl={props.imgSrc} />
    </div>
  );
};

export default CardComponent;
