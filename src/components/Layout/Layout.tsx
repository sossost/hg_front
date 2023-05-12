import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return <>{props.children}</>;
};

export default Layout;
