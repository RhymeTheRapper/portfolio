'use client';

import Image from 'next/image';
import styles from './modal.module.scss';

interface NotaryHomeProps {
  onClose?: () => void;
}

export default function NotaryHome({ onClose }: NotaryHomeProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>Notary Home Page Redesign</h2>
            <h3 className={styles.subtitle}>Proof - UX Engineer</h3>
          </div>
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <img src="/projects/notaryHome/homeLong.png" alt="Notary Home Page Redesign Screenshot" className={styles.image} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
