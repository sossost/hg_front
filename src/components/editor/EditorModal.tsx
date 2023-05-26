import React, { useRef, useState } from "react";
import styled from "styled-components";
import { uploadImage } from "../../api/api-img";
import { openScroll } from "../../utils/lock-scroll";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import PlusIcon from "../../assets/plusIcon.png";

type props = {
  isModal: boolean;
  isSubmitting: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  newThumbnail: string;
  setNewThumbnail: React.Dispatch<React.SetStateAction<string>>;
};

const EditorModal = ({
  isModal,
  isSubmitting,
  setIsModal,
  isHidden,
  setIsHidden,
  newThumbnail,
  setNewThumbnail,
}: props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const profileImageUploadHandler = async () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files[0]
    ) {
      const file = fileInputRef.current.files[0];
      console.log(file); // 선택된 파일 정보를 콘솔에 출력

      const formData = new FormData();
      formData.append("image", file);

      console.log(formData);

      const imageUrl = await uploadImage(formData);

      setNewThumbnail(imageUrl);
    }
  };

  return (
    <Modal
      visible={isModal}
      setIsModal={setIsModal}
      className="bg-[#ffffff] p-[20px] flex flex-col fixed bottom-0 h-[420px] w-full border-t border-[#ccc] rounded-[16px] left-0 animate-editorModalSlideUp"
    >
      <ContainerDiv>
        <h2>썸네일 이미지</h2>
        <div className="relative w-full h-[210px] border">
          {newThumbnail && (
            <img
              className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
              src={newThumbnail ? newThumbnail : ""}
              alt="thumnail_image"
            />
          )}

          <img
            src={PlusIcon}
            alt="PlusIcon"
            className="absolute w-[24px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[70] "
            onClick={() => fileInputRef.current?.click()}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={profileImageUploadHandler}
          />
        </div>
        <h2>공개 설정</h2>
        <div className="flex gap-[10px]">
          <Button
            className="w-full h-[38px]"
            type="button"
            onClick={() => {
              setIsHidden(false);
            }}
            isBgColor={isHidden ? false : true}
          >
            전체공개
          </Button>
          <Button
            className="w-full h-[38px]"
            type="button"
            onClick={() => {
              setIsHidden(true);
            }}
            isBgColor={isHidden ? true : false}
          >
            비공개
          </Button>
        </div>
        <div className="flex justify-between desktop:justify-center desktop:gap-[20px] items-center fixed border-t border-t-[#ccc] bottom-0 left-0 bg-[#ffffff] w-full p-[15px]">
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
