import KEYS from "../../utility/Hangman/keys.json";
import styles from "./HangmanKeyboard.module.css";

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
    disabled?: boolean
}

export default function HangmanKeyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }} >
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
                <button onClick={() => addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} 
                ${isInactive ? styles.inactive : ""}`} key={key}
                    disabled={isInactive || isActive || disabled}
                >
                    {key}
                </button>)
        }
        )
        }

    </div>
}