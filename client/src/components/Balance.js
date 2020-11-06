import React, { useContext, Fragment } from "react";
import { numberWithSpaces } from "../utils/format";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total > 0 ? "+" : "-";

  return (
    <Fragment>
      <h4>your balance</h4>
      <h1>
        {sign}${numberWithSpaces(Math.abs(total))}
      </h1>
    </Fragment>
  );
};

export default Balance;
