import React from 'react';
import './ProgressBar.css';
import {calculateOverallProgress, calulateCurrentProgress} from './progCalc';

const ProgressBar = ({overall, stage, trial}) => {
    let prog = overall === true? calculateOverallProgress(stage, trial):
    calulateCurrentProgress(stage, trial);

    let boxColor = overall === true? "green-boxes":"blue-boxes";
    let progBoxes = [];
    
    for (let i = 0; i<prog; i++){
        progBoxes[i] = <div className={boxColor} key={i}></div>;
    }

    return (
        <div className="prog">
            <div className = "header-progress-text">
                {overall === true? "Overall Progess:":"Current Progress:"}
            </div> 
            {progBoxes}
            <div className="progress-percent">{prog}%</div>
        </div>
    );
}

export default ProgressBar;