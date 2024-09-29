document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = form.querySelector('button[type="submit"]');
  const inputs = form.querySelectorAll("input[required]");

  function checkFormValidity() {
    const allFieldsFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    submitButton.disabled = !allFieldsFilled;
  }

  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  checkFormValidity();
});

// Submiting Form
document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.add("hide");
    const imageContainer = document.querySelector(".image-container");
    imageContainer.classList.add("sent");

    const textOnImage = document.querySelector(".text-on-image");
    textOnImage.textContent = "Thank you";

    const messageText = document.querySelector(".text-center");
    messageText.classList.remove("d-none");
    messageText.classList.add("d-block");
    setTimeout(() => {
      const openForm = document.querySelector("#open-form");
      openForm.classList.remove("d-none");
      openForm.classList.add("d-flex");
    }, 500);
  });

// Opening form
document.querySelector("#open-form").addEventListener("click", function (e) {
  e.preventDefault();
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.remove("hide");
  const imageContainer = document.querySelector(".image-container");
  imageContainer.classList.remove("sent");

  const textOnImage = document.querySelector(".text-on-image");
  textOnImage.textContent = "Community";

  const messageText = document.querySelector(".text-center");
  messageText.classList.add("d-none");
  messageText.classList.remove("d-block");

  const openForm = document.querySelector("#open-form");
  openForm.classList.add("d-none");
  openForm.classList.remove("d-flex");

  setTimeout(() => {
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.remove("hide");
  }, 500);
});
