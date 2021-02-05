import {FAQ_SUBJECTS} from "../actions/action-types";

const initialState = [];

const indSubjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAQ_SUBJECTS:
            return [action.payload]

        default:
            return state
    }
}

export default indSubjectReducer