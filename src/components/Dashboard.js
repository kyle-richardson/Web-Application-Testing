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
        </div>
    )
}

export default Dashboard