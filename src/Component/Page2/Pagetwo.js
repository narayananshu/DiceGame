import React, { useState } from "react";
import Score from "./Score";
import Box from "./Box";
import Roll from "./Roll/Roll";
import styles from "./Score.module.css";
import Button from "./Button/Button";
import Rules from "./Rules";
const Pagetwo = (props) => {
  var [isInstr,setIsInstr]= useState("")
  function instruct(){
    setIsInstr((prev)=>!prev)
  }
 
  function resetScore(){
    setTotScore(0)
  }
  var [score, setScore] = useState();
  var [diceFace, setDiceFace] = useState(1);
  var [totScore, setTotScore] = useState(0);
  var [err, setErr] = useState("**");
  function generateRandomNum(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const generateNum = () => {
    if (!score){
    setErr("Please select any number ");
    return;}
    const randomnum = generateRandomNum(2, 6);
    setDiceFace((prev) => randomnum);
    // setDiceFace(generateRandomNum(2,6))
  
    if (score === randomnum) {
      setTotScore((prev) => prev + randomnum);
    } else {
      setTotScore((prev) => prev - 2);
    }
   
  };
  return (
    <div>
      <div className={styles.main_container}>
        <Score totScore={totScore}/>
        <Box err={err} score={score} setScore={setScore} />
      </div>
      <Roll diceFace={diceFace} generateNum={generateNum} />
      <div className="btns">
        <Button text="Reset" onClick={resetScore}/>
        <Button text="Instruction" onClick={instruct}/>{isInstr?<Rules/>:""}

       
      </div>
    </div>
  );
};
export default Pagetwo;
