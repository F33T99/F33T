"use client";

import React from "react";
import styled from "styled-components";
import PlayButton from "../../components/PlayButton/PlayButton";
import { TechnologyLoop, TechnologyPlayButton } from "./StyledHomepage";
import Vimeo from "@u-wave/react-vimeo";
import Video from "../../components/Video/Video";
import Dialog from "../../components/Dialog/Dialog";

interface TechnologyLoopContainerProps {}

const StyledTechnologyLoopContainer = styled.div``;

const VimeoWrapper = styled.div`
  width: 80vw;
`;

const TriggerWrapper = styled.div`
  position: relative;
  width: 100%;
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
              <Video src={"/videos/explainer-loop.mp4"} />
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
