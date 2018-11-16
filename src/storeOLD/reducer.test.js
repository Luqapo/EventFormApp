import reducer from './reducer';
import * as actionTypes from './actions';

describe('reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: ''
        });
    });

    it('should return error message', () => {
        expect(reducer({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: ''
        }, {
            type: actionTypes.CHECK_ERROR,
            errorMessage: 'some message'
        })).toEqual({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: 'some message'
        });
    });

    it('should return first name', () => {
        expect(reducer({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: ''
        }, {
            type: actionTypes.SET_VALUE,
            inputName: 'firstName',
            inputValue: 'superName'
        })).toEqual({
            firstName: 'superName',
            lastName: '',
            email: '',
            date: '',
            message: ''
        });
    });

    it('should return last name', () => {
        expect(reducer({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: ''
        }, {
            type: actionTypes.SET_VALUE,
            inputName: 'lastName',
            inputValue: 'superName'
        })).toEqual({
            firstName: '',
            lastName: 'superName',
            email: '',
            date: '',
            message: ''
        });
    });

    it('should return email', () => {
        expect(reducer({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: ''
        }, {
            type: actionTypes.SET_VALUE,
            inputName: 'email',
            inputValue: 'superName'
        })).toEqual({
            firstName: '',
            lastName: '',
            email: 'superName',
            date: '',
            message: ''
        });
    });

    it('should return date', () => {
        expect(reducer({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            message: ''
        }, {
            type: actionTypes.SET_VALUE,
            inputName: 'date',
            inputValue: 'superName'
        })).toEqual({
            firstName: '',
            lastName: '',
            email: '',
            date: 'superName',
            message: ''
        });
    });

});