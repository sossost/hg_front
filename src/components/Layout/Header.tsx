import React from 'react';

const Header = () => {
  const headerLayout:string = 'w-full h-[80px] box-border flex flex-row justify-center items-center bg-slate-50 fixed z-50';
  const headerStyle:string[] = [headerLayout];
  const headerContainerLayout:string = 'w-full h-full mobile:w-full desktop:w-[1024px] flex flex-row justify-between items-center border-b border-solid px-5';
  const headerContainerStyle:string[] = [headerContainerLayout];
  return (
    <div className={headerStyle.join('')}>
      <div className={headerContainerStyle.join('')}>
        <div>뒤로가기</div>
        <div>로고</div>
        <div>검색/메뉴</div>
      </div>
    </div>
  )
}

export default Header;