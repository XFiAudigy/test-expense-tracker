import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { InOutBalance } from './components/InOutBalance';
import { Transactions } from './components/Transactions';
import { AddTrxModal } from './components/AddTrxModal';
import { GlobalProvider } from './context/GlobalDataState';

function App() {
  return (
    <GlobalProvider> 
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <InOutBalance />
        <Transactions />
        <AddTrxModal />
      </div>
    </GlobalProvider>
  );
}

export default App;
