"use client";

import React, { useRef } from "react";
import { StyledVideo } from "./Styles/StyledVideo";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface VideoProps {
  src: string;
  posterSrc: string;
  className?: string;
}

const Video = ({ src, className, posterSrc }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  useIntersectionObserver(ref, (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? ref.current?.play() : ref.current?.pause();
    });
  });

  return (
    <StyledVideo
      ref={ref}
      src={src}
      poster={posterSrc}
      className={className}
      autoPlay
      muted
      playsInline
      loop
    />
  );
};

export default Video;
