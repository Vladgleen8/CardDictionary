import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MyButton } from "../../../UI/button/MyButton";
import "./AddCard.css";

export function AddCard({ themes, updateCardsInfo, setCardModal, cardModal }) {
    const [formValues, setFormValues] = useState({
        eng: "",
        rus: "",
        theme: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        updateCardsInfo({ ...formValues, id: uuidv4() });
        setFormValues({
            eng: "",
            rus: "",
            theme: "",
        });
        setCardModal(false);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({ ...formValues, [name]: value });
    }

    return (
        <div className="inputFormContainer">
            <form className="formContainer" onSubmit={handleSubmit}>
                <div className="inputBlock">
                    <label className="inputWord" htmlFor="eng-word">
                        English
                    </label>
                    <input
                        value={formValues.eng}
                        className="inputWindow"
                        type="text"
                        id="eng-word"
                        name="eng"
                        onChange={handleChange}
                        required
                    ></input>
                </div>
                <div className="inputBlock">
                    <label className="inputWord" htmlFor="rus-word">
                        Russian
                    </label>
                    <input
                        value={formValues.rus}
                        className="inputWindow"
                        type="text"
                        id="rus-word"
                        name="rus"
                        onChange={handleChange}
                        required
                    ></input>
                </div>
                <div className="inputBlock">
                    <label className="inputWord" htmlFor="theme">
                        Тема
                    </label>
                    <select
                        value={formValues.theme}
                        className="selectBlock"
                        name="theme"
                        id="theme"
                        onChange={handleChange}
                    >
                        {themes.map((theme) => (
                            <option key={uuidv4()}>{theme}</option>
                        ))}
                    </select>
                </div>
                <div className="buttonContainer">
                    <MyButton
                        className="addCardButton"
                        type="submit"
                        value="Submit"
                    >
                        Add
                    </MyButton>
                </div>
            </form>
        </div>
    );
}
