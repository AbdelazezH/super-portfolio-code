document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".notion-video video");

    videos.forEach(video => {
        video.loop = true;  // Enable looping
        video.setAttribute("playsinline", ""); // Ensure inline playback on mobile
        video.setAttribute("muted", ""); // Mute to enable autoplay in some browsers
        video.play(); // Start playing automatically

        // Ensure play button remains accessible
        video.addEventListener("click", function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const iframes = document.querySelectorAll(".notion-embed iframe");

    iframes.forEach(iframe => {
        let src = iframe.src;

        // Ensure the YouTube URL includes loop, autoplay, and controls parameters
        if (src.includes("youtube.com/embed")) {
            src = src.split("?")[0]; // Remove existing query params
            src += "?autoplay=1&loop=1&playlist=" + getYouTubeVideoID(src) + "&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1";
            iframe.src = src;
        }
    });

    function getYouTubeVideoID(url) {
        const match = url.match(/embed\/([^?]+)/);
        return match ? match[1] : "";
    }
});
