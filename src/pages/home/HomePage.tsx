import { Link } from "react-router-dom";
import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

// 유저 로그인 테스트용 코드
import { UserLoginContext } from '../../components/Layout/Layout';
//

// 애니메이션 키프레임
const moveSlowlyLeft = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translate(-500%, -300%)
  }
`
const moveSlowlyLeftforCloud2 = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translateX(100%)
  }
`
const moveSlowlyRightforCloud3 = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translateX(100%)
  }
`
const moveSlowlyLeftforCloud4 = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translateX(-100%)
  }
`
const moveSlowlyRight = keyframes`
  0% {
    transform: translateX(0)
    opacity: 1;
  }
  100%{
    transform: translateX(-100%)
    opacity: 0.3;
  }
`
const moveSlowlyRightforPerson = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translateX(20%)
  }
`
const planeTrail = keyframes`
  0% {
    transform: scale(1,1) translateX(0)
  }
  100%{
    transform: scale(5,1) translate(-30%, -120%)
  }
`

// 애니메이션 및 스타일 적용
const BgSky =styled.div`
  height: 500px;
  background-image: url('/home/bg_sky.PNG');
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: blue;
`
const BgCloud1 =styled.div`
  top: 30%;
  left:-20%;
  width: 2000px;
  height: 500px;
  background-image: url('/home/bg_cloud1.PNG');
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  animation: ${moveSlowlyRight} 300s infinite linear;
`
const BgCloud2 =styled.div`
  width: 1500px;
  height: 500px;
  background-image: url('/home/bg_cloud2.PNG');
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  animation: ${moveSlowlyLeftforCloud2} 250s infinite linear;
`
const BgCloud3 =styled.div`
  top: 10%;
  width: 2000px;
  height: 500px;
  background-image: url('/home/bg_cloud3.PNG');
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  animation: ${moveSlowlyRightforCloud3} 300s infinite linear;
`
const BgCloud4 =styled.div`
  top: 0;
  left:-10%;
  width: 2000px;
  height: 500px;
  background-image: url('/home/bg_cloud4.PNG');
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  animation: ${moveSlowlyLeftforCloud4} 250s infinite linear;
`
const BgPlane =styled.img`
  width: 150px;
  position: absolute;
  top: 40%;
  left: 70%;
  animation: ${moveSlowlyLeft} 350s infinite linear;
`
const BgPlaneTrail =styled.img`
  width: 350px;
  position: absolute;
  top: 34%;
  left: 74%;
  animation: ${planeTrail} 350s infinite linear;
  animation-direction: alternate;
`
const BgPerson =styled.img`
  width: 350px;
  position: absolute;
  top: 20%;
  left: 5%;
  animation: ${moveSlowlyRightforPerson} 30s infinite linear;
  animation-direction: alternate;
`


const HomePage = () => {
  //홈페이지 스타일링
  const homeIntroduceStyle:string = " w-full flex h-[400px] flex-row justify-center desktop:justify-end items-end flex-wrap relative ";
  const homeIntroduceTxtStyle:string = " w-[80%] desktop:w-[45%] h-[220px] bg-white absolute margin-box m-8 p-4 top-[75%] desktop:top-[50%] rounded-2xl shadow-lg flex flex-col justify-center items-center";


  // 유저 로그인 테스트용 코드
  const { userLogin, setUserLogin } = useContext(UserLoginContext)!;
  //

  return (
    <div className="w-full desktop:w-[1024px] h-[2000px] flex flex-col items-center">

      {!userLogin ? (
        <div className={`${homeIntroduceStyle}`}>
          <div className="w-full absolute overflow-hidden">
            <BgSky>
              <BgPlane src="/home/bg_plane.PNG"/>
              <BgPlaneTrail src="/home/bg_plane_trail.PNG"/>
              <BgCloud1></BgCloud1>
              <BgCloud2></BgCloud2>
              <BgCloud3></BgCloud3>
              <BgCloud4></BgCloud4>
              <BgPerson src="/home/bg_person.PNG"/>
            </BgSky>
            
          </div>
          <div className={`${homeIntroduceTxtStyle}`}>
            <h2 className="text-lg font-bold text-[#73BBFB] py-3">꿈꾸던 여행을 스케치하고, 꽉 잡으세요</h2>
            <p className=" text-base w-[85%] py-3 text-center">당신의 손 끝에서 꿈꾸던 여행이 펼쳐집니다. <br/>트립스케치와 함께 여행을 기록하고 공유하고 추억하세요.</p>
            <button className=" w-[200px] h-[30px] bg-[#73BBFB] text-base font-bold rounded-3xl transition-colors hover:bg-[#0C94E8] text-white my-3">트립스케치 시작하기</button>
          </div>
        </div>

      ) : (
        '유저로그인 홈페이지'

      )}

    </div>
  )
 
};

export default HomePage;
