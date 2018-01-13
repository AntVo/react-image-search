import React, { Component } from 'react';

export default class ImageSearch extends Component {

	constructor(props){
		super(props);
	}

	handleChange(event) {
		event.preventDefault();
		this.props.changeQuery(event.target.value);
	}


	render(){
	    return (
	    	<div className="image-search">
		      <form>
		      	<input 
		      			className="search-bar"
		      			type="text" 
		      			value={this.props.query}
		      			onChange={this.handleChange.bind(this)}
		      			placeholder="Search for an image..."></input>
		      </form>
		    </div>
	    )
	  }

}
