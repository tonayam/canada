// Vanilla Javascript
var input = document.querySelector("#telephone");
window.intlTelInput(input, {
  // options here
  initialCountry: "ng",
  preferredCountries: ["us", "ng"],
  separateDialCode: true,
});

// jQuery
$("#telephone").intlTelInput({
  // options here
  initialCountry: "ng",
  separateDialCode: true,
});

// add a placeholder in the input with an example number for the selected country
var isValid = iti.isValidNumber();
