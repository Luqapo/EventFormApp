import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';

configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    })
    
    it('should render <App />', () => {
        expect(wrapper.find('input')).toHaveLength(5);
    })
    it('should call preventDefault', () => {
        const preventDefault = jest.fn();
        const setError = jest.fn();
        wrapper.setProps({firstName: 'Ala', lastName: 'Zawada', setError: setError});
        wrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    })
});