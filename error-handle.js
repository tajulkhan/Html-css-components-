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
/*
    The code is mostly complete for clearing error messages on input/change events.
    However, make sure:
    1. The variable `form` is defined and references your form element.
    2. The CSS classes `.error`, `.error-message`, and `.error-message-radio` exist in your styles.
    3. The HTML structure matches what `clearError` expects (i.e., `.form-group` wrapping inputs and error messages).
    4. You may want to debounce or throttle the event handlers if your form is large.
    
    Example of defining `form`:
    const form = document.querySelector('form'); // or use your form's selector
*/
