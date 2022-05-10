const Box = ({ children, boxheader }) => {
  return (
    <div className="box">
      <h4>{boxheader}</h4>
      <p>{children}</p>
    </div>
  );
};

export default Box;
