import React from 'react';
import * as Phases from '../../helpers/phases.js';
import Introduction from '../introduction/Introduction';
import Results from '../results/Results';

const Explanation = (props) =>{
    return (
        <div>
            {props.stage === Phases.INTRODUCTION? 
            <Introduction />:
            <Results 
                amtFeedback = {props.amtFeedback} 
                typeFeedback = {props.typeFeedback} 
                dimension = {props.dimension} 
                results = {props.results}
            />}
        </div>
    );
}

export default Explanation;