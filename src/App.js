import React, { Component } from 'react';
import ImageSearch from './image-search';
import ImageGallery from './image-gallery';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      imageList: []
    }
  }

  componentDidMount(){
    this.fetchImages();
  }
  fetchImages = (query = 'food') => {
      axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=4&query=${query}&client_id=93b081480ac377f19162046a944103e8ffefa467d6b59628ba869e47004484cb`
      )
      .then(data => {this.setState({ imageList: data.data.results });})
      .catch(err => {
        console.log('Error Fetching Images', err);
      });
  }

  render(){
    return (
      <div className="app">
        <ImageSearch fetchImages={this.fetchImages}/>
        <p className="unsplash-attribution">Photos from <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"> Unsplash</a> </p>
        <ImageGallery imageList={this.state.imageList}/>
      </div>
    )
  }

}

