import React from 'react';

import './ExpenseFilter.css';

function ExpenseFilter({ onChangeFilter, selected, years }) {
    const dropdownChangeHandler = e => {
        onChangeFilter(e.target.value);
    };

    console.log(selected);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selected} onChange={dropdownChangeHandler}>
                    {[...years]
                        .sort((a, b) => b - a)
                        .map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
