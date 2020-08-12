import {FALSE} from '../../helpers/feedback' 

class FeedbackHelper {

    constructor(feedbackAmount, feedbackType){
        this.feedbackAmount = feedbackAmount;
        this.feedbackType = feedbackType === 2? this.createRandomizedFeedbackType():feedbackType;
        this.giveFeedback = false;
        this.color = "black";
    }

    allowFeedback(){
        this.giveFeedback = (Math.random() * 100) <= this.feedbackAmount;
        console.log(this.giveFeedback,this.feedbackAmount, this.feedbackType);

        return this.giveFeedback;
    }

    setupFeedbackColor(correct){
        if(this.feedbackType === FALSE){
            correct = !correct;
        }
        this.color = correct? "green": "red";
    }

    getFeedbackColor(){
        return this.color;
    }

    createRandomizedFeedbackType(){
        return Math.round(Math.random());
    }

    reverseFeedbackType(){
        this.feedbackType = this.feedbackType === 0?  1:0;
    }

    

}

export default FeedbackHelper;