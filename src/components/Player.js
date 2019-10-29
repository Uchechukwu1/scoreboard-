import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon    from './icon';

class Player extends PureComponent{ 
  static propTypes = {
    name:PropTypes.string.isRequired,
    id:PropTypes.number,
    score:PropTypes.number.isRequired,
    index:PropTypes.number,
    changeScore:PropTypes.func,
    isHighScore: PropTypes.bool,
    removePlayer:PropTypes.func
  
  
  
  }
  render(){
const {name,
id,
score,
index,
changeScore,
removePlayer } = this.props

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
      
        <Icon isHighScore={this.props.isHighScore} /> 
        { name }
    
      </span>

      <Counter score = {score} changeScore = {changeScore} index ={index} />
    </div>
  );
}
}


export default Player;



