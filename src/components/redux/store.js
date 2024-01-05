// import {createStore} from 'redux';
// import reducers from "../actions/reducers/main";
// // import reducers

// const store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store  
import {legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers/main';
import reducers from "./reducers/main"
// const middleware = [thunk]
const store = createStore(
    reducers,{}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;