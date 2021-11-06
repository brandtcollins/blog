import { FunctionComponent, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className="mx-4">{children}</div>;
};

export default Container;
