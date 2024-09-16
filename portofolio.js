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