import Home from "./routes/Home";
import Story from "./routes/Story";
import Search from "./components/search";
import styled from "styled-components";
import { supportDeviceSize } from "./components/styled";

const Root = styled.div`
  padding-top: 25px;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`;
function App() {
  return (
    <Root>
      <Home />
      <Search />
      <Story />
    </Root>
  );
}

export default App;
