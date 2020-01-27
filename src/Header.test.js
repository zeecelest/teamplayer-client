import ReactDOM from 'react-dom';
import header from './header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('Header  component test', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><header /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });
});