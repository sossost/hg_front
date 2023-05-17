import React from 'react';


const Footer = () => {
  const footerLayout:string = 't-[500px] w-full h-[100vh] box-border flex flex-row justify-center items-center bg-slate-100';
  const footerStyle:string[] = [footerLayout];
  const footerContainerLayout:string = 'w-full h-full mobile:w-full desktop:w-[1024px] flex flex-row justify-center items-center border-t border-solid px-5';
  const footerContainerStyle:string[] = [footerContainerLayout];


  return (
    <div className={footerStyle.join('')}>
      <div className={footerContainerStyle.join('')}>
        <div className="flex justify-self-center w-[100px] bg-white"></div>
      </div>
    </div>
  )
}

export default Footer;