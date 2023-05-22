import { ReactNode, createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mui/material";

// 유저 로그인 테스트용 컨텍스트
interface UserLoginContextProps {
  userLogin: boolean;
  setUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserLoginContext = createContext<
  UserLoginContextProps | undefined
>(undefined);

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  //유저 로그인 테스트용 스테이트
  const [userLogin, setUserLogin] = useState(false);

  return (
    <>
      <UserLoginContext.Provider value={{ userLogin, setUserLogin }}>
        <Header />
        <div className=" w-full min-h-[70vh] mt-[80px] flex flex-col items-center">
          {props.children}
        </div>
        <Footer />
      </UserLoginContext.Provider>
    </>
  );
};

export default Layout;
