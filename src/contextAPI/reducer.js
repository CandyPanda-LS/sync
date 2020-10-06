import {Switch} from "@material-ui/core";

export const initialState = {
    user:"sonny",
}

export const actionTypes = {
    SET_USER : "SET_USER"
}

const reducer = (state, action) =>
{
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user:action.user
            }

            break;

        default:
            return state
            break;
    }
}

export default reducer;