import React from 'react';
import '../styles/DisplayItem.css';
import silhouette from '../silhouette.svg'; 
import {WIDTH_MEASURE, HEIGHT_MEASURE, MAX_HEIGHT, MIN_HEIGHT,
MIN_WIDTH, MAX_WIDTH} from '../helpers/IslanderLogic';
import * as Phases from '../helpers/phases';

class DisplayItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height: (MAX_HEIGHT-MIN_HEIGHT)/2,
            width: (MAX_WIDTH-MIN_WIDTH)/2,
        }

        this.adjustWidth = this.adjustWidth.bind(this);
        this.adjustHeight = this.adjustHeight.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        
    }
    adjustHeight(event){
        this.setState({
            height: parseInt(event.target.value)
        });
    }

    adjustWidth(event){
        this.setState({
            width: parseInt(event.target.value)
        });
    }

    onButtonClick(){
        this.props.update(this.state.width, this.state.height);
    }

    render(){
        const question = () => {
            switch(this.props.trial){
                case 0:
                    return "Please, create the silhouette most representative of Island 1."
                case 1:
                    return "Please, create the silhouette most representative of Island 2."
                case 2:
                    return "Please, create the silhouette most representative of the boundary between the two islands."
                default:
                    return "Please create the most repesentative silhouette."
            }
        }
        let personAttributes = this.props.properties;
        const checkImplicit = () =>{
            let stage = this.props.stage;
            return !(stage === Phases.EXPLICIT_1 | stage === Phases.EXPLICIT_2 | stage === Phases.EXPLICIT_3);
        }
        let personSize = checkImplicit()? {
            width: personAttributes[WIDTH_MEASURE] + "vmin",
            height: personAttributes[HEIGHT_MEASURE] + "vmin"
        }:
        {
            width: this.state.width + "vmin",
            height: this.state.height + "vmin",
            margin: "-7vmin 0 0 0"
        };
        return (
            <div>
                {checkImplicit()? <div></div>:<div><h2 className="explicit-question-text">{question()}</h2>
                    </div>}
                <div className="person-frame">
                    <img className="person" style={personSize} src={silhouette}
                    alt="silhouette"></img>
                </div>
                {checkImplicit()? <div></div>:
                <div>
                    <input type="range" className="vert-range" min={MIN_HEIGHT - 5} max={MAX_HEIGHT+5} id="heightRange" value={this.state.height} onChange={this.adjustHeight}></input>
                    <input type="range" className="hor-range" min={MIN_WIDTH - 5} max={MAX_WIDTH+5} id="widthRange" value={this.state.width} onChange={this.adjustWidth}></input>
                    <button className="silhouette-button" onClick={this.onButtonClick}>Submit</button>
                </div>}
            </div>
        );
    }
}

export default DisplayItem;