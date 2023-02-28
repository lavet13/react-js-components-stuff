import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

function Expenses({ items }) {
    const filterChangeHandler = function (selectedYear) {
        setFilteredYear(selectedYear);
    };

    const [years, setYears] = useState([2024, 2022, 2021, 2023, 2020]);

    const [filteredYear, setFilteredYear] = useState('2020');

    // if you output an array of JSX elements, then React is capable of simply rendering these elements.

    // Understanding Keys
    // We suppose that we haven't the key prop yet. And when we would add a new item then React renders this new item
    // as the last item in this list of div's and updates all items and replace their content such that it again matches
    // the order of the items in my array. And this is not great. This is happening because to React all these items look similar
    // and it only sees that my array changed that it's now longer than before. And hence it simply renders an additional div
    // and it adds that at the end. And then it simply walks through all the items and updates the content inside of every item
    // to match the array content again. The final result, therefore is correct, but from a performance perspective this is not great
    // because all items are visited and updated and it can even lead to bugs. If the ExpenseItem would be stateful component and we would
    // have some state managed inside of that, then if, for example, our first item, if it has a certain state if we add a new item the old
    // first item would be overwritten with the new first item. Hence any state changes we might have had in there would be lost.
    // So besides potential performance issues we could also run into bugs. So that is a problem.
    // Why React is behave like this? The answer is because it has no other way. It currently simply checks the length of the array and
    // then has a look at the number of items that were already rendered. The individual items all look similar to React though so it can't
    // know where a new item should be added or anything like that. That's why we get this warning because we have a way of telling React
    // where a new item it should be added. And we do that by going to the place where we output our list of items. So does map method.
    // And we then add a special prop to this item called key. That's a prop which you can add to any component no matter if it's a custom component
    // by you or if it's a built-in HTML element, you can always add this. And if you do add it, if you add the key to your component or HTML element,
    // then you can help React identify the individual items. For that you need to set a unique value per list item and that, for example, in this case
    // here would be the expense ID. Because in our expenses array, every item has a unique ID. And if you wonder what you do, if you have no unique ID
    // then you could use the second argument which you get here for the function you pass to map which is an automatically managed index though it's
    // discouraged to use that since with that you can still run into bugs because the index for a given item is always the same and not directly attached
    // to the content of the item. For the ID that's different, every item with a certain content has a clear unique ID. And in reality, it turns out that
    // in most scenarios you do have some unique ID because typically you are rendering some data which comes from a database or anything like that.
    // And there you work with unique IDs anyways. So finding some unique identifier is no problem and you can use any primitive value as a unique identifier
    // any number or string that can be unique identifiers.

    // After adding a key prop
    // Now, React is able to uniquely identify all these items and it's therefore aware, not just how long the array is but also aware which items should be
    // placed. And it's able to update this list in a more efficient way. So long story short, YOU SHOULD ALWAYS ADD SUCH A KEY WHEN MAPPING
    // OUT LISTS OF ITEMS.

    // Outputting Conditional Content
    // We can actually select values where we have no data. And we might wanna show an appropriate message in such cases, and that leads us to the second
    // part of this module, conditional content, which is also important. Conditional content is about rendering different output under different
    // conditions. So i'm not talking about lists, but about rendering either A or B or C, whatever you need. And that's something I wanna do here,
    // in Expenses.js, we render our list of expense items, but if our filtered expenses, array turns out to be empty, we render nothing.
    // Now we might wanna instead render a message telling the user that we have no items for the chosen filter. And for that, we wanna render content
    // conditionally. We can again add a dynamic expression.

    const filteredExpenses = items.filter(
        ({ date }) => date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpenseFilter
                years={years}
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
