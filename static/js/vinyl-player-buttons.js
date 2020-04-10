const vinylPlayer = document.querySelector("body > .main > .vinyl-player");

const needle = vinylPlayer.querySelector(".needle");
const buttons = vinylPlayer.querySelector(".player-buttons");

const startButton = buttons.querySelector(".start-button");
const stopButton = buttons.querySelector(".stop-button");

const track = new Audio("/static/music/vox-bag.mp3");


track.onended = function() {
    needle.classList.remove("turn-on");
    needle.classList.add("turn-off");
}


startButton.onclick = function() {
    needle.classList.remove("turn-off");
    needle.classList.add("turn-on");
    
    track.play();
}

stopButton.onclick = function() {
    track.pause();
    track.currentTime = 0;
    
    track.onended()
}
