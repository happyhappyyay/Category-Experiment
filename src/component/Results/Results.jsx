import React from 'react';
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

export default Results;