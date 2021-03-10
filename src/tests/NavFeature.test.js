import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';

describe('App', () => {
  test('renders App component', () => {
    render(<Provider store={store}><App /></Provider>);
    screen.debug();
    // fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  });
});
