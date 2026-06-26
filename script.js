const announcements = [
    "New Launches Every Thursday, 11 AM IST",
    "We're coming to your city. Shop offline | <a href='#' class='underline '>View Exhibitions</a>"
  ];

  let annCurrent = 0;

  function updateAnnouncement() {
    document.getElementById('ann-text').innerHTML = announcements[annCurrent];
  }

  function changeAnnouncement(dir) {
    annCurrent = (annCurrent + dir + announcements.length) % announcements.length;
    updateAnnouncement();
  }

  // Auto slide every 3 seconds
  setInterval(() => changeAnnouncement(1), 3000);

  updateAnnouncement(); 
 



  // hero section 
  const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

// Original slides
const slides = slider.children;
const totalSlides = slides.length;

// Clone first & last slide
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

let currentSlide = 1;

// Start from first original slide
slider.style.transition = "none";
slider.style.transform = `translateX(-${currentSlide * 100}%)`;

setTimeout(() => {
  slider.style.transition = "transform 0.7s ease-in-out";
}, 50);

function updateDots() {
  let active = currentSlide - 1;

  if (currentSlide === 0) active = totalSlides - 1;
  if (currentSlide === totalSlides + 1) active = 0;

  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-white", index === active);
    dot.classList.toggle("bg-white/50", index !== active);
  });
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function changeSlide(direction) {
  currentSlide += direction;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index + 1;
  updateSlider();
}

slider.addEventListener("transitionend", () => {

  // Last clone → Original first
  if (currentSlide === totalSlides + 1) {
    slider.style.transition = "none";
    currentSlide = 1;
    slider.style.transform = `translateX(-100%)`;

    setTimeout(() => {
      slider.style.transition = "transform 0.7s ease-in-out";
    }, 20);
  }

  // First clone → Original last
  if (currentSlide === 0) {
    slider.style.transition = "none";
    currentSlide = totalSlides;
    slider.style.transform = `translateX(-${totalSlides * 100}%)`;

    setTimeout(() => {
      slider.style.transition = "transform 0.7s ease-in-out";
    }, 20);
  }

  updateDots();
});

updateDots();




// =========================
// Mobile Swipe Support
// =========================

let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      changeSlide(1);   // Left swipe → Next
    } else {
      changeSlide(-1);  // Right swipe → Previous
    }
  }

  startX = 0;
  endX = 0;
});
 



//  hamburger
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  // Open Menu
  function openMenu() {
    mobileMenu.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  // Close Menu
  function closeMenu() {
    mobileMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  // Close on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // Close when screen becomes desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });

  // Close when clicking any menu link
  document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });




// subscribe button
function subscribe() {
  const phone = document.getElementById("phone");
  const phoneNumber = phone.value.trim();

  // Empty check
  if (phoneNumber === "") {
    alert("Please enter your phone number.");
    return;
  }

  // Exactly 10 digits & starts with 6,7,8,9
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phoneNumber)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  alert("Thank you for subscribing!");
  phone.value = "";
}





const buttons = document.querySelectorAll(".footer-btn");

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const content = btn.nextElementSibling;
        const arrow = btn.querySelector(".arrow");

        content.classList.toggle("hidden");

        if(content.classList.contains("hidden")){
            arrow.textContent = "+";
        }else{
            arrow.textContent = "−";
        }

    });

});
 
