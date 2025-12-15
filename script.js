document.addEventListener("DOMContentLoaded", () => {
  /* ===== WORKS GRID LIGHTBOX ===== */
  const squares = document.querySelectorAll('.work-square'); // all squares
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  squares.forEach(square => {
    square.addEventListener('click', e => {
      e.preventDefault();

      // If it's a video
      if (square.dataset.video) {
        lightboxVideo.src = square.dataset.video + "?autoplay=1&rel=0";
        lightboxVideo.style.display = "block"; // show iframe
        lightboxTitle.textContent = square.dataset.title || "";
        lightboxDescription.textContent = square.dataset.description || "";
        lightbox.style.display = 'flex';
      } 
      // If it's a PDF/info box
      else if (square.dataset.pdf) {
        lightboxVideo.style.display = "none"; // hide iframe
        lightboxTitle.textContent = "5INNEN";
        lightboxDescription.innerHTML = `
          The core idea of 5innen was to create a place where all artforms could meet. 
          We debuted this concept in summer 2021 by arranging a one-day festival called 5innen - derived from the Swedish word <em>Sinnen</em>, meaning senses - and the ‘5’ standing for all of them.

          <br><br>
          The festival took place in and outside an amphitheater in a park called Vitabergsparken in Stockholm. The day was a taste of what’s to come, with a lineup of different up-and-coming and/or underground artists from various genres performing in the amphitheater throughout the day.
          On the hill behind the theater, there were tents arranged in a circle with a gazebo in the middle. In the tents, various designers sold clothes and merchandise from their brand, and culinary artists from different cultures sold food. The gazebo acted as a gallery. Paintings by two Stockholm-based artists were displayed. It was an experience for all five senses.

          <br><br>
          Thereafter, we arranged a set of events of all kinds — from smaller gigs to release parties, shows, art exhibitions, and runways. The point was to give the creative a platform, which we succeeded in doing, to say the least.

          <br><br>
          Since 5innen has been formed into a concept house, it works to portray, rebrand, and market creators and their art by arranging events where we handle the production from start to finish. We don’t make money on the artists, but through financing via collaborations and sponsors.

          <br><br>
          My role as one of the two founders has been broad: coming up with fitting concepts, creating the brand identity and logo, leading projects, handling administration, logistics, and bureaucracy. I acted as CD/AD completely or partially in all projects, and handled in-house and external communications with partners, sponsors, guests, and prospects.

          <br><br>
          The reason this idea was created is simple: we saw a problem affecting much of the Western world — mental health issues. By chance, both my collaborator and I had researched how to prevent and counteract this problem. As the saying goes, “The opposite of depression is expression.” With this in mind, we created 5innen — to give creators a platform to express themselves, and to inspire visitors to do the same.

          <br><br>
          The logo mark is inspired by the Eye of Horus. Initially, we considered referencing the symbol directly, but instead used a 5 in place of the usual ornamental detail. The Eye of Horus represents the mind, believed by the ancient Egyptians to be where everything begins and ends. It aligns perfectly with 5innen’s motto: “We create the world we want to live in.” The logo serves to inspire and remind us that everything we see, everything created by humans, starts in the mind.

          <br><br>
          On Instagram: <a href="https://www.instagram.com/5innen.inc/" target="_blank">5innen.inc</a>
        `;
        lightbox.style.display = 'flex';
      }
    });
  });

  /* ===== CLOSE LIGHTBOX ===== */
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

