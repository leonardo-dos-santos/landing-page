import React from 'react';
import styles from './Sign_up.module.css'

function Sign_up(){
  return (
    <div className={styles.sign_up}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h4>Call to action! It's time!</h4>
          <p className={styles.secondary}>
            Sign up for our product by clicking that button right over there!
          </p>
        </div>
        <div className={styles.right}>
          <button className={styles.secondary}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;