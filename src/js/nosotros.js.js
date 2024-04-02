
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const goTopButton = document.getElementById('goTopButton');

    if (scrollTop > 200) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeRange = document.getElementById('volumeRange');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

playPauseBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
progress.parentElement.addEventListener('click', seek);
volumeBtn.addEventListener('click', toggleMute);
volumeRange.addEventListener('input', setVolume);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
  } else {
    audio.pause();
    playPauseBtn.classList.remove('pause');
    playPauseBtn.classList.add('play');
  }
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';
  currentTime.textContent = formatTime(audio.currentTime);
}

function seek(event) {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function toggleMute() {
  if (audio.volume === 0) {
    audio.volume = volumeRange.value;
    volumeBtn.classList.remove('mute');
    volumeBtn.classList.add('volume');
  } else {
    audio.volume = 0;
    volumeBtn.classList.remove('volume');
    volumeBtn.classList.add('mute');
  }
}

function setVolume() {
  audio.volume = volumeRange.value;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}

audio.addEventListener('loadedmetadata', () => {
  duration.textContent = formatTime(audio.duration);
});
