import React, { useState, createContext } from 'react';
import HeaderModal from './HeaderModal';

interface ModalContextProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps | undefined> (undefined)

const Header = () => {
  const [ modal, setModal ] = useState(false);



  const headerLayout:string = 'w-full h-[80px] box-border flex flex-row justify-center items-center bg-white fixed z-50';
  const headerStyle:string[] = [headerLayout];
  const headerContainerLayout:string = 'w-full h-full mobile:w-full desktop:w-[1024px] flex flex-row justify-between items-center border-b border-solid px-5';
  const headerContainerStyle:string[] = [headerContainerLayout];
  const headerMenuSetLayout:string = 'flex flex-row justify-between items-center justify-self-end';
  const headerMenuSetStyle:string[] = [headerMenuSetLayout];

  const handleModal = () => {
    setModal(!modal);
  }


  return (
    <div className={headerStyle.join('')}>
      <div className={headerContainerStyle.join('')}>
        <div className='justify-self-start flex desktop:hidden'>뒤로가기</div>
        <div className="flex justify-self-center w-[100px] bg-white"></div>
        <div className={headerMenuSetStyle.join('')}>
          <div className="px-1 cursor-pointer">탐색</div>
          <div className="px-1 cursor-pointer" props={modal} onClick={handleModal}>메뉴</div>
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