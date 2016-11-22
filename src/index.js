import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBZS3NFrBSUPvNVjpEQT-oH-z06HMAkULI';

class App extends Component {
	
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('moon');

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}

	render() {

		// throttles the userVideSearch function so that it can only be called once every 300 ms
		const userVideoSearch = _.debounce( (newTerm) => { this.videoSearch(newTerm) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange = { userVideoSearch }/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={ (userSelectedVideo) => this.setState({selectedVideo: userSelectedVideo}) } 
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))