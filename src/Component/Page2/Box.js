  // import { useState} from 'react'
import styles from './Box.module.css'

const Box = ({err, score, setScore}) => {
    //  var {selected}=props
    
 
    const arr= [1,2,3,4,5,6]
  console.log(score);


  
  return (
    <div className={styles.container_box} >
       <p>{err} </p>
     {arr.map((value,i)=>(<div onClick={()=>{ setScore(value)}} key={i} className={styles.box_item }>{value}</div>))} 
     <p>Select the number</p>
 
    </div>
  )
}

export default Box
