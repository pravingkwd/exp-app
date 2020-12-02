import { addExpense, removeExpense , editExpense, startAddExpense } from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const creatMockStore = configureMockStore([thunk]);     

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

test("Should add expense to database and store" , (done) =>{

    const store = creatMockStore({});

    const expenseData = {
        description : 'Mouse',
        amount:100,
        note:'Mouse with 100 rupees',
        createdAt:1000

    }

     store.dispatch(startAddExpense(expenseData)).then( () => {

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense : {
                id: expect.any(string),
                ...expenseData
            }

        })

     

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');}).then( (snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    } );     
    
});

test("Should add expense to database and store with default values"  , (done) =>{

    const store = creatMockStore({});

    const expenseData = {
        description : '',
        amount:'',
        note:'',
        createdAt:''

    }

     store.dispatch(startAddExpense(expenseData)).then( () => {

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense : {
                id: expect.any(string),
                ...expenseData
            }

        })

     

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');}).then( (snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    } );     
    
});


