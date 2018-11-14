import * as actionTypes from './actions';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VALUE:
                return {
                    ...state = {
                        ...state,
                    [action.inputName]: action.inputValue
                    }
                }
        case actionTypes.CHECK_ERROR:
                return {
                    ...state = {
                        ...state,
                    message: action.errorMessage
                    }
                }
        default:
        return state;
    }
};

export default reducer;