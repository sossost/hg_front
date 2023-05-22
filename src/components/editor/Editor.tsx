import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { escape } from "lodash";
import styled from "styled-components";

import ReactQuill from "react-quill";
import TripLocation from "./TripLocation";
import Button from "../UI/Button";
import BackBtn from "../UI/BackBtn";
import Modal from "../UI/Modal";
import TextInput from "../UI/TextInput";
import EditorModal from "./EditorModal";
import calendarIcon from "../../assets/calendarIcon.png";
import { lockScroll, openScroll } from "../../utils/lock-scroll";

import "../../styles/Editor.css";

// import { getS3PresignedURL, uploadImage } from "../../api/api-img";
// import Minio from "minio";

// const minioClient = new Minio.Client({
//   endPoint: "minio 서버 주소",
//   port: 9000,
//   useSSL: false,
//   accessKey: "액세스 키",
//   secretKey: "시크릿 키",
// });

/** AWS S3 클라이언트 */
// var s3 = new AWS.S3({
//   accessKeyId: "",
//   secretAccessKey: "",
//   endpoint: "",
//   s3ForcePathStyle: true,
//   signatureVersion: "v4",
// });

/** 여행일기 작성 에디터 컴포넌트 (타입 수정예정) */
const Editor = ({ post }: { post: any }) => {
  //
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [isModal, setIsModal] = useState<boolean>(false);
  const [isInvalidModal, setIsInvalidModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(!post ? "" : post?.title);
  const [newLocation, setNewLocation] = useState<string>(
    !post ? "위치 가져오기" : post?.location
  );
  const [newDate, setNewDate] = useState<string>(
    !post ? "여행일 선택" : post?.date
  );
  const [newContent, setNewContent] = useState<string>(
    !post ? "" : post?.content
  );
  const [newHashTag, setNewHashTag] = useState<string>(
    !post ? "" : post?.hashTag
  );
  const [isPublic, setIsPublic] = useState<boolean>(
    !post ? false : post.isPublic
  );

  const quillRef = useRef<ReactQuill>(null);
  const titleRef: React.RefObject<HTMLInputElement> = useRef(null);

  /** React Quill 커스텀 이미지 업로드 핸들러 (구현중) */
  const imageUploadHandler = async () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      // const [file] = input.files;
      // // S3 Presigned URL로 업로드하고 image url 받아오기
      // const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } =
      //   await getS3PresignedURL(file.name);
      // await uploadImage(presignedURL, file);
      // // 현재 커서 위치에 이미지를 삽입하고 커서 위치를 +1 하기
      // const quill = quillRef.current?.getEditor();
      // if (quill) {
      //   const range = quill.getSelection();
      //   quill.insertEmbed(range?.index || 0, "image", imageURL);
      //   quill.setSelection((range?.index || 0) + 1, (range?.index || 0) + 1);
      // }
    };
  };

  /** 일기 등록전에 프로필 사진, 공개 여부 확인하는 모달 띄우는 핸들러 */
  const postModalHandler = () => {
    // 필수 입력 항목인 제목 validation, 미입력시 알림 모달 띄움
    if (newTitle.trim().length === 0 && titleRef.current !== null) {
      titleRef.current.focus();
      setIsInvalidModal(true);
      lockScroll();
      setTimeout(() => {
        setIsInvalidModal(false);
        openScroll();
      }, 2000);
      return;
    }
    setIsModal(true);
    lockScroll();
  };

  /** 일기 등록 폼 제출 핸들러 */
  const postSubmitHandler = () => {
    const escapeContent = escape(newContent);

    const data = {
      title: newTitle,
      location: newLocation,
      date: newDate,
      content: escapeContent,
      hashTag: newHashTag.trim().split(/(#[^\s#]+)/g),
      isPublic,
    };
    console.log(data);

    // axios 구현 예정
  };

  // Reqact Quill 에디터 커스텀 모듈
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          // [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          // [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [],
            },
            { background: [] },
          ],
          ["image"],
          // ["clean"],
        ],
        handlers: {
          image: imageUploadHandler,
        },
      },
    };
  }, []);

  return (
    <>
      <form
        className="sm:w-full lg:w-[1024px] flex flex-col justify-center items-center m-auto"
        onSubmit={handleSubmit(postSubmitHandler)}
      >
        <EditorModal
          isModal={isModal}
          isSubmitting={isSubmitting}
          setIsModal={setIsModal}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
        />
        <Modal
          visible={isInvalidModal}
          className="flex justify-center items-center bg-[#ffffff] fixed h-[60px] w-[300px] rounded-[5px] top-[50%] animate-slideUp"
          setIsModal={setIsInvalidModal}
        >
          <ModalDiv>제목을 입력해주세요</ModalDiv>
        </Modal>
        <TextInput
          value={newTitle}
          className="h-[49px] w-full lg:w-[1024px] px-[15px] text-[20px] focus:outline-none"
          onChange={(value) => {
            setNewTitle(value);
          }}
          ref={titleRef}
          placeholder="제목을 입력하세요"
        />
        <div className="h-[39px] w-full lg:w-[1024px] flex items-center px-[15px] text-[14px]">
          <TripLocation
            setNewLocation={setNewLocation}
            newLocation={newLocation}
          />
          <div
            className="w-[175px] flex gap-[4px] items-center"
            onClick={() => {}}
          >
            <img className="h-[16px]" src={calendarIcon} alt="calendarIcon" />
            {newDate}
          </div>
        </div>
        <ReactQuill
          value={newContent}
          className="border-none"
          onChange={(value) => {
            setNewContent(value);
          }}
          modules={modules}
          ref={quillRef}
          placeholder="당신의 여행기를 적어보세요"
        />
        <div className="flex w-full pb-[100px]">
          <TextInput
            value={newHashTag}
            className="px-[15px] text-[12px] w-full focus:outline-none"
            onChange={(value) => {
              setNewHashTag(value);
            }}
            placeholder="#해시태그 입력"
          />
        </div>
        <div className="box-border flex justify-between lg:justify-end items-center fixed border-t border-t-[#ccc] bottom-0 bg-[#ffffff] h-[69px] w-full px-[15px] lg:w-[1024px]">
          <BackBtn
            className="p-[15px] lg:hidden"
            message="작성중인 글은 모두 없어집니다. 그래도 뒤로가시겠습니까?"
          />
          <Button
            className="w-[76px] h-[38px]"
            type="button"
            isBgColor={true}
            onClick={postModalHandler}
          >
            등록
          </Button>
        </div>
      </form>
    </>
  );
};

const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 50%;
  background-color: #ffffff;
  text-align: center;
  line-height: 59px;
  font-size: 1.2rem;
  color: rgb(255, 0, 0);
`;
export default Editor;
