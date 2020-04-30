import React from 'react';
import './footer.css';
import {INTRODUCTION, TRAINING, RESULTS} from '../../helpers/phases';

const Footer = (props) => {
    const sendFeedbackAmount = () =>{
        let amount = document.querySelector('input[name="amount-feedback"]:checked').value;
        if(amount) props.amtFeedback(parseInt(amount));
    }

    const sendFeedbackType = () =>{
        let type = document.querySelector('input[name="type-feedback"]:checked').value;
        if(type) props.typeFeedback(parseInt(type));
    }

    const startExperiment = () => {
        props.stageChange(TRAINING);
    }

    return(
        <div className={props.stage===RESULTS? "footer results-adjusted-footer":"footer"}>
            <div className="feedback-forms">
                Amount of Feedback
                <form style={{color:"white"}}>
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="100" 
                        onClick={sendFeedbackAmount} 
                        defaultChecked 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                        100%
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="50" 
                        onClick={sendFeedbackAmount} 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                        50%
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="25" 
                        onClick={sendFeedbackAmount} 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                        25%
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="amount-feedback" 
                        value="0" 
                        onClick={sendFeedbackAmount} 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                            0%
                </form>   
            </div>
            <div className="feedback-forms">
                Type of Feedback
                <form style={{color:"white"}}>
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="0" 
                        onClick={sendFeedbackType} 
                        defaultChecked 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                        True
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="1" 
                        onClick={sendFeedbackType} 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                        False
                    <input 
                        className="feedback" 
                        type="radio" 
                        name="type-feedback" 
                        value="2" 
                        onClick={sendFeedbackType} 
                        disabled={props.stage !== INTRODUCTION}
                    >
                    </input>
                        Random
                </form>   
            </div>
            {props.stage === INTRODUCTION? 
            <div className="arrow-right" onClick={startExperiment}></div>:null}
            {props.stage=== RESULTS?             
            <div className="legend">
                <div 
                    className="legend-box" 
                    style={{backgroundColor:"green"}}
                >
                </div> 
                    Over Estimation
                <div 
                    className="legend-box" 
                    style={{backgroundColor:"red"}}
                >
                </div> 
                    Under Estimation
                <div 
                    className="legend-box" 
                    style={{backgroundColor:"black"}}
                >
                </div> 
                    Correct Estimation
            </div>:null}
        </div>
    );
}

export default Footer;