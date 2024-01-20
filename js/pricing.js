// DOM ACCESS
const logo = document.querySelector(".logo");
const advertisingCloseİcon = document.querySelector(".advertising-badge");
const pricingstar = document.querySelectorAll(".star-pricing");
// DOM ACCESS

// Reklam kapatma ikonuna tıklama olayı
advertisingCloseİcon.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    advertisingCloseİcon.parentElement.parentElement.style.display = "none";
  }, 100);
});


let isStar = false;
// Yıldız ikonlarına tıklama olayları
pricingstar.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!isStar) {
      e.target.style.color = "rgb(114, 114, 19)";
      isStar = true;
    } else {
      e.target.style.color = "white";
      isStar = false;
    }
  });
});


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

// Sayfa yüklendiğinde modalı gösterme
window.addEventListener("onload", () => {
  document.getElementsByClassName("modal")[0].style.display = "flex";
});
// Modal kapatma olayı
document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = "none";
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
