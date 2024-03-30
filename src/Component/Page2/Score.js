import React from 'react'
import styles from './Score.module.css'
//   import Box from './Box'
const Score = ({totScore, props}) => {
  return (
    <div className={styles.inner_main}>
      <h1>{totScore}</h1>
      <h2  className={styles.score_txt}>Total Scores</h2>
      {/* <p>value :0</p> */}
    </div>
  )
}

export default Score
