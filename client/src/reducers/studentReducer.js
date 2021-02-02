import {GET_STUDENTS} from "../actions/action-types";

const initialState = [];

const studentReducer= (state = initialState, action) => {
  switch (action.type) {

    case GET_STUDENTS:
    return[...state, action.payload]
  
    default:
        return state  
  }
}

export default studentReducer;