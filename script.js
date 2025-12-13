document.addEventListener("DOMContentLoaded", () => {
  /* ===== WORKS GRID LIGHTBOX & HOVER PREVIEW ===== */
  const squares = document.querySelectorAll('a.work-square[data-video]'); // only real videos
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  squares.forEach(square => {
    // Click to open lightbox
    square.addEventListener('click', e => {
      e.preventDefault();
      const videoSrc = square.dataset.video;
      const title = square.dataset.title;
      const description = square.dataset.description;

      lightboxVideo.src = videoSrc + "?autoplay=1&rel=0";
      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;
      lightbox.style.display = 'flex';
    });

    // Hover preview (optional)
    const previewVideo = square.querySelector('video');
    if (previewVideo) {
      square.addEventListener('mouseenter', () => previewVideo.play());
      square.addEventListener('mouseleave', () => { 
        previewVideo.pause(); 
        previewVideo.currentTime = 0;
      });

      // Optional: hover scrub
      square.addEventListener('mousemove', e => {
        const rect = square.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse X inside square
        const percent = x / rect.width;
        previewVideo.currentTime = percent * previewVideo.duration;
      });
    }
  });

  // Close lightbox
  lightboxClose.addEventListener('click', () => {
    lightboxVideo.src = "";
    lightbox.style.display = 'none';
  });

  // Close by clicking outside video
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightboxVideo.src = "";
      lightbox.style.display = 'none';
    }
  });

  /* ===== TOPBAR SLIDE ON SCROLL ===== */
  const topbar = document.getElementById("topbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 50) {
      topbar.classList.add("hide-topbar");
    } else {
      topbar.classList.remove("hide-topbar");
    }
    lastScroll = currentScroll;
  });
});
