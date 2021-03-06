import FeedbackHelper from './feedbackHelper';
import * as Feedback from '../../helpers/feedback';

describe('Feedback Helper', () => {
  const helper = new FeedbackHelper(Feedback.SUPERVISED, Feedback.TRUE);
  const helper2 = new FeedbackHelper(Feedback.UNSUPERVISED, Feedback.RANDOM);

  it('should set constructor correctly', () => {
    expect(helper.feedbackAmount).toBe(Feedback.SUPERVISED);
    expect(helper.feedbackType).toBe(Feedback.TRUE);
    expect(helper.giveFeedback).not.toBeTruthy();
    expect(helper.getFeedbackColor()).toBe('black');
  });

  it('should reverse feedback', () => {
    helper.reverseFeedbackType();
    expect(helper.feedbackType).toBe(Feedback.FALSE);
  });

  it('should return incorrect-answer font color', () => {
    helper.setupFeedbackColor(true);
    expect(helper.getFeedbackColor()).toBe('red');
  });

  it('should return correct-answer font color', () => {
    helper.reverseFeedbackType();
    helper.setupFeedbackColor(true);
    expect(helper.getFeedbackColor()).toBe('green');
  });

  it('should return correct-answer color', () => {
    expect(helper.getFeedbackColor()).toBe('green');
  });

  it('should return a 1 or 0', () => {
    const type = FeedbackHelper.createRandomizedFeedbackType();
    expect(type === 0 || type === 1).toBeTruthy();
  });

  it('should return true or false', () => {
    const allow = helper.allowFeedback();
    expect(allow === true || allow === false).toBeTruthy();
  });

  it('should set the constructor correctly- random', () => {
    expect(helper2.feedbackAmount).toBe(Feedback.UNSUPERVISED);
    expect(helper2.feedbackType).toBeLessThan(2);
  });
});
