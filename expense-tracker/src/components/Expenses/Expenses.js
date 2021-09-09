import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from  "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  // const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const filterHandler = (selectedYear) => {
    console.log("Expenses: ", selectedYear);
    setFilteredYear(selectedYear);
  };

  // .filter() returns new array
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterSeleted={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
