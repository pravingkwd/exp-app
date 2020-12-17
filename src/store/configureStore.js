import { createStore , combineReducers, applyMiddleware , compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducers from '../reducers/filters';
import authReducers from '../reducers/auth';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_compose__ || compose ;

export default ()  => {

    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters : filterReducers,
            auth:authReducers
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}