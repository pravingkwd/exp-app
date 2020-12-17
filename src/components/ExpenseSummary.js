import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ ExpensesCount, ExpensesTotal }) => {

    const expenseWord = ExpensesCount === 1 ? 'expense':'expenses';

    const formattedExpense = numeral(ExpensesTotal /100).format('$0,0,00');

    return (
        <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{ExpensesCount}</span> {expenseWord} totalling <span>{formattedExpense}</span></h1>
        <div className="page-header__actions">
        <Link to="/create" className="button">Add Expense</Link>
        </div>
        </div>         
        </div>
    );

}


const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        ExpensesCount: visibleExpenses.length,
        ExpensesTotal: selectExpensesTotal(visibleExpenses)
    }

}

export default connect (mapStateToProps)(ExpenseSummary);



