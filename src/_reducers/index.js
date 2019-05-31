import { combineReducers } from 'redux';
import {
    ExampleModel
} from '../_models';

const Example = (state = ExampleModel, action) => {
    if (action.type === 'CHANGE_EXAMPLE') {
        return action.payload;
    } else {
        return state;
    }
};

const AnotherExample = (state = null, action) => {
    if (action.type === 'CHANGE_ANOTHER_EXAMPLE') {
        return action.payload;
    } else {
        return state;
    }
};

export default combineReducers({
    Example,
    AnotherExample,
});