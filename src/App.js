import "./App.css";
import "./Variables.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 254.43, date: new Date(2024, 1, 2) },
    { title: "Water Bill", amount: 50.23, date: new Date(2024, 1, 3) },
    { title: "Electricity Bill", amount: 90.65, date: new Date(2024, 1, 5) },
    { title: "New TV", amount: 800.59, date: new Date(2024, 1, 10) },
  ];
  return (
    <div className="App">
      <header className="App-header">Learn React</header>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
