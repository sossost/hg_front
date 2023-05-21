import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Post from '../../components/UI/Post';

// 유저 로그인 테스트용 코드
import { UserLoginContext } from '../../components/Layout/Layout';
//

const ExplorePage = () => {
  const [ searchInput, setSearchInput ] = useState('');
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  //탐색페이지 스타일링
  const exploreSearchSectionStyle:string = " bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg top-[100px] border border-solid w-[90%] desktop:w-[50%] h-[60px] bg-white margin-box m-5 p-1 rounded-3xl shadow-md flex flex-row text-lg sticky ";


  // 유저 로그인 테스트용 코드
  const { userLogin, setUserLogin } = useContext(UserLoginContext)!;
  //


  return (
    <div className="w-full desktop:w-[1024px] h-[2000px] flex flex-col items-center ">
      <div className=" text-[#73BBFB] w-full h-[120px] mt-5 flex flex-col justify-center items-center text-xl">
        가보고 싶은 여행지가 있으신가요? <br/>트립스케치와 함께 찾아보세요.
      </div>
      <div className={`${exploreSearchSectionStyle}`}>
        <input className=" border-none bg-transparent w-[88%] h-[100%] rounded-3xl px-3 outline-none" onChange={handleChange}/>
        <img className=" hover:bg-slate-200 rounded-xl w-[35px] h-[35px] p-1 m-2 cursor-pointer" src="/icon_search.svg"/>
      </div>
      <div className="w-full h-[60px] border-b border-solid mb-[50px] flex flex-col justify-center items-center">
        { searchInput.length >= 1 ? (
          <span className=" w-full flex flex-row justify-center"><p>'{searchInput}'</p> <p>으로 검색한 결과</p></span>
        )
        : (<div></div>)} 
        
      </div>

      {!userLogin ? (
        <div className="w-full flex flex-row flex-wrap justify-center desktop:justify-start items-start">
          <Post/>
          <Post/>
          <Post/>
        </div>


      ) : (
        <div>
          <Post/>
          <Post/>
          <Post/>
        </div>

      )}

    </div>
  )
 
};

export default ExplorePage;
