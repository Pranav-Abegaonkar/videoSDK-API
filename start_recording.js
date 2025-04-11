import fetch from 'node-fetch';
const options = {
	method: "POST",
	headers: {
		"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlOTQ0MDMwYy1kODhlLTQ3NTgtOTg0ZC04MjNhMmJiZTZlYzIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTc0MjMwMTEyMCwiZXhwIjoxNzQyOTA1OTIwfQ.KOyhN1xuKp8BYjt6rp_qnoOZ8lQ-x1QDoRFgrZ60P3A",
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		"roomId" : "bwcr-ka48-54d8",
		// "templateUrl" : "https://www.example.com/?token=token&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID",
		// "transcription" : "transcriptionObj",
		// "config" : "configObj",
		"webhookUrl" : "https://webhook.site/d11b3edd-8407-43df-b6ed-f56e26d6444d",
		"awsDirPath" : "test",
		// "preSignedUrl" : "preSignedUrl"
	}),
};
const url= `https://api.videosdk.live/v2/recordings/start`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);