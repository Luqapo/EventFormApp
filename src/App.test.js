import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MatrialUIform from './MaterialUIform/MaterialUIform';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({adapter: new Adapter()});

describe('<MaterialUIform />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render <App /> and check if renders as we expect.', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render <App /> and check if div renders as we expect.', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should render <App /> and check if MuiThemeProvider renders as we expect.', () => {
        expect(wrapper.find(MuiThemeProvider)).toHaveLength(1);
    });

    it('should render <App /> and check if h1 renders as we expect.', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render <App /> and check if MatrialUIform renders as we expect.', () => {
        expect(wrapper.find(MatrialUIform)).toHaveLength(1);
    });
});