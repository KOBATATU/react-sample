import { useCallback, useState } from "react";
import React from "react";

type ButtonProps = {
  onClick: () => void;
};

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("DoubleButtonが再描画されました");

  return <button onClick={onClick}>Double</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  console.log("Parentが再描画されました");

  return (
    <div>
      現在のcount: {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <DoubleButton onClick={double} />
    </div>
  );
};

export default Parent;
