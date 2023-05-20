import getLocationByCoordinate from "../../utils/get-coordinate";
import locationIcon from "../../assets/locationIcon.png";

type props = {
  newLocation: string;
  setNewLocation: React.Dispatch<React.SetStateAction<string>>;
};

/** gps 기반 여행지 입력 컴포넌트 */
const TripLocation = (props: props) => {
  /** GPS 기반 현재 위치 가져오기 핸들러 - 좌표값 받아와서 국가 정보로 변환*/
  const locationChangeHandler = () => {
    const onSuccess = async (location: {
      coords: { latitude: number; longitude: number };
    }) => {
      const lat = location.coords.latitude;
      const lng = location.coords.longitude;
      const locationObj = await getLocationByCoordinate(lat, lng);
      props.setNewLocation(locationObj.results[8].formatted_address);
    };
    const onError = () => {};

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  return (
    <div
      className="w-[175px] flex gap-[4px] items-center"
      onClick={locationChangeHandler}
    >
      <img className="h-[16px]" src={locationIcon} alt="locationIcon" />
      {props.newLocation}
    </div>
  );
};

export default TripLocation;
