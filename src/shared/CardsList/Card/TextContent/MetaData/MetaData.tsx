import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userlink}>
        <img src="https://cdn.dribbble.com/userupload/7130529/file/original-011352bd94a356b528eeb6d7198d87a0.png?compress=1&resize=30x"
          alt="avatar"
        />
        <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
      </div>
      <span className={styles.createAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад</span>
    </div>
  );
}
