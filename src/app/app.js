const form = document.querySelector(".form");
const emailInput = document.querySelector(".form__input");
const error = document.querySelector(".form__error");

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const clearError = () => {
  if (!error) return;

  error.textContent = "";
  form.classList.remove("error");
};

const showError = (message) => {
  if (!error) return;

  form.classList.add("error");
  error.textContent = message;
};

const showSuccessUI = () => {
  if (!(emailInput instanceof HTMLInputElement)) return;
  emailInput.value = "";
};

const emailValidation = (input) => {
  if (!input) {
    return showError("Input can't be empty.");
  }
  if (!isValidEmail(input)) {
    return showError("Email is incorrect.");
  }

  clearError();
  showSuccessUI();
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!(emailInput instanceof HTMLInputElement)) return;

  emailValidation(emailInput.value);
});
