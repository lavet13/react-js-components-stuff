import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
    const month = Intl.DateTimeFormat('en-US', {
        month: 'long',
    }).format(date);

    const year = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
    }).format(date);

    const day = Intl.DateTimeFormat('en-US', {
        day: '2-digit',
    }).format(date);

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
};

export default ExpenseDate;
