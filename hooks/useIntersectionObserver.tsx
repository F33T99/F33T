import React from "react";

export function useIntersectionObserver(
  ref: Element | React.MutableRefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  deps: any[] = []
) {
  React.useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe("current" in ref ? ref.current : ref);
    return () => observer.disconnect();
  }, [ref, options?.rootMargin, ...deps]);
}
