import React from 'react';
import './Header.css';
import * as Phases from '../../helpers/phases.js';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

const Header = ({ stage, trial }) => {
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
            :<h1>Categorization Game (Experiment)</h1>}
        </div>
    );
}

export default Header;