function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}

// Lightbox
const squares = document.querySelectorAll('.work-square');
const lightbox = document.getElementById('video-lightbox');
const lightboxVideo = lightbox.querySelector('.lightbox-video');
const lightboxTitle = lightbox.querySelector('.lightbox-title');
const lightboxDescription = lightbox.querySelector('.lightbox-description');
const lightboxClose = document.getElementById('lightbox-close');

squares.forEach(square => {
  // Hover preview scrubbing
  const hoverVideo = document.createElement('video');
  hoverVideo.src = square.dataset.video ? square.dataset.video.replace('/embed/', '/') + ".mp4" : '';
  hoverVideo.autoplay = true;
  hoverVideo.muted = true;
  hoverVideo.loop = true;
  hoverVideo.style.display = 'none';
  square.appendChild(hoverVideo);

  square.addEventListener('mousemove', e => {
    if (!hoverVideo.src) return;
    const rect = square.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    hoverVideo.currentTime = pct * hoverVideo.duration;
  });

  square.addEventListener('mouseenter', () => {
    if (hoverVideo.src) hoverVideo.style.display = 'block';
  });

  square.addEventListener('mouseleave', () => {
    hoverVideo.style.display = 'none';
  });

  // Click to open lightbox
  square.addEventListener('click', e => {
    e.preventDefault();
    const videoSrc = square.dataset.video;
    const title = square.dataset.title;
    const desc = square.dataset.description;

    if (!videoSrc) return;

    lightboxVideo.src = videoSrc + "&autoplay=1";
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = desc;
    lightbox.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightboxVideo.src = "";
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightboxVideo.src = "";
    lightbox.style.display = 'none';
  }
});

// Topbar scroll hide
let lastScroll = 0;
const topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) topbar.classList.add("hide-topbar");
  else topbar.classList.remove("hide-topbar");
  lastScroll = currentScroll;
});
