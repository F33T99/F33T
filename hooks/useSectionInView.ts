import { useEffect } from "react";

export default function useSectionInView(
  selector: string,
  callback: (isInView: boolean, el: HTMLElement) => void,
  rootMargin?: string,
  dependencies?: any[]
) {
  useEffect(() => {
    const sections = document.querySelectorAll(selector);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry.isIntersecting, entry.target as HTMLElement);
        });
      },
      { rootMargin: rootMargin || "-10% 0% -90% 0%" }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, ...(dependencies || [])]);
}
