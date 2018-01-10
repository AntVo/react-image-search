import React, { Component } from 'react';

export default class Image extends Component {
	render(){
		return (
			<div className="image-item">	
				<img src={this.props.image} height='auto' width="auto"></img>
				<a href={this.props.social}>{this.props.photographer}</a>
			</div>
		)
	}
}
