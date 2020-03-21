import React from 'react';
import './Track.css';



class Track extends React.Component {
	render() {
		return (
			<div className="Track">
			  <div className="Track-information">
			    <h3>Track1</h3>
			    <p>TrackArtist | TrackAlbum</p>
			  </div>
			  <button className="Track-action"> + or - </button>
			</div>
		);
	}
}

export default Track;