const ButtonComponent = props => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <button className={props.className}>{props.btnText}</button>
    </a>
  );
};

export default ButtonComponent;
