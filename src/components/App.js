import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddplayerForm from './AddplayerForm';
import {Provider} from './Context'

class App extends Component {
state = {
players: [
{
name: "Guil",
id: 1,
score: 0
},
{
name: "micheal jackson",
id: 2,
score: 0
},
{
name: "Treasure",
id: 3,
score: 0
},
{
name: "Ashley",
id: 4,
score: 0
},
{
name: "James",
id: 5,
score: 0
}
, {
name: "David bellion",
id: 6,
score: 0
}
]
};


//player id counter
prevPlayerId = 6;


handleScoreChange = (index,delta)=>{
this.setState(previousState =>({
score: previousState.players[index].score+= delta
}))
console.log("index:" + index + "delta: " + delta)
}
//update svg based on highest score
getHighScore = ()=>{
const scores =this.state.players.map(p=>p.score)
const highscore = Math.max(...scores)
if(highscore){
return highscore;

}else{
return null

}


}


// update player state using concat method or adding new object to state
handleAddPlayer = (name) => {
let newPlayer = {
name,
score: 0,
id: this.prevPlayerId += 1
};
this.setState( prevState => ({
players: prevState.players.concat(newPlayer)
}));
}




handleRemovePlayer = (id) => {
this.setState( prevState => {
return {
players: prevState.players.filter(p => p.id !== id)
};
});
}

render() {
const highScore = this.getHighScore();

return (
<Provider value = {this.state.players}>

<div className="scoreboard">
<Header players={this.state.players} 

/>

{/* Players list */}
{this.state.players.map( (player,index) =>
<Player 
name={player.name}
id={player.id}
score = {player.score}
key={player.id.toString()} 
index = {index}
changeScore={this.handleScoreChange}
removePlayer={this.handleRemovePlayer} 
isHighScore={highScore === player.score}  // is a player's 'score' prop equal to the high score?

/>
)}
<AddplayerForm addPlayer ={this.handleAddPlayer} />


</div>

</Provider>
);
}
}

export default App;
