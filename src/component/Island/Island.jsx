import React from 'react'
import PropTypes from 'prop-types';
import './Island.css'
import * as Phases from '../../helpers/phases'

const Island = ({ island, stage, update }) => {
    const ISLAND1 = "Island 1";
    const ISLAND2 = "Island 2";

    const handleClick = () => {
        update(island);
    }
    let islandName = island === 0? 'Island1':'Island2';
    const checkImplicit = () =>{
        return !(stage === Phases.EXPLICIT_1 | stage === Phases.EXPLICIT_2 | stage === Phases.EXPLICIT_3);
    }
    return (
        <div 
            className={checkImplicit()? 
            islandName:"Island-gone"}
            data-testid={islandName} 
            onClick={checkImplicit()? handleClick:null}
        >
            <div className={islandName+"-text"}>
                {islandName.includes(1)? ISLAND1:ISLAND2}
            </div>
        </div>
    );
}

Island.propTypes = {
    island: PropTypes.oneOf([0,1]),
    stage: PropTypes.oneOf([0,1,2,3,4,5,6,7]).isRequired,
    update: PropTypes.func.isRequired
};

export default Island;