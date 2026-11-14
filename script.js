document.addEventListener("DOMContentLoaded", () => {
  loadFragment("header.html", document.getElementById("header"));
  loadFragment("footer.html", document.getElementById("footer"));

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("primary-navigation");

  if (menuToggle && navigation) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.addEventListener("click", event => {
      if (event.target instanceof Element && event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
});

function loadFragment(url, target) {
  if (!target) {
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to load ${url}: ${response.status}`);
      }
      return response.text();
    })
    .then(content => {
      target.innerHTML = content;
    })
    .catch(error => {
      console.error(error);
    });
}
