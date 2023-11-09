import { useState, useEffect } from "react";
import styled from "styled-components";
import mainimg from "../assets/main.jpeg";
import searchicon from "../assets/searchicon.svg";

const imageStyle = {
  filter: "blur(5px)", // blur 효과를 적용 (픽셀 단위로 블러 정도 조절 가능)
};

function Weather() {
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    desc: "",
    icon: "",
    loading: true,
  });
  const [cityName, setCityName] = useState("Seoul"); // Default city name
  const [recommendedClothing, setRecommendedClothing] = useState("");

  useEffect(() => {
    fetchWeatherData(cityName);
  }, [cityName]);

  const fetchWeatherData = (city) => {
    const apiKey = "430712ee32e8bfd14432fd3edb17c173";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // 날씨 정보 확인
        console.log(data);

        const temperature = data.main.temp;
        console.log("온도: " + temperature);

        setWeatherData({
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });

        recommendClothing(temperature);
      })
      .catch((error) => console.log(error));
  };
  const recommendClothing = (temperature) => {
    const celsiusTemperature = temperature - 273.15;
    if (celsiusTemperature >= 28) {
      setRecommendedClothing(
        "민소매, 반팔 티셔츠, 반바지, 민소매 원피스, 짧은 치마, 린넨"
      );
    } else if (celsiusTemperature >= 23 && celsiusTemperature <= 27) {
      setRecommendedClothing(
        "반팔 티셔츠, 얇은 셔츠, 얇은 긴팔 티셔츠, 반바지, 면바지"
      );
    } else if (celsiusTemperature >= 20 && celsiusTemperature <= 22) {
      setRecommendedClothing(
        "얇은 가디건, 긴팔 티셔츠, 셔츠, 블라우스, 후드티, 면바지, 슬랙스, 7부 바지, 청바지"
      );
    } else if (celsiusTemperature >= 17 && celsiusTemperature <= 19) {
      setRecommendedClothing(
        "얇은 니트, 얇은 가디건, 얇은 재킷, 후드티, 스웨트 셔츠(맨투맨), 바람막이, 가디건, 긴바지, 청바지, 슬랙스, 스키니진"
      );
    } else if (celsiusTemperature >= 12 && celsiusTemperature <= 16) {
      setRecommendedClothing(
        "재킷, 가디건, 청재킷, 야상, 니트, 스웨트 셔츠(맨투맨), 셔츠, 기모 후드티, 청바지, 면바지, 살구색 스타킹"
      );
    } else if (celsiusTemperature >= 9 && celsiusTemperature <= 11) {
      setRecommendedClothing(
        "재킷, 야상, 점퍼, 트렌치 코트, 니트, 청바지, 면바지, 검은색 스타킹, 기모 바지, 레이어드"
      );
    } else if (celsiusTemperature >= 5 && celsiusTemperature <= 8) {
      setRecommendedClothing(
        "코트, 울 코트, 가죽 재킷, 플리스, 내복, 니트, 레깅스, 청바지, 두꺼운 바지, 스카프, 기모"
      );
    } else {
      setRecommendedClothing(
        "패딩, 두꺼운 코트, 누빔, 내복, 목도리, 장갑, 기모, 방한용품"
      );
    }
  };
  if (weatherData.loading) {
    return <p>Loading</p>;
  }
  return (
    <Wrapper>
      <BannerContainer>
        <MainImageContainer>
          <SearchContainer>
            <SearchInput
              placeholder="도시 검색"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <SearchiconBtn
              src={searchicon}
              onClick={fetchWeatherData} // Trigger weather data fetch
            />
          </SearchContainer>
          <Container>
            <StyledImage src={mainimg} style={imageStyle} />
            <WeatherContainer>
              <MaxMin>
                최고: {(weatherData.temp_max - 273.15).toFixed(0)}° 최저:{" "}
                {(weatherData.temp_min - 273.15).toFixed(0)}°
              </MaxMin>
            </WeatherContainer>
          </Container>
        </MainImageContainer>
      </BannerContainer>
      <ClothesMain>
        <ClothesItem>
          <ClothesTextTitle>오늘 추천하는 옷</ClothesTextTitle>
          <ClothesTextsub>{recommendedClothing}</ClothesTextsub>
        </ClothesItem>
        <ContentSection>서치</ContentSection>
      </ClothesMain>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const BannerContainer = styled.div`
  background-color: #ffffff;
  height: 55vh;
  width: 90%;
  margin: auto;
`;
const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 55vh;
  background: linear-gradient(to bottom, transparent, #fefefe);
`;
const SearchContainer = styled.div`
  height: 9vh;
`;

const SearchInput = styled.input`
  position: absolute;
  top: 20px;
  left: 35%;
  background-color: #d6d6d6;
  border: none;
  border-radius: 10px;
  width: 30%;
  height: 5vh;
  align-items: center;
  text-align: center;
  display: flex;
`;
const SearchiconBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 81vh;
  padding: 3vh;

  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 40vh;
  display: flex;
  border-radius: 10px;
  margin: auto 0;
`;
const WeatherContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 40vh;
  background-color: rgb(249, 250, 251, 0.5);
  display: flex;
`;
const MaxMin = styled.div`
  color: #1d1617;
  margin: auto;
  align-items: center;
  text-align: center;

  font-size: 66px;
  font-weight: 700;
`;

const ClothesMain = styled.div`
  background-color: aqua;
  width: 90%;
  height: 33vh;
  margin: auto;
  display: flex;
`;

const ClothesItem = styled.div`
  background-color: #f9fafb;
  width: 30%;
  height: 33vh;
`;

const ClothesTextTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;
  color: #191f28;
  text-align: center;
  margin-bottom: 50px;
`;
const ClothesTextsub = styled.div`
  font-size: 23px;
  font-weight: 600;
  line-height: 1.5;
  color: rgb(51, 61, 75);
`;

const ContentSection = styled.section`
  background-color: #000275;
  margin-left: 30%;
  width: 40%;
  height: 33vh;
`;

export default Weather;
