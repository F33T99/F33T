import styled from "styled-components";
import { colors } from "../../../consts/colors";
// import "simplebar/dist/simplebar.min.css";

export const StyledScrollbar = styled.div<{ $neutral: boolean }>`
  [data-simplebar] {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
  }
  .simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
  }
  .simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 30px;
    width: auto !important;
    height: auto !important;
    z-index: 0;
  }
  .simplebar-offset {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
  .simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .simplebar-content-wrapper::-webkit-scrollbar,
  .simplebar-hide-scrollbar::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  .simplebar-content:after,
  .simplebar-content:before {
    content: " ";
    display: table;
  }
  .simplebar-placeholder {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    pointer-events: none;
  }
  .simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0;
  }
  .simplebar-height-auto-observer {
    box-sizing: inherit;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 1000%;
    width: 1000%;
    min-height: 1px;
    min-width: 1px;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
  }
  .simplebar-track {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    /* background-color: ${colors.red200}; */
    background-image: url("/icons/dot-pattern.svg");
    background-size: 20%;
    overflow: hidden;
  }
  [data-simplebar].simplebar-dragging {
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  [data-simplebar].simplebar-dragging .simplebar-content {
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  [data-simplebar].simplebar-dragging .simplebar-track {
    pointer-events: all;
  }
  .simplebar-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 10px;
  }
  .simplebar-scrollbar:before {
    position: absolute;
    content: "";
    background: ${({ $neutral }) =>
      $neutral ? colors.gray500 : colors.red400};
    left: 2px;
    right: 2px;
    opacity: 1;
    margin: 30px 0;
    transition: opacity 0.2s 0.5s linear;
  }
  .simplebar-scrollbar.simplebar-visible:before {
    opacity: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
  .simplebar-track.simplebar-vertical {
    top: 0;
    width: 30px;
    &:before,
    &:after {
      content: "";
      background-image: url("/icons/scrollbar-arrow.svg");
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      height: 30px;
      background-color: ${({ $neutral }) =>
        $neutral ? colors.gray500 : colors.red400};
    }
    &:after {
      content: "";
      top: unset;
      bottom: 0;
      transform: rotate(180deg);
    }
  }
  .simplebar-scrollbar:before {
    top: 2px;
    bottom: 2px;
    left: 0px;
    right: 0px;
  }
  .simplebar-track.simplebar-horizontal {
    display: none;
    left: 0;
    height: 11px;
  }
  .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    right: auto;
    left: 0;
    top: 0;
    bottom: 0;
    min-height: 0;
    min-width: 10px;
    width: auto;
  }
  [data-simplebar-direction="rtl"] .simplebar-track.simplebar-vertical {
    right: auto;
    left: 0;
  }
  .simplebar-dummy-scrollbar-size {
    direction: rtl;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    height: 500px;
    width: 500px;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: scrollbar !important;
  }
  .simplebar-dummy-scrollbar-size > div {
    width: 200%;
    height: 200%;
    margin: 10px 0;
  }
  .simplebar-hide-scrollbar {
    position: fixed;
    left: 0;
    visibility: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;
