import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { InOutBalance } from './components/InOutBalance';
import { Transactions } from './components/Transactions';
import { AddTrxModal } from './components/AddTrxModal';
import { GlobalProvider } from './context/GlobalDataState';

function App() {
  /**
   * TODO: 
   * - Title header [done]
   * - Current balance [done]
   * - list of expenses (incoming and outgoing expenses) [done]
   * - popup to add to list of expenses [done]
   * - make an API call, try some restful APIs, axios is optional (nodejs has a mock_server i think ?)
   * - a pie chart would be more aesthetic no?
   * - change planned libs to use to make the add trx modal
   */
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
