import moment from 'moment';
import { setStartDate, setEndDate , setTextFilter , sortByDate , sortByAmount } from '../../actions/filters'

test("Should run set start date",()=>{

    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)

    })


});

test("Shoud run set end date",()=>{
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test("Should run set text filters with object value",()=>{

    const action = setTextFilter('bill');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'bill'

    })

})

test("Should run set text filters without object",()=>{

    const action = setTextFilter('');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''

    })

})

test("should run sort by amount",()=>{
    const action = sortByAmount();

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })

})

test("should run sort by date",()=>{
    const action = sortByDate();

    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })

})



