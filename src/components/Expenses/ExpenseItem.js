// useState allows us to define values as state, where changes to these values should reflect in the component function being called again
// which is the key difference to the regular variables.
// And we use it INSIDE OF OUR COMPONENT.
// It shouldn't be called OUTSIDE of the COMPONENT
// It shouldn't be called in any NESTED FUNCTIONS INSIDE OF OUR COMPONENT
// ONE EXCEPTION:TODO

import React, { useState } from 'react';

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

    /////////////////////////////////////////////////////////////////////////
    // STATE
    // IF YOU HAVE DATA, WHICH MIGHT CHANGE, AND WHERE CHANGES TO THAT DATA SHOULD BE REFLECTED ON THE UI THEN YOU NEED STATE
    // BECAUSE REGULAR VARIABLES WILL NOT DO THE TRICK

    // State is actually not React specific concept but it's a key concept in React as well.
    // title which changes when the clickHandler executes is actually data that should result in this component down here being re-evaluated and re-drawn
    // on the screen when it's changes, that title data changes. And by default regular variables are not triggering such a re-evaluation.

    // That code executes, sure, but the overall component function doesn't execute again just because some variable changed. And as a side note,
    // even if it would execute again, of course then titleName, this variable, would all just be recreated and re-initialized to the props value(title)
    // Because as part of this component function we are creating this titleName variable. So even if that would happen we wouldn't reach the desired result
    // but we don't even need to think about that because it is not happening. Currently, this component is not called a second time after the initial
    // rendering, just because a click occurred or because a variable changed, does not trigger this component function to run again.
    // let titleName = title;
    // const clickHandler = e => {
    //   titleName = 'Updated!';
    //   console.log(e.target);
    // };

    // so-called React hook(all these React hooks can be recognized by the fact that they start with the word "use")
    const [titleName, setTitleName] = useState(title);
    const [amountDate, setAmountDate] = useState(amount);

    const clickHandler = e => {
        console.log(e.target);
        // When we call this state updating function, this special variable will not just receive a new value, but the component function in which
        // you called this state updating function, and in which you initialized your state with useState will be executed again.
        // Therefore also evaluate JSX code again. And then it will draw any changes which it's detects compared to the last time it evaluated this
        // onto the screen.
        setTitleName('Updated!');
        setAmountDate(228);
        // state updating function actually doesn't change the value right away, but instead schedules this state update in the very next line thereafter,
        // this new value isn't available yet. That's why we see the old value being logged even though we updated it before logging.
        // console.log(titleName);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{titleName}</h2>
                <div className="expense-item__price">${amountDate}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
