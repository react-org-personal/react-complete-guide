import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2021');
  
  const filteredChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangedHandler}/>
      {props.items.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    
  </Card>
  )
}

export default Expense;
