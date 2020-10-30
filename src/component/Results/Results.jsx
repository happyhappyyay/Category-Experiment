import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';
import ResultsParser from './resultsParser.jsx';

const Results = ({ results, dimension }) =>{
    // [29.908223865468685,0,30.84172569121602,26.611589490470465,21,21,21,21,21,21]
    const parser = new ResultsParser();
    const resultsContent = parser.parseResults(results, dimension);
    return (
        <div className="Results-container">
            {resultsContent}
        </div>
    );
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    dimension: PropTypes.oneOf([0,1])
};

export default Results;