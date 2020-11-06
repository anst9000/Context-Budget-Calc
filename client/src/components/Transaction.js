import React, { useContext } from "react";
import { numberWithSpaces } from "../utils/format";

import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const { text, amount } = transaction;
  const sign = amount > 0 ? "+" : "-";

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}{" "}
      <span>
        {sign}${numberWithSpaces(Math.abs(amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
