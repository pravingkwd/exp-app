import filterReducers from '../../reducers/filters';
import moment from 'moment';

test("Shoud set up default filter values",()=>{

    const state = filterReducers(undefined,{ type:'@@INIT' })
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test("Should setup sort by amount",()=>{

    const state = filterReducers(undefined,{ type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test("Should set up sort by date",()=>{

    const currentState = {
        text:'w',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'
    }

    const state = filterReducers(currentState,{ type:'SORT_BY_DATE'});

    expect(state.sortBy).toBe('date');

});

test("Should set text filter",()=>{

    const text='Pravin'

    const action ={ type: 'SET_TEXT_FILTER' ,text }

    const state = filterReducers(undefined,action);

    expect(state.text).toBe(text);

});


test("Should Set Start Date Filter ",()=>{

    const startDate = moment();

    const action = { type:'SET_START_DATE',startDate }

    const state = filterReducers(undefined,action);

    expect(state.startDate).toEqual(startDate);



});


test("Should Set End Date Filter ",()=>{

    const endDate = moment();

    const action = { type:'SET_END_DATE',endDate }

    const state = filterReducers(undefined,action);

    expect(state.endDate).toEqual(endDate);



});