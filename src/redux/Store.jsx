import { legacy_createStore as createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchReducer from "./Reducers/reducers";
const Store = createStore(combineReducers({
    searchReducerState:searchReducer
  }), applyMiddleware(thunk))

export default Store