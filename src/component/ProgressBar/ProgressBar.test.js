import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ProgressBar from './ProgressBar';

describe('Progress Bar', () => {
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
    act(() => {
      render(<ProgressBar
        stage={1}
        trial={0}
        overall
      />, container);
    });
    expect(container.textContent).toBe('Overall Progress:0%');
    act(() => {
      render(<ProgressBar
        stage={1}
        trial={0}
        overall={false}
      />, container);
    });
    expect(container.textContent).toBe('Current Progress:0%');
    act(() => {
      render(<ProgressBar
        stage={3}
        trial={10}
        overall
      />, container);
    });
    expect(container.textContent).toBe('Overall Progress:30%');
  });
});
