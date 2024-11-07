import { useRef, useState } from 'react'
import './App.css'

function padTime(time){
  return time.toString().padStart(2,'0');
}

function App() {
  const [timeLeft , setTimeLeft]=useState(25*60);
  const [title,setTitle]=useState('Timer')
  const [isRunning,setRunning]=useState(false)
  let IntervalId=useRef();

  const Minutes = padTime(Math.floor(timeLeft/60));
  const Seconds = padTime((timeLeft - Minutes*60));
 
  

  function handleClickStart(){
    if(IntervalId.current != null) return;
    setTitle("Timer running")
    console.log("Timer started")
    IntervalId.current=setInterval(() => {
      setTimeLeft(timeLeft=>{
        if(timeLeft>=1) return timeLeft-1;

        handleClickReset();
        return 0 ;
      })
    }, 1);
    setRunning(true);
  }

  function handleClickStop(){
    if(IntervalId.current==null)return;
    setTitle('Pomodoro');
    clearInterval(IntervalId.current);
    IntervalId.current=null;
    console.log("Timer paused")
    setRunning(false);
  }

  function handleClickReset(){
    setTitle('Ready to go another round')
    console.log("Reset timer")
    clearInterval(IntervalId.current);
    IntervalId.current=null;
   setTimeLeft(25*60);
  }

  return (
      <div>
      <div>
        <h2>{title}</h2>
        <div>
          <span>
            {Minutes}
          </span>
          <span>
            ::
          </span>
          <span>
            {Seconds}
          </span>
        </div>

        <br />
        <br />

        <div >
          {!isRunning && <button onClick={handleClickStart}>
            Start
            </button>}

           {isRunning &&<button onClick={handleClickStop}>
              Stop
            </button>
            } 
            <button onClick={handleClickReset}>
              Reset
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
