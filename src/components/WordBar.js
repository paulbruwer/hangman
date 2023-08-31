import React from "react";
import { useSelector } from "react-redux";

function WordBar(props) {
  // the state the tracks how far the user has guess the word for the store
  const wordObj = useSelector((state) => state.word.userProgress);

  // when the userProgress state is updated the this function loops through the object, saving
  // it to a variable which is returned by the function
  const handelWordBar = () => {
    let line = "";
    for (const key in wordObj) {
      line += `${wordObj[key]} `;
    }
    return line;
  };

  // the return from out function is posted to a paragraph element on the landing page
  return (
    <div className={props.isVisible}>
      <p style={{ fontSize: "5vw", fontFamily: "sans-serif" }}>
        {handelWordBar()}
      </p>
    </div>
  );
}

export default WordBar;
