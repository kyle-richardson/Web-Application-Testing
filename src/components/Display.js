import React from 'react'

const Display = (props) => {
    const {home, away} = props.scores
    return (
        <div className="display-container">
            <h3>Display here:</h3>
            <h2>Scores</h2>
            <div>
                <h2>Home: {home}</h2>
                <h2>Away: {away}</h2>
            </div>
            <div 
                onClick={props.throwBall} 
                style={{
                    border: '1px solid black', 
                    width: '150px', 
                    margin: '0 auto'}}>
                Throw ball
            </div>
        </div>
    )
}

export default Display