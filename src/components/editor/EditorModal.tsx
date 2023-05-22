import React from "react";
import styled from "styled-components";
import { openScroll } from "../../utils/lock-scroll";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

type props = {
  isModal: boolean;
  isSubmitting: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isPublic: boolean;
  setIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditorModal = ({
  isModal,
  isSubmitting,
  setIsModal,
  isPublic,
  setIsPublic,
}: props) => {
  return (
    <Modal
      visible={isModal}
      setIsModal={setIsModal}
      className="bg-[#ffffff] p-[20px] flex flex-col fixed bottom-0 h-[420px] w-full border-t border-[#ccc] rounded-[16px] left-0 animate-editorModalSlideUp"
    >
      <ContainerDiv>
        <h2>썸네일 이미지</h2>
        <div className="w-full h-[210px] border"></div>
        <h2>공개 설정</h2>
        <div className="flex gap-[10px]">
          <Button
            className="w-full h-[38px]"
            type="button"
            onClick={() => {
              setIsPublic(true);
            }}
            isBgColor={isPublic ? true : false}
          >
            전체공개
          </Button>
          <Button
            className="w-full h-[38px]"
            type="button"
            onClick={() => {
              setIsPublic(false);
            }}
            isBgColor={isPublic ? false : true}
          >
            비공개
          </Button>
        </div>
        <div className="flex justify-between lg:justify-center lg:gap-[20px] items-center fixed border-t border-t-[#ccc] bottom-0 left-0 bg-[#ffffff] w-full p-[15px]">
          <Button
            className="w-[76px] h-[38px]"
            type="button"
            onClick={() => {
              setIsModal(false);
              openScroll();
            }}
            isBgColor={false}
          >
            취소
          </Button>
          <Button
            className="w-[76px] h-[38px]"
            type="submit"
            isBgColor={true}
            onClick={() => {}}
          >
            등록
          </Button>
        </div>
      </ContainerDiv>
    </Modal>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media (min-width: 400px) {
    width: 360px;
  }
`;

export default EditorModal;
