import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
    const {text, ...rest}= props;
  return (
    <div className={styles.container}>
    <button className={styles.btns} {...rest} >{text}</button>
    </div>
  )
}

export default Button
