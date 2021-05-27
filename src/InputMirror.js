import React, { Component } from 'react';

class InputMirror extends Component{
 
	state = {
    	echo: ''
    }
  	
  	handleChange = (text) => {
    	this.setState(() => ({
        	echo: text.trim()
        }))
    }
	render(){
      const { echo } = this.state
    	return(
    		<div className="container">
          		<input 
          			type="text" 
          			placeholder="Say Something"
          			value={echo}
  					onChange={ (event) => this.handleChange(event.target.value)}
          		/>
          		<p className="echo">Echo:</p>
          		<p>{echo}</p>
        	</div>
    	)
    }
}

export default InputMirror;