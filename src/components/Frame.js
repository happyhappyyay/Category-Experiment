import React from 'react';
import Display from './Display';
import Header from './Header';
import Footer from './Footer';
import Explanation from './Explanation';
import * as Phases from '../helpers/phases'; 
import * as Feedback from '../helpers/feedback';

class Frame extends React.Component {
    constructor(){
        super();
        this.state={
          stage: Phases.INTRODUCTION,
          trial: 0,
          amountFeedback: Feedback.SUPERVISED,
          typeFeedback: 0,
          results:[],
          dimension:0,
          correct:false,
        }
        this.updateAmountFeedback = this.updateAmountFeedback.bind(this);
        this.updateStage = this.updateStage.bind(this);
        this.updateTypeFeedback = this.updateTypeFeedback.bind(this);
        this.updateTrial = this.updateTrial.bind(this);
        this.updateResults = this.updateResults.bind(this);  
    }

    updateStage(newStage){
        this.setState({
          trial: 0,
          stage:newStage
          });
      }

    updateTrial(newTrial){
        this.setState({
          trial:newTrial
          });
      console.log("Stage:", this.state.stage," Trial:",newTrial);
    }

    updateAmountFeedback(feedback){
      this.setState({
        amountFeedback:parseInt(feedback)
      });
    }

    updateTypeFeedback(feedback){
      this.setState({
        typeFeedback:feedback
      });
    }

    updateResults(results, dimension){
      this.setState({
        stage:Phases.RESULTS,
        results:results,
        dimension: dimension,
      });
      console.log(results);
    }
  
      render(){
        return (
              <div>
                <Header trial={this.state.trial} stage={this.state.stage}/>
                {this.state.stage !== Phases.INTRODUCTION &
                this.state.stage !== Phases.RESULTS?
                <Display stage = {this.state.stage} updateResults={this.updateResults} updateTrial={this.updateTrial} 
                updateStage={this.updateStage} trial={this.state.trial} feedbackAmount={this.state.amountFeedback} typeFeedback={this.state.typeFeedback}/>
                :<Explanation stage = {this.state.stage} typeFeedback = {this.state.typeFeedback} 
                amountFeedback = {this.state.amountFeedback} dimension={this.state.dimension} results={this.state.results}/>}
                <Footer stage = {this.state.stage} typeFeedback={this.updateTypeFeedback} amtFeedback={this.updateAmountFeedback} stageChange={this.updateStage}/>
              </div>
        );
      }
  }

  
  export default Frame;