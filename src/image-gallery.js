import React, { Component } from 'react';
import Image from './image';
import axios from 'axios';

export default class ImageGallery extends Component {

	renderImages = (imageList) => {
		const renderedImages = imageList.map((item) => <Image image={item.urls.small} photographer={item.user.name} social={item.links.html}/>);
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
