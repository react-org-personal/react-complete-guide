import React, {useState} from "react";

import classes from './NewExpense.module.css'
import NewForm from "./NewForm";

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className={classes.newExpense}>
            {!isEditing &&(
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <NewForm 
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={stopEditingHandler}/>
            )}
            
        </div>
    );
};

export default NewExpense;