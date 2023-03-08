import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const currentTime = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onStart, 1000));

function onStart({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}
player.setCurrentTime(localStorage.getItem(currentTime));
