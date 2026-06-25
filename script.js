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

let currentSlide = 0;
const totalSlides = dots.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.remove("bg-white/50");
      dot.classList.add("bg-white");
    } else {
      dot.classList.remove("bg-white");
      dot.classList.add("bg-white/50");
    }
  });
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Auto Slide
setInterval(() => {
  changeSlide(1);
}, 4000);

 
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
 
