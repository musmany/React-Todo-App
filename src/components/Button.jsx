const Button = ({ title, func, style }) => {
  return (
    <button className="btn" onClick={func} style={style}>
      {title}
    </button>
  );
};

export default Button;
