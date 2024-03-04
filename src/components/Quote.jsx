import React from 'react';
import styles from './Quote.module.css'

function Quote() {
    return (
    <div className={styles.quote}>
        <em>This is an inspiring quote, or a testimonial from a customer.
            Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it
            looks nice.</em>
        <p>- Thor, God of Thunder</p>
    </div>
    )
}

export default Quote;