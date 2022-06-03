import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, date, amount } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
