import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose:()=> void;
}


export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    return(
        <Modal overlayClassName='react-modal-overlay'
        className='react-modal-content'
          isOpen={isOpen}
          onRequestClose={onRequestClose}
        >
        <button className='react-modal-close'
         type='button'
          onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar modal"/>
        </button>
         <Container>
         <h2>Cadastrar Transação</h2>
         <input type="text" placeholder='Titulo'/>
         <input type="text" placeholder='Valor'/>
         <input type="text" placeholder='Categoria'/>
         <button type="submit"> Cadastrar</button>

         </Container>
         
        </Modal>
    )
    
}