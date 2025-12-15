document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  // Select both video links and PDF squares
  const videoSquares = document.querySelectorAll('a.work-square[data-video]');
  const pdfSquares = document.querySelectorAll('div.work-square[data-pdf]');

  // VIDEO SQUARES
  videoSquares.forEach(square => {
    square.addEventListener('click', e => {
      e.preventDefault();
      const videoSrc = square.dataset.video;
      const title = square.dataset.title;
      const description = square.dataset.description;

      if (!videoSrc) return;

      lightboxVideo.style.display = "block";
      lightboxVideo.src = videoSrc + "?autoplay=1&rel=0";
      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;
      lightbox.style.display = 'flex';
    });
  });

  // PDF SQUARES
  pdfSquares.forEach(square => {
    square.addEventListener('click', () => {
      const pdfSrc = square.dataset.pdf;
      const title = square.querySelector('.placeholder-label')?.textContent || "PDF";
      const description = square.dataset.description || ""; // optional description

      lightboxVideo.style.display = "none"; // hide video
      lightboxVideo.src = "";               // clear previous video
      lightboxTitle.textContent = title;
      lightboxDescription.innerHTML = `
        <p>${description}</p>
        <p><a href="${pdfSrc}" target="_blank" style="color:#0af; text-decoration:underline;">Open PDF</a></p>
      `;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox
  lightboxClose.addEventListener('click', () => {
    lightboxVideo.src = "";
    lightbox.style.display = 'none';
  });

  // Close by clicking outside
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightboxVideo.src = "";
      lightbox.style.display = 'none';
    }
  });
});
