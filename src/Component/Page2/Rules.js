import React from 'react'
import styles from './Score.module.css'
const Rules = () => {
    
  return (
  <div className={styles.container}>
      <div className={styles.instr_container}>
     <h2>How to play the game!</h2>
     <ol>
        <li>
        Chose any number from 1 to 6.</li>
        <li>Roll the dice.</li>
        <li>If the number selected and face of dice is same then it will be added to total score.<br/></li>
        <li>If number is diflent then the 2 marks  will  get deducted from total score.</li>
     </ol>
     
    </div>
  </div>
  )
}

export default Rules
