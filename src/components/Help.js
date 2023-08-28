import React from "react";

function Help(){
    return(
        <div>
            <ul>
                <li>
                    Press "New Game" to start a new game.
                </li>
                <li>
                    At the start of each game, press "Generate word" to get a new word
                </li>
                <li>
                    The number of characters in the unknown word are indicated by the amount of underscores.
                </li>
                <li>
                    Try to guess the word one character at a time.
                </li>
                <li>
                    For each character guessed correctly, the word will be partially revealed by the characters automatically being filed into the correct spots.
                </li>
                <li>
                    For each character guessed wrong, the drawing of a man being hanged will start to complete, one line at a time.
                </li>
                <li>
                    If you guess all the characters correctly before the hangman is drawn out. You win the game
                </li>
                <li>
                    If not. The man is hanged and you lose
                </li>
            </ul>
        </div>
    )
}

export default Help