import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

createServer({

  models:{
    transactions:Model,

  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Frela',
          type: 'deposit',
          category: 'Dev',
          amount: 1500,
          createdAt: new Date('2021-02-11 :09:00:15'),
        },
        {
          id: 2,
          title: 'Alguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 700,
          createdAt: new Date('2021-02-15 :09:00:15'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    });
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
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
