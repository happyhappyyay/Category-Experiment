import React from 'react';
import Island from '../Island/Island';
import DisplayItem from '../DisplayItem/DisplayItem';
import IslanderLogic from '../../helpers/IslanderLogic';
import './Display.css';
import * as Phases from '../../helpers/phases';
import {EXPLICIT_TRIALS, PHASE_TRIALS} from '../ProgressBar/progCalc';
import {ISLAND_1, ISLAND_2, WIDTH_MEASURE, HEIGHT_MEASURE} from '../../helpers/IslanderLogic';
import FeedbackHelper from './feedbackHelper';

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            giveFeedback: false
        };
        this.implicitClassification1 = [0,0];
        this.implicitClassification2 = [0,0];
        this.explicitClassification1 = [0,0,0];
        this.explicitClassification2 = [0,0,0];
        this.islanderLogic = new IslanderLogic();
        this.islanderProperties = [];
        this.feedbackHelper = new FeedbackHelper(this.props.feedbackAmount, this.props.typeFeedback);
        this.updateImplicit = this.updateImplicit.bind(this);
        this.updateExplicit = this.updateExplicit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event){
        if(this.islanderLogic.checkForImplicitPhase(this.props.stage)){
            if(event.key === '1'){
                console.log("press ", event.key);
                this.updateImplicit(ISLAND_1);
            }
            else if(event.key === '2'){
                console.log("press", event.key);
                this.updateImplicit(ISLAND_2);
            }
        }
    }

    updateIslander(){
        this.islanderProperties = this.islanderLogic.createSilhouetteProperties();
        return this.islanderProperties;
    }

    updateImplicit(island){
        if(!this.state.giveFeedback){
            if(this.feedbackHelper.allowFeedback()|this.props.stage===Phases.PHASE_1){
                this.feedbackHelper.setupFeedbackColor(island===this.islanderProperties[2]);
                this.setState({
                    giveFeedback:true
                })
                setTimeout(()=>this.implicitTrialStageIncrement(island),1000);
            }
            else{
                this.implicitTrialStageIncrement(island);
            }
        }
    }

    implicitTrialStageIncrement = (island) =>{
            let trial = this.props.trial;
            let value = this.islanderLogic.getDimension() === WIDTH_MEASURE? 
            this.islanderProperties[WIDTH_MEASURE]: this.islanderProperties[HEIGHT_MEASURE];
            switch(this.props.stage){
                case Phases.TRAINING:
                    if(trial + 1 === PHASE_TRIALS/5){
                        this.props.updateStage(Phases.EXPLICIT_1);
                    }
                    else{
                        this.props.updateTrial(trial + 1);
                    }
                    break;
                case Phases.PHASE_1:
                    this.implicitClassification1 = this.implicitClassification1.map((val,index)=>{
                        switch(index){
                            case 0:
                                return island!==ISLAND_1? val:val > 0? (val + value)/2:value;
                            case 1:
                                return island===ISLAND_1? val:val > 0? (val + value)/2:value;
                            default:
                                return val;
                        }
                    })
                    if(trial + 1 === PHASE_TRIALS/2.5){
                        this.props.updateStage(Phases.EXPLICIT_2);
                    }
                    else{
                        this.props.updateTrial(trial + 1);
                    }
                    break;
                case Phases.PHASE_2:
                    this.implicitClassification2 = this.implicitClassification2.map((val,index)=>{
                        switch(index){
                            case 0:
                                return island!==ISLAND_1? val:val > 0? (val + value)/2:value;
                            case 1:
                                return island===ISLAND_1? val:val > 0? (val + value)/2:value;
                            default:
                                return val;
                        }
                    })
                    if(trial + 1 === PHASE_TRIALS/2.5){
                        this.props.updateStage(Phases.EXPLICIT_3);
                    }
                    else{
                        this.props.updateTrial(trial + 1);
                    }
                    break;
                default:
                    break;
            }
            this.setState({giveFeedback:false});

    }

    updateExplicit(width, height){
        let trial = this.props.trial;
        let value =  this.islanderLogic.getDimension() === WIDTH_MEASURE? 
        width: height;
        switch(this.props.stage){
            case Phases.EXPLICIT_1:
                    if(trial + 1 === EXPLICIT_TRIALS/3){
                        this.props.updateStage(Phases.PHASE_1);
                    }
                    else{
                        this.props.updateTrial(trial + 1);
                    }
                break;
            case Phases.EXPLICIT_2:
                    this.explicitClassification1 = this.explicitClassification1
                    .map((val,index)=>{ return index === trial? value:val;
                });
                    if(trial + 1 === EXPLICIT_TRIALS/3){
                        if(this.props.typeFeedback === 2) this.feedbackHelper.reverseFeedbackType();
                        this.props.updateStage(Phases.PHASE_2);
                    }
                    else{
                        this.props.updateTrial(trial + 1);
                    }
                break;
            case Phases.EXPLICIT_3:
                    this.explicitClassification2 = this.explicitClassification2
                        .map((val,index)=>{ return index === trial? value:val;
                    });
                    if(trial + 1 === EXPLICIT_TRIALS/3){
                        let arr = this.implicitClassification1.concat(this.implicitClassification2,
                            this.explicitClassification1,this.explicitClassification2);
                        this.props.updateResults(arr);
                    }
                    else{
                        this.props.updateTrial(trial + 1);
                    }
                break;
            default:
                break;
        }
    }
    render(){
        const { stage, trial } = this.props;
        return (
            <div>
                <div className="Display-container">
                    <Island 
                        island={0} 
                        stage={stage} 
                        update={this.updateImplicit}
                    />
                        {this.state.giveFeedback? 
                    <div className="DisplayItem-silhouette-container">
                        <div 
                            className="DisplayItem-feedback" 
                            style={{color:this.feedbackHelper.getFeedbackColor()}}
                            >
                            {this.feedbackHelper.getFeedbackColor() === "green"? "correct":"incorrect"}
                        </div>
                    </div>:
                    <DisplayItem 
                        stage = {stage} 
                        trial={trial} 
                        properties={this.updateIslander()} 
                        update={this.updateExplicit} 
                    />}
                    <Island 
                        island={1} 
                        stage={stage} 
                        update={this.updateImplicit}
                    />
                </div>
            </div>
        );
      }
    }
  
  export default Display;