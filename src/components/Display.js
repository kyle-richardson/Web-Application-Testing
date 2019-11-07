import React from 'react'

const Display = (props) => {
    const {home, away} = props.scores
    const checkOn=(num)=> props.runners[num]
    return (
        <div 
            className="display-container"
            style={{
                border: '1px solid green',
                borderRadius: '4px',
                padding: '5px',
                width: '150px',
                margin: '20px auto'
            }}>
            <h1 style={{
                fontWeight: 'bold'
            }}>Scores</h1>
            <div>
                <h2>{props.homeTeamAtBat && '->'}Home: {home}</h2>
                <h2>{!props.homeTeamAtBat && '->'}Away: {away}</h2>
            </div>
            <h2>Inning: {props.inning}</h2>
            <p>Runners on:</p>
            <p>{checkOn(0) ? 'First' : null}</p>
            <p>{checkOn(1) ? 'Second' : null}</p>
            <p>{checkOn(2) ? 'Third' : null}</p>
            <div 
                style={{
                    border: '1px solid black', 
                    width: '150px', 
                    margin: '0 auto',
                    position: 'absolute',
                    right: '20%',
                    top: '20%',
                    cursor: 'pointer',
                    padding: '5px',
                    borderRadius: '4px'
                    }}>
                {props.message}
            </div>
            
        </div>
    )
}

export default Display