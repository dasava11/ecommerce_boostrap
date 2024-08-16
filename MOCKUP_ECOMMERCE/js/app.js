const modalImagen = document.querySelector("#modal-imagen");

modalImagen.addEventListener("show.bs.modal", function (event) {
  const ruta = event.relatedTarget;
  const imgModal = ruta.getAttribute("data-bs-img");

  const image = document.createElement("IMG");
  image.src = `img/${imgModal}.jpg`;
  image.classList.add("img-fluid");
  image.alt = "gal";

  const contentModal = document.querySelector(".modal-body");
  contentModal.appendChild(image);
});

modalImagen.addEventListener("hidden.bs.modal", function () {
  const contentModal = document.querySelector(".modal-body");
  contentModal.textContent = "";
});
