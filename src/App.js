import React from 'react';
import './App.css';
import users from './db/users.json';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';
import FriendsList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from './db/transactions.json';
import friends from './db/friends.json';

function App() {
  return (
    <>
      <Profile users={users} /> <Main />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
