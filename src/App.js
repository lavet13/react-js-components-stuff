// Indeed JSX stands for JavaScript XML because HTML in the end is XML, you could say.
// JSX code is a syntactic sugar and under the hood it has actually transformed to methods called on this React object, which is why we needed
// to import React in the past.
// Благодаря JSX реакт предоставляет удобный способ создания интерфейса. То есть мы пишем описание разметки, которую хотим увидеть.
// За все остальное отвечает реакт. Но как именно код JSX превращается в DOM. реакт элемент это простой объект с набором свойств, этот объект
// представляет из себя образ ДОМ элемента или как его называют в реакт, ВИРТУАЛЬНЫЙ ДОМ элемент. Реакт создает дерево объектов, который называется
// виртуальный ДОМ, далее этот объект отправляется в метод render, который и генерирует настоящий ДОМ.
// Скорее всего появится пару вопросов, во-первых зачем вообще нужен виртуальный ДОМ и второе почему нельзя напрямую работать с настоящим ДОМ.
// Для того чтобы ответить на эти вопросы рассмотрим классический стиль веб-разработки. Сначала находим элемент, далее мы каким-либо образом заменяем
// или модифицируем объект, такой способ работы с ДОМ имеет несколько проблем. Во-первых очень трудно следить за изменениями, ведь приходится следить
// как за текущим, так и за предыдущим состоянием ДОМ. Во-вторых непосредственная манипуляция ДОМ может быть медленной. Эти проблемы становятся очень
// заметными при переходе с простой манипуляции ДОМ элементов к написанию полноценных веб-приложений. Для решения этих проблем и был придуман виртуальный
// ДОМ, который представляет из себя дерево простых объектов. Работа с простыми объектами гораздо быстрее работы с ДОМ элементами. Благодаря этому
// при обновлении, виртуальный ДОМ можно удалить, и быстро воссоздать заново. Таким образом, вместо того, чтобы следить за изменениями состояния ДОМ
// нам просто нужно показать какое состояние ДОМ мы хотим увидеть. Реакт же отвечает за то, чтобы настоящий ДОМ соотвествовал виртуальному ДОМ. Если бы
// реакт при каждом изменении данных воссоздавал настоящий ДОМ, то приложение бы работало очень медленно. При работе с виртуальным ДОМ, реакт в ряду
// с другими оптимизациями использует спец. алгоритм сравнения отличий, который позволяет максимально быстро сравнить версии виртуального ДОМ до и после
// изменений. Таким образом, реакт находит оптимальный кол-во изменений, который необходимо применить к настоящему ДОМ. В результате мы получаем понятный
// оптимизированный способ создания веб-приложений.

import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
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
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const [counter, setCounter] = useState(expenses.length);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
        setCounter(counter => counter + 1);
        console.log(counter);
        console.log(expenses);
    };

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
};

export default App;
