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
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { getByTestId, asFragment } = fullApp;
    // screen.debug();
    // fails
    await waitFor(
      () => {
        expect(screen.getByText('Siberian'));
      },
    );
    fireEvent.click(getByTestId('aege'));
    setTimeout(function(){


    }, 5000); 
    // const tree = fullApp.toJSON();
    // await waitFor(
    //   () => {
    //     expect(screen.getByText('island'));
    //   },
    // );
    // await waitFor(
    //   () => {
    //     expect(asFragment()).toMatchSnapshot();
    //   },
    // );

    expect(asFragment()).toMatchSnapshot();

    // expect(component.getByText(/Searches for JavaScript/)).toBeNull();
    // expect(component.toJSON()).toMatchSnapshot();
  });
});
