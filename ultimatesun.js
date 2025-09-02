        // Testimonial slider functionality
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            const prevBtn = document.getElementById('prev-testimonial');
            const nextBtn = document.getElementById('next-testimonial');
            let currentSlide = 0;
            
            // Show first slide
            showSlide(currentSlide);
            
            // Next button click handler
            nextBtn.addEventListener('click', function() {
                currentSlide++;
                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }
                showSlide(currentSlide); 
            });
            
            // Previous button click handler
            prevBtn.addEventListener('click', function() {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = slides.length - 1;
                }
                showSlide(currentSlide);
            });
            
            // Auto-rotate testimonials every 5 seconds
            setInterval(function() {
                currentSlide++;
                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }
                showSlide(currentSlide);
            }, 5000);
            
            // Function to show a specific slide
            function showSlide(index) {
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                slides[index].classList.add('active');
            }
        });
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbxOaYPLJK4JKpAD8EwLNsLcpXgCJrK_hrznbQ4cogBwidB0hsf52Q85rbZv3gbTIC7P/exec", {
    method: "POST",
    body: JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    })
  })
  .then(res => res.text())
  .then(data => {
    alert("Message sent successfully!");
    e.target.reset();
  })
  .catch(err => alert("Error: " + err));
});