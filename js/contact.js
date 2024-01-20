const logo = document.querySelector(".logo");
// Çerez kabulü fonksiyonu
function acceptCookies() {
  document.getElementById("cookie-consent").style.display = "none";
  document.getElementsByClassName("footer")[0].style.paddingBottom = "0px";
  document.querySelector(".screen-right-contact-icon").style.bottom = "40px";
  document.querySelector(".returntop").style.bottom = "120px";
}
// Logo üzerine gelme ve çıkma olayları
logo.addEventListener("mouseover", () => {
  logo.children[0].children[0].classList.add("fa-bounce");
});
logo.addEventListener("mouseout", () => {
  logo.children[0].children[0].classList.remove("fa-bounce");
});

// Toggle navbar'ı gösterme veya gizleme fonksiyonu
let toggleClick = false;
function togglebarShow() {
  if (!toggleClick) {
    document.getElementsByClassName("toggle-navbar")[0].style.display = "block";
    toggleClick = true;
  } else {
    document.getElementsByClassName("toggle-navbar")[0].style.display = "none";
    toggleClick = false;
  }
}
