import React from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";

function Gallows(props) {
  const score = useSelector((state) => state.word.score);
  return (
    <div className={props.isVisible}>
      <Image
        src={require(`../assets/hangmandrawings/state${score}.gif`)}
        fluid
      />
    </div>
  );
}

export default Gallows;
