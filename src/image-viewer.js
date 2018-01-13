import React, { Component } from 'react';

export default class ImageViewer extends Component {

	render(){
		const { description, urls, user } = this.props.image;

		return (
			<div className="image-viewer">
				<img src={urls.regular} width="60%" height="auto"></img>
				<h3>{description}</h3>
				<h4>Photograph by {user.name}</h4>
			</div>
		)		
	}
}


