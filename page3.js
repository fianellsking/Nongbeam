document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    var turntable = document.getElementById('turntable');
    if (audio.paused) {
        audio.play();
        turntable.classList.add('rotate');
        this.textContent = 'Pause Music';
    } else {
        audio.pause();
        turntable.classList.remove('rotate');
        this.textContent = 'Play Music';
    }
});

document.getElementById('playButtons').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayers');
    var turntable = document.getElementById('turntables');
    if (audio.paused) {
        audio.play();
        turntable.classList.add('rotate');
        this.textContent = 'Pause LGG';
    } else {
        audio.pause();
        turntable.classList.remove('rotate');
        this.textContent = 'Play LGG';
    }
});