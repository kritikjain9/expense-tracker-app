import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Kritik you are a beast</h2>
      <Expenses items = {expenses}/>
      {/* As int the Expenses.js file, we are accessing the values from 
      this array, then we have to pass it in the props by the same name from
      which we are acessing it (here items).
      
      We could have named ot expenses, but it would have been nasty
      */}
      {/*we can simply use this components as an HTML elements now */}
    </div>
  );
}

export default App;