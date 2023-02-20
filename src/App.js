// Indeed JSX stands for JavaScript XML because HTML in the end is XML, you could say.
// JSX code is a syntactic sugar and under the hood it has actually transformed to methods called on this React object, which is why we needed
// to import React in the past
import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, `Let's get started!`),
    //     React.createElement(Expenses, { items: expenses })
    // );

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
