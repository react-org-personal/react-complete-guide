import React from "react";

import classes from './NewExpense.module.css'
import NewForm from "./NewForm";

const NewExpense = () =>{
    return (
        <div className={classes.newExpense}>
            <NewForm/>
        </div>
    );
};

export default NewExpense;