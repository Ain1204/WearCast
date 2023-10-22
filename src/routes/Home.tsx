import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const ContentSection = styled.section``;
const Home = () => {
  return (
    <>
      <ContentSection>
        <Outlet />
      </ContentSection>
    </>
  );
};
export default Home;
