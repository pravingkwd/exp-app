import { addExpense, removeExpense , editExpense } from '../../actions/expenses';


test("Should set up remove expense",()=> {

    const action = removeExpense({ id:'12345' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'12345'
    })

});


test("Shoud run edit expenes",()=>{

    const action = editExpense('1231',{
        note :'this is testing'
    })
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'1231',
        updates: {
            note:'this is testing'
        } 
    })

});

test("Shoudl setup add expense",()=>{

    const expenseData = {
        description:'tea',
        amount:100,
        createdAt:1000,
        note:'brekfast'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense : {...expenseData,
        id:expect.any(String)
        }

    })

});

test("Should run add expense with default values",()=>{

    const expenseData = {
        description :'',
        amount : 0,
        createdAt :0,
        note :''
    }

    const action = addExpense();

    expect(action).toEqual({
        type :'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        } 
    })
})


