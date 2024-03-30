import React from 'react'
import styles from './Roll.module.css'
const Roll = ({diceFace, generateNum}) => {
  return (
    <div className={styles.dice_img} onClick={generateNum}>
      <img  style={{height:"200px",width:"200px"}}src={`./images/dice_${diceFace}.png`} alt='loading...'/>
      <p>Roll the dice</p>
    </div>
  )
}

export default Roll
