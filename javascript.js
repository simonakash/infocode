// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  slidesPerGroup: 1,
  breakpoints: {
    600: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    800: {
      slidesPerView: 7,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// sidebar slide
// $(".sidebar-menu-button").click(function () {
//   $(".sidebar").toggleClass("translate-x-full");
//   $(".hover-bg").fadeToggle();
//   if ($(".sidebar").not("translate-x-full")) {
//     $(".sidebar-options").fadeOut(500);
//   }
// });

/*
function sidebar() {
  return {
    sidebarOpen: false,
    sidebarProductMenuOpen: true,
    openSidebar() {
      this.sidebarOpen = false;
    },
    closeSidebar() {
      this.sidebarOpen = true;
    },
    sidebarProductMenu() {
      if (this.sidebarProductMenuOpen === false) {
        this.sidebarProductMenuOpen = true;
        window.localStorage.setItem("sidebarProductMenuOpen", "close");
      } else {
        this.sidebarProductMenuOpen = false;
        window.localStorage.setItem("sidebarProductMenuOpen", "open");
      }
    },
    checkSidebarProductMenu() {
      if (window.localStorage.getItem("sidebarProductMenuOpen")) {
        if (window.localStorage.getItem("sidebarProductMenuOpen") === "open") {
          this.sidebarProductMenuOpen = false;
        } else {
          this.sidebarProductMenuOpen = true;
          window.localStorage.setItem("sidebarProductMenuOpen", "close");
        }
      }
    },
  };
}
*/

// tabs section
/*
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {
  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }

  // activate new tabs and panel
  event.target.classList.add("active");
  let classString = event.target.getAttribute("data-target");
  console.log(classString);
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", onTabClick, false);
}

//  tailwind configuration

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#1479FF",
        secondary: "#2E3A44",
        third: "#92A2C3",
      },
    },
  },
};
*/

/*
// toggle
$("#panel-1").click(function () {
  $(".btn-svg").eq(0).addClass("activeclass");
  $(".btn-svg").eq(1).removeClass("activeclass");
  $(".btn-svg").eq(2).removeClass("activeclass");
  $(".btn-svg").eq(3).removeClass("activeclass");
});
$("#panel-2").click(function () {
  $(".btn-svg").eq(1).addClass("activeclass");
  $(".btn-svg").eq(0).removeClass("activeclass");
  $(".btn-svg").eq(2).removeClass("activeclass");
  $(".btn-svg").eq(3).removeClass("activeclass");
});
$("#panel-3").click(function () {
  $(".btn-svg").eq(2).addClass("activeclass");
  $(".btn-svg").eq(0).removeClass("activeclass");
  $(".btn-svg").eq(1).removeClass("activeclass");
  $(".btn-svg").eq(3).removeClass("activeclass");
});
$("#panel-4").click(function () {
  $(".btn-svg").eq(3).addClass("activeclass");
  $(".btn-svg").eq(0).removeClass("activeclass");
  $(".btn-svg").eq(1).removeClass("activeclass");
  $(".btn-svg").eq(2).removeClass("activeclass");
});
*/