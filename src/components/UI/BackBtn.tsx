import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/backIcon.png";

type BackBtnType = {
  message?: string;
};

/** 뒤로가기 버튼 ( 인자로 message 전달시 confirm창으로 message 전달) */
const BackBtn = (props: BackBtnType) => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    if (props.message) {
      if (window.confirm(props.message)) {
        navigate(-1);
      } else {
        return;
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <button className="p-[15px]" onClick={backBtnHandler}>
      <img className="h-[19px]" src={backIcon} alt="backIcon" />
    </button>
  );
};

export default BackBtn;
