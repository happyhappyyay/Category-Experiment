import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import {INTRODUCTION, TRAINING, RESULTS} from '../../helpers/phases';

const Footer = ({ stage, amtFeedback, typeFeedback, stageChange }) => {
    const SUPERVISED = '100%';
    const SEMI_SUPERVISED_HIGH = '50%';
    const SEMI_SUPERVISED_LOW = '25%';
    const UNSUPERVISED = '0%';
    const TRUE_FEEDBACK = 'True';
    const FALSE_FEEDBACK = 'False';
    const RANDOM_FEEDBACK = 'Random';
    const AMT_FEEDBACK = 'Amount of Feedback';
    const TYPE_FEEDBACK = 'Type of Feedback';
    const OVER_EST = 'Over Estimation';
    const UNDER_EST = 'Under Estimation';
    const CORRECT_EST = 'Correct Estimation';

    let disableInput = stage !== INTRODUCTION;
    const sendFeedbackAmount = () =>{
        let amount = document.querySelector('input[name="amount-feedback"]:checked').value;
        if(amount) amtFeedback(parseInt(amount));
    }

    const sendFeedbackType = () =>{
        let type = document.querySelector('input[name="type-feedback"]:checked').value;
        if(type) typeFeedback(parseInt(type));
    }

    const startExperiment = () => {
        stageChange(TRAINING);
    }

    return(
        <div className={stage===RESULTS? "Footer-container Footer-results":"Footer-container"}>
            <div className="Footer-form">
                {AMT_FEEDBACK}
                <form style={{color:"white"}}>
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="100" 
                        onClick={sendFeedbackAmount} 
                        defaultChecked 
                        disabled={disableInput}
                    >
                    </input>
                        {SUPERVISED}
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="50" 
                        onClick={sendFeedbackAmount} 
                        disabled={disableInput}
                    >
                    </input>
                        {SEMI_SUPERVISED_HIGH}
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="25" 
                        onClick={sendFeedbackAmount} 
                        disabled={disableInput}
                    >
                    </input>
                        {SEMI_SUPERVISED_LOW}
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="0" 
                        onClick={sendFeedbackAmount} 
                        disabled={disableInput}
                    >
                    </input>
                            {UNSUPERVISED}
                </form>   
            </div>
            <div className="feedback-forms">
                {TYPE_FEEDBACK}
                <form style={{color:"white"}}>
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="0" 
                        onClick={sendFeedbackType} 
                        defaultChecked 
                        disabled={disableInput}
                    >
                    </input>
                        {TRUE_FEEDBACK}
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="1" 
                        onClick={sendFeedbackType} 
                        disabled={disableInput}
                    >
                    </input>
                        {FALSE_FEEDBACK}
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="2" 
                        onClick={sendFeedbackType} 
                        disabled={disableInput}
                    >
                    </input>
                        {RANDOM_FEEDBACK}
                </form>   
            </div>
            {stage === INTRODUCTION? 
            <div className="Footer-arrow-right" onClick={startExperiment}></div>:null}
            {stage=== RESULTS?             
            <div className="Footer-results-legend">
                <div 
                    className="Footer-results-legend-box" 
                    style={{backgroundColor:"green"}}
                >
                </div> 
                    {OVER_EST}
                <div 
                    className="Footer-results-legend-box" 
                    style={{backgroundColor:"red"}}
                >
                </div> 
                    {UNDER_EST}
                <div 
                    className="Footer-results-legend-box" 
                    style={{backgroundColor:"black"}}
                >
                </div> 
                    {CORRECT_EST}
            </div>:null}
        </div>
    );
}

Footer.propTypes = {
    stage: PropTypes.oneOf([0,1,2,3,4,5,6,7]).isRequired,
    typeFeedback: PropTypes.func.isRequired,
    amtFeedback: PropTypes.func.isRequired,
    stageChange: PropTypes.func.isRequired
};

export default Footer;