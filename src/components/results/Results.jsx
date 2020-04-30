import React from 'react';
import './results.css';
import ResultsParser from './resultsParser';

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