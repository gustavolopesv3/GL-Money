import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 1',
          amount: 400,
          type: 'deposit',
          category: 'Algo',
          createAt: new Date(),
        },
      ];
    });
  },
});

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModel} />
      <Dashboard />
       <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModel}/>
      <GlobalStyle />
    </>
  );
}
