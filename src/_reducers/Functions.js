import {
    ExampleModel
} from "../_models";

export const mapStateToProps = state => ({
    // Example
    example: state.Example ? state.Example.example : ExampleModel.example,
    // AnotherExample
    anotherExample: state.AnotherExample,
});

const changeState = (payload, type) => {
    return {type: type, payload: payload};
};

export const mapDispatchToProps = dispatch => ({
    changeExample: data => dispatch(changeState(data, 'CHANGE_EXAMPLE')),
    changeAnotherExample: data => dispatch(changeState(data, 'CHANGE_ANOTHER_EXAMPLE')),
});
