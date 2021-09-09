import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addExpenseHandler = (expense) => {
    props.onAddExpense({ ...expense, id: Math.random().toString() });
  };

  const addNewExpenseClickHandler = () => {
    setIsFormOpen(true);
  };

  const cancelHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!isFormOpen && (
        <button onClick={addNewExpenseClickHandler}> Add New Expense</button>
      )}
      {isFormOpen && (
        <ExpenseForm
          onCancel={cancelHandler}
          onAddExpense={addExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
