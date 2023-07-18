import React from "react";

export function useIntersectionObserver(
  ref: React.MutableRefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  deps: any[] = []
) {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref.current, options?.rootMargin, ...deps]);
}
