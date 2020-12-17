import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';

import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

let startEditExpense, history, wrapper,startRemoveExpense;;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() }

    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[1]} />)

})

test("Should render Edit Expense page correctly",()=>{

    expect(wrapper).toMatchSnapshot();

})

test("Should handle Edit Expense" , ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
});

test("Should handle Remove Expense",()=>{

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith( {id:expenses[1].id});
})