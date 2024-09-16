const btnSubmit = document.querySelector(".btn-subscribe");
const lblError = document.querySelector(".text-error");
const emailInput = document.querySelector("#emailInput");
const emailConfim = document.querySelector("#emailConfim");
const modal = new bootstrap.Modal('#exampleModal')
const errorMessage = "Valid email required";
// modal.show()

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const email = emailInput.value;

  // varlidar email
  let success = true;
  if (email.length > 4) {
    const indexOfAt = email.indexOf("@");
    const indexOfPoint = email.indexOf(".", indexOfAt);
    if (indexOfPoint > indexOfAt && indexOfPoint + 1 < email.length) {
      // console.log(email);
      emailConfim.textContent = email;
      modal.show()
    } else {
      success = false;
    }
  } else {
    success = false;
  }
  if (!success) showError(errorMessage);
});

function showError(message) {
  console.log(message);
  lblError.textContent = message;
  lblError.classList.remove("d-none");
  setTimeout(() => {
    lblError.classList.add("d-none");
  }, 5000);
}


function onClickClose () {
  emailInput.value = ""
  modal.hide()
}