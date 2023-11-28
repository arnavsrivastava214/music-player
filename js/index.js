let play = document.getElementById("play");
let currentStatus = "play";
function playaudio() {
    if (currentStatus == "play") {
        play.play();
        currentStatus = "pause";
        play.nextElementSibling.innerHTML = play.nextElementSibling.classList.replace("fa-play", "fa-pause");
        play.nextElementSibling.innerHTML = '';
    } else {
        play.pause();
        currentStatus = "play";
        play.nextElementSibling.innerHTML = play.nextElementSibling.classList.replace("fa-pause", "fa-play");
        play.nextElementSibling.innerHTML = '';

    }
}