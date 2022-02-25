import React from "react";

import classes from './NewExpense.module.css'
import NewForm from "./NewForm";

const NewExpense = (props) =>{
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className={classes.newExpense}>
            <NewForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;