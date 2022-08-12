import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "gray" }}>
      <label htmlFor="name">name</label>
      <input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  );
};

export default Name;
