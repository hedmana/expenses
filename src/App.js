import './App.css';
import Header from './components/Header'
import TotalExpenses from './components/TotalExpenses';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

// Initializing the web app
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <TotalExpenses />
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
