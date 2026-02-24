'use client';

import Image from 'next/image';
import styles from './modal.module.scss';

interface MobileFlowProps {
  onClose?: () => void;
}

export default function MobileFlow({ onClose }: MobileFlowProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>
              Onboarding Flow Responsive Redesign
            </h2>
            <h3 className={styles.subtitle}>Proof - UX Engineer</h3>
          </div>
          <div className={styles.grid}>
            <div className={styles.textSection}>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className={styles.paragraph}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className={styles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/projects/mobileFlow/MacBook-Pro-16.jpg"
                  alt="Mobile Flow Screenshot 1"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/projects/mobileFlow/MacBook-Pro-16.jpg"
                  alt="Mobile Flow Screenshot 2"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/projects/mobileFlow/MacBook-Pro-16.jpg"
                  alt="Mobile Flow Screenshot 3"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}