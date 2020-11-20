import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => { 
    
    return (
        
    <div>This is from Expense Dashboard Page
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>  ); 
};


export default ExpenseDashboardPage;