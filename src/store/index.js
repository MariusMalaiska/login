import { createStore } from "redux"

const initialState = {
    userValue: "",
    passwordValue: ""
}

const reducer = (state = initialState, action) => {
    // console.log("reducer", action)

    switch (action.type) {
        case "INPUT_CHANGE":
            return Object.assign({}, state, { userValue: action.username });

        case "PASSWORD_CHANGE":
            return Object.assign({}, state, { passwordValue: action.password })
        default:
            return state
    }

}

const store = createStore(reducer);

export default store;