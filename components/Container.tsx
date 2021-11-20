import { FunctionComponent, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
