import React from 'react';
import * as Phases from '../../helpers/phases.js';
import Introduction from '../Introduction/Introduction';
import Results from '../Results/Results';

const Explanation = ({ stage, dimension, results }) =>{
    return (
        <>
            {stage === Phases.INTRODUCTION? 
            <Introduction />:
            <Results 
                dimension = {dimension} 
                results = {results}
            />}
        </>
    );
}

export default Explanation;