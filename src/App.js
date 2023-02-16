// JSX is basically HTML code inside of JavaScript. Indeed JSX stands for JavaScript XML because HTML in the end is XML, you could say.
import ExpenseItem from './components/ExpenseItem';

function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem />
        </div>
    );
}

export default App;
