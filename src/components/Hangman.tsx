import { useState } from "react";
import words from "../utility/wordlist.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";

const GetRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

export default function Hangman() {
    const [wordToGuess, setWordToGuess] = useState(GetRandomWord());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    return (
        <div style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center"
        }}>
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                Lose / Win
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            <div style={{ alignSelf: "stretch" }} >
                <HangmanKeyboard />
            </div>
        </div>
    )
}