import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// importing reducers
import session from './session'
import activities from './activities'


//REDUCER COMBINER
const rootReducer = combineReducers({
   session,
   activities
});

let enhancer;
if (process.env.NODE_ENV === 'production') {
   enhancer = applyMiddleware(thunk);
} else {
   const logger = require('redux-logger').default;
   const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

//CONFIGURE THE STORE FUNCTION
const configureStore = (preloadedState) => {
   return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
