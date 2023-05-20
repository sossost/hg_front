import { Link } from "react-router-dom";
import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

// 유저 로그인 테스트용 코드
import { UserLoginContext } from '../../components/Layout/Layout';
//

const ExplorePage = () => {
  //탐색페이지 스타일링
  const exploreSearchSectionStyle:string = " top-[100px] border border-solid w-[80%] desktop:w-[50%] h-[60px] bg-white margin-box m-5 p-1 rounded-3xl shadow-md flex flex-row text-lg sticky ";


  // 유저 로그인 테스트용 코드
  const { userLogin, setUserLogin } = useContext(UserLoginContext)!;
  //


  return (
    <div className="w-full desktop:w-[1024px] h-[2000px] flex flex-col items-center ">
      <div className=" text-[#73BBFB] w-full h-[50px] mt-5 flex flex-col justify-center items-center text-xl">
        가보고 싶은 여행지나 찾고 싶은 사람이 있으신가요? 트립스케치와 함께 찾아보세요.
      </div>
      <div className={`${exploreSearchSectionStyle}`}>
        <input className=" border-none w-[88%] h-[100%] rounded-3xl px-3 outline-none"/>
        <img className=" hover:bg-slate-200 rounded-xl w-[35px] h-[35px] p-1 m-2 cursor-pointer" src="/icon_search.svg"/>
      </div>

      {!userLogin ? (
        <div></div>


      ) : (
        <div></div>

      )}

    </div>
  )
 
};

export default ExplorePage;
