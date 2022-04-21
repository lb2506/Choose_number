import React from "react";

const Choice = (props) => {
  var handleClick = () => {
    props.handleClickParent(props.num);
  };

  return (
    <span className="number num-choice" onClick={() => handleClick()}>
      {props.num}
    </span>
  );
};

export default Choice;
