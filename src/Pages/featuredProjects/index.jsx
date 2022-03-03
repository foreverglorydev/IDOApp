/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { FeaturedProjects } from "../../data/FeaturedProjects";
import { IdoCard } from "../../components/IdoCard";
import { IdoGroup } from "../idoPool/idoPool.styled";

export const TextFeature = styled.p`
  font-size: 45px;
  color: #71ee4f;
  padding-top: 50px;
  margin-bottom: 0px;
  font-weight: bold;
`;

export const SmallBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 30px;
  height: 3px;
  border-radius: 2px;
`;
export const BoxRadiusGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin-top: 30px;
`;

const FeaturedContainer = styled.div`
  width: 100%;

  @media (min-width: 760px) {
    padding: 0 10%;
  })
`;

const SectionHeader = styled.p`
  font-size: 50px;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 40px;
  })
`;

const Separator = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const ProjectGroup = styled.div`
  margin-right: 0;
  padding: 50px 32px 150px 32px;
  width:100%;
  display:grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap:50px;

  @media (max-width: 1000px) {
    padding: 0 16px;
    grid-template-columns: 1fr;
  });
  
`;

const FeatureProjects = () => {
  return (
    <FeaturedContainer>
      <SectionHeader className="text-45 text-green5 font-bold">
        Featured Projects
      </SectionHeader>
      <Separator className="flex items-center justify-center bg-white w-30 h-height1 rounded-sm mb-50">
        {" "}
      </Separator>
      <ProjectGroup className="">
        {FeaturedProjects.map((idoData) => (
          <IdoCard key={idoData.projectId} {...idoData} />
        ))}
      </ProjectGroup>
    </FeaturedContainer>
  );
};

export default FeatureProjects;
