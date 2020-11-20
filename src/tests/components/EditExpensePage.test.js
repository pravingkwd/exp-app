import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';

import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

let editExpense, history, wrapper,removeExpense;;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() }

    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]} />)

})

test("Should render Edit Expense page correctly",()=>{

    expect(wrapper).toMatchSnapshot();

})

test("Should handle Edit Expense" , ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
});

test("Should handle Remove Expense",()=>{

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith( {id:expenses[1].id});
})