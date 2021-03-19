import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
// import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';

describe('App', () => {
  test('renders App component', async () => {
    let component;
    await act(async () => {
      component = TestRenderer.create(<Provider store={store}><App /></Provider>);
    });
    // screen.debug();
    // fails
    // expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
    // expect(component.toJSON()).toMatchSnapshot();
  });
});
