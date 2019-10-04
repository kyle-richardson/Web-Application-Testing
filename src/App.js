import React, {useState, useEffect} from 'react';
import './App.css';
import Display from "./components/Display"
import Dashboard from "./components/Dashboard"

function App() {
  const [atBatStats, setAtBatStats] = useState({
      strikes: 0,
      balls: 0,
      fouls: 0
  })
  const [scores, setScores] = useState({
    home: 0,
    away: 0
  })
  const [runners, setRunners] = useState({
    first: false,
    second: false,
    third: false
  })
  const [outs, setOuts] = useState(0)
  const [homeTeamAtBat, setHomeTeamAtBat] = useState(true)
  let foulAndStrike = false

  useEffect(()=>{
    if(outs===3) nextInning()
  }, [outs])

  useEffect(()=> {
    console.log(`${homeTeamAtBat ? 'Home' : 'Away'} team at bat`)
  },[homeTeamAtBat])

  const throwBall = () => {
    const typeArray= ['strikes', 'balls', 'fouls', 'hit']
    const selector = Math.floor(Math.random()*3)
    const type = typeArray[selector]
    if(selector===4){
      hit()
    }
    else if (selector===0 && atBatStats.strikes===2){
      throwOut()
    }    
    else if(selector===1 && atBatStats.balls===3){
      walk()
    }
    else {
      if(selector===2 && atBatStats.strikes<2){
        foulAndStrike=true;
      }
      foulAndStrike 
      ? setAtBatStats({
        ...atBatStats,
        [type]: atBatStats[type]+1,
        strikes: atBatStats.strikes+1
      })
      : setAtBatStats({
        ...atBatStats,
        [type]: atBatStats[type]+1,
      })
      foulAndStrike=false;
    }
    
  }
  const throwOut = () =>{
    console.log("thrown out")
    resetStats()
    setOuts(outs+1)
  }
  const walk = () => {
    console.log("walked")
    updateRunners(1)
    resetStats()
  }
  const hit = ()=> {
    const num = 2
    updateRunners(num)
  }
  const resetStats = () => {
    console.log("resetting stats")
    setAtBatStats({
      strikes: 0,
      balls: 0,
      fouls: 0
    })
  }
  const nextInning = () => {
    setOuts(0)
    setHomeTeamAtBat(!homeTeamAtBat)
  }
  const updateRunners= (bases)=> {
    console.log("updating runner positions")
  }
  return (
    <div className="App">
      <Display throwBall = {throwBall} scores = {scores}/>
      <Dashboard atBatStats = {atBatStats} outs = {outs}/>
    </div>
  );
}

export default App;
