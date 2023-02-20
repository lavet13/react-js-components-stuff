import React from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

// Whenever you combine components, you are using composition.
function Expenses({ items }) {
    return (
        <Card className="expenses">
            {Array.isArray(items) &&
                items.length > 0 &&
                items.map(({ id, title, amount, date }) => (
                    <ExpenseItem
                        key={id}
                        title={title}
                        amount={amount}
                        date={date}
                    />
                ))}
        </Card>
    );
}

export default Expenses;
