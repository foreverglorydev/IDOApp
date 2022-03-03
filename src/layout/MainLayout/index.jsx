import Header from "../header/index";
import Footer from "../footer/index";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
    overflow-x: hidden;
  overflow-y: auto;
`
const MainLayout = ({ children }) => {
    return <MainWrapper className="w-full min-h-screen">
        <Header />
        {children}
        <Footer />
    </MainWrapper>;
};
export default MainLayout;