import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import * as Phases from '../../helpers/phases.js';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

const Header = ({ stage, trial }) => {
    const INTRODUCTION_TEXT = 'Categorization Game (Experiment)';
    const RESULTS_TITLE = 'Results (selection/correct)';
    return(
        <div className='Header-container'>
            {stage !== Phases.INTRODUCTION &
            stage !== Phases.RESULTS? 
            <div className="Header-progress">
                <ProgressBar 
                    overall={true} 
                    stage={stage} 
                    trial={trial} 
                />
                <ProgressBar 
                    overall={false} 
                    stage={stage} 
                    trial={trial} 
                />
            </div>
            : stage === Phases.INTRODUCTION?
                <h1>{INTRODUCTION_TEXT}</h1>
                :<h1>{RESULTS_TITLE}</h1>}
        </div>
    );
}

Header.propTypes = {
    stage: PropTypes.oneOf([0,1,2,3,4,5,6,7]).isRequired,
    trial: PropTypes.number
};

export default Header;