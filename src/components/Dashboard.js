import React from 'react'

const Dashboard = (props) => {
    const {strikes, balls, fouls} = props.atBatStats
    return (
        <div 
            className="dashboard-container"
            style={{
                border: '1px solid blue',
                borderRadius: '4px',
                padding: '5px',
                width: '150px',
                margin: '0 auto'
            }}>
            <h4>outs: {props.outs}</h4>
            <p>strikes: {strikes}</p>
            <p>balls: {balls}</p>
            <p>fouls: {fouls}</p>
            <div 
                onClick={props.throwBall} 
                style={{
                    border: '1px solid black', 
                    width: '150px', 
                    margin: '0 auto',
                    position: 'absolute',
                    left: '20%',
                    top: '20%',
                    cursor: 'pointer',
                    padding: '5px',
                    borderRadius: '4px'
                    }}>
                Throw ball
            </div>
        </div>
    )
}

export default Dashboard