import Geocode from "react-geocode";

Geocode.setApiKey("");
Geocode.setLanguage("ko");
Geocode.setRegion("ko");
Geocode.enableDebug();

/** 입력한 좌표 값을 주소로 변환하는 함수 */
const getLocationByCoordinate = (
  { lat }: { lat: string },
  { lng }: { lng: string }
) => {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  return Geocode.fromLatLng(lat, lng);
};

export default getLocationByCoordinate;
