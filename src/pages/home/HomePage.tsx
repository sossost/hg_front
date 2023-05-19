import { Link } from "react-router-dom";
import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

// 유저 로그인 테스트용 코드
import { UserLoginContext } from '../../components/Layout/Layout';
//
const moveSlowlyLeft = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translate(-400%, -280%)
  }
`
const moveSlowlyLeftforCloud2 = keyframes`
  0% {
    transform: translate(0, -100%)
  }
  100%{
    transform: translate(100%, -100%)
  }
`

const moveSlowlyRightforCloud3 = keyframes`
  0% {
    transform: translate(0, -200%)
  }
  100%{
    transform: translate(100%, -200%)
  }
`

const moveSlowlyLeftforCloud4 = keyframes`
  0% {
    transform: translate(0, -300%)
  }
  100%{
    transform: translate(-100%, -300%)
  }
`



const moveSlowlyRight = keyframes`
  0% {
    transform: translateX(0)
  }
  100%{
    transform: translateX(-50%)
  }
`

const BgSky =styled.div`
  left:0;
  height: 500px;
  position: absolue;
  background-image: url('/home/bg_sky.PNG');
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: blue;
`

const BgCloud1 =styled.div`
  top: 10%;
  left: 0;
  height: 500px;
  position: absolue;
  background-image: url('/home/bg_cloud1.PNG');
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  animation: ${moveSlowlyRight} 350s infinite linear;
`

const BgCloud2 =styled.div`
  left: 0%;
  height: 500px;
  position: absolue;
  background-image: url('/home/bg_cloud2.PNG');
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  animation: ${moveSlowlyLeftforCloud2} 150s infinite linear;
`

const BgCloud3 =styled.div`
  left: 50%;
  height: 500px;
  position: absolue;
  background-image: url('/home/bg_cloud3.PNG');
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  animation: ${moveSlowlyRightforCloud3} 150s infinite linear;
`

const BgCloud4 =styled.div`
  left: 50%;
  height: 500px;
  position: absolue;
  background-image: url('/home/bg_cloud4.PNG');
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  animation: ${moveSlowlyLeftforCloud4} 150s infinite linear;
`

const BgPlane =styled.img`
  width: 350px;
  position: absolute;
  top: 20%;
  left: 60%;
  animation: ${moveSlowlyLeft} 480s infinite linear;
`

const BgPerson =styled.img`
  width: 350px;
  position: absolute;
  top: 20%;
  left: 5%;
`


const HomePage = () => {
  //홈페이지 스타일링
  const homeIntroduceStyle:string = " w-full flex h-[500px] flex-row justify-center desktop:justify-between items-center desktop:items-end flex-wrap relative overflow-hidden";
  const homeIntroduceImgStyle:string = " w-full desktop:w-[45%] h-[500px] ";
  const homeIntroduceTxtStyle:string = " w-[80%] desktop:w-[45%] h-[250px] bg-white bg-opacity-60 margin-box backdrop-filter backdrop-blur-lg m-8 p-4 rounded-xl shadow-lg";


  // 유저 로그인 테스트용 코드
  const { userLogin, setUserLogin } = useContext(UserLoginContext)!;
  //

  return (
    <div className="w-full desktop:w-[1024px] h-[2000px] flex flex-col items-center">
      {!userLogin ? (
        <div className={`${homeIntroduceStyle}`}>
          <div className="w-full absolute">
            <BgSky>
              <BgPlane src="/home/bg_plane.PNG"/>
              <BgCloud1></BgCloud1>
              <BgCloud2></BgCloud2>
              <BgCloud3></BgCloud3>
              <BgPerson src="/home/bg_person.PNG"/>
            </BgSky>
            
          </div>
          <div className={`${homeIntroduceImgStyle}`}>
          </div>
          <div className={`${homeIntroduceTxtStyle}`}>
          </div>
        </div>

      ) : (
        '유저로그인 홈페이지'

      )}

    </div>
  )
 
};

export default HomePage;
