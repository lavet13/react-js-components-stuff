import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses({ items }) {
    const filterChangeHandler = function (selectedYear) {
        setFilteredYear(selectedYear);
    };

    const [filteredYear, setFilteredYear] = useState('2020');

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
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
