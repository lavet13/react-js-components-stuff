import React from 'react';

import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

// Conditional Return Statements
// if what your component return changes entirely based on different conditions, you can use this approach.
// It wouldn't have been appropriate in Expenses.js before, because only a part of the JSX snippet, which we returned changed.
// But if your entire JSX content changes, when data is missing, you can always add an if check where you return a different JSX block
// if some condition is met. Now with help of this extra component which uses a different logic for rendering or for returning different JSX code,
// and we now also got a little bit of a leaner Expenses.js file again. One additional tweak, which I want to make which I almost forgot is that
// since I'm using unordered list here now for semantic reasons in the ExpenseItem component, I actually wanna switch away from having a div being
// rendered to a list item instead.
const ExpensesList = ({ items }) => {
    if (items.length === 0)
        return (
            <h2 className="expenses-list__fallback">
                No expenses to be found.
            </h2>
        );

    return (
        <ul className="expenses-list">
            {items.map(({ id, title, amount, date }) => (
                <ExpenseItem
                    key={id}
                    title={title}
                    amount={amount}
                    date={date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
