import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => { 
    
    return (
        
    <div>This is from Expense Dashboard Page
    <ExpenseSummary />
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>  ); 
};


export default ExpenseDashboardPage;