import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MaterialUIform from './MaterialUIform';

configure({adapter: new Adapter()});

describe('<MaterialUIform />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MaterialUIform />);
    });

    it('should render <MateriaUIform /> and check if renders as we expect.', () => {
        expect(wrapper).toHaveLength(1);
    });
});