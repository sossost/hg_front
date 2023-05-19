import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from './Header';
// 유저 로그인 테스트용 코드
import { UserLoginContext } from './Layout';
//

const HeaderModal = () => {
  const modalContentsStyle:string = "w-[90%] h-[60px] flex flex-col justify-center items-center cursor-pointer px-5";


  const { modal, setModal } = useContext(ModalContext)!;


  // 유저 로그인 테스트용 코드
  const { userLogin, setUserLogin } = useContext(UserLoginContext)!;
  //

  return (
    <div className="inset-0 w-full h-[100vh] fixed flex flex-column justify-center items-center text-base" >
      {!userLogin ? ( 
      <div className="bg-white w-[90%] desktop:w-[400px] h-auto z-30 rounded-xl flex flex-col justify-around items-center">
        <div className={`${modalContentsStyle} border-b border-solid`} ><Link to="/login" onClick={()=>setModal(false)}>로그인</Link></div>
        <div className={`${modalContentsStyle}`}>회원가입</div>
      </div>
      ):(
      <div className="bg-white w-[90%] desktop:w-[400px] h-auto z-30 rounded-xl flex flex-col justify-around items-center">
        <div className={`${modalContentsStyle} border-b border-solid`}>마이페이지</div>
        <div className={`${modalContentsStyle} border-b border-solid`}>스케치 작성</div>
        <div className={`${modalContentsStyle} border-b border-solid`}>둘러보기</div>
        <div className={`${modalContentsStyle}`} onClick={()=> {setUserLogin(false)}}>로그아웃</div>
      </div>
      )}

      <div className="inset-0 bg-black w-full h-[100vh] opacity-50 fixed z-10 " onClick={()=> setModal(!modal)}></div>
      
    </div>
  )
}

export default HeaderModal;