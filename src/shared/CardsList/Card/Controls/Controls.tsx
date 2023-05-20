import React from 'react';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import { KarmaCounter } from './KarmaCounter';
import styles from './controls.css';


export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />

      <CommentsButton />

      <Actions />
    </div>
  );
}
