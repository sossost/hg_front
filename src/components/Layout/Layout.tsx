import { ReactNode } from "react";
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
  <>
    <Header/>
    {props.children}
    <Footer/>
  </>
  );
};

export default Layout;
