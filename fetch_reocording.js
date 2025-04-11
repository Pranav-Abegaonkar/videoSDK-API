import fetch from 'node-fetch';
const options = {
	method: "GET",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
};
const recordingId = "your_recordingId";
const url= `https://api.videosdk.live/v2/recordings/${recordingId}`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);