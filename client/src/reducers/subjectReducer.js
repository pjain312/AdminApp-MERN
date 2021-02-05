import {GET_STUDENT_SUBJECTS, GET_SUBJECTS} from "../actions/action-types";

const initialState = [];

const subjectReducer= (state = initialState, action) => {
  switch (action.type) {

    case GET_SUBJECTS:
    return[...state, action.payload]
    
    case GET_STUDENT_SUBJECTS:
      return[action.payload]

    default:
        return state  
  }
}

export default subjectReducer;