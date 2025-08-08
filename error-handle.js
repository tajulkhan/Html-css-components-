// Input auto clear error message 

// Initial function 
function clearError(input) {
  if (!input) return;
  input.classList.remove("error");
  const wrapper = input.closest(".form-group");
  if (wrapper) {
    const err = wrapper.querySelector(".error-message");
    if (err) err.textContent = "";
    const radioErr = wrapper.querySelector(".error-message-radio");
    if (radioErr) radioErr.style.display = "none";
  }
}
