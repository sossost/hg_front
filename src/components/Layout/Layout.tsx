import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return <>
    <Header></Header>
    {props.children}
  </>;
};

export default Layout;
