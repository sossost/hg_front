import React from 'react';
import Logo from '../../components/UI/Logo';


const Footer = () => {
  const footerLayout:string = 't-[500px] w-full h-[200px] bottom-0 box-border flex flex-col justify-center items-center bg-slate-100';
  const footerStyle:string[] = [footerLayout];
  const footerContainerLayout:string = 'w-full h-full mobile:w-full desktop:w-[1024px] flex flex-col justify-center items-center border-t border-solid px-5';
  const footerContainerStyle:string[] = [footerContainerLayout];


  return (
    <div className={footerStyle.join('')}>
      <div className={footerContainerStyle.join('')}>
        <div className="w-full h-[100px] flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[150px]">
            <Logo color="#cbd5e1" width={120}/>
            <div className='flex flex-col justify-center items-center font-light text-xs text-slate-400 solid w-[500px] h-[30px] mt-2'>
        © 2023 혼공함께
            </div>
          </div>
          <div className='flex flex-col justify-center items-center leading-5 w-[300px] h-[80px] font-light text-xs text-slate-400'> 
          엘리스트랙 SW engineer 4기 <br/>
          팀장 | 송호준 <br/>
          프론트엔드 | 장윤수 고병욱 이수현 황반석 <br/>
          백엔드 | 강민석 김서연 송호준 이규해 </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;