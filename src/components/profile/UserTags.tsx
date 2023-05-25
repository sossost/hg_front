import { useState } from "react";

const UserTags: React.FC = () => {
  const tags: string[] = ["전체보기", "프랑스", "독일", "스위스"];
  const [selectedTag, setSelectedTag] = useState<string>("");

  // 태그 클릭시 핸들러
  const tagClickHandler = (tag: string) => {
    setSelectedTag(tag);
  };
  return (
    <>
      <div className="flex gap-[10px] mt-[15px]">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${
              selectedTag === tag ? "selected" : ""
            } tag-button border-[#73BBFB] border-[1px] rounded-[10px]
            px-[7px] py-[3px] text-[14px]`}
            onClick={() => tagClickHandler(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};

export default UserTags;
