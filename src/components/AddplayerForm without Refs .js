import React, { Component } from 'react';

class AddplayerForm extends Component {
//created  a value state
state={
value: " "


}

playerInput = React.createRef();

//created a function to update the value state
handleValuechange=(e)=>{
this.setState({value:e.target.value})



}

handleSubmit = (e)=>{
e.preventDefault();
this.props.addPlayer(this.state.value)
this.setState({value:""})
}




render(){

return(
<form onSubmit= {this.handleSubmit}>
<input 
type = "text" 
ref= {this.playerInput}
placeholder ="Enter players name"
onChange={this.handleValuechange}
value = {this.state.value}
    
/>
<input type = "submit" value = "Add Player"  / >

</form>


)

}

} 

export default AddplayerForm