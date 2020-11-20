import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense , removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component 
{

    onSubmit =  (expense) => {
        //this.props.dispatch(editExpense(this.props.expense.id,expense));
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
     }
    
     onClick = () => {
        //this.props.dispatch(removeExpense({ id:this.props.expense.id}));
        this.props.removeExpense({ id:this.props.expense.id});
        this.props.history.push('/');
    }  

    render()
    {
        return ( <div>
            <ExpenseForm expense={this.props.expense}  onSubmit={this.onSubmit}  />
            <button onClick={this.onClick} >Remove</button>
           </div> )  
    }
}

/*const EditExpensePage = (props) => {  console.log(props); 
    return ( <div>
    <ExpenseForm expense={props.expense} onSubmit={ (expense) => {
       props.dispatch(editExpense(props.expense.id,expense));
       props.history.push('/');
    } } />
    <button onClick={ () => {
        props.dispatch(removeExpense({ id:props.expense.id}));
        props.history.push('/');
    } } >Remove</button>
   </div> )};
*/

const mapStateToProps = (state,props) => {

    return { expense:state.expenses.find( (expense) => {
        if(expense.id === props.match.params.id )
         return true;
    } )
}

}

const mapDispatchToProps = (dispatch,props) => ({
    editExpense: (id,expense) => dispatch(editExpense(id,expense)) ,
    removeExpense : (data) => dispatch(removeExpense(data))
})



export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);