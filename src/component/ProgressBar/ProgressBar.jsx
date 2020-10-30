import React from 'react';
import PropTypes from 'prop-types';
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
                {overall === true? "Overall Progress:":"Current Progress:"}
            </div> 
            {progBoxes}
            <div className="progress-percent">{prog}%</div>
        </div>
    );
}

ProgressBar.propTypes = {
    overall: PropTypes.bool.isRequired,
    stage: PropTypes.oneOf([0,1,2,3,4,5,6,7]).isRequired,
    trial: PropTypes.number.isRequired
};

export default ProgressBar;