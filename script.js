      // Toggle mobile menu
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");

      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Close mobile menu when a link is clicked
      document.querySelectorAll("#mobile-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.add("hidden");
        }
      });
      
      // Form submission to WhatsApp
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const nama = document.getElementById("nama").value;
          const pesan = document.getElementById("pesan").value;
          const whatsappLink = `https://wa.me/6281282049540?text=Nama: ${encodeURIComponent(
            nama
          )}%0APesan: ${encodeURIComponent(pesan)}`;
          window.open(whatsappLink, "_blank");
        });
        
        // Carousel
        const slides = document.querySelector('.carousel-slide');
        const totalSlides = document.querySelectorAll('.carousel-slide > div').length;
        let slideIndex = 0;

        function showSlide(index) {
            const offset = -index * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide(slideIndex);
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            showSlide(slideIndex);
        }

        document.getElementById('next').addEventListener('click', nextSlide);
        document.getElementById('prev').addEventListener('click', prevSlide);

        setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
    