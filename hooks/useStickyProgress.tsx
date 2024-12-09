import { useRef } from "react";
import { useRaf } from "./useRaf";

function useStickyProgress(
  container: HTMLElement,
  cabin: HTMLElement,
  cb: (progress: number) => void,
) {
  const progress = useRef<number>(null);
  useRaf(container, () => {
    const height = container.offsetHeight - cabin.offsetHeight;
    const position = cabin.offsetTop - container.offsetTop;
    progress.current = position / height;
    cb(progress.current);
  });
  return progress;
}

export default useStickyProgress;
