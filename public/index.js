let i = 0;

let jazz = ['NsB2eya4nFA', 'rNg90PU7Y1s', '2ccaHpy5Ewo', 'zab985qDgnU', 'oQg4VCw24Qo']
let lofi = ['hHW1oY26kxQ','vFtX7iqnKUk','5AEbq6X33A8','c_IVcbEez8o','2L9vFNMvIBE']
let cartoons = ['01ecIQdpjWk','1FUjJzJ4V-I','itX0a6-OVpk','6bRO7nFroYc']

let genre = jazz

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', options);
}

//    DEFAULT ID M7lc1UVf-VE


function onPlayerReady(event) {
    options.videoId = genre[i];
    event.target.playVideo()
  document.getElementById('jazzButton').click()

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

//   var done = false;
//   function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//       setTimeout(stopVideo, 6000);
//       done = true;
//     }
//   }
function stopVideo() {
    player.stopVideo();
}

let options = {
    height: '0px',
    width: '0px',
    videoId: 'NsB2eya4nFA',
    events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
    },
    autoplay: 1,
}
function next() {
    player.stopVideo()
    if (genre[i+1]){
        i = i + 1;
    } else {
        i = 0;
    }
    options.videoId = genre[i];
    player.cueVideoById({
        'videoId' : genre[i]
    })
    // onYouTubeIframeAPIReady();
    player.playVideo();
    console.log(options.videoId);
}

function playLofi(){
    i = 0;
    genre = lofi;
    player.cueVideoById({
        'videoId' : genre[i]
    });
    player.playVideo();
}

function playJazz(){
    i = 0;
    genre = jazz;
    player.cueVideoById({
        'videoId' : genre[i]
    });
    player.playVideo();
}

function playCartoons(){
    i = 0;
    genre = cartoons;
    player.cueVideoById({
        'videoId' : genre[i]
    });
    player.playVideo();
}
