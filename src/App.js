import React, { Component } from 'react';
import ImageSearch from './image-search';
import ImageGallery from './image-gallery';
import PagePicker from './page-picker';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      imageList: [],
      pageNumber: 3,
      query: "food",
    }
  }

  componentDidMount(){
    this.fetchImages();
  }

  incrementPage = () => {
    this.setState({ pageNumber: this.state.pageNumber+1 });
    this.fetchImages(this.state.query);
  }

  decrementPage = () => {
    this.setState({ pageNumber: this.state.pageNumber-1 });
    this.fetchImages(this.state.query);

  }

  changeQuery = (updatedQuery) => {
    this.setState({ query: updatedQuery });
    this.fetchImages(this.state.query);
  }

  fetchImages = (query = 'food') => {
      axios.get(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber}.&per_page=4&query=${query}&client_id=93b081480ac377f19162046a944103e8ffefa467d6b59628ba869e47004484cb`
      )
      .then(data => {this.setState({ imageList: data.data.results });})
      .catch(err => {
        console.log('Error Fetching Images', err);
      });
  }

  render(){
    return (
      <div className="app">
        <ImageSearch fetchImages={this.fetchImages} pageNumber={this.state.pageNumber} changeQuery={this.changeQuery}/>
        <p className="unsplash-attribution">Photos from <a href="https://unsplash.com/?utm_source=image-editor&utm_medium=referral"> Unsplash</a> </p>
        <PagePicker incrementPage={this.incrementPage} decrementPage={this.decrementPage}/>
        <ImageGallery imageList={this.state.imageList}/>
      </div>
    )
  }

}

