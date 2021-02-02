import {GET_SUBJECTS} from "../actions/action-types";

const initialState = [];

const subjectReducer= (state = initialState, action) => {
  switch (action.type) {

    case GET_SUBJECTS:
    return[...state, action.payload]
  
    default:
        return state  
       
  }
}

export default subjectReducer;