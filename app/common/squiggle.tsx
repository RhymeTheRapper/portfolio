"use client";

import { useEffect, useRef } from "react";
import styles from "./squiggle.module.scss";

export default function Squiggle() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.getBoundingClientRect(); // force reflow
    path.style.transition = "stroke-dashoffset 4s ease";
    path.style.strokeDashoffset = "0";
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 977.2 18.2"
      className={styles.container}
    >
      <path
        ref={pathRef}
        className={styles.squiggle}
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeWidth="4"
        d="M.8 5.6a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.1 7a13.6 13.6 0 0 0 20.4 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.4 0l6.1-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.4 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.4 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.4 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.1 7a13.6 13.6 0 0 0 20.4 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.4 0l6.2-7a13.6 13.6 0 0 1 20.3 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0l6.2 7a13.6 13.6 0 0 0 20.3 0l6.2-7a13.6 13.6 0 0 1 20.4 0"
      />
    </svg>
  );
}
