document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".notion-video video");

    videos.forEach(video => {
        video.loop = true;  // Enable looping
        video.setAttribute("playsinline", ""); // Ensure inline playback on mobile
        video.setAttribute("muted", ""); // Mute to enable autoplay in some browsers
        video.play(); // Start playing automatically
    });
});
