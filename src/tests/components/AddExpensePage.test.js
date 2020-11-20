import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

let addExpense, history, wrapper;

beforeEach(()=>{
    addExpense = jest.fn();
    history = { push: jest.fn() }

    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)

})

test("Should render add expense page correctly",()=>{

    expect(wrapper).toMatchSnapshot();

})

test("Shoud handle On submit" , ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
