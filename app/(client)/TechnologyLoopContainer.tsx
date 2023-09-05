"use client";

import Vimeo from "@u-wave/react-vimeo";
import styled from "styled-components";
import Dialog from "../../components/Dialog/Dialog";
import PlayButton from "../../components/PlayButton/PlayButton";
import Video from "../../components/Video/Video";
import { TechnologyPlayButton } from "./StyledHomepage";

interface TechnologyLoopContainerProps {}

const StyledTechnologyLoopContainer = styled.div``;

const VimeoWrapper = styled.div`
  width: 80vw;
`;

const TriggerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TechnologyLoop = styled.div`
  position: relative;
`;

const TechnologyLoopContainer = ({}: TechnologyLoopContainerProps) => {
  return (
    <StyledTechnologyLoopContainer>
      <TechnologyLoop>
        <Dialog
          content={
            <VimeoWrapper>
              <Vimeo video={"832040764"} autoplay responsive />
            </VimeoWrapper>
          }
          trigger={
            <TriggerWrapper>
              <Video
                src={"/videos/explainer-loop.mp4"}
                posterSrc='/videos/explainer-loop-poster.jpg'
              />
              <TechnologyPlayButton>
                <PlayButton />
              </TechnologyPlayButton>
            </TriggerWrapper>
          }
        />
      </TechnologyLoop>
    </StyledTechnologyLoopContainer>
  );
};

export default TechnologyLoopContainer;
