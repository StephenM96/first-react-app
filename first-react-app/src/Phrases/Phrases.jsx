import { useState } from "react";

const phrases = new Map([
    ['english', 'Happy Birthday'],
    ['german', 'Alles Gutes zum Geberstag'],
    ['spanish', 'Feliz Cumpleaños'],
    ['pig latin', "Appy Hay Irthday Bay"],
]);

function Phrases() {
    const [currentLanguage, setCurrentLanguage] = useState('english');
    // const [phrase, setPhrase] = useState(phrases.get('english'))
    //Changed this to the 2 sections below

    const [currentPhrase, setCurrentPhrase] = useState({
        lang: 'english',
        phrase: 'Happy Birthday'
    })

    // 06/10/23 10:40 AM Slide 60
    //Event handler
    const handleChangeLanguage = (newLang) => {
            setCurrentLanguage(newLang)
    }

    return(
        <div className="BirthdayTranslator componentBox">
            <h3>{phrases.get(currentLanguage)}! ({currentLanguage})</h3>
            
            <button onClick={() =>
            handleChangeLanguage('english')}>English
            </button>
            
            <button onClick={() =>
            handleChangeLanguage('german')}>German
            </button>
            
            <button onClick={() =>
            handleChangeLanguage('spanish')}>Spanish
            </button>

            <button onClick={() =>
            handleChangeLanguage('pig latin')}>Pig Latin
            </button>
        </div>
    )
}

export default Phrases