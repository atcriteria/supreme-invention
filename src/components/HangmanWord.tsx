export default function HangmanWord() {
    const word = "test";
    const guessedLetters = ["t"];
    return <div style={{ display: "flex", gap: ".25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }} >
        {word.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} >
                <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }} key={index}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}