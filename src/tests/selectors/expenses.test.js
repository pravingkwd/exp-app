import moment from 'moment';
import selectExpense from '../../selectors/expenses';

const expenses = [ {
    id:'1',
    description:'gum',
    note:'',
    amount:195,
    createdAt:moment(0).add(4,'days').valueOf()
},
{
    id:'2',
    description:'Rent',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(3,'days').valueOf()
},
{
    id:'3',
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(5,'days').valueOf()
},
 ]

 test("should filter by text value",()=>{
     const filters = {
         text:'e',
         sortBy:'date',
         startDate:undefined,
         endDate:undefined
     }
 
     const result = selectExpense(expenses,filters);

     expect(result).toEqual(
        [expenses[2], expenses[1]]
     )



 });

 test("Should filter by start date",()=>{
     const filters = {
         text:'',
         sortBy:'date',
         startDate:moment(0),
         endDate:undefined
     }

     const result  = selectExpense(expenses, filters);

     expect(result).toEqual([expenses[2],expenses[0]])

 });

 test("Shoudl Filter by end date",()=>{
     const filters = {
         text :'',
         sortBy:'date',
         startDate:undefined,
         endDate:moment(0)
     }

     const result = selectExpense(expenses,filters);

     expect(result).toEqual([expenses[1]]);

 })

 test("Should sort by date",()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const result =  selectExpense(expenses, filters);

    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);

 })


 test("Should sort by amount",()=>{
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }

    const result =  selectExpense(expenses, filters);

    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);

 })




 