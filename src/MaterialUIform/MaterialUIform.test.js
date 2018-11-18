import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import  { MaterialUIform } from './MaterialUIform';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';

configure({adapter: new Adapter()});

describe('<MaterialUIform />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MaterialUIform />);
    });

    it('should render <MateriaUIform /> and check if renders as we expect.', () => {
        expect(wrapper).toHaveLength(1);
    });

    it(' should render <MaterialUIform /> and chcec if renders <Field /> as we except.', () => {
        expect(wrapper.find(Field)).toHaveLength(4);
    });

    it(' should render <MaterialUIform /> and chcec if renders <Button /> as we except.', () => {
        expect(wrapper.find(Button)).toHaveLength(2);
    });
});