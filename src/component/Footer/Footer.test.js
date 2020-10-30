import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Footer from './Footer';

describe('Footer Component', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders', () => {
    const change = jest.fn();
    act(() => {
      render(<Footer
        stage={0}
        amtFeedback={change}
        typeFeedback={change}
        stageChange={jest.fn}
      />, container);
    });
    expect(container.textContent).toBe('Amount of Feedback100%50%25%0%Type of FeedbackTrueFalseRandom');
    act(() => {
      render(<Footer
        stage={7}
        amtFeedback={change}
        typeFeedback={change}
        stageChange={jest.fn}
      />, container);
    });
    expect(container.textContent).toBe('Amount of Feedback100%50%25%0%Type of '
    + 'FeedbackTrueFalseRandomOver EstimationUnder EstimationCorrect Estimation');
  });

  it('updates state related information', () => {
    const change = jest.fn();
    const sChange = jest.fn();
    act(() => {
      render(<Footer
        stage={0}
        amtFeedback={change}
        typeFeedback={change}
        stageChange={sChange}
      />, container);
    });
    const semiRadio = document.querySelector('[data-testid=semi-supervised]');

    expect(semiRadio.name).toBe('amount-feedback');

    const trueRadio = document.querySelector('[data-testid=true-feedback]');

    expect(trueRadio.name).toBe('type-feedback');

    act(() => {
      semiRadio.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      trueRadio.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(change).toHaveBeenCalledTimes(2);

    const arrow = document.querySelector('[data-testid=start-arrow]');

    act(() => {
      arrow.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(sChange).toHaveBeenCalledTimes(1);
  });
});
