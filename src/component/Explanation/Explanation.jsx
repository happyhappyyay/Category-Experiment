import React from 'react';
import PropTypes from 'prop-types';
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

Explanation.propTypes = {
    stage: PropTypes.oneOf([0,1,2,3,4,5,6,7]).isRequired,
    dimension: PropTypes.oneOf([0,1]),
    results: PropTypes.array.isRequired
};

export default Explanation;