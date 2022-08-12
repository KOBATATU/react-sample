const Hello = () => {
  const onClick = () => {
    alert("Hello");
  };
  const text = "Heelo, React";

  return <div onClick={onClick}>{text}</div>;
};

export default Hello;
