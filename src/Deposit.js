import { useContext } from "react";
import userContext from "./context";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import React from "react";
import "./Allpages.css"

export default function Deposit() {
  let user = useContext(userContext);
  let len = user.users.length;
  let [currbalance, setCurrbalance] = useState(user.users[len - 1].balance);
  let [deposit, setDeposit] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setCurrbalance(Number(currbalance) + Number(deposit));
    setDeposit(0); // Reset deposit amount after submitting
    setIsButtonDisabled(true);
    // Show alert message after deposit
    alert('Your amount has been deposited!');
  }

  function handleDepositChange(e) {
    setDeposit(e.target.value);
    setIsButtonDisabled(e.target.value === '' || e.target.value <= 0);
  }

  user.users[len - 1].balance = currbalance;

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <center>
            <form onSubmit={handleSubmit}>
              <h3>DEPOSIT</h3>
              <hr />
              <h5>Balance: {currbalance}</h5>
              <hr />
              <input type="number" placeholder='Enter the Amount' value={deposit} onChange={handleDepositChange} />
              <input type="submit" disabled={isButtonDisabled} value="Deposit" />
            </form>
          </center>
        </Card>
      </div>
    </div>
  );
}
