import {React,useState} from "react";
import WordBar from "./WordBar";
import KeyPad from "./Keypad";
import Gallows from "./Gallows";
import { Container, Row, Col } from "react-bootstrap";
import dictionaryText from "../dictionary.txt";
import { generateSecretWord, setProgress, resetScore } from "../store/word";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, } from "react-router-dom";

function Landing() {
  const dispatch = useDispatch();

  // this state will be set to the props of various components to determine their visibility when certain
  // event occur
  const [elementVisibility, setElementVisibility] = useState(" invisible");
  const [buttonVisibility, setButtonVisibility] = useState("");

  // here we use an async function to read a text file containing a library of words
  // these words are loaded and set to an array
  // a random word is pulled from this array
  // this word is split into its characters
  // then these characters are set to an object with index numbers attached
  // this object is saved to a global state slice called word as the word to be guessed in the game
  const readLibrary = async () => {
    try {
      const response = await fetch(dictionaryText);
      const lib = await response.text();
      const arr = lib.split(/\r?\n/);
      const newWord = arr[Math.floor(Math.random() * arr.length)].toLowerCase();
      const wordArr = newWord.split("");
      let wordObj = {};
      for (let index = 0; index < wordArr.length; index++) {
        const element = wordArr[index];
        wordObj[index] = element;
      }
      dispatch(generateSecretWord(wordObj));

      // this section generates an "empty" object for the user progress state
      // hyphens are given to the user if it appears in a word
      let progressObj = {};
      for (let index = 0; index < Object.keys(wordObj).length; index++) {
        if (wordObj[index] === "-") {
          progressObj[index] = "-";
        } else {
          progressObj[index] = "_";
        }
      }
      dispatch(setProgress(progressObj));
    } catch (error) {
      console.log(error);
    }
  };

  // This button will reload all components on the landing page and reset all state to initial
  const newGame = () => {
    window.location.reload();
    dispatch(resetScore());
  };

  return (
    <div style={{ marginTop: "3vw" }}>
      <Container>
        <Row>
          <h1 style={{ color: "blue", fontSize: "8vw", fontFamily: "fantasy" }}>
            HANGMAN
          </h1>
          <Button 
            onClick={() => {
              newGame();
            }}
          >
            New Game
          </Button>
          <Button
            className={buttonVisibility}
            style={{ marginTop: "5px" }}
            onClick={() => {
              dispatch(resetScore());
              setButtonVisibility(" invisible")
              readLibrary();
              setElementVisibility("");
            }}
          >
            Generate Word
          </Button>
          <Col>
            <Gallows isVisible={elementVisibility}/>
          </Col>
          <Col>
            <WordBar isVisible={elementVisibility}/>
            <KeyPad isVisible={elementVisibility}/>
          </Col>
          <Link to="/help"><Button>Help</Button></Link>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
