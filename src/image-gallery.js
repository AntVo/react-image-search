import React, { Component } from 'react';
import Image from './image';
import axios from 'axios';

export default class ImageGallery extends Component {

	renderImages = (imageList) => {
		const renderedImages = imageList.map((item) => 
			<Image image={item.urls.small} 
				   imageRaw={item.urls.raw}
				   photographer={item.user.name} 
				   username={item.user.username}
				   social={item.links.html}
				   alt={item.description} />
			);
		return renderedImages;
	}

	render(){
		return (
		  <div className="image-gallery">
		  	{this.renderImages(this.props.imageList)}
		  </div>
		)
	}

}
