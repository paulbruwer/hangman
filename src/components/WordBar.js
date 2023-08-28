import React from "react";
import { useSelector } from "react-redux";

function WordBar() {
  const wordObj = useSelector((state) => state.word.userProgress);

  const handelWordBar = () => {
    let line = "";
    for (const key in wordObj) {
      line += `${wordObj[key]} `;
    }
    return line;
  };

  return (
    <div>
      <p style={{ fontSize: "5vw", fontFamily: "sans-serif" }}>
        {handelWordBar()}
      </p>
    </div>
  );
}

export default WordBar;
