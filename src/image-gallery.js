import React, { Component } from 'react';
import Image from './image';
import ImageViewer from './image-viewer';
import axios from 'axios';

export default class ImageGallery extends Component {

	constructor(props){
		super(props);
		this.state={
			isViewing: false,
			imageToView: null,
		}
	}

	toggleViewMode = (item) => {
		const newViewState = !this.state.isViewing
		this.setState({ isViewing: newViewState, imageToView: item});
	}

	renderImage = () => {
		return <ImageViewer image={this.state.imageToView} />
	}

	renderImages = (imageList) => {
		const renderedImages = imageList.map((item) => 
			<Image image={item.urls.small} 
				   photographer={item.user.name} 
				   username={item.user.username}
				   social={item.links.html}
				   alt={item.description} 
				   toggleViewMode={this.toggleViewMode} 
				   imageItem={item} />
			);
		return renderedImages;
	}

	renderGallery = () => {
		if (this.state.isViewing) {
			return this.renderImage();
		}
		else {
			return(
				<div className="image-gallery">
		  			{this.renderImages(this.props.imageList)}
		 	 	</div>
		 	 )
		}

	}

	render(){
		return (
			<div>
				{this.renderGallery()}
			</div>
		)
	}

}
