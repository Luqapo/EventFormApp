import React from 'react';
import {Provider} from 'react-redux';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

import  MaterialUIform  from './MaterialUIform';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, DatePicker } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';

configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const dispatch = jest.fn();
const handleSubmit = jest.fn();
const onSubmit = jest.fn();
let store;
const initProps = {
    onSubmit,
};

describe('<MaterialUIform />', () =>{
    beforeAll(() => {
        store = mockStore({
            handleSubmit,
            dispatch,
        });
        dispatch.mockClear();
    });

    it('should display a Field 4 times', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MuiThemeProvider>
                    <MaterialUIform {...initProps} />
                </MuiThemeProvider>
            </Provider>,
        );
        expect(wrapper.find(Field).length).toBe(4);
    });

    it('should display a TextField 3 times', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MuiThemeProvider>
                    <MaterialUIform {...initProps} />
                </MuiThemeProvider>
            </Provider>,
        );
        expect(wrapper.find(TextField).length).toBe(3);
    });

    it('should display a DatePicker 1 times', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MuiThemeProvider>
                    <MaterialUIform {...initProps} />
                </MuiThemeProvider>
            </Provider>,
        );
        expect(wrapper.find(DatePicker).length).toBe(1);
    });

    it(' should render <MaterialUIform /> and chcec if renders <Button /> as we except.', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MuiThemeProvider>
                    <MaterialUIform {...initProps} />
                </MuiThemeProvider>
            </Provider>,
        );        
        expect(wrapper.find(Button)).toHaveLength(2);
            });

    it(' should render <MaterialUIform /> and chcec  if onSubmit method was call', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MuiThemeProvider>
                    <MaterialUIform {...initProps} />
                </MuiThemeProvider>
            </Provider>,
        );        
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(onSubmit.mock.calls.length).toBe(1);
            });
});