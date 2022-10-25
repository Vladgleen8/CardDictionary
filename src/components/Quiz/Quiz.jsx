import { useEffect, useRef, useState } from "react";
import { MyButton } from "../UI/button/MyButton";
import classes from "./Quiz.module.css";

export function Quiz({ cards }) {
    const [currentWord, setCurrentWord] = useState(cards[0]);
    const [finished, setFinished] = useState(false);
    const [timer, setTimer] = useState(10);
    const [score, setScore] = useState(null);
    const [shuffledIndex, setShuffledIndex] = useState(1);
    const [timerId, setTimerId] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        if (!finished) {
            changeTimeout();
        }
    }, [finished]);

    useEffect(() => {
        if (timer === 0) {
            handleClick();
        }
        if (finished) {
            clearInterval(timerId);
        }
    }, [timer]);

    function changeTimeout() {
        const id = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        setTimerId(id);
    }

    function handleClick() {
        const defaultWordTranslation = currentWord.rus.toLowerCase();
        const inputWordTranslation = ref.current.value.toLowerCase();

        if (defaultWordTranslation === inputWordTranslation) {
            setScore((prev) => prev + 1);
        }

        setCurrentWord(cards[shuffledIndex]);
        setShuffledIndex((prev) => prev + 1);
        ref.current.value = "";
        if (shuffledIndex === cards.length) {
            setFinished(true);
        }

        clearInterval(timerId);
        setTimer(10);
        changeTimeout();
    }

    function reset() {
        setCurrentWord(cards[0]);
        setFinished(false);
        setScore(0);
        setShuffledIndex(1);
    }

    return (
        <>
            {!finished && (
                <>
                    <div className={classes.quiz}>
                        <div className={classes.timer}>{timer}</div>
                        <div className={classes.cardWrapper}>
                            <div className={classes.word}>
                                {currentWord.eng}
                            </div>
                            <input
                                className={classes.quizInput}
                                ref={ref}
                            ></input>
                            <MyButton
                                className={classes.quizButton}
                                onClick={() => handleClick()}
                            >
                                Send
                            </MyButton>
                        </div>
                    </div>
                </>
            )}
            {finished && (
                <div>
                    <div className={classes.score}>
                        Score is {score} of {cards.length} words
                    </div>
                    <MyButton onClick={reset}>Повторить</MyButton>
                </div>
            )}
        </>
    );
}
