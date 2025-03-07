//main-image　スライドイン
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".main-image");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });
  
    images.forEach((img) => {
      observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".text-description");

  function fadeInOnScroll() {
    descriptions.forEach((desc) => {
      const rect = desc.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        desc.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // 初回実行
});

