import React from 'react';
import Display from '../Display/Display';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Explanation from '../Explanation/Explanation';
import * as Phases from '../../helpers/phases'; 
import * as Feedback from '../../helpers/feedback';

import './Frame.css';

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
    }
  
      render(){
        const { trial, stage, amountFeedback, typeFeedback, dimension, results } = this.state;
        return (
              <div>
                <Header 
                  trial={trial} 
                  stage={stage}
                />
                {stage !== Phases.INTRODUCTION &
                stage !== Phases.RESULTS?
                <Display 
                  stage = {stage} 
                  updateResults={this.updateResults} 
                  updateTrial={this.updateTrial} 
                  updateStage={this.updateStage} 
                  trial={trial} 
                  feedbackAmount={amountFeedback} 
                  typeFeedback={typeFeedback}
                />
                :<Explanation 
                  stage = {stage} 
                  dimension={dimension} 
                  results={results}
                />}
                <Footer 
                  stage = {stage} 
                  typeFeedback={this.updateTypeFeedback} 
                  amtFeedback={this.updateAmountFeedback} 
                  stageChange={this.updateStage}
                />
              </div>
        );
      }
  }

  
  export default Frame;