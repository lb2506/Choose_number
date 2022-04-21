import React from "react";

const Choice = (props) => {
  var onClick = () => {
    props.changeNumber(props.num); // envoyer des infos vers le composant parent App
  };

  return (
    <span className="number num-choice" onClick={() => onClick()}>
      {props.num}
    </span>
  );
};

export default Choice;
