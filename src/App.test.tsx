import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App example', async () => {
    const { findByText } = render(<App />);

    const hello = await findByText('Hello 9');

    expect(hello.textContent).toBe('Hello 9');
})
