import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";
const ExpenseForm = (props) => {
  //the logic is correct but here each data is independent from the other
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // diffrent way but grouped together under one useState
  // here the user should enter all 3 data together
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // the single useState is much better to use

  // not needed
  // document.getElementById("").addEventListener("click", (event) => {});

  const titleChangeHandler = (event) => {
    // used with first way
    setEnteredTitle(event.target.value);

    // used for second way

    // this way might not give the correct data
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // if you depend on previous state
    // this way garantees that react gives you the latest data recorded
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="text"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <button className="new-expense_action" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;

// 4:20
