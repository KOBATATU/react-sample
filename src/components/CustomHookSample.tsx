import React, { useState, useCallback, useDebugValue } from "react";

const useInput = (defaultText: string = "") => {
  const [state, setState] = useState(defaultText);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  useDebugValue(`Input: ${state}`);
  return [state, onChange] as const;
};

const Input = () => {
  const [text, onChangeText] = useInput();
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
    </div>
  );
};
