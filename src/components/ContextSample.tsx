import React from "react";

//providerしたい子コンポーネントを定義
const TitleContext = React.createContext("");

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = "React";
  return (
    //宣言した以下の配下でtitleを利用できるようになる。
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
