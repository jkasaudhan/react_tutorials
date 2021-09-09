import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expensesContent = <div className="expenses-list__fallback">No record found!!</div>;
  if (props.expenses.length > 0) {
    expensesContent = props.expenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      );
    });
  }
  return expensesContent;
};

export default ExpenseList;
