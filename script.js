document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll('.work-square'); // include all work squares
  const lightbox = document.getElementById('video-lightbox');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxClose = document.getElementById('lightbox-close');

  squares.forEach(square => {
    square.addEventListener('click', e => {
      e.preventDefault();

      const type = square.dataset.type;

      if (type === 'video') {
        // handle video
        const videoSrc = square.dataset.video;
        const title = square.dataset.title;
        const description = square.dataset.description;

        if (!videoSrc) return;

        lightboxVideo.style.display = 'block';
        lightboxVideo.src = videoSrc + "?autoplay=1&rel=0";
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        lightbox.style.display = 'flex';

      } else if (type === 'pdf') {
        // handle PDF
        const pdfSrc = square.dataset.pdf;

        lightboxVideo.style.display = 'none'; // hide video
        lightboxTitle.textContent = '5INNEN';
        lightboxDescription.innerHTML = `
          <p>The core idea of 5innen was to create a place where all artforms could meet. 
          We debuted this concept in summer 2021 by arranging a one-day festival called 5innen – derived from the Swedish word <em>Sinnen</em>, meaning senses – and the '5' standing for all of them.</p>

          <p>The festival took place in and outside an amphitheater in a park called Vitabergsparken in Stockholm. The day was a taste of what’s to come, with a line-up of different up-and-coming and underground artists from various genres performing in the amphitheater throughout the day.</p>

          <p>On the hill behind the theater, there were tents placed in a circle with a gazebo in the middle. In the tents, various designers sold clothes and merchandise from their brand, and culinary artists from different cultures sold food. The gazebo acted as a gallery, displaying paintings from two Stockholm-based artists. It was an experience for all five senses.</p>

          <p>We have since then arranged a set of events of all kinds – from smaller gigs to release parties and shows, including art exhibitions and runways. The point was to give creators a platform, which we succeeded in doing to say the least.</p>

          <p>Since then, 5innen has evolved into a concept house, working to portray, rebrand, and market creators and their art by arranging events where we handle production from start to finish. We don’t make money from the artists, but through collaborations and sponsors.</p>

          <p>My role in 5innen has been wide due to being one of the two founders. From conceptualizing the brand and creating a clear identity and logo, to leading projects, administration, logistics, and acting as CD/AD completely or partially on all projects. I also handle internal and external communication with partners, sponsors, guests, and potential prospects.</p>

          <p>The idea was born from a desire to address mental health issues, prevalent in Sweden and the Western world. We believe “The opposite of depression is expression.” With this in mind, we created 5innen to give creators a platform to express themselves and inspire visitors to do the same.</p>

          <p>The logo was inspired by the Eye of Horus, replacing the ornamental detail with a '5'. The Eye of Horus represents the mind, the starting point of creation. This aligns perfectly with 5innen’s motto: “We create the world we want to live in.”</p>

          <p> The logo serves both as inspiration and a reminder that everything created by humans begins in the same place: the mind.</p>

          <p><a href="https://www.instagram.com/5innen.inc/" target="_blank">@5innen.inc</a></p>

          <p><a href="${pdfSrc}" target="_blank">Download 5innenCV.pdf</a></p>
        `;

        lightbox.style.display = 'flex';
      }
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightboxVideo.src = "";
    lightboxVideo.style.display = 'block';
    lightboxDescription.innerHTML = "";
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightboxVideo.src = "";
      lightboxVideo.style.display = 'block';
      lightboxDescription.innerHTML = "";
      lightbox.style.display = 'none';
    }
  });
});


