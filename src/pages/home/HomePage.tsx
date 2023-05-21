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
    
  }
  100%{
    transform: translateX(-100%)
    
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
    transform: scale(1,1) translateX(0);
    opacity: 1;

  }
  100%{
    transform: scale(5,1) translate(-30%, -120%);
    opacity: 0.5;

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
  animation: ${planeTrail} 350s 1 linear;
  animation-direction: alternate;
  opacity: 0;
`
const BgPerson =styled.img`
  width: 350px;
  position: absolute;
  top: 20%;
  left: 5%;
  animation: ${moveSlowlyRightforPerson} 30s infinite linear;
  animation-direction: alternate;
`

// 더미데이터
const user = {
  name: "Mirabel",
}

const HomePage = () => {
  //홈페이지 스타일링
  const homeIntroduceStyle:string = " w-full flex h-[400px] flex-row justify-center desktop:justify-end items-end flex-wrap relative mb-[150px] ";
  const homeIntroduceTxtStyle:string = " w-[80%] desktop:w-[45%] h-[220px] bg-white absolute margin-box m-8 p-4 top-[75%] desktop:top-[50%] rounded-2xl shadow-lg flex flex-col z-500 justify-center items-center";
  const homeIntroduceTxtBtnStyle:string = "w-[200px] h-[30px] bg-[#73BBFB] text-base font-bold rounded-3xl transition-colors hover:bg-[#0C94E8] text-white my-3";
  const homeFurtherIntroduceStyle:string = " w-full flex h-[400px] flex-row-reverse justify-center desktop:justify-around items-center flex-wrap z-100 relative ";
  const homeWelcomeTxtStyle:string = " border border-solid w-[90%] h-[150px] bg-white margin-box m-8 p-4 rounded-3xl shadow-lg flex text-lg flex-row justify-center items-center";


  // 유저 로그인 테스트용 코드
  const { userLogin, setUserLogin } = useContext(UserLoginContext)!;
  //


  return (
    <div className="w-full desktop:w-[1024px] h-[2000px] ">
      {!userLogin ? (
        <div className=" w-full flex flex-col items-center">
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
              <h2 className="text-lg font-bold text-[#73BBFB] py-3" onClick={()=>setUserLogin(true)}>꿈꾸던 여행을 스케치하고, 꽉 잡으세요</h2>
              <p className=" text-base w-[85%] py-3 text-center">당신의 손 끝에서 꿈꾸던 여행이 펼쳐집니다. <br/>트립스케치와 함께 여행을 기록하고 공유하고 추억하세요.</p>
              <Link to ="/"><button className={`${homeIntroduceTxtBtnStyle}`} >트립스케치 시작하기</button></Link>
            </div>
          </div>
          <div className={`${homeFurtherIntroduceStyle}`}>
            <div className="  w-[80%] desktop:w-[40%] h-[300px]">

            </div>
            <div className=" w-[80%] h-[300px] desktop:w-[50%] flex flex-col justify-center items-center">
              <p className="text-m w-[85%] py-3 leading-6 font-light text-center desktop:text-right">
                트립스케치에 오신 것을 환영합니다. <br/>트립스케치는 여행 경험을 다른 사람들과 공유하고 사진과 일기를 한 곳에 보관할 수 있는 온라인 여행 일기장입니다. 
                여러분은 트립스케치를 통해 다른 여행객들과 연결되어 새로운 여행지를 발견하고 다음 모험을 계획할 수 있습니다. 
                숙련된 여행객이든 초보자든, 트립스케치는 여행을 기록하고 세상과 공유하는 완벽한 플랫폼입니다. 
                <br/>지금 가입하고 여행을 떠나보세요!
              </p>
            </div>

          </div>
        </div>

        

      ) : (
        <div className=" w-full flex flex-col items-center">
          <div className={`${homeWelcomeTxtStyle}`}>
            <p className="pr-1">안녕하세요.</p> <p className=" text-[#73BBFB] font-extrabold px-1 ">{user.name}</p><p>님</p>
          </div>

        </div>
      )}

    </div>
  )
 
};

export default HomePage;
