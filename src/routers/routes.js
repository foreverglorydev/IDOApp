/* eslint-disable no-unused-vars */
import React from "react";
import MainLayout from "../layout/MainLayout";
import LandingPage from "../Pages/landing";
import PoolPage from "../Pages/pool";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// importing all the themes
// <MainLayout>
//   <Routes>
//     <Switch>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/poolpage" element={<PoolPage />} />
//     </Switch>
//   </Routes>
// </MainLayout>

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <MainLayout>
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/pool/:id" component={PoolPage} />
            </Switch>
          </Router>
        </MainLayout>
      </div>
    );
  }
}
export default MyRouts;
