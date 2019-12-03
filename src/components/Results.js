import React from 'react';
import '../styles/Results.css';
import ResultsParser from '../helpers/ResultsParser';

const Results = (props) =>{
    const parser = new ResultsParser();
    const resultsContent = parser.parseResults(props.results);
    return (
        <div className="results">
            <h2>Results (selection/correct)</h2>
            <hr></hr>
            {resultsContent}
        </div>
    );
}

export default Results;