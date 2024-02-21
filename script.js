soundManager.setup({
	url: 'https://www.soundmanager2.com/swf/',
	flashVersion: 9,
	onready: function() {
		var track = soundManager.createSound({
			id: 'my-track',
			url: 'music.mp3',
			autoLoad: true,
			autoPlay: false,
			onload: function() {
				console.log('Track loaded');
			}
		});

		document.getElementById('play-button').addEventListener('click', function() {
			track.play();
		});

		document.getElementById('pause-button').addEventListener('click', function() {
			track.pause();
		});

		document.getElementById('stop-button').addEventListener('click', function() {
			track.stop();
		});

		track.addEventListener('onplay', function() {
			console.log('Track playing');
		});

		track.addEventListener('onpause', function() {
			console.log('Track paused');
		});

		track.addEventListener('onstop', function() {
			console.log('Track stopped');
		});

		track.addEventListener('onfinish', function() {
			console.log('Track finished');
		});

		track.addEventListener('onposition', function() {
			var progressBar = document.getElementById('progress-bar');
			progressBar.style.width = (track.position / track.duration) * 100 + '%
