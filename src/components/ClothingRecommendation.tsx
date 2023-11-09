// ClothingRecommendation.tsx
import React from "react";
import styled from "styled-components";

interface ClothingRecommendationProps {
  temperature: number;
}

const ClothingRecommendation: React.FC<ClothingRecommendationProps> = ({
  temperature,
}) => {
  const recommendClothing = (temperature: number) => {
    if (temperature >= 28) {
      return "민소매, 반팔 티셔츠, 반바지, 민소매 원피스, 짧은 치마, 린넨";
    } else if (temperature >= 23 && temperature <= 27) {
      return "반팔 티셔츠, 얇은 셔츠, 얇은 긴팔 티셔츠, 반바지, 면바지";
    } else if (temperature >= 20 && temperature <= 22) {
      return "얇은 가디건, 긴팔 티셔츠, 셔츠, 블라우스, 후드티, 면바지, 슬랙스, 7부 바지, 청바지";
    } else if (temperature >= 17 && temperature <= 19) {
      return "얇은 니트, 얇은 가디건, 얇은 재킷, 후드티, 스웨트 셔츠(맨투맨), 바람막이, 가디건, 긴바지, 청바지, 슬랙스, 스키니진";
    } else if (temperature >= 12 && temperature <= 16) {
      return "재킷, 가디건, 청재킷, 야상, 니트, 스웨트 셔츠(맨투맨), 셔츠, 기모 후드티, 청바지, 면바지, 살구색 스타킹";
    } else if (temperature >= 9 && temperature <= 11) {
      return "재킷, 야상, 점퍼, 트렌치 코트, 니트, 청바지, 면바지, 검은색 스타킹, 기모 바지, 레이어드";
    } else if (temperature >= 5 && temperature <= 8) {
      return "코트, 울 코트, 가죽 재킷, 플리스, 내복, 니트, 레깅스, 청바지, 두꺼운 바지, 스카프, 기모";
    } else {
      return "패딩, 두꺼운 코트, 누빔, 내복, 목도리, 장갑, 기모, 방한용품";
    }
  };

  const recommendedClothing = recommendClothing(temperature);

  return (
    <Wrapper>
      <ClothesItem>오늘 추천하는 옷: {recommendedClothing}</ClothesItem>
      <ContentSection>서치</ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: aqua;
  width: 90%;
  height: 33vh;
  margin: auto;
  display: flex;
`;

const ClothesItem = styled.div`
  background-color: red;
  width: 30%;
  height: 33vh;
`;
const ContentSection = styled.section`
  background-color: #000275;
  margin-left: 30%;
  width: 40%;
  height: 33vh;
`;
export default ClothingRecommendation;
