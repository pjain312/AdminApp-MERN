import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import subjectReducer from "./reducers/subjectReducer";
import studentReducer from "./reducers/studentReducer";
import auth from "./reducers/auth"
import { composeWithDevTools } from "redux-devtools-extension";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setCurrUser } from "./actions/actions";
import jwt from 'jsonwebtoken';


const initialState = [];

const rootReducer = combineReducers({
  subjectReducer,
  studentReducer,
  auth,
});
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
  );
  if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrUser(jwt.decode(localStorage.jwtToken)));
  }

export default store;
