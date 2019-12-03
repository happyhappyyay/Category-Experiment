import React from 'react';
import '../styles/Header.css';
import * as Phases from '../helpers/phases.js';
import ProgressBar from './ProgressBar.js';

const Header = (props) => {
    return(
        <div className='header'>
            {props.stage !== Phases.INTRODUCTION &
            props.stage !== Phases.RESULTS? 
            <div className="trials">
                <ProgressBar overall={true} stage={props.stage} trial={props.trial} windowWidth={props.windowWidth}/>
                <ProgressBar overall={false} stage={props.stage} trial={props.trial} windowWidth={props.windowWidth}/>
            </div>
            :<h1>Categorization Game (Experiment)</h1>}
        </div>
    );
}

export default Header;