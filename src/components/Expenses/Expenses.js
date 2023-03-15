import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import React, { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpense = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let filteredItems = props.items.filter(date => date.date.getFullYear() === Number(filteredYear));


    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeSelect={filterExpense} />
            <ExpensesChart expenses={filteredItems}/>
            <ExpensesList items={filteredItems}></ExpensesList>
        </Card>

    );
};

export default Expenses;