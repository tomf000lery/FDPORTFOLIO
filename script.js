function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}

const squares = document.querySelectorAll('.work-square');
const lightbox = document.getElementById('video-lightbox');
const lightboxVideo = lightbox.querySelector('.lightbox-video');
const lightboxTitle = lightbox.querySelector('.lightbox-title');
const lightboxDescription = lightbox.querySelector('.lightbox-description');
const lightboxClose = document.getElementById('lightbox-close');

squares.forEach(square => {
  square.addEventListener('click', e => {
    e.preventDefault();
    const videoSrc = square.getAttribute('data-video');
    const title = square.getAttribute('data-title');
    const description = square.getAttribute('data-description');

    if (!videoSrc) return;

    lightboxVideo.src = videoSrc + "&autoplay=1";
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
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

const lightbox = document.querySelector(".video-lightbox");
const lightboxVideo = document.querySelector(".lightbox-video");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxDescription = document.querySelector(".lightbox-description");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".work-square").forEach(square => {
  square.addEventListener("click", e => {
    e.preventDefault();
    const videoSrc = square.dataset.video;
    const title = square.dataset.title;
    const desc = square.dataset.description;

    lightboxVideo.src = videoSrc + "?autoplay=1&rel=0";
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = desc;

    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.src = ""; // stop playback
});
