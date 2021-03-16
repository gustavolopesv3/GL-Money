import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Impostos</td>
            <td className="withdraw">R$ 12.0000,00</td>
            <td>Desenvolvimento</td>
            <td>15/03/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento site</td>
            <td className="deposit">R$ 12.0000,00</td>
            <td>Desenvolvimento</td>
            <td>15/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
