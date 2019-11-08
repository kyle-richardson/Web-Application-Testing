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
  const [message, setMessage] = useState('')
  const [runners, setRunners] = useState([null,null,null])
  const [outs, setOuts] = useState(0)
  const [inning, setInning] = useState(1)
  const [homeTeamAtBat, setHomeTeamAtBat] = useState(false)
  let foulAndStrike = false

  useEffect(()=>{
    if(outs===3) nextInning()
  }, [outs])

  useEffect(()=> {
    console.log(`${homeTeamAtBat ? 'Home' : 'Away'} team at bat`)
  },[homeTeamAtBat])

  const throwBall = () => {
    const typeArray= ['strikes', 'balls', 'fouls', 'hit']
    const selector = Math.floor(Math.random()*5)
    const type = typeArray[selector]
    if(selector===3){
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
    setMessage("Three Strikes; You're OUT!")
    console.log("Three Strikes; You're OUT!")
    resetStats()
    setOuts(outs+1)
  }
  const walk = () => {
    setMessage('Walked')
    console.log("Walked")
    updateRunners(1, true)
    resetStats()
  }
  const hit = ()=> {
    const num = Math.floor(Math.random()*5)+1
    if(num===5) {
      setMessage("Pop fly, caught. OUT")
      console.log("Pop fly, caught. OUT")
      setOuts(outs+1)
    }
    else {
      setMessage(num===4 ? "Home run!" : `${num} base hit!`)
      console.log(num===4 ? "Home run!" : `${num} base hit!`)
      updateRunners(num)
    }
    resetStats()
    
  }
  const resetStats = () => {
    setAtBatStats({
      strikes: 0,
      balls: 0,
      fouls: 0
    })
  }
  const nextInning = () => {
    if(inning>=9 && scores.home!==scores.away){
      gameEnd()
    }
    else {
      setOuts(0)
      homeTeamAtBat && setInning(inning+1)
      setHomeTeamAtBat(!homeTeamAtBat)
    }
  }
  const updateRunners= (bases, walked=false)=> {
    const shadowRunners = runners
    let runsIn = 0
    if(walked){
      let emptyBase=null
      for(let y=0;y<bases;y++){
        if (shadowRunners[y]===null){
          emptyBase=y
          shadowRunners[y]='runner'
          break
        }
      }
      if(!emptyBase) {
        runsIn++
      }
    }
    else {
      for(let x=0; x<bases; x++){
        x===0 ? shadowRunners.unshift('runner') : shadowRunners.unshift(null)
        const home = shadowRunners.pop()
        if(home==='runner') {
          runsIn++
        }
      }
    }
    // console.log(shadowRunners)
    runsIn && runs(runsIn)
    setRunners(()=>shadowRunners)

  }
  const runs=(num)=> {
    
    let team = 'home'
    if(!homeTeamAtBat) team='away'
    setMessage(`${num} run(s) in for ${team} team`)
    console.log(`${num} run(s) in for ${team} team`)
    setScores({
      ...scores,
      [team]: scores[team]+num
    })
  }
  const gameEnd = ()=> {
    let winner = ''
    scores.home>scores.away ? winner='Home' : winner='Away'
    alert(`${winner} team wins with a final score of ${scores.home} to ${scores.away}`)
    resetStats()
    setScores({
      home: 0,
      away: 0
    })
    setInning(0)
    setOuts(0)
  }
  return (
    <div className="App">
      <Display 
        scores = {scores} 
        inning={inning} 
        homeTeamAtBat={homeTeamAtBat}
        runners={runners}
        message={message}/>
      <Dashboard 
        throwBall = {throwBall} 
        atBatStats = {atBatStats} 
        outs = {outs}/>
    </div>
  );
}

export default App;
