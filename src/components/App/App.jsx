// import ClickTracker from "../ClickTracker/ClickTracker";
import { useState } from "react";
import ClickTracker from "../ClickTracker/ClickTracker";
import Timer from "../Timer/Timer";
import css from "./App.module.css";


export default function App() {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={css.container}>
      <h1>Effects in React</h1>


      <ClickTracker /> 

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      
      {isOpen && <Timer /> } 
      
    </div>
  );
} 