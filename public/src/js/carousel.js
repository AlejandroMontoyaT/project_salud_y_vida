document.addEventListener("DOMContentLoaded", function() {
  var carouselItems = document.querySelectorAll("#carouselExampleIndicators .carousel-item");
  var currentIndex = 0;

  function nextItem() {
    if (carouselItems.length > 0) {
      carouselItems[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add("active");
    }
  }

  if (carouselItems.length > 0) {
    var interval = setInterval(nextItem, 15000);
  }
});