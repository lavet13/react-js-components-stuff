import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        if (!Number.isFinite(enteredExpenseData.amount)) {
            console.error('Number is invalid. Nice try -_-');
            return;
        }
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };

        onAddExpense(expenseData);
    };

    const toggleEditingHandler = () => {
        setIsEditing(isEditing => !isEditing);
    };

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={toggleEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancel={toggleEditingHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
