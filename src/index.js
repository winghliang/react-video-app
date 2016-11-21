import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBZS3NFrBSUPvNVjpEQT-oH-z06HMAkULI';

// FUNCTIONAL COMPONENT BELOW
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

// CHANGED TO A CLASSED-BASED COMPONENT TO BE ABLE TO KEEP TRACK OF YOUTUBE SEARCH RESULTS THROUGH STATE
class App extends Component {
	
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'basketball'}, (videos) => {

			// *** when the key and the variable name is the same, can just use the name
			// so the below is the same as saying: this.setState( {videos: videos} );
			// this.setState( {videos} );

			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});

	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={ (userSelectedVideo) => this.setState({selectedVideo: userSelectedVideo}) } 
					videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'))