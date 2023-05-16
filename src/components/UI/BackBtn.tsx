import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/backIcon.png";

type props = {
  className?: string;
  message?: string;
};

/** 뒤로가기 버튼 ( 인자로 message 전달시 해당 message로 confirm창 띄움) */
const BackBtn = ({ className, message }: props) => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    if (message) {
      if (window.confirm(message)) {
        navigate(-1);
      } else {
        return;
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <button className={className} onClick={backBtnHandler} type="button">
      <img className="h-[19px]" src={backIcon} alt="backIcon" />
    </button>
  );
};

export default BackBtn;
