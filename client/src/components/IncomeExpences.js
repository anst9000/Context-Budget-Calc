import React, { useContext } from "react";
import { numberWithSpaces } from "../utils/format";

import { GlobalContext } from "../context/GlobalState";

const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const plusAmounts = amounts
    .filter((amount) => {
      return amount > 0;
    })
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const minusAmounts = amounts
    .filter((amount) => {
      return amount < 0;
    })
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div className="">
        <h4>income</h4>
        <p className="money plus">+${numberWithSpaces(plusAmounts)}</p>
      </div>
      <div className="">
        <h4>expense</h4>
        <p className="money minus">
          -${numberWithSpaces(Math.abs(minusAmounts).toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpences;
