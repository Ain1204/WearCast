import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const AppHeader = () => {
  // toggle과 setToggle props 삭제
  const navigate = useNavigate();

  return (
    <Header>
      <NavLogo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" />
        </Link>
      </NavLogo>
      <NavMenu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>메인</li>
        </Link>
        <Link to="/features" style={{ textDecoration: "none" }}>
          <li>내 옷장</li>
        </Link>
        <Link to="/package" style={{ textDecoration: "none" }}>
          <li>추천 의상</li>
        </Link>
        <Link to="/customer-service" style={{ textDecoration: "none" }}>
          <li>옷 등록</li>
        </Link>
        <Link to="/consultation" style={{ textDecoration: "none" }}>
          <li>로그인</li>
        </Link>
      </NavMenu>
    </Header>
  );
};

const Header = styled.div`
  background: var(--background-white, #fff);
  height: 80px;
  display: flex;
  margin: auto 0%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0px 1px 20px 0px #a8979b;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const NavLogo = styled.div`
  img {
    margin-top: 10px;

    @media screen and (min-width: 768px) {
      margin-left: 100px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto; /* 화면이 768px 미만이면 로고를 가운데로 정렬 */
  }
`;

const NavMenu = styled.div`
  list-style: none;
  display: flex; /* 항목들을 가로로 정렬 */
  justify-content: center;
  align-items: center; /* 항목들을 가운데 정렬 */
  gap: 50px; /* 각 항목 사이의 간격 설정 */
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 100px;
    margin-left: 100px;
  }

  li {
    cursor: pointer;
    color: var(--Gray03, #7c7c80);
    text-align: center;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.408px;
    transition: color 0.2s; /* 색상 변경 시 부드럽게 전환 */

    &:last-child {
      color: var(--Primary, #ff6a00); /* 마지막 항목의 색상 변경 */
    }

    &:hover {
      color: var(--Gray01, #242426); /* 호버 시 색상 변경 */
    }
  }
  li:last-child {
    color: var(--Primary, #7c7c80);
    text-align: center;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.408px;
  }
  li:hover {
    border-radius: 4px;
    color: var(--Gray01, #242426);
    text-align: center;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.408px;
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      width: 100%;
      text-align: center;
      padding: 8px 12px;
      font-size: 20px; // 글자 크기 변경
    }
    background-color: white;
  }
`;

export default AppHeader;
