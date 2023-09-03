console.log("Welcome to mutify")


// Intialize the variable

let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Heeriye - Arijit Singh", filePath: "Songs/1.mp3", coverPath: "Covers/1.jpg"},
    {songName: "Lovers - Taylor Swift", filePath: "Songs/2.mp3", coverPath: "Covers/2.jpg"},
    {songName: "Sach Keh Raha Hai - KK", filePath: "Songs/3.mp3", coverPath: "Covers/3.jpg"},
    {songName: "Mahiye Jinna Sohna - Darshan raval", filePath: "Songs/4.mp3", coverPath: "Covers/4.jpg"},
    {songName: "Raj Karega Khalsa - Sachin Jigar", filePath: "Songs/5.mp3", coverPath: "Covers/5.jpg"},
    {songName: "FARZI - Paisa Hai Toh", filePath: "Songs/6.mp3", coverPath: "Covers/6.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
});

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e) => {
        makeAllplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = (`Songs/${songIndex}.mp3`);
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.play();
        audioElement.currentTime= 0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
  });

  document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 1){
        songIndex = 6 
    }
    else{
        songIndex -=1;
    }
    audioElement.src = (`Songs/${songIndex}.mp3`);
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.play();
    audioElement.currentTime= 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 6){
        songIndex = 1 
    }
    else{
        songIndex +=1;
    }
    audioElement.src = (`Songs/${songIndex}.mp3`);
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.play();
    audioElement.currentTime= 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  })