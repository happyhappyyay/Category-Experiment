import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Results from './Results';

describe('Results Component', () => {
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
      render(<Results
        dimension={1}
        results={[29.908223865468685, 0, 30.84172569121602, 26.611589490470465, 21, 21, 21, 21, 21, 21]}
      />, container);
    });
    expect(container.textContent).toBe('First Phase- Island 130 tall /27.5 tallSecond Phase- Island 131 '
    + 'tall /27.5 tallFirst Choice- Island 121 tall /27.5 tallSecond Choice- Island 121 tall /27.5 tallI'
    + 'sland 1 Average27.5 tallFirst Phase- Island 20 tall /29.5 tallSecond Phase- Island 227 tall /29.5'
    + ' tallFirst Choice- Island 221 tall /29.5 tallSecond Choice- Island 221 tall /29.5 tallIsland 2 Av'
    + 'erage29.5 tallFirst Phase- Boundary15 tall /28.5 tallSecond Phase- Boundary29 tall /28.5 tallFirs'
    + 't Choice- Boundary21 tall /28.5 tallSecond Choice- Boundary21 tall /28.5 tallBoundary Average28.5 tall');
  });
});
