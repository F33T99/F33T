"use client";

import { ReactNode, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation, {
  ScrollAnimationContext,
} from "../ScrollAnimation/ScrollAnimation";

interface ProductElevatorHoleProps {
  children: ReactNode;
}

const StyledElevator = styled.div`
  height: 500vh;
  position: relative;
`;

const ElevatorCabin = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const ElevatorBody = ({ children }: ProductElevatorHoleProps) => {
  const {
    animationElRef,
    scrollYProgress: { currentPos, totalDistance, progress },
  } = useContext(ScrollAnimationContext);

  return (
    <StyledElevator>
      <ElevatorCabin ref={animationElRef}>{children}</ElevatorCabin>
    </StyledElevator>
  );
};

const Elevator = ({ children }) => {
  return (
    <ScrollAnimation
      offset={[1, 1]}
      disableIntersectionObserver
      animate={(currentPos, totalDistance) => ({
        top: `${(currentPos / (totalDistance + window.innerHeight)) * 100}%`,
      })}>
      <ElevatorBody>{children}</ElevatorBody>
    </ScrollAnimation>
  );
};

export default Elevator;
