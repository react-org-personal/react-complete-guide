import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filteredChangedHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
    
  );
}

export default Expense;
