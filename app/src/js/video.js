//========= button hover effect =============== //
const playButtonDivs = document.querySelectorAll(
  ".play_button, .play_button_div1, .play_button_div2, .play_button_div3"
);

playButtonDivs.forEach((div) => {
  div.addEventListener("mouseenter", (event) => {
    playButtonDivs.forEach((otherDiv) => {
      otherDiv.style.borderColor = "transparent";
    });

    event.currentTarget.style.borderColor = "blue";
  });

  div.addEventListener("mouseleave", (event) => {
    event.currentTarget.style.borderColor = "transparent";
  });
});

//========== video play logic ============== //

document.addEventListener("DOMContentLoaded", () => {
  const fullscreenVideoContainer = document.getElementById("fullscreen-video");
  const fullscreenPlayer = document.getElementById("fullscreen-player");

  function playVideo() {
    fullscreenVideoContainer.classList.remove("d-none");
    fullscreenVideoContainer.classList.add("d-flex");
    fullscreenPlayer.play();
  }

  function closeVideo() {
    fullscreenPlayer.pause();
    fullscreenVideoContainer.classList.remove("d-flex");
    fullscreenVideoContainer.classList.add("d-none");
  }

  window.playVideo = playVideo;
  window.closeVideo = closeVideo;
});
