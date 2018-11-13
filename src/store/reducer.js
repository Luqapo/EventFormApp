import * as actionTypes from './actions';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    date: ''
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
        default:
        return state;
    }
};

export default reducer;