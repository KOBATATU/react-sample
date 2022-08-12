import React, { useContext } from "react";
type User = {
  id: number;
  name: string;
};

const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  //親コンポーネントにproviderがある場合、useContextを利用することで値を取得することができる。hookを使わない場合はタグでconsumerを使って囲む必要がある。
  const user = useContext(UserContext);
  return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = () => {
  const now = new Date();

  return (
    <div>
      <p>Current: {now.toLocaleDateString()}</p>
      <GrandChild />
    </div>
  );
};

const Parent = () => {
  const user: User = {
    id: 1,
    name: "HogeUser",
  };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};
