import { useState, useRef, useEffect } from "react";
import { MyButton } from "../UI/button/MyButton";
import _ from "lodash";
import classes from "./Quiz.module.css";

export function Quiz({ cards }) {
    const [currentWord, setCurrentWord] = useState(_.sample(cards));
    const [score, setScore] = useState(0);
    const [usedWords, setUsedWords] = useState([]);
    const [finished, setFinished] = useState(false);
    const [timer, setTimer] = useState(3);
    const ref = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        timerRef.current = timerId;
    }, [currentWord]);

    useEffect(() => {
        if (timer === 0) {
            console.log("счетчик закончен");
            setCurrentWord(nextWord(cards));
            clearInterval(timerRef.current);
            setTimer(10);
        }
    }, [timer]);

    function nextWord(array) {
        const randomElem = _.sample(array);
        if (usedWords.includes(randomElem)) {
            return nextWord(array);
        }
        return randomElem;
    }

    function handleClick() {
        const inputValue = ref.current.value.toLowerCase();
        const translate = currentWord.rus.toLowerCase();
        if (inputValue === translate) {
            setScore((prev) => prev + 1);
            setUsedWords((prev) => [...prev, currentWord]);
            if (usedWords.length !== cards.length) {
                setCurrentWord(nextWord(cards));
                ref.current.value = "";
                return;
            }
            setFinished(true);
            setUsedWords((prev) => []);
        }
    }

    function reset() {
        setCurrentWord(nextWord(cards));
        setFinished((prev) => false);
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
                    <div className={classes.score}>Score is {score}</div>
                    <MyButton onClick={() => reset()}>Повторить</MyButton>
                </div>
            )}
        </>
    );
}
