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
            
                </div>
                <div className="players-wrapper">
                {this.state.players.map(player => {
                    return (
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p>Name:</p>
                                    <p> {player.name}</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>Country: {player.country}</p>
                                    <p>searches: {player.searches}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
    }


export default Players;
