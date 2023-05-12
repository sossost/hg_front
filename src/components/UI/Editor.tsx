import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/* 에디터 툴바 상세 설정 */
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
        { background: [] },
      ],
      ["image"],
      ["clean"],
    ],
  },
};

const Editor = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (value: string): void => {
    setText(value);
    // const markdown = convertToMarkdown(value);
    // console.log(markdown); // Markdown으로 변환된 결과를 콘솔에 출력하거나 다른 처리를 수행할 수 있습니다.
    console.log(text);
  };

  // const convertToMarkdown = (value: string) => {
  //   // 여기에서 Quill에서 Markdown으로 변환하는 로직을 구현합니다.
  //   // 예를 들어, react-markdown을 사용하여 변환할 수 있습니다.
  //   // (주의: 함수형 컴포넌트에서는 일반적으로 외부 패키지를 사용하지 않아야 합니다. 이 예제는 설명을 위한 예시입니다.)
  //   const markdown = convert(value);
  //   return markdown;
  // };

  return (
    <div>
      <ReactQuill value={text} onChange={handleChange} modules={modules} />
    </div>
  );
};

export default Editor;
