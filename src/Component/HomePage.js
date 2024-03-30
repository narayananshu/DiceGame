import React from 'react'
import styles from'./HomePage.module.css'
import Button from './Page2/Button/Button'
const HomePage = ({toggle}) => {
  
  return (
    <div className={styles.container}>
      <img src="https://media.istockphoto.com/id/1336400835/vector/cartoon-dice-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=MfAZZeS5B6eU25J-72mG8Ar-BDAZJgeIPV2jXBr-zjI=" alt='loading...'/>
      
      <div className={styles.container_box}>
      <h1>DICE GAME</h1>
      
      <Button text="Play Now"  onClick={toggle}/>
      </div>
    </div>
  )
}

export default HomePage

