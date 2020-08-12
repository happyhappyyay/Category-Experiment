import React from 'react'
import './Island.css'
import * as Phases from '../../helpers/phases'

const Island = ({ island, stage, update }) => {
    const handleClick = () => {
        console.log("click");
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
            onClick={checkImplicit()? handleClick:null}
        >
            <div className={islandName+"-text"}>
                {islandName.includes(1)? "Island 1":"Island 2"}
            </div>
        </div>
    );
}

export default Island;