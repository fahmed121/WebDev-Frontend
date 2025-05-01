const Button = ({ label, style, onClick }) => {
  return (
    <>
      <button className="btn btn-dark" style={style} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
