import React from 'react';
import '../styles/ProgressBar.css';
import ProgCalc from '../helpers/ProgCalc';

const ProgressBar = (props) => {
    let calc = new ProgCalc();
    let prog = props.overall === true? calc.calculateOverallProgress(props.stage, props.trial):
    calc.calulateCurrentProgress(props.stage, props.trial);

    let boxColor = props.overall === true? "green-boxes":"blue-boxes";
    
    // need keys?
    let progBox = <div className={boxColor}></div>;
    let progBoxes = [];
    
    for (let i = 0; i<prog; i++){
        progBoxes[i] = progBox;
    }

    return (
        <div className="prog">
            <div className = "header-progress-text">{props.overall === true? 
                "Overall Progess:":"Current Progress:"}</div> 
            {progBoxes}
            <div className="progress-percent">{prog}%</div>
        </div>
    );
}

export default ProgressBar;