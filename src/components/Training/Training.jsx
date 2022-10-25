import { useState, useMemo } from "react";
import { ThemeForTraining } from "../ThemeForTraining/ThemeForTraining";
import { MyButton } from "../UI/button/MyButton";
import { Quiz } from "../Quiz/Quiz";
import "./Training.css";
import { v4 as uuidv4 } from "uuid";

export function Training({ existingThemes, cards }) {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [trainingMode, setTrainingMode] = useState("chooseTheme");

    const shuffledCards = useMemo(() => {
        const currentCards = cards.filter(
            (card) => card.theme === selectedTheme
        );
        return shuffledCardsA(currentCards);
    }, [cards, selectedTheme]);

    function shuffledCardsA(arr) {
        return arr.sort((a, b) => 0.5 - Math.random());
    }

    function handleClick(theme) {
        setSelectedTheme(theme);
    }

    function handleSubmit() {
        setTrainingMode("training");
    }

    return (
        <>
            {trainingMode === "chooseTheme" && (
                <div className="trainingContainer">
                    {existingThemes.map((theme) => (
                        <ThemeForTraining
                            key={uuidv4()}
                            theme={theme}
                            handleClick={handleClick}
                            selectedTheme={selectedTheme}
                        />
                    ))}
                    <MyButton
                        disabled={!selectedTheme}
                        onClick={() => handleSubmit()}
                    >
                        Start Training
                    </MyButton>
                </div>
            )}
            {trainingMode === "training" && (
                <Quiz theme={selectedTheme} cards={shuffledCards} />
            )}
        </>
    );
}
