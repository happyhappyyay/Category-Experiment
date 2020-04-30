import React from 'react'
import './island.css'
import * as Phases from '../../helpers/phases'

const Island = (props) => {
    const handleClick = () => {
        console.log("click");
        props.update(props.island);
    }
    let island = props.island === 0? 'island1':'island2';
    const checkImplicit = () =>{
        let stage = props.stage;
        return !(stage === Phases.EXPLICIT_1 | stage === Phases.EXPLICIT_2 | stage === Phases.EXPLICIT_3);
    }
    return (
        <div 
            className={checkImplicit()? 
            island:"gone"} 
            onClick={checkImplicit()? handleClick:null}
        >
            <div className={island+"-text"}>
                {island.includes(1)? "Island 1":"Island 2"}
            </div>
        </div>
    );
}

export default Island;