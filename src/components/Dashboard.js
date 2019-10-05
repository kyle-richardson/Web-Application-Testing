import React from 'react'

const Dashboard = (props) => {
    const {strikes, balls, fouls} = props.atBatStats
    return (
        <div className="dashboard-container">
            <h3>In Dashboard</h3>
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
                    left: '10%',
                    top: '20%'}}>
                Throw ball
            </div>
        </div>
    )
}

export default Dashboard