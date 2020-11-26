import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ ExpensesCount, ExpensesTotal }) => {

    const expenseWord = ExpensesCount === 1 ? 'expense':'expenses';

    const formattedExpense = numeral(ExpensesTotal /100).format('$0,0,00');

    return (
        <div>
        <h1>Viewing {ExpensesCount} {expenseWord} totalling {formattedExpense}</h1>
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



