import React from 'react';
import './Footer.css';
import {INTRODUCTION, TRAINING, RESULTS} from '../../helpers/phases';

const Footer = ({ stage, amtFeedback, typeFeedback, stageChange }) => {
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
                Amount of Feedback
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
                        100%
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="50" 
                        onClick={sendFeedbackAmount} 
                        disabled={disableInput}
                    >
                    </input>
                        50%
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="25" 
                        onClick={sendFeedbackAmount} 
                        disabled={disableInput}
                    >
                    </input>
                        25%
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="0" 
                        onClick={sendFeedbackAmount} 
                        disabled={disableInput}
                    >
                    </input>
                            0%
                </form>   
            </div>
            <div className="feedback-forms">
                Type of Feedback
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
                        True
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="1" 
                        onClick={sendFeedbackType} 
                        disabled={disableInput}
                    >
                    </input>
                        False
                    <input 
                        className="Footer-feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="2" 
                        onClick={sendFeedbackType} 
                        disabled={disableInput}
                    >
                    </input>
                        Random
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
                    Over Estimation
                <div 
                    className="Footer-results-legend-box" 
                    style={{backgroundColor:"red"}}
                >
                </div> 
                    Under Estimation
                <div 
                    className="Footer-results-legend-box" 
                    style={{backgroundColor:"black"}}
                >
                </div> 
                    Correct Estimation
            </div>:null}
        </div>
    );
}

export default Footer;