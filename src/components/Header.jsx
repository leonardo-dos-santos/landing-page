import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.nav}>
            <div className={styles.left}>
                <p className={styles.logo}><img src="https://picsum.photos/150/55
" alt="random image for logo" /></p>
            </div>
            <div className={styles.right}>
                <ul>
                    <li><a href="#">header link one</a></li>
                    <li><a href="#">header link two</a></li>
                    <li><a href="#">header link three</a></li>
                </ul>
            </div>
        </div>

        <div className={styles.welcome}>
            <div className={styles.left}>
                <h1 className={styles.hero}>This website is awesome</h1>
                <p className={styles.secondary}>This website has some subtext that goes here under the main title. It's a smaller
                    font and the
                    color is lower contrast.</p>
                <button>Sign up</button>
            </div>
            <div className={styles.right}>
                <div className={styles.image}>
                    <img src="https://picsum.photos/700/315" alt="imagem de uma floresta"/>       
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;