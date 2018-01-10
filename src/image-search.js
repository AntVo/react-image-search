import React, { Component } from 'react';

export default class ImageSearch extends Component {

	constructor(props){
		super(props);
		this.state={
			searchInput: "",
		}
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			searchInput: event.target.value,
		})
		this.props.fetchImages(this.state.searchInput);
	}


	render(){
	    return (
	    	<div className="image-search">
		      <form>
		      	<input 
		      			className="search-bar"
		      			type="text" 
		      			value={this.state.searchInput}
		      			onChange={this.handleChange.bind(this)}
		      			placeholder="Search for an image..."></input>
		      </form>
		    </div>
	    )
	  }

}
