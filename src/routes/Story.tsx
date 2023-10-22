import WeatherComponent from "../components/WeatherComponent";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const ContentSection = styled.section``;
export default function Story() {
  return (
    <ContentSection>
      <WeatherComponent />
      <Outlet />
    </ContentSection>
  );
}
