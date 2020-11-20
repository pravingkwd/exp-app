import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListfilters } from '../../components/ExpenseListFilters';

import moment from 'moment';

import { filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach( ()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    
    wrapper = shallow(<ExpenseListfilters filters={filters} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate} />); 

})

test("Shoud render expense list filter correctly",()=>{
    expect(wrapper).toMatchSnapshot();
});

test("Should render alt filters correctly",()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot();

});


test("Should handle text change",()=>{

    const value='Rent';

    wrapper.find('input').simulate('change',{
        target : { value } 
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("Should sort by date",()=>{
const value ='date';

wrapper.setProps({
    filters:altFilters
})
wrapper.find('select').simulate('change',{
    target:{value}
});
expect(sortByDate).toHaveBeenCalled();
});


test("Should sort by Amount",()=>{
    const value ='amount';
    
    
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
    });

    test("Should handle date change",()=>{

        const startDate=moment(0).add(4,'years');
        const endDate=moment(0).add(8,'years');

        wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
        expect(setStartDate).toHaveBeenLastCalledWith(startDate);
        expect(setEndDate).toHaveBeenLastCalledWith(endDate);


    });

    test("Shoud handle date fouc change",()=>{

        const calenderFocused = 'endate';
        wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
        expect(wrapper.state('calenderFocused')).toBe(calenderFocused);

    });
