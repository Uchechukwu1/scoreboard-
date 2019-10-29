import React, { Component } from 'react';

class AddplayerForm extends Component {


// create  a ref
playerInput = React.createRef();




handleSubmit = (e)=>{
e.preventDefault();     //.current.value gets the value of the form element
this.props.addPlayer(this.playerInput.current.value)
e.currentTarget.reset()

}




render(){

return(
<form onSubmit= {this.handleSubmit}>
<input 
type = "text" 
ref= {this.playerInput}
placeholder ="Enter players name"

    
/>
<input type = "submit" value = "Add Player"  / >

</form>


)

}

} 

export default AddplayerForm