import { useState } from "react";

//save in MoodChanger.jsx

function MoodChanger() {
    //two variables:
    //mood stores current mood, default happy
    //setMood is a function for updating mood
    const [mood, setMood] = useState('happy');

    //calls setMood with a fixed value of 'ecstatic'
    //begin with 'handle' prefix by conevntion
    const handleWinLotto = () => {
        setMood('ecstatic')
        console.log(mood)
    }

//calls setMood with a conditional state value
const handleRunningLate = () => {
    let newMood = 'stressed';

    if (mood === 'stressed'){
         newMood = 'really stressed'
    }else if (mood === 'really stressed'){
      newMood = 'giving up'
    } 
    


    setMood(newMood)
}

    return (
        <>
            <div className="MoodChanger componentBox">
                Current Mood: {mood}
            </div>

            {/* Change the mood state by calling setMood
                when a button is clicked */}
            <button
            onClick={() => setMood('tired')}>
            Stay Up Late
            </button>
            
            <button
            onClick={() => setMood('hungry')}>
            Skip Lunch
            </button>

            <button
            onClick={handleRunningLate}>Running Late</button>

            <button
            onClick={handleWinLotto}>Win Lotto</button>
        </>
    )
}

export default MoodChanger;