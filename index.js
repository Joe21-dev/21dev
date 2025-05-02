const navbar = document.getElementById('navbar')

function openSidebar(){
    navbar.classList.add('show')

}
function closeSidebar(){
    navbar.classList.remove('show')
}
/* Hero Section */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  
/* toggle dialer app */
function makeCall() {
    window.location.href = "tel:+254721280656";
}
/* toggle WhatsApp */
function openWhatsApp() {
    const phoneNumber = "+254721280656"; // Use international format, no spaces or dashes
    window.location.href = "https://wa.me/" + phoneNumber.replace(/\D/g, '');
  }

/* carousel */
const carousel = document.getElementById('testimonialCarousel');
  function scrollCarousel(direction) {
    const cardWidth = carousel.querySelector('.testimonial-card').offsetWidth + 24;
    carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }

/* Ratings Section */
const stars = document.querySelectorAll(".star");
    const ratingOutput = document.getElementById("ratingValue");
    let selectedRating = 0;
  
    stars.forEach(star => {
      star.addEventListener("click", () => {
        selectedRating = parseInt(star.getAttribute("data-value"));
        updateStars(selectedRating);
        ratingOutput.textContent = `You rated ${selectedRating} star${selectedRating > 1 ? 's' : ''}`;
      });
    });
  
    function updateStars(rating) {
      stars.forEach(star => {
        const val = parseInt(star.getAttribute("data-value"));
        star.classList.toggle("active", val <= rating);
      });
    }
  
    const feedbackForm = document.getElementById("feedbackForm");
    const thankYouMsg = document.getElementById("thankYouMsg");
  
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      thankYouMsg.style.display = "block";
      feedbackForm.reset();
      updateStars(0);
      ratingOutput.textContent = "Select a rating";
    });