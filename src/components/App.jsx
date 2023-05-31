import { Statistics } from 'components/statistics/Statistics';
import { Profile } from 'components/profile/Profile';
import user from 'components/profile/user';
import data from 'components/statistics/data';

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
      <Statistics stats={data} />
    </div>
  );
};
