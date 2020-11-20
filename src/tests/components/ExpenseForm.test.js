import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test("Should test ExpenseForm correctly",()=>{

    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

});

test("Should render ExpenseForm with expense data",()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})


test("Should render error for invalid form submissions",()=>{
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit',{
        preventDefault:() => {}
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();


});

test("Should set desriptin on input change",()=>{
    const value="new description";
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').at(0).simulate('change',{
        target :{ value }
    })

    expect(wrapper.state('description')).toBe(value);

})

test("Shoudl set note  on input change",()=>{
    const value = "new note";
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change',{
        target: { value }
    })

    expect(wrapper.state('note')).toBe(value);

});

test("Should set amount if valid input ",()=>{
    const value='23.50';
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').at(1).simulate('change',{
        target :{ value }
    })

    expect(wrapper.state('amount')).toBe(value);

})


test("Should no set amount if invalid input ",()=>{
    const value='12.122';
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').at(1).simulate('change',{
        target :{ value }
    })

    expect(wrapper.state('amount')).toBe('');

})

test("Should set props on form submit",()=>{

    const onSubmitSpy =jest.fn();

    const wrapper =shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit',{
        preventDefault:() => {}
    })

    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt,
        
    })

})

test("shoud set new date on change",()=>
{
    const now= moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now);
;
});

test("Should set calender focus on change",()=>{

    const value =true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({value});

    expect(wrapper.state('calenderFocused')).toBe(value)

});