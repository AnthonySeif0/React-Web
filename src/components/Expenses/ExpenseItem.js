// import React, { useState } from "react";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title] = useState(props.title);

  // used for const props
  // const { title, date, amount } = props;

  // used if title is not being called in a const
  // let title = props.title;

  // const clickHandler = () => {
  //   setTitle('Updated!')
  //   console.log(title);
  // };

  // Imperative Way to add listener
  // document.getElementById('root').addEventListener()

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}

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
