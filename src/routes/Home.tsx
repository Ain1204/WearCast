import { styled } from "styled-components";
import WeatherComponent from "../components/WeatherComponent";

const ContentSection = styled.section``;
const Home = () => {
  return (
    <>
      <ContentSection>
        <WeatherComponent />
      </ContentSection>
    </>
  );
};
export default Home;
