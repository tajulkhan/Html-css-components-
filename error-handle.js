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

// --- Clear errors on input/change ---
form.addEventListener("input", (e) => {
  if (e.target.matches("input, select, textarea")) {
    clearError(e.target);
  }
});
form.addEventListener("change", (e) => {
  if (e.target.matches("input, select, textarea")) {
    clearError(e.target);
  }
});
