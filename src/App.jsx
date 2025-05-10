import React from 'react';
import './App.css'
import Profile from "./components/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <div>
        <h1 style={{ textAlign: "center" }}>İşlem Geçmişi</h1>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
