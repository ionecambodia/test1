function playVideo(video,title){
    let mainVideo = document.getElementById("main-video");
    let mainTitle = document.getElementById("main-title");
    mainVideo.src = video
    mainTitle.innerHTML = title
}