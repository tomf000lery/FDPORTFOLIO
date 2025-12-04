/* ===== Topbar show/hide on scroll ===== */
let lastScroll = 0;
const topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    topbar.classList.add("hide-topbar");
  } else {
    topbar.classList.remove("hide-topbar");
  }
  lastScroll = currentScroll;
});

/* ===== Lightbox for works grid ===== */
const squares = document.querySelectorAll('.work-square');
const lightbox = document.getElementById('video-lightbox');
const lightboxVideo = lightbox.querySelector('.lightbox-video');
const lightboxTitle = lightbox.querySelector('.lightbox-title');
const lightboxDescription = lightbox.querySelector('.lightbox-description');
const lightboxClose = document.getElementById('lightbox-close');

squares.forEach(square => {
  square.addEventListener('click', e => {
    e.preventDefault();
    const videoSrc = square.dataset.video;
    const title = square.dataset.title;
    const description = square.dataset.description;

    if (!videoSrc) return;

    lightboxVideo.src = videoSrc + "?autoplay=1&rel=0&showinfo=0&modestbranding=1";
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    lightbox.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightboxVideo.src = ""; // stop video
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightboxVideo.src = "";
    lightbox.style.display = 'none';
  }
});
