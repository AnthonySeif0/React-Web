import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, date, amount } = props;
  const clickHandler = () => {
    console.log("Clicked!");
  };

  // Imperative Way to add listener
  // document.getElementById('root').addEventListener()

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>

      {/* Works but Not too good  */}
      {/* <button
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        Change Title
      </button> */}
    </Card>
  );
};

export default ExpenseItem;
