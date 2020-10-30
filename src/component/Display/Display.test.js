import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Display from './Display';

describe('Display Component', () => {
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
    const onChange = jest.fn;
    act(() => {
      render(<Display
        stage={1}
        updateResults={onChange}
        updateTrial={onChange}
        updateStage={onChange}
        trial={0}
        feedbackAmount={0}
        typeFeedback={0}
      />, container);
    });
    expect(container.textContent).toBe('Island 1Island 2');
    act(() => {
      render(<Display
        stage={2}
        updateResults={onChange}
        updateTrial={onChange}
        updateStage={onChange}
        trial={0}
        feedbackAmount={0}
        typeFeedback={0}
      />, container);
    });
    expect(container.textContent).toBe('Island 1Please, create '
    + 'the silhouette most representative of Island 1.SubmitIsland 2');
  });
});
