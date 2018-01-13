import React, { Component } from 'react';

export default class PagePicker extends Component {
	render(){
		return (
			<div className="page-picker">
				<button onClick={this.props.decrementPage}>Previous</button>
				<button onClick={this.props.incrementPage}>Next</button>
			</div>
		)
	}
}
