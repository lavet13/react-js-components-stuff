import React from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// Component is just a function
// We can pass data to the custom component by adding an attribute and inside of that component, we can then get access to all these attributes
// which might have been set on our custom component. And just as HTML elements can have attributes, it turns out that with React, our own custom
// components can also have attributes. There, this concept is just called props(properties). We can set properties of our own custom components;

// Special thing that function do is that it returns JSX. Now, since it's a function, someone has to call it and you might notice that we never called
// our component functions. Instead we just used these functions like HTML elements in this JSX code. Well, the thing is, under the hood this is almost
// like a function call. By using our components in JSX code, we make React aware of our component functions. For example, we make React aware of the
// ExpenseItem function. And whenever React evaluates JSX code, it will call these component functions. And these component functions stand to return
// JSX code, which is also evaluated, up until there's no more JSX code to be evaluated. So React keeps on calling any component functions, it encounters
// in JSX, then calls any functions that those functions might have returned so any elements those components might have used in their JSX code until
// there are no more functions left. And then it re-evaluates the overall result and translates that into DOM instructions which renders something
// on the screen.
function ExpenseItem({ title, amount, date }) {
    // React expects some JSX, false, null, undefined, true
    // to render in the UI and NOT some JavaScript object

    // in React, we add an event listener by going to the JSX element, e.g. button, and there we add a special prop.
    // But now it's not a prop which sets some value, but instead it's a prop which starts with on, because React exposes all these default events
    // as props which start with on. All these event handlers props, want a function as a value, a function passed as a value for onClick
    // and all these other on props which then is executed when that event occurs.

    // So we need a way of telling React that something changed and that a certain component should be re-evaluated and that's where React introduces
    // a special concept called state;
    // let titleName = title;

    const clickHandler = e => {
        // titleName = 'Updated!';
        // console.log(titleName);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
