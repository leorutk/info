// Rolagem suave via JavaScript (para navegadores que não suportam scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // compensar altura do menu fixo
        behavior: "smooth"
      });
    }
  });
});
