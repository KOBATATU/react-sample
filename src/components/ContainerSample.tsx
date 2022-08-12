import React from "react";
type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { title, children } = props;
  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div> {children}</div>
    </div>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Container title="title">
      <p>ここの部分が子要素である</p>
    </Container>
  );
};

export default Parent;
