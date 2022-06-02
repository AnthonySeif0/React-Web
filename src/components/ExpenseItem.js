import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  console.log(props)
  const {title, date, amount} = props;
  return (
    <div className="expense-item">
      <ExpenseDate 
      date={date}
      />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
