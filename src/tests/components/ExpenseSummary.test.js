import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test("Should render Expenses Summary with 1 expense",() =>{
    const wrapper = shallow(<ExpenseSummary ExpensesCount={1} ExpensesTotal={125} />)
    expect(wrapper).toMatchSnapshot();
});

test("Should render Expense Summary with multiple expenses",()=>{
    const wrapper =  shallow(<ExpenseSummary ExpensesCount={10} ExpensesTotal={10000} />);
    expect(wrapper).toMatchSnapshot();
});
