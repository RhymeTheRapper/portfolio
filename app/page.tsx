import TypingAnimation from "./common/typing-animation";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
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
            I'm a Boston based Design Engineer focused on the intersection of
            code and design. I want to create front-end applications that are
            accessible, performant, and delightful to use. I get excited about
            design systems that enable designers to create consistent
            experiences and help developers iterate faster.
            <br />
            <br />
            Outside of work, you can find me going on a nature adventure,
            knitting a fuzzy hat, or cooking up a new recipe.
          </p>
        </div>
        <h2>Work</h2>
        <div className={styles.squiggle} />
        <div className={styles.grid}>
          <div className={styles.card} />
          <div className={styles.card} />
        </div>
        <div className={styles.footer}>
          <h2>Get in Contact</h2>
            <a href="mailto:rhymedochtermann@gmail.com?subject=UX%20Engineer" className={styles.contactLink}>
              rhymedochtermann(at)gmail(dot)com
            </a>
            <a href="https://www.linkedin.com/in/rhyme-dochtermann" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              LinkedIn
            </a>
        </div>
      </main>
    </div>
  );
}
