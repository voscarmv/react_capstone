import React from 'react';
// import TestRenderer, { act } from 'react-test-renderer';
// import { act } from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';

describe('App', () => {
  test('renders App component', async () => {
    // let component;
    render(<Provider store={store}><App /></Provider>);
    // screen.debug();
    // fails
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );
    // expect(component.getByText(/Searches for JavaScript/)).toBeNull();
    // expect(component.toJSON()).toMatchSnapshot();
  });
});
