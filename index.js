const Box = (props) => {
  //  Write your code here.
  const { boxCls, boxTxt } = props;
  return (
    <div className={boxCls}>
      <p className="box-text">{boxTxt}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="boxheading">Boxes</h1>
    <div className="boxContainer">
      <Box boxCls="small" boxTxt="Small" />
      <Box boxCls="medium" boxTxt="Medium" />
      <Box boxCls="large" boxTxt="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
