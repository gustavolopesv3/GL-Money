import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root');








export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModel() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModel() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModel} />
      <Dashboard />
       <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModel}/>
      <GlobalStyle />
    </TransactionsProvider>
     
  );
}
