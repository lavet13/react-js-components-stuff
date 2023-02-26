import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);
        console.log(enteredTitle);

        // setUserInput({ ...userInput, enteredTitle: e.target.value });
        // Now whenever, and that's another key rule, which you should memorize, whenever you update state and you depend on the previous state,
        // so for example, as we do here in this object, but also if you would be managing a counter which you increment by one, for example.
        // You should not do it like this, but you should use an alternative form of this state updating function. Instead of calling it like this,
        // you should call setUserInput and pass in a function.
        // In many cases, both will work fine, but keep in mind that I mentioned that React schedules state updates, it doesn't perform them instantly.
        // And therefore, theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state
        // snapshot if we use approach above. If we use approach beneath, React will guarantee that the state snapshot it gives you here in this inner
        // function, will always be the latest state snapshot, keeping all scheduled state updates in mind(safer way to ensure that you always operate
        // on the latest state snapshot). USE WHEN YOUR STATE UPDATE DEPENDS ON THE PREVIOUS STATE, USE THIS FUNCTION FORM(prevState => ({})).
        // setUserInput(prevState => ({
        //     ...prevState,
        //     enteredTitle: e.target.value,
        // }));
    };

    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value);
        console.log(enteredAmount);

        // setUserInput({ ...userInput, enteredAmount: e.target.value });
        // setUserInput(prevState => ({
        //     ...prevState,
        //     enteredAmount: e.target.value,
        // }));
    };

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value);
        console.log(enteredDate);

        // setUserInput({ ...userInput, enteredDate: e.target.value });
        // setUserInput(prevState => ({
        //     ...prevState,
        //     enteredDate: e.target.value,
        // }));
    };

    // const formSubmitHandler = e => {
    //     e.preventDefault();
    //     console.log(e.target);
    //     console.log(userInput);
    // };

    // console.log(userInput);

    const formSubmitHandler = function (e) {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: Number.parseFloat(enteredAmount),
            date: new Date(enteredDate),
        };

        // Two-way binding simply means that for inputs we don't just listen to changes, but we can also pass a new value back into the input.
        // So that we can reset or change the input programatically. This is another key concept in React.
        // Two-way binding is very useful when you're working with forms, because it allows you to gather user input, but then also change it.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // Having this data is nice but we technically don't need it in the expense form component, do we?
        // Instead we needed in the new expense or to be precise in the App.js component even, because there we have our
        // expenses array and ultimately our goal will be to add this new expense which the user entered to this list of existing expenses(in the App.js)
        // and we probably also wanna reach it by adding an id. So we need to pass the data which we're collecting and generating in expense form to the
        // App component. Now, up to this point, we only learned how we can pass data down.
        // We can think of input as a component as well. It's not one of our components, but it's simply a pre-built component, we could say, provided to
        // us by React and of course translate it to the input DOM element, but it has this component character in the end and we do also set some
        // props on that component including this special onChange prop. Now, actually this onChange prop isn't that special, it's just a prop named onChange
        // which wants a function as a value and then internally the input element adds this event listener. So React basically sees that we set a value
        // on this onChange prop and adds that listener on the rendered input element. But that is a pattern we can replicate for our own components as well.
        // We can create our own event props and that can expect functions as values and that would allow us to pass a function from a parent component
        // to a child component and then call that function inside of the child component. And when we then call a function, we can of course pass data
        // to that function as a parameter and that's how we can communicate up from child to parent.
        onSaveExpenseData(expenseData);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                        type="text"
                        placeholder="Title"
                        required
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="Amount"
                        required
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        onChange={dateChangeHandler}
                        value={enteredDate}
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
