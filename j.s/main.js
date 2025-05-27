const toggleMenu = () => {
  document.body.classList.toggle("open");
};
function showImage(imgElement) {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src;
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show();
}

document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(document.getElementById('slider'), {
      interval: 2000, 
      ride: 'carousel'
  });
});


const scrollBtn = document.getElementById("scrollToTopBtn");
const heroSection = document.getElementById("home");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //  خفي الزر
        scrollBtn.classList.remove("show");
      } else {
        // أظهر الزر
        scrollBtn.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1
  }
);

observer.observe(home);

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollIntoView({
    behavior: "smooth"
  });
});

const popup = document.getElementById('imgPopup');
  const popupImg = document.getElementById('popupImage');
  const closeBtn = document.querySelector('.popup .close');

  document.querySelectorAll('.popup-img').forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      popup.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  function playSound() {
    const audio = document.getElementById("myAudio");
    audio.play();
  }

  window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("fade-out");

      // بعد نهاية التأثير، نخفي العنصر تمامًا ونظهر المحتوى
      setTimeout(() => {
        preloader.style.display = "none";
        document.getElementById("mainContent").style.display = "block";
      }, 500);
    }, 3000); 
  });


   document.getElementById('pageSelect').addEventListener('change', function() {
      var selectedPage = this.value;
      if (selectedPage) {
        window.location.href = selectedPage;
      }
    });

function scrollNews(direction) {
  const slider = document.getElementById("newsSlider");
  const scrollAmount = 320;
  if (direction === 'left') {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}
