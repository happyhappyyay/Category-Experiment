import React from 'react';
import './Results.css';
import ResultsParser from './resultsParser';

const Results = ({ results }) =>{
    const parser = new ResultsParser();
    const resultsContent = parser.parseResults(results);
    return (
        <div className="Results-container">
            <h2>Results (selection/correct)</h2>
            <hr></hr>
            {resultsContent}
        </div>
    );
}

export default Results;