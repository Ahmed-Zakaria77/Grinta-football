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
