// Indeed JSX stands for JavaScript XML because HTML in the end is XML, you could say.
// JSX code is a syntactic sugar and under the hood it has actually transformed to methods called on this React object, which is why we needed
// to import React in the past
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const addExpenseHandler = expense => {
        setExpenses(prevState => [...prevState, expense]);
        console.log(expenses);
    };

    const [expenses, setExpenses] = useState([
        {
            id: Math.random().toString(),
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: Math.random().toString(),
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: Math.random().toString(),
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: Math.random().toString(),
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, `Let's get started!`),
    //     React.createElement(Expenses, { items: expenses })
    // );

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
