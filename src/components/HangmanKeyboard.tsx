import KEYS from "../utility/keys.json";
import styles from "./HangmanKeyboard.module.css";

export default function HangmanKeyboard() {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }} >
        {KEYS.map(key => (
            <button className={`${styles.btn}`} key={key}>{key}</button>
        ))}

    </div>
}