import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";
const ExpenseForm = () => {

  //the logic is correct but here each data is independent from the other 
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // diffrent way but grouped together under one useState
  // here the user should enter all 3 data together
  const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  });

  // not needed
  // document.getElementById("").addEventListener("click", (event) => {});

  const titleChangeHandler = (event) => {
    // used with first way
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle:event.target.value,
    })

  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount:event.target.value,
    })
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate:event.target.value,
    })
  };
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
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
