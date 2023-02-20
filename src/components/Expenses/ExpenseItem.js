import React from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// Component is just a function
// We can pass data to the custom component by adding an attribute and inside of that component, we can then get access to all these attributes
// which might have been set on our custom component. And just as HTML elements can have attributes, it turns out that with React, our own custom
// components can also have attributes. There, this concept is just called props(properties). We can set properties of our own custom components;
function ExpenseItem({ title, amount, date }) {
    // React expects some JSX, false, null, undefined, true
    // to render in the UI and NOT some JavaScript object

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
