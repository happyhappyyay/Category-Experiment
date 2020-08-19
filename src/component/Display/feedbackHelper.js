import { FALSE } from '../../helpers/feedback';

class FeedbackHelper {
  constructor(feedbackAmount, feedbackType) {
    this.feedbackAmount = feedbackAmount;
    this.feedbackType = feedbackType === 2
      ? FeedbackHelper.createRandomizedFeedbackType() : feedbackType;
    this.giveFeedback = false;
    this.color = 'black';
  }

  allowFeedback() {
    this.giveFeedback = (Math.random() * 100) <= this.feedbackAmount;

    return this.giveFeedback;
  }

  setupFeedbackColor(correct) {
    let tempCorrect = correct;
    if (this.feedbackType === FALSE) {
      tempCorrect = !correct;
    }
    this.color = tempCorrect ? 'green' : 'red';
  }

  getFeedbackColor() {
    return this.color;
  }

  static createRandomizedFeedbackType() {
    return Math.round(Math.random());
  }

  reverseFeedbackType() {
    this.feedbackType = this.feedbackType === 0 ? 1 : 0;
  }
}

export default FeedbackHelper;
