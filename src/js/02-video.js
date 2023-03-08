import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const currentTime = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onStart, 1000));

function onStart({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}
player.setCurrentTime(localStorage.getItem(currentTime));

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });

// const onPlay = function (data) {
//   console.log(data);
// };

// const changeTime = () => {};

// player.on('play', onPlay);
// player.on('timeupdate', changeTime);
