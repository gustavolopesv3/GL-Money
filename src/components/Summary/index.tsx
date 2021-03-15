import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$10000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <strong>R$5000,00</strong>
      </div>
      <div className="highligth-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="income" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}