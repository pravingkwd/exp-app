import { createStore , combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducers from '../reducers/filters';



export default ()  => {

    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters : filterReducers
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}