import "./App.css";
import "./Variables.css";
import Expenses from "./components/Expences/Expenses";

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

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
