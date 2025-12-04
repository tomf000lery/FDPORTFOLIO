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
