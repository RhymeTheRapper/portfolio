'use client';

import { useState, useEffect } from "react";
import TypingAnimation from "./common/typing-animation";
import styles from "./page.module.scss";
import Image from "next/image";
import MobileFlow from "./project_modal/mobile_flow";
import NotaryHome from "./project_modal/notary_home";

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openModal]);

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <TypingAnimation />
          <Image
            src="/rhyme.jpg"
            alt="Rhyme Dochtermann"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
        <div>
          <h2 className={styles.title}>UX Engineer</h2>
          <div className={styles.divider} />
          <p className={styles.description}>
            I&apos;m a Boston based Design Engineer focused on the intersection
            of code and design. I want to create front-end applications that are
            accessible, performant, and delightful to use. I get excited about
            design systems that help developers iterate faster and enable
            designers to create consistent experiences.
            <br />
            <span style={{ marginTop: '8px', display: 'block' }}>
              Outside of work, you can find me going on a nature adventure,
              knitting a fuzzy hat, or cooking up a new recipe.
            </span>
          </p>
        </div>
        <h2>Work</h2>
        <div className={styles.squiggle} />
        <div className={styles.grid}>
          <div
            className={styles.card}
            onClick={() => setOpenModal("mobileFlow")}
          >
            <Image
              src="/projects/mobileFlow/MacBook-Pro-16.jpg"
              alt="mobile flow product image"
              fill
              sizes="(max-width: 768px)"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card} onClick={() => setOpenModal("notaryHome")}>
            <Image
              src="/projects/notaryHome/home.jpg"
              alt="certify product image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.cardImage}
            />
          </div>
        </div>

        {openModal === "mobileFlow" && (
          <MobileFlow onClose={() => setOpenModal(null)} />
        )}
        {openModal === "notaryHome" && (
          <NotaryHome onClose={() => setOpenModal(null)} />
        )}
        <div className={styles.footer}>
          <h2>Get in Contact</h2>
          <a
            href="mailto:rhymedochtermann@gmail.com?subject=UX%20Engineer"
            className={styles.contactLink}
          >
            rhymedochtermann(at)gmail(dot)com
          </a>
          <a
            href="https://www.linkedin.com/in/rhyme-dochtermann"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
