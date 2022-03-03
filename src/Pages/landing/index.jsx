import React from "react";
import PageLogo from "../pageLogo";
import IdoPool from "../idoPool";
import FeatureProjects from "../featuredProjects";
const LandingPage = () => {
  return (

    <div className="flex flex-col items-center w-full bg-cover bg-center bg-great" >
      <PageLogo />
      <FeatureProjects />
      <IdoPool />
    </div >
  );
};

export default LandingPage;
