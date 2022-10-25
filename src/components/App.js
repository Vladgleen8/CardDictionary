import React, { useEffect, useMemo, useState } from "react";
import { Cards } from "./Cards/Cards";
import { Training } from "./Training/Training";
import { Modals } from "./Modals/Modals";
import { Header } from "./Header/Header";
import { CardsViewSettings } from "./CardsViewSettings/CardsViewSettings";

import { v4 as uuidv4 } from "uuid";
import "./App.css";

// const initialCards = [
//     {
//         id: uuidv4(),
//         eng: "snow",
//         rus: "снег",
//         theme: "погода",
//     },
//     {
//         id: uuidv4(),
//         eng: "cloud",
//         rus: "облачно",
//         theme: "погода",
//     },
//     {
//         id: uuidv4(),
//         eng: "shit",
//         rus: "хуйня",
//         theme: "мат",
//     },
//     {
//         id: uuidv4(),
//         eng: "hi",
//         rus: "привет",
//         theme: "общение",
//     },
//     {
//         id: uuidv4(),
//         eng: "bye",
//         rus: "пока",
//         theme: "общение",
//     },
//     {
//         id: uuidv4(),
//         eng: "whats up",
//         rus: "чо как",
//         theme: "общение",
//     },
// ];

// const initialThemes = ["погода", "мат", "общение"];

function App() {
    const [cardsInfo, setCardsInfo] = useState(
        JSON.parse(localStorage.getItem("cards"))
    );
    const [themeModal, setThemeModal] = useState(false);
    const [cardModal, setCardModal] = useState(false);
    const [themes, setThemes] = useState(
        JSON.parse(localStorage.getItem("themes"))
    );
    const [selectedSort, setSelectedSort] = useState("");
    const [deleteThemeModal, setDeleteThemeModal] = useState(false);
    const [mode, setMode] = useState("allCards");

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cardsInfo));
    }, [cardsInfo]);

    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(themes));
    }, [themes]);

    //существующие темы из Cards получаю для FilterCards
    const existingThemes = useMemo(() => {
        return Array.from(new Set(cardsInfo.map((card) => card.theme)));
    }, [cardsInfo]);

    // удаление тем из DeleteTheme для обновления компонента InputForm
    function deleteTheme(theme) {
        const filterThemes = themes.filter((item) => item !== theme);
        setThemes(filterThemes);
    }

    // update Cards with new Cards from InputForm
    function updateCardsInfo(newValue) {
        setCardsInfo((prev) => [...prev, newValue]);
    }

    //update Themes from AddTheme to InputForm
    function updateThemes(newTheme) {
        setThemes((themes) => [...themes, newTheme]);
    }

    // memoization of cards filtering for displaying Cards fron FilterCards
    const filteredCards = useMemo(() => {
        if (!selectedSort) {
            return cardsInfo;
        }
        return cardsInfo.filter((card) => card.theme === selectedSort);
    }, [cardsInfo, selectedSort]);

    //delete card from card by id
    function deleteCard(cardId) {
        setCardsInfo((prev) => prev.filter((card) => card.id !== cardId));
    }

    return (
        <div className="appContainer">
            <Modals
                cardModal={cardModal}
                setCardModal={setCardModal}
                themes={themes}
                setThemes={setThemes}
                updateThemes={updateThemes}
                themeModal={themeModal}
                setThemeModal={setThemeModal}
                deleteThemeModal={deleteThemeModal}
                setDeleteThemeModal={setDeleteThemeModal}
                updateCardsInfo={updateCardsInfo}
            />
            <Header
                setCardModal={setCardModal}
                setThemeModal={setThemeModal}
                setDeleteThemeModal={setDeleteThemeModal}
            />
            <CardsViewSettings
                existingThemes={existingThemes}
                deleteTheme={deleteTheme}
                setSelectedSort={setSelectedSort}
                mode={mode}
                setMode={setMode}
            />
            {mode === "allCards" && (
                <Cards cardsInfo={filteredCards} deleteCard={deleteCard} />
            )}
            {/* isTraining && */}
            {mode === "training" && (
                <Training existingThemes={existingThemes} cards={cardsInfo} />
            )}
        </div>
    );
}

export default App;
