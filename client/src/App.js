import React, { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  const [header, setHeader] = useState("expence tracker");

  return (
    <GlobalProvider>
      <Header header="expence tracker" />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
