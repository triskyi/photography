// Smooth scrolling for anchor links
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.querySelector('.motto');

    function checkVisibility() {
        var scrollPosition = window.scrollY;
        var elementPosition = textElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 2) {
            textElement.classList.add('visible');
        }
    }

    // Check visibility on initial load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});


function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  
  // Initialize lozad


  const observer = lozad('.lozad', {
    loaded: function (el) {
        el.classList.add('fade'); // Optional: Add a fade effect after the image is loaded
    }
});
observer.observe();


    // Smooth scrolling for anchor links
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 800);
        });
    });

