import { supportDeviceSize } from "../components/styled";
import styled from "styled-components";
import AppHeader from "../components/header";
import PropTypes from "prop-types";
/**
 * 기본 레이아웃
 * @category Layout
 */

const DefaultLayout = ({ children }) => {
  return (
    <Root>
      <AppHeader />
      {children}
    </Root>
  );
};
// children 프로퍼티에 대한 propTypes 정의
DefaultLayout.propTypes = {
  children: PropTypes.node, // 'children'을 노드(Node) 타입으로 정의
};
const Root = styled.div`
  padding-top: 80px;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100%;
  }
`;

export default DefaultLayout;
