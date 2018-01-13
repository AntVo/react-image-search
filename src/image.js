import React, { Component } from 'react';

export default class Image extends Component {

	render(){
		return (
			<div className="image-item">
				<img src={this.props.image}  
					 alt={this.props.description} 
					 height="auto" 
					 width="auto"
					 onClick={this.props.toggleViewMode.bind(this, this.props.imageItem)}>
				</img>
					<div className="attribution">
					Photo by &nbsp; 
						<a href={`https://unsplash.com/@${this.props.username}?utm_source=image-editor&utm_medium=referral`}>{this.props.photographer}</a> 
					</div>
			</div>
		)
	}
}


