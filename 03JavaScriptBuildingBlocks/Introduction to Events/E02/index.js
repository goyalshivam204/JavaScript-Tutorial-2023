const btn = document.querySelector("button");
const box = document.querySelector("#videoContainer");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

/* 
This code has a really a logically bug as we click on the video, the click event
also propagated to its parent [bubbles up]  so we need to stop this so we use
stopPropagation
*/ 
// video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

// document.body.addEventListener("click", handleClick, { capture: true }); // reverse the order