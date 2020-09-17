import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';
import ResultsParser from './resultsParser.jsx';

const Results = ({ results, dimension }) =>{
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