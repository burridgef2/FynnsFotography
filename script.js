// grab the things we need from the page
var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");
var openButton = document.getElementById("open-menu");
var closeButton = document.getElementById("close-menu");


// open and close the menu
var galleryItem = document.querySelector(".has-sub");
var galleryLink = document.getElementById("gallery-link");

// Gallery is not a page. Hovering or clicking it opens the sub panel,
// and it stays open until the menu closes or another menu link is hovered
galleryItem.addEventListener("mouseenter", function () {
  // ignore this while the menu is sliding shut, or it would pop back open
  if (menu.classList.contains("open")) {
    galleryItem.classList.add("open");
  }
});

galleryLink.addEventListener("click", function (event) {
  event.preventDefault();
  galleryItem.classList.add("open");
});

// hovering Home, About Me or My Gear closes the sub panel
var otherItems = document.querySelectorAll("nav > ul > li:not(.has-sub)");
for (var i = 0; i < otherItems.length; i++) {
  otherItems[i].addEventListener("mouseenter", function () {
    galleryItem.classList.remove("open");
  });
}

function openMenu() {
  menu.classList.add("open");
  overlay.classList.add("open");
}

function closeMenu() {
  galleryItem.classList.remove("open");
  menu.classList.remove("open");
  overlay.classList.remove("open");
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// pressing escape also closes it
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});