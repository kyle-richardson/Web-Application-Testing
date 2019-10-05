import React from 'react'

const Display = (props) => {
    const {home, away} = props.scores
    const checkOn=(num)=> props.runners[num]
    return (
        <div className="display-container">
            <h3>Display here:</h3>
            <h2>Scores</h2>
            <div>
                <h2>{props.homeTeamAtBat && '->'}Home: {home}</h2>
                <h2>{!props.homeTeamAtBat && '->'}Away: {away}</h2>
            </div>
            <h2>Inning: {props.inning}</h2>
            <p>Runners on:</p>
            <p>{checkOn(0) ? 'First' : null}</p>
            <p>{checkOn(1) ? 'Second' : null}</p>
            <p>{checkOn(2) ? 'Third' : null}</p>
            
        </div>
    )
}

export default Display