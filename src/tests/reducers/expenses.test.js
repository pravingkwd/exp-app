import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test("Should set default state",()=>{
    const state = expensesReducer(undefined,{ type:'@@INIT' })
    expect(state).toEqual([]);
});

test("Should remove expense by id",()=>{

    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    }

    const state = expensesReducer(expenses,action);

    expect(state).toEqual([expenses[1],expenses[2]]);

})

test("Should not remove expense by id",()=>{

    const action = {
        type:'REMOVE_EXPENSE',
        id:''
    }

    const state = expensesReducer(expenses,action);

    expect(state).toEqual(expenses);

});

test("Should add an expense",()=>{

    const expense = {
        id:'1',
        description:'dinner',
        amount:100,
        createdAt:20000,
        note:'test'
    }

    const action = {
        type:'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses,action);

    expect(state).toEqual([...expenses,expense]);
});

test("Should edit an expense", ()=>{

    const amount =12000;

        const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }

    const state = expensesReducer(expenses,action);

    expect(state[1].amount).toBe(amount);



});

test("Should not edit an expense by id", ()=>{

    const amount =12000;

        const action = {
        type:'EDIT_EXPENSE',
        id:12,
        updates:{
            amount
        }
    }

    const state = expensesReducer(expenses,action);

    expect(state).toEqual(expenses);



});

test("Should set expenses",()=>{

        const action = {
        type: 'SET_EXPENSES',
        expenses : [expenses[1]] 
    }

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);

});