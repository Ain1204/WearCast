import { useState, useEffect } from "react";
import styled from "styled-components";
import weatherCloudy from "../assets/weathercloudy.svg";

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
  const [cityName, setCityName] = useState("Seoul");
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
        const temperature = data.main.temp;

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
  const today = new Date();

  const formattedDate = ` ${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const defaultCityList = [
    "Seoul",
    "Busan",
    "Incheon",
    "Daegu",
    "Daejeon",
    "Gwangju",
    "Ulsan",
    "Jeju",
    "Suwon",
    "Gapyeong",
    "Gwacheon",
    "Namyangju",
    "Bucheon",
    "Ansan",
    "Anyang",
    "Yangpyeong",
    "Yeoncheon",
    "Yongin",
    "Uijeongbu",
    "Hwaseong",
  ];

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
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            >
              {defaultCityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </SearchInput>
          </SearchContainer>
          <WeatherContainer>
            <MaxMin>
              <CurrentTemperature>
                {(weatherData.temp - 273.15).toFixed(1)}°C
              </CurrentTemperature>
              <MaxMinTemperature>
                최고:
                {(weatherData.temp_max - 273.15).toFixed(0)}° 최저:
                {(weatherData.temp_min - 273.15).toFixed(0)}°
              </MaxMinTemperature>
            </MaxMin>
            <Weatheritem>
              <img src={weatherCloudy} />
            </Weatheritem>
          </WeatherContainer>
        </MainImageContainer>
      </BannerContainer>
      <ClothesMain>
        <ClothesTextTitle>
          <p>오늘 추천하는 옷</p>
          <Dday>{formattedDate}</Dday>
        </ClothesTextTitle>
        <ClothesTextsub>
          <p>{recommendedClothing}</p>
        </ClothesTextsub>
      </ClothesMain>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 75vh;
  width: 100%;
  margin: auto;
`;
const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const MainImageContainer = styled.div`
  background: linear-gradient(45deg, #ffd0d0, #a47eb7);
  position: relative;
  width: 100%;
  height: 100%;
`;
const SearchContainer = styled.div`
  height: 150px;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.select`
  border: none;
  border-radius: 30px;
  width: 295px;
  height: 64px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  text-align: center;
`;

const WeatherContainer = styled.div`
  width: 100%;
`;

const MaxMin = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const CurrentTemperature = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendarad;
  font-size: 98px;
  font-style: normal;
  font-weight: 200;
  line-height: 70px;
  letter-spacing: 0.374px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const MaxMinTemperature = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendarad;
  font-size: 34px;
  font-style: normal;
  font-weight: 200;
  line-height: 24px;
  letter-spacing: 0.38px;
  margin-bottom: 10px;
`;

const Weatheritem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 320px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

const ClothesMain = styled.div`
  width: 100%;
  display: flex;
  background-color: aliceblue;
`;

const ClothesTextTitle = styled.div`
  width: 50%;
  p {
    color: #000000;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Pretendarad;
    font-size: 34px;
    font-style: normal;
    font-weight: 200;
    line-height: 70px;
    letter-spacing: 0.374px;
    height: 10%;
  }
  :nth-child(2) {
    color: #000000;
    text-align: center;
    font-family: Pretendarad;
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    line-height: 70px;
    letter-spacing: 0.374px;
  }
`;
const Dday = styled.div``;
const ClothesTextsub = styled.div`
  p {
    font-size: 23px;
    color: #000000;
    text-align: center;
    font-family: Pretendarad;
    font-style: normal;
    font-weight: 200;
    line-height: 70px;
    letter-spacing: 0.374px;
    padding: 10px 120px 10px 120px;
  }
`;

export default Weather;
