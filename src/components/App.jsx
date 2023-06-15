import { Statistics } from 'components/statistics/Statistics';
import { Profile } from 'components/profile/Profile';
import { FriendList } from 'components/friendsList/FriendList';
import { TransactionsHistory } from 'components/transactionHistory/TransactionsHistory';

import transactions from 'components/transactionHistory/transactions';
import user from 'components/profile/user';
import data from 'components/statistics/data';
import friends from 'components/friendsList/friends';

export const App = () => {
  return (
    <div
      style={{
        padding: 50,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Profile users={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
