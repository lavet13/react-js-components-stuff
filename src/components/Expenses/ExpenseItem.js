// useState allows us to define values as state, where changes to these values should reflect in the component function being called again
// which is the key difference to the regular variables.
// And we use it INSIDE OF OUR COMPONENT.
// It shouldn't be called OUTSIDE of the COMPONENT
// It shouldn't be called in any NESTED FUNCTIONS INSIDE OF OUR COMPONENT

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

    /*
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

    // useState is so-called React hook(all these React hooks can be recognized by the fact that they start with the word "use")
    // useState registers some state, so some value as a state for the component in which it is being called and to be more precise,
    // it registers it for a specific component instance. For example, every ExpenseItem receives it's own separate state which is detached(отделен)
    // from the other states. We have one ExpenseItem definition but then this function is basically called four times
    // (depends on how many objects stored in an array). And every time it's called, a new separate state is created. Of course in the same way but
    // managed independently by React. So if change the title in the first ExpenseItem, the other ones are not affected because they have their own state.
    // It's on a per component instance basis. So we have separate states, even if we create a component more than once.
    // Now, in addition, whenever state changes, it's only this component function and only that specific instance where this component is being used
    // where React will re-evaluate it. Why am I using const here, when we do eventually assign a new value? Well, keep in mind that we're not assigning
    // a value with the equal sign. That would indeed fail, but that is not how we assign a new value, when we update a state. Instead we call this
    // state updating function and the concrete value is simply managed somewhere else by React. By calling useState we tell React that it should manage
    // some value for us. We never see that variable itself. So therefore, we just call a state updating function and we never assign a new value
    // to titleName with the equal operator. And therefore, using a const is absolutely fine. How do we get the latest titleName value then though?
    // The component function is re-executed when the state is updated. So if we called setTitleName and we assign a new title, that leads
    // to this component being called again and therefore, this new title, this updated title is fetched from React, which manages the state for us.
    // Basically we go to React and say, "Hey, please, give me that latest titleName state which I told you to manage for me." And React provides us this
    // latest state in given array which useState always returns. We always get a brand new snapshot of that state when this component function re-executes.
    // Now you might be wondering if that doesn't mean that we always overwrite any state changes with props.title. And here the special thing is that React
    // keeps track of when we call useState in a given component instance for the first time. And when we call it for the first time ever, it'll take that
    // argument as an initial value. But if a component is then re-executed because of such a state change, for example. React will not reinitialize state.
    // Instead, it will detect that this state had been initialized in the past, and it will just grab the latest state which is based on some state update,
    // for example, and gives us that state instead. So this initial value is really only considered when this component function is being executed for the
    // first time, for a given component instance.

    ///////////////////////////////////////////////////////////////////////
    // Lifting State Up
    // Previously, we learned about a very important concept of moving data from a child to a parent component by utilizing props to receive a function from
    // the parent component which we call in the child component. And this is closely related to another key concept which we also already used without 
    // even knowing. And that's a concept called Lifting State Up. Consider this basic Component Tree which is roughly what we have in this demo application
    // where we have an app component which in turn renders Expenses and NewExpense component. Now, in this case, the NewExpense component is a component
    // which generates some data, some state. In our example application, we are fetching some user input here. Now it is quite common that you do generate
    // or fetch data in a component but that you might not need that data in that component. Instead, we need it in another component, 
    // in the Expenses component. That's where this generated data is needed in the end, slightly transformed, packed into an object but it is the data
    // we fetch in NewExpense. So naturally we would like to hand that data over but that doesn't work like this because we have no direct connection
    // between two sibling components. Instead, we can only communicate from parent to child and from child to parent. That's why in such cases like we 
    // have, we utilize the closest component, the closest parent component which has direct or indirect access to both involved components. In this case,
    // the App component. The app component in our application has access to both the NewExpense and the Expenses component because it renders both components
    // in it's returned JSX code. That's why we wanna utilize that. Because we can now store our state in that closest involved component. So in that
    // parent component which has access to both involved components by "lifting our state up". So by passing our generated state data from the NewExpense
    // to the App component. And that's what we're already doing. We're doing this by utilizing props, by calling the function we receive on the 
    // onAddExpense prop. That alone is not lifting the state up. That's just calling a function we receive through props. But then we do something important.
    // We actually do pass data to that function which we call. By doing that we are lifting that data, that state up. We're not keeping it in the NewExpense
    // component. We're not keeping expense data there. Instead, we are lifting it up to the App component. 
    // We are lifting the state up. We are passing data up to some parent component, because we either need that data directly in the app component
    // or as it's the case in our demo application. And as it is quite common, because we then wanna pass that data down to another component via props.
    // Lifting the state up is about moving data from a child component to some parent component to either use it there or to then pass it down to some
    // other child component. The App component which is the first component in line. It's not always that root app component to which you wanna lift your
    // state up. Instead, the goal is to lift it up just as high as necessary in your Component Tree until you have a component which has both access to
    // the components that generate data as well as the components that needs data, that might be the app component, but that could also be another component.

    const [titleName, setTitleName] = useState(title);
    const [amountDate, setAmountDate] = useState(amount);

    const clickHandler = e => {
        console.log(e.target);
        // TODO I should memorize that better
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
    */

    // return (
    //     <Card className="expense-item">
    //         <ExpenseDate date={date} />
    //         <div className="expense-item__description">
    //             <h2>{titleName}</h2>
    //             <div className="expense-item__price">${amountDate}</div>
    //         </div>
    //         <button onClick={clickHandler}>Change Title</button>
    //     </Card>
    // );

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
