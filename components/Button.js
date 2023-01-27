function Button({ onClick, props, type = "button" }) {
  return (
    <button type={type} onClick={onClick}>
      {props}
    </button>
  );
}

export default Button;
