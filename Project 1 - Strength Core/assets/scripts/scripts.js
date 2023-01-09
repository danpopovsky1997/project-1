window.addEventListener('scroll', function() {
    var header = document.getElementById('my-header');
    var rect = header.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });

  window.addEventListener('scroll', function() {
    var slideshow = document.getElementById('slideshow');
    var rect = slideshow.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      var images = slideshow.getElementsByTagName('img');
      for (var i = 0; i < images.length; i++) {
        images[i].style.transition = "opacity 1.5s " + (i * 1.5) + "s";
        images[i].style.opacity = 1;
      }
    }
  });
