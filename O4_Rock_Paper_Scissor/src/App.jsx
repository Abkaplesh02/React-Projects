import { Component, useEffect, useState } from 'react'
import './App.css'
import Paper from './icons/Paper'
import Rock from './icons/Rock'
import Scissors from './icons/Scissors'


// handle wins+losses
// determine winner based on choices
// reset the game

function App() {
  const [userChoice , setUserChoice]=useState(null);
  const [computerChoice , setComputerChoice]=useState(null);
  const [wins , setWins]=useState(0);
  const [losses, SetLosses]=useState(0);
  const [gameState , setGameState]=useState(null) //win , loss , draw


  useEffect(() => {
    restartGame();
  }, [])

  const choices =[
    {id: 1 , name: 'rock' , Component:Rock , losesto:2},
    {id: 2 , name: 'paper' , Component:Paper, losesto:3},
    {id: 3 , name: 'scissors' , Component:Scissors , losesto:1}
  ]

  function handleUserClick(choice){
    const userChosen=choices.find(c=>c.id===choice)
    setUserChoice(userChosen)

    // Determine the winner
    

    if(userChosen.losesto===computerChoice.id){
      SetLosses(losses=>losses+1)
      setGameState('lose')
    }
    else if(computerChoice.losesto===userChosen.id){
      setWins(wins=>wins+1)
      setGameState('win')
    }
    else if(computerChoice.id===userChosen.id){
      setGameState('draw')
    }

    // if(userChosen.name==='rock' && computerChoice.name==='paper'){
    //   SetLosses(losses=>losses+1)
    // }
    // if(userChosen.name==='rock' && computerChoice.name==='scissors'){
    //   setWins(wins=>wins+1)
    // }
    // if(userChosen.name==='rock' && computerChoice.name==='rock'){
    // }

    // if(userChosen.name==='paper' && computerChoice.name==='paper'){
    // }
    // if(userChosen.name==='paper' && computerChoice.name==='scissors'){
    //   SetLosses(losses=>losses+1)
    // }
    // if(userChosen.name==='paper' && computerChoice.name==='rock'){
    //   setWins(wins=>wins+1)
    // }

    // if(userChosen.name==='scissors' && computerChoice.name==='paper'){
    //   setWins(wins=>wins+1)
    // }
    // if(userChosen.name==='scissors' && computerChoice.name==='scissors'){
    // }
    // if(userChosen.name==='scissors' && computerChoice.name==='rock'){
    //   SetLosses(losses=>losses+1)
    // }

  }

  function renderComponent(choice){
    const Component1=choice.Component;  //Rock , paper ,scissor
    return <Component1/>
  }

  function restartGame(){
    setUserChoice(null);
    setGameState(null);
    const randomChoice=choices[Math.floor(Math.random()*choices.length)]
    setComputerChoice(randomChoice)
  }


  

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins === 1 ?'Win' : 'Wins'}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses ===1 ?'Loss' : 'Losses'}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {gameState && 
      <div className={`game-state ${gameState}`}>
        <div>
          <div className="game-state-content">
            <p>{renderComponent(userChoice)}</p>
           {/* <p>You {gameState}!</p> */}
           {gameState ==='win' && <p>Congrats! You won!</p>}
           {gameState ==='lose' && <p>Better luck next time</p>}
           {gameState ==='draw' && <p>Game is going equal</p>}


           <p>{renderComponent(computerChoice)}</p>
          </div>

          <button onClick={()=>restartGame()}>Play Again</button>
        </div>
        </div>
        }

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={()=>handleUserClick(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={()=>handleUserClick(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={()=>handleUserClick(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  )
}

export default App
