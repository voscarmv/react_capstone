import React from 'react';
// import TestRenderer, { act } from 'react-test-renderer';
// import { act } from 'react-test-renderer';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';

describe('App', () => {
  test('renders App component', async () => {
    // let component;
    const { getByTestId } = render(<Provider store={store}><App /></Provider>);
    // screen.debug();
    // fails
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );
    fireEvent.click(getByTestId('aege'));
    await waitFor(
      () => {
        expect(screen.getByText('Wikipedia'));
      },
    );
    // expect(component.getByText(/Searches for JavaScript/)).toBeNull();
    // expect(component.toJSON()).toMatchSnapshot();
  });
});
