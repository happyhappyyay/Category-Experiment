import React from 'react';
import './ProgressBar.css';
import ProgCalc from './progCalc';

const ProgressBar = ({overall, stage, trial}) => {
    let calc = new ProgCalc();
    let prog = overall === true? calc.calculateOverallProgress(stage, trial):
    calc.calulateCurrentProgress(stage, trial);

    let boxColor = overall === true? "green-boxes":"blue-boxes";
    // TODO: 
    // need keys?
    let progBox = <div className={boxColor}></div>;
    let progBoxes = [];
    
    for (let i = 0; i<prog; i++){
        progBoxes[i] = progBox;
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