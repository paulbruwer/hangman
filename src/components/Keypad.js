import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setProgress, increaseScore } from "../store/word";
import { useNavigate } from "react-router-dom";

function KeyPad(props) {
  const dispatch = useDispatch();
  const secretWord = useSelector((state) => state.word.secretWord);
  const userProgress = useSelector((state) => state.word.userProgress);
  const score = useSelector((state) => state.word.score);
  const navigate = useNavigate();

  // if to many characters were wrong. This condition triggers
  if (score === 11) {
    navigate("/lose");
  }

  //
  let answer = "";
  let guess = "";
  for (const key in secretWord) {
    answer += secretWord[key];
  }
  for (const key in userProgress) {
    guess += userProgress[key];
  }
  if (answer === guess) {
    if (guess !== ""){
      navigate("/win");
    }
  }

  // this function is called when a key button is pressed
  const handelKeyInput = (char) => {
    const element = char;
    element.className += " invisible";
    char = char.textContent.toLowerCase();

    // sets the state, "userProgress", to a progress object
    let progressObj = {};
    for (let index = 0; index < Object.keys(userProgress).length; index++) {
      progressObj[index] = userProgress[index];
    }

    // for every correct key the progress object receives that character in the right position
    // and this object is saved to the userProgress state
    let charWasCorrect = false;
    for (const key in secretWord) {
      if (char === secretWord[key]) {
        progressObj[key] = char;
        charWasCorrect = true;
      }
    }
    if (!charWasCorrect) {
      dispatch(increaseScore());
    }
    dispatch(setProgress(progressObj));
  };

  return (
    <div className={props.isVisible}>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        A
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        B
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        C
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        D
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        E
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        F
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        G
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        H
      </Button>
      <br />
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        I
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        J
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        K
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        L
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        M
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        N
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        O
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        P
      </Button>
      <br />
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        Q
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        R
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        S
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        T
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        U
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        V
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        W
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        X
      </Button>
      <br />
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        Y
      </Button>
      <Button
        fluid
        className="keypad_button"
        onClick={(e) => handelKeyInput(e.target)}
      >
        Z
      </Button>
    </div>
  );
}

export default KeyPad;
