import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };

        onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
