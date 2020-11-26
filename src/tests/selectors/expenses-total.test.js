import react from 'react';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("Should total 0 expenses ",()=>{

    const res = selectExpensesTotal([]);
    expect(res).toBe(0);

});

test("shoud total single expense",()=>{
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
})

test("shoud total mutiple expense",()=>{
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
})

