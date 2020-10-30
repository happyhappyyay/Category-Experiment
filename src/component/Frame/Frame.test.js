import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Frame from './Frame';

describe('Frame Component', () => {
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

  it('renders through experiment without crashing', () => {
    jest.useFakeTimers();
    act(() => {
      render(<Frame />, container);
    });
    expect(container.textContent).toMatch(/Categorization Game/);

    const amtFd = document.querySelector('[data-testid=semi-supervised]');
    const typFd = document.querySelector('[data-testid=true-feedback]');

    const arrow = document.querySelector('[data-testid=start-arrow]');

    act(() => {
      amtFd.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      typFd.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      arrow.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.textContent).toMatch(/Island 1Island 2/);

    act(() => {
      const island = document.querySelector('[data-testid=Island1]');

      for (let i = 0; i < 20; i += 1) {
        island.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        jest.advanceTimersByTime(1000);
      }
    });
    expect(container.textContent).toMatch(/create the silhouette most representative/);

    act(() => {
      const submit = document.querySelector('[data-testid=submit-button]');

      for (let i = 0; i < 3; i += 1) {
        submit.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        jest.advanceTimersByTime(100);
      }
    });
    expect(container.textContent).toMatch(/Island 1Island 2/);

    act(() => {
      const island = document.querySelector('[data-testid=Island1]');

      for (let i = 0; i < 40; i += 1) {
        island.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        jest.advanceTimersByTime(1100);
      }
    });
    expect(container.textContent).toMatch(/create the silhouette most representative/);

    act(() => {
      const submit = document.querySelector('[data-testid=submit-button]');

      for (let i = 0; i < 3; i += 1) {
        submit.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        jest.advanceTimersByTime(100);
      }
    });
    expect(container.textContent).toMatch(/Island 1Island 2/);

    act(() => {
      const island = document.querySelector('[data-testid=Island1]');

      for (let i = 0; i < 40; i += 1) {
        island.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        jest.advanceTimersByTime(1000);
      }
    });
    expect(container.textContent).toMatch(/create the silhouette most representative/);

    act(() => {
      const submit = document.querySelector('[data-testid=submit-button]');

      for (let i = 0; i < 3; i += 1) {
        submit.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        jest.advanceTimersByTime(100);
      }
    });
    expect(container.textContent).toMatch(/Results/);
  });
});
