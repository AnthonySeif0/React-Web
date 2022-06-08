import "./ExpenseForm.css";
import "./NewExpense.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="text" min="0.01" step="0.01" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2024-12-31" />
        </div>
        <div className="new-expense_action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;

// 4:20