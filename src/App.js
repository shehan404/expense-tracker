import "./App.css";
import "./Variables.css";
import Expenses from "./components/Expences/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 254.43,
    date: new Date(2024, 8, 2),
  },
  {
    id: "e2",
    title: "Water Bill",
    amount: 50.23,
    date: new Date(2024, 1, 3),
  },
  {
    id: "e3",
    title: "Electricity Bill",
    amount: 90.65,
    date: new Date(2024, 1, 5),
  },
  { id: "e4", title: "New TV", amount: 800.59, date: new Date(2024, 1, 10) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // setExpenses([expense,...expenses]);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
