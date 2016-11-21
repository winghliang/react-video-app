import React from 'react';

const VideoDetail = (props) => {
	const video = props.video;

	if (!video){
		return <div>Loading...</div>;
	}

	const videoID = video.id.videoId;

	//ES6 syntax - must begin and end with open quotation
	const url = `https://www.youtube.com/embed/${videoID}`;

	return (
		<div className = "video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className = "details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
