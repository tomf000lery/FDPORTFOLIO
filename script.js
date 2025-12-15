document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  const videoSquares = document.querySelectorAll('a.work-square[data-video]');
  const pdfSquares = document.querySelectorAll('.works-grid .work-square[data-pdf]');


  // Disable page scroll when lightbox is open
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  function enableScroll() {
    document.body.style.overflow = '';
  }

  // VIDEO SQUARES
  videoSquares.forEach(square => {
    square.addEventListener('click', e => {
      e.preventDefault();
      const videoSrc = square.dataset.video;
      const title = square.dataset.title || "Video";
      const description = square.dataset.description || "";

      if (!videoSrc) return;

      lightboxVideo.style.display = "block";
      lightboxVideo.src = videoSrc + "?autoplay=1&rel=0&mute=0";

      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;

      lightbox.style.display = 'flex';
      disableScroll();
    });
  });

  // PDF SQUARES (e.g., 5innen)
  pdfSquares.forEach(square => {
    square.addEventListener('click', () => {
      const pdfSrc = square.dataset.pdf;
      const title = square.querySelector('.placeholder-label')?.textContent || "PDF";
      const description = square.dataset.description || "Placeholder description text for this PDF.";

      lightboxVideo.style.display = "none";
      lightboxVideo.src = "";

      lightboxTitle.textContent = title;
      lightboxDescription.innerHTML = `
        <p>${description}</p>
        <p><a href="${pdfSrc}" target="_blank" style="color:#0af; text-decoration:underline;">Open PDF</a></p>
      `;

      lightbox.style.display = 'flex';
      disableScroll();
    });
  });

  // Close lightbox
  lightboxClose.addEventListener('click', () => {
    lightboxVideo.src = "";
    lightbox.style.display = 'none';
    enableScroll();
  });

  // Close by clicking outside content
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightboxVideo.src = "";
      lightbox.style.display = 'none';
      enableScroll();
    }
  });
});
