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
  { id: "e5", title: "Groceries", amount: 150.75, date: new Date(2024, 0, 15) },
  {
    id: "e6",
    title: "Internet Bill",
    amount: 70.3,
    date: new Date(2023, 2, 20),
  },
  { id: "e7", title: "Gasoline", amount: 45.6, date: new Date(2022, 3, 25) },
  {
    id: "e8",
    title: "Mobile Phone Bill",
    amount: 80.0,
    date: new Date(2022, 5, 1),
  },
  { id: "e9", title: "Dinner Out", amount: 75.4, date: new Date(2023, 6, 6) },
  { id: "e10", title: "Books", amount: 30.25, date: new Date(2023, 7, 10) },
  {
    id: "e11",
    title: "Movie Tickets",
    amount: 20.0,
    date: new Date(2021, 8, 15),
  },
  { id: "e12", title: "Clothing", amount: 100.5, date: new Date(2021, 9, 20) },
  {
    id: "e13",
    title: "Health Insurance",
    amount: 180.8,
    date: new Date(2023, 10, 25),
  },
  {
    id: "e14",
    title: "Home Repairs",
    amount: 300.0,
    date: new Date(2022, 11, 30),
  },
  {
    id: "e15",
    title: "Gym Membership",
    amount: 50.0,
    date: new Date(2021, 0, 2),
  },
  {
    id: "e16",
    title: "Music Streaming",
    amount: 9.99,
    date: new Date(2021, 1, 5),
  },
  {
    id: "e17",
    title: "Car Maintenance",
    amount: 120.0,
    date: new Date(2023, 2, 10),
  },
  { id: "e18", title: "Gifts", amount: 50.0, date: new Date(2023, 3, 15) },
  { id: "e19", title: "Vacation", amount: 1000.0, date: new Date(2022, 4, 20) },
  { id: "e20", title: "Haircut", amount: 25.0, date: new Date(2022, 5, 25) },
  {
    id: "e21",
    title: "Medical Expenses",
    amount: 200.0,
    date: new Date(2024, 6, 30),
  },
  {
    id: "e22",
    title: "Home Insurance",
    amount: 150.0,
    date: new Date(2023, 7, 5),
  },
  {
    id: "e23",
    title: "School Supplies",
    amount: 80.0,
    date: new Date(2022, 8, 10),
  },
  {
    id: "e24",
    title: "Concert Tickets",
    amount: 70.0,
    date: new Date(2022, 9, 15),
  },
  {
    id: "e25",
    title: "Restaurant",
    amount: 40.0,
    date: new Date(2023, 10, 20),
  },
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
