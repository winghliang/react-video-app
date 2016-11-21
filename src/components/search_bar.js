import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { term: '' }; 
	}

	render(){
		return (
			<div className="search-bar">
				<p>Search for a video: <input onChange={ (event) => this.setState({ term: event.target.value }) } /> </p>
			</div>
		);
	}

}

export default SearchBar;