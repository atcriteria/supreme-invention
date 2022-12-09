import { useCallback, useEffect, useState } from "react";
import words from "../utility/wordlist.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";

const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

export default function Hangman() {
    const [wordToGuess, setWordToGuess] = useState(getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    const isLoser = incorrectLetters.length >= 6; // 6 body parts
    // .every iterates over the letters and returns true if the callback logic is the same
    // ie, if every letter in the word is in the letters we have guessed, each call on the
    // callback will be true thus the .every will return true, else false.
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLoser || isWinner) return;

        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters, isWinner, isLoser]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;
            e.preventDefault();
            addGuessedLetter(key);
        }

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        }
    }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (key !== "Enter") return;

            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getRandomWord());
        }

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        }
    }, [])

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
                {isWinner && "Winner! - Refresh to tru again"}
                {isLoser && "Loser! - Refresh to tru again"}
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            <div style={{ alignSelf: "stretch" }} >
                <HangmanKeyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                    disabled={isWinner || isLoser}
                />
            </div>
        </div>
    )
}