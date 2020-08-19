import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return(
        <div className="Introduction-container">
            <p className="Introduction-text">
                Seymour Scientist mixed up all the health data for two small populations of island people! He needs your help in discerning the difference between 
                the two, mostly-homogenous, groups. Correctly categorize islanders so that scientists can better develop a more personalized health intervention 
                for people on the islands. Only the silhouettes of the islanders are presented as to hide their true identities (No Peeking!).
                <br></br> <br></br>
                You will see a series of silhouettes denoting islanders. Your task is to categorize each of these islanders as best you can
                by placing them at either island 1 or island 2 (names have been removed for the sake of anonymity). You can either click the island or press the corresponding
                numerical key (e.g., 1 or 2). You will also be asked to give your idea of what a representative member of each island would be.
                <br></br><br></br>
                
                Select the <mark>amount of feedback</mark> (how often you want to know if your answer was correct) and <mark>randomization of feedback </mark>
                (mixing up true and false responses to your answers). Start with a training session where you get feedback. Click the island you think is correct
                 or press a corresponding "1" or "2". Then, embark on a journey of island categorization with your selected amount and type of feedback! 
                 Make it all the way through and you can get your results at the end!
                <br></br><br></br><b>No information of any kind is being collected.</b>

            </p>
        </div>
    );
}

export default Introduction;