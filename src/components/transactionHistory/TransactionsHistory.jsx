import { StyledTableRow } from 'components/transactionHistory/TransitionHistory.styled';

export const TransactionsHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <StyledTableRow key={id} even={index % 2 === 0 ? 'true' : 'false'}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </StyledTableRow>
          );
        })}
      </tbody>
    </table>
  );
};
