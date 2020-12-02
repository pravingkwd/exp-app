import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch ,Link , NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import { addExpense , removeExpense , editExpense } from './actions/expenses';
import { setEndDate,setTextFilter,setStartDate , sortByAmount, sortByDate } from './actions/filters';
 import  getVisibleExpenses   from './selectors/expenses';
import firebase from './firebase/firebase';

const store = configureStore();

/*store.dispatch(addExpense({
    description : 'Water Bill',amount:300
}));

store.dispatch(addExpense({
    description : 'Gas Bill', createdAt:1000
}));
store.dispatch(addExpense({
    description : 'Rent Bill',amount:109500
}));*/
//store.dispatch(setTextFilter('Water'));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses,state.filters); 

//console.log(visibleExpenses);
console.log('a1pp.js');
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));