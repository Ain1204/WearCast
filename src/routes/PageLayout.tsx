import AppHeader from "../components/header";
import PropTypes from "prop-types";

const PageLayout = ({ children }) => {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
