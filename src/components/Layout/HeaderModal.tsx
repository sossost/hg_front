import React, { useContext, useState } from 'react';
import { ModalContext } from './Header'


const HeaderModal = () => {
  const { modal, setModal } = useContext(ModalContext)!;
  return (
    <div className="inset-0 w-full h-[100vh] fixed flex flex-column justify-center items-center text-base" >
      <div className="bg-white w-[90%] desktop:w-[400px] h-auto z-30 rounded-xl flex flex-col justify-around items-center">
        <div className="w-full h-[80px] flex flex-col justify-center items-center cursor-pointer border-b border-solid px-5">로그인</div>
        <div className="w-full h-[80px] flex flex-col justify-center items-center cursor-pointer">회원가입</div>
      </div>
      <div className="inset-0 bg-black w-full h-[100vh] opacity-50 fixed z-10 " onClick={()=> setModal(!modal)}></div>
      
    </div>
  )
}

export default HeaderModal;