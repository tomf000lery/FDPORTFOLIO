document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll('.work-square');
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  squares.forEach(square => {
    // Lightbox click
    square.addEventListener('click', e => {
      e.preventDefault();
      const videoSrc = square.dataset.video;
      const title = square.dataset.title;
      const description = square.dataset.description;

      if (!videoSrc) return;

      lightboxVideo.src = videoSrc + "?autoplay=1&rel=0";
      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;
      lightbox.style.display = 'flex';
    });

    // Hover preview (optional: requires short mp4 or webm inside each square)
    const previewVideo = square.querySelector('video');
    if (previewVideo) {
      square.addEventListener('mouseenter', () => previewVideo.play());
      square.addEventListener('mouseleave', () => { 
        previewVideo.pause(); 
        previewVideo.currentTime = 0;
      });
    }
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
});
