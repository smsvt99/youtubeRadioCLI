let i = 0;
let j = 0
let playing;
playing = true;
let hidden;

let jazz = ['NsB2eya4nFA', 'rNg90PU7Y1s', '2ccaHpy5Ewo', 'zab985qDgnU', 'oQg4VCw24Qo']
let lofi = ['hHW1oY26kxQ','vFtX7iqnKUk','5AEbq6X33A8','c_IVcbEez8o','2L9vFNMvIBE']
let cartoons = ['01ecIQdpjWk','1FUjJzJ4V-I','itX0a6-OVpk','6bRO7nFroYc']
let themes = ['turntable.mp4', 'lighthouse.mp4', 'city.webm', 'river.mp4', 'grass.mp4', 'camp.mp4', ]

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
    mute: 0,
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

function previous(){
    player.stopVideo()
    if (genre[i-1]){
        i = i - 1;
    } else {
        i = genre.length -1;
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
function pausePlay(){
    if (playing === true){
        playing = false;
        player.stopVideo();
        document.getElementById('square').style.fontSize = "40px";
        document.getElementById('square').innerHTML = "&#x25BA;";
        document.getElementById('square').style.lineHeight = "2.1";
    } else if (playing === false){
        playing = true;
        player.playVideo();
        document.getElementById('square').style.fontSize = "70px";
        document.getElementById('square').innerHTML = "&#x25a0;";
        document.getElementById('square').style.lineHeight = "1.2";

    } 
}
function hawaii(){
    document.getElementById("background").src="hawaii.webm"
}

window.addEventListener('mousemove', function(){

})
// window.onload = function(){
//     console.log('page loaded')
// hideButtons = setTimeout(function(){
//     document.getElementById('square').setAttribute('class', 'animated')
//     document.getElementById('square').setAttribute('class', 'bounce')
// }, 1000)
// }
$(document).ready(function(){
    hideButtons = setTimeout(function(){
        $(".button").addClass('animated fadeOutDown');
        $("#hamburger").addClass('animated fadeOutDown')
    }, 3000)
    window.addEventListener('mousemove', function(){
        if(hidden){
            hidden = false
            $(".button").removeClass('animated fadeOutDown')
            $(".button").addClass('animated fadeInUp')
            $("#hamburger").removeClass('animated fadeOutDown')
            $("#hamburger").addClass('animated fadeInUp')
        }
        clearTimeout(hideButtons)
        hideButtons = setTimeout(function(){
            $(".button").addClass('animated fadeOutDown')
            $("#hamburger").addClass('animated fadeOutDown')
        hidden = true}, 3000)
    })
})

function showDropdown(){
    if (document.getElementById('dropdown').style.display === 'none'){
    document.getElementById('dropdown').style.display = 'flex';}
    else {
    document.getElementById('dropdown').style.display = 'none';}
    }

function changeTheme(){
    if (themes[j+1]){
        j = j + 1
        document.getElementById('background').src = themes[j]
    } else {
        j = 0
        document.getElementById('background').src = themes[j]
    }
}

function animateTitle(){

    colors = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
   setInterval(function(){
    $("#relax").removeClass('animated fadeInDown')
    $("#relax").addClass('animated fadeOutUp')
    setTimeout(function(){
        if (document.getElementById('relax').textContent === 'Relax'){
        document.getElementById("relax").textContent = 'Radio'
    } else {
        document.getElementById('relax').textContent = 'Relax'
    }
        $("#relax").removeClass('animated fadeOutUp')
       document.getElementById("relax").style.color = colors[Math.floor(Math.random() * 9)]
       document.getElementById("relax").style.opacity =  Math.random() + .1;
       $("#relax").addClass('animated fadeInDown')
    },4000)
    }, 8000)
};
animateTitle();

