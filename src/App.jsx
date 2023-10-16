import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

import userJson from 'assets/data/user.json';
import statisticsJson from 'assets/data/data.json';
import friendsJson from 'assets/data/friends.json';
import transactionsJson from 'assets/data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userJson.username}
        tag={userJson.tag}
        location={userJson.location}
        avatar={userJson.avatar}
        stats={userJson.stats}
      />
      <Statistics title="Upload stats" stats={statisticsJson} />
      <Statistics stats={statisticsJson} />
      <FriendList friends={friendsJson} />
      <TransactionHistory transactions={transactionsJson} />
    </>
  );
};
