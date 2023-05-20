import React, { useState, createContext } from 'react';
import { Link } from 'react-router-dom';
import HeaderModal from './HeaderModal';
import BackBtn from '../UI/BackBtn';

interface ModalContextProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps | undefined> (undefined);

const Header = () => {
  const [ modal, setModal ] = useState(false);

  const headerLayout:string = 'inset-0 w-full h-[80px] box-border flex flex-row justify-center items-center bg-white fixed z-50';
  const headerStyle:string[] = [headerLayout];
  const headerContainerLayout:string = 'w-full h-full mobile:w-full desktop:w-[1024px] flex flex-row justify-between items-center border-b border-solid px-5';
  const headerContainerStyle:string[] = [headerContainerLayout];
  const headerMenuSetLayout:string = 'w-[100px] flex flex-row justify-between items-center justify-self-end';
  const headerMenuSetStyle:string[] = [headerMenuSetLayout];

  const handleModal = () => {
    setModal(!modal);
  }

  return (
    <div className={headerStyle.join('')}>
      <div className={headerContainerStyle.join('')}>
        <div className='w-[100px] justify-self-start flex desktop:hidden'></div>
        <div className="flex flex-col justify-center items-center w-[150px] bg-white"><Link to="/"><img src="/logo.png"/></Link></div>
        <div className={headerMenuSetStyle.join('')}>
          <div className="px-1 cursor-pointer"><Link to="/explore"><img className=" hover:bg-slate-200 rounded-xl w-[35px] p-1" src="/icon_globe.svg"/></Link></div>
          <div className="px-1 cursor-pointer" onClick={handleModal}><img className=" hover:bg-slate-200 rounded-xl w-[35px] p-1" src="/icon_menu.svg"/></div>
          {modal === true && (
              <ModalContext.Provider value={{ modal, setModal }}>
                <HeaderModal/>
              </ModalContext.Provider>
            )}
        </div>
      </div>
    </div>
  )
}

export default Header;