import React from 'react';
import './Results.css';
import ResultsParser from './resultsParser.jsx';

const Results = ({ results }) =>{
    const RESULTS_TITLE = "Results (selection/correct)";
    const parser = new ResultsParser();
    const resultsContent = parser.parseResults(results);
    return (
        <div className="Results-container">
            <h2>{RESULTS_TITLE}</h2>
            <hr></hr>
            {resultsContent}
        </div>
    );
}

export default Results;