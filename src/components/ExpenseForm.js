import React from 'react';

import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


import moment from 'moment';

const now = moment();


class ExpenseForm extends React.Component {

    constructor (props)
    {
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused : false,
            error:''
        }
    }

        

    onDescriptionChange = (e) => {
        const description = e.target.value; 
        this.setState(()=> ({ description }))   
    }

    onNotechange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        const regExp = /^\d*(\.\d{0,2})?$/
        if(!amount || amount.match(regExp)) 
        {
            this.setState( () => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
        this.setState( () => ({ createdAt }));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState( () => ({ calenderFocused : focused }) )
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description && !this.state.amount) 
        {
          this.setState( () => ({
              error : 'Please enter description and amount'
          }) );  
        }
        else
        {
            this.setState( () => ({
                error : ''
            }) );  
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt : this.state.createdAt.valueOf(),
                note:this.state.note
            })

        }
    }

    render(){
        return (
            <div>
            <h1>Add Expense</h1>
            { this.state.error && (<p>{this.state.error}</p>)}
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="description" onChange={this.onDescriptionChange} value={this.state.description} />
            <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange} />
            <SingleDatePicker
            date ={this.state.createdAt}
            onDateChange={this.onDateChange} 
            focused={this.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={ () => false }

            />
            <textarea placeholder="add note for your expense (optional)" value={this.state.note} onChange={ this.onNotechange } ></textarea>
            <button>Add Expense </button>
            </form>
            </div>
        );


    }


}

export default ExpenseForm;