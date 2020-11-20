import { createStore  }  from 'redux';


// reducer 
//1 reducer are pure functions
// 2 never change state or actions 

const countReducer = ( state = { count:0 } ,action )=>{
    
    
    
    
        switch(action.type) 
        {
            case 'INCREMENT' :
        return { count : state.count + action.incrementBy };
            case 'DECEREMENT' : 
        return { count : state.count - action.decerementBy };
    
            case 'SET': return { count : action.count }    
            case 'RESET' :  
                return { count :0 }  
            default : return state;    
        }
    
    }

    const store = createStore(countReducer);

    // action generator - function that return action bojects
    
const incrementCount = ( { incrementBy =1 } = { } ) => (
    {
    type : 'INCREMENT',
    incrementBy 
    }
    );

const decrementCount =( { decerementBy =1 } = {} ) =>  (
    {
        type: 'DECEREMENT',
        decerementBy: decerementBy
    }
)

const setCount  = ( { count } ) => ({
    type:'SET',
    count

});
    

const setReset = () => ({
    type:'RESET'
})

//console.log(store.getState());
const unsbiscribe = store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy :10 }));
store.dispatch(incrementCount());

//unsbiscribe();



store.dispatch(setCount({ count:-100000 }));

store.dispatch(setReset());

store.dispatch(decrementCount());

store.dispatch(decrementCount( { decerementBy :10}) );

//console.log(store.getState());