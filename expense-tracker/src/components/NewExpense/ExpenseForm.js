import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });
  const titleHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };
    props.onAddExpense(expense);
    console.log(expense);
    // clear form
    setFormData(() => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandler} value={formData.title} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateHandler}
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={formData.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
