// Slider için gerekli DOM öğelerini alın
const sliderimage = document.getElementsByClassName("slider-image");
const icons = document.querySelector(".slider-icons");
const logo = document.querySelector(".logo");
const icon1 = icons.firstElementChild;
const icon2 = icons.firstElementChild.nextElementSibling;
const icon3 = icons.lastElementChild;
const pricingstar = document.querySelectorAll(".star-pricing");
// Yıldız ikonları için bir durum değişkeni
let isStar = false;
// Başlangıçta slider durumu sağlar
sliderimage[0].style.backgroundImage = `linear-gradient(rgba(67, 161, 193, 0.3), rgba(81, 175, 181, 0.6)),url('./image/sliderimage/1.jpg')`;
icon1.style.opacity = "1.0";
icon2.style.opacity = "0.5";
icon3.style.opacity = "0.5";
// Çerez kabulü fonksiyonu
function acceptCookies() {
  document.getElementById("cookie-consent").style.display = "none";
  document.getElementsByClassName("footer")[0].style.paddingBottom = "0px";
  document.querySelector(".screen-right-contact-icon").style.bottom = "40px";
  document.querySelector(".returntop").style.bottom = "120px";
}

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

let times = 60;
// Slider ikonlarına tıklama olayları
icon1.addEventListener("click", function () {
  updateSlider("1.jpg", icon1, icon2, icon3);
  times = 60;
});
icon2.addEventListener("click", function () {
  updateSlider("2.jpg", icon2, icon1, icon3);
  times = 40;
});
icon3.addEventListener("click", function () {
  updateSlider("3.jpg", icon3, icon2, icon1);
  times = 20;
});

// Otomatik slider değişimi
function timer() {
  times--;
  if (times == 40) {
    updateSlider("2.jpg", icon2, icon1, icon3);
  } else if (times == 20) {
    updateSlider("3.jpg", icon3, icon2, icon1);
  } else if (times == 0) {
    updateSlider("1.jpg", icon1, icon2, icon3);
    times = 60;
  }
}
setInterval(timer, 500);

// Logo üzerine gelme ve çıkma olayları
logo.addEventListener("mouseover", () => {
  logo.children[0].children[0].classList.add("fa-bounce");
});
logo.addEventListener("mouseout", () => {
  logo.children[0].children[0].classList.remove("fa-bounce");
});

// Slider'ı güncelleyen yardımcı fonksiyon
function updateSlider(imageName, activeIcon, inactiveIcon1, inactiveIcon2) {
  // Slider ve ikon renk düzenlemeleri
  sliderimage[0].style.opacity = 0; // Geçiş başlamadan önce opaklığı sıfırla
  setTimeout(() => {
    sliderimage[0].style.backgroundImage = `linear-gradient(rgba(67, 161, 193, 0.3), rgba(81, 175, 181, 0.6)),url('./image/sliderimage/${imageName}')`;
    activeIcon.style.opacity = "1.0";
    inactiveIcon1.style.opacity = "0.5";
    inactiveIcon2.style.opacity = "0.5";
    sliderimage[0].style.opacity = 1; // Geçiş bittiğinde opaklığı geri ayarla
  }, 1000);
}

// Modalı kapatma fonksiyonu
function closeModal() {
  document
    .getElementsByClassName("registermodal-content")[0]
    .classList.add("animate__animated");
  document
    .getElementsByClassName("registermodal-content")[0]
    .classList.add("animate__zoomOutDown");
  setTimeout(() => {
    document.getElementById("registerModal").style.display = "none";
  }, 2000);
}
// Toggle navbar'ı gösterme veya gizleme fonksiyonu
let toggleClick = false;
function togglebarShow() {
  if (!toggleClick) {
    document.getElementsByClassName("toggle-navbar")[0].style.display = "block";
    document
      .getElementsByClassName("toggle-navbar")[0]
      .classList.add("animate__animated");
    document
      .getElementsByClassName("toggle-navbar")[0]
      .classList.add("animate__fadeIn");
    toggleClick = true;
  } else {
    document.getElementsByClassName("toggle-navbar")[0].style.display = "none";
    document
      .getElementsByClassName("toggle-navbar")[0]
      .classList.remove("animate__animated");
    document
      .getElementsByClassName("toggle-navbar")[0]
      .classList.remove("animate__fadeIn");
    toggleClick = false;
  }
}



