document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  // Select video and PDF squares
  const videoSquares = document.querySelectorAll('a.work-square[data-video]');
  const pdfSquares = document.querySelectorAll('.works-grid .work-square[data-pdf]');

  // Disable/enable page scroll
  const disableScroll = () => document.body.style.overflow = 'hidden';
  const enableScroll = () => document.body.style.overflow = '';

  // Open video squares
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

      // ===== PDF SQUARES (like 5innen) =====
  document.addEventListener('click', e => {
    const pdfSquare = e.target.closest('.work-square[data-pdf]');
    if (!pdfSquare) return;

    const pdfFile = pdfSquare.dataset.pdf;
    if (!pdfFile) return;

    // Open PDF in new tab
    window.open(pdfFile, '_blank');
  });
  });

  // Open PDF squares
  pdfSquares.forEach(square => {
    square.addEventListener('click', () => {
      const pdfSrc = square.dataset.pdf;
      const title = square.querySelector('.placeholder-label')?.textContent || "PDF";
      const description = square.dataset.description || "Placeholder text for PDF description.";

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
  const closeLightbox = () => {
    lightboxVideo.src = "";
    lightbox.style.display = 'none';
    enableScroll();
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // ALWAYS hide side scroll
  document.body.style.overflowY = 'hidden';
});

