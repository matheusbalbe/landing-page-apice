function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  const btnContato = document.querySelector(".btnContato");
  menu.classList.toggle("active");
  btnContato.classList.toggle("mobile");
}
