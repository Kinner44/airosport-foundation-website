// Air O Sport Foundation — nav behavior (keyboard + touch friendly)
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var items = document.querySelectorAll(".has-menu");
  items.forEach(function (item) {
    var btn = item.querySelector("button");
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      items.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".site-nav") && !e.target.closest(".nav-toggle")) {
      items.forEach(function (item) {
        item.classList.remove("open");
        item.querySelector("button").setAttribute("aria-expanded", "false");
      });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      items.forEach(function (item) {
        item.classList.remove("open");
        item.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (nav) nav.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
