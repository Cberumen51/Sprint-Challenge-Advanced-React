import React from 'react'

class Players extends React.Component  {
    constructor(){
        super();
        this.state = {
            players: []
        }
    }
    componentDidMount(){
        fetch(`http://localhost:5000/api/players`)
        .then(res=> res.json())
        .then (players => this.setState({players}))
        .catch( err => console.log(" an error has occured", err))

    }

    render(){
        {console.log(this.state.players)}
        return (
            <div>
                <div className="players-title">
                <h1>Players</h1>
                </div>
                <div className="players-wrapper">
                {this.state.players.map(player => {
                    return (
                        <div className="players">
                        <p>Name: {player.name}</p>
                        <p>Country: {player.country}</p>
                        <p>searches: {player.searches}</p>

                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
    }

    

export default Players;
