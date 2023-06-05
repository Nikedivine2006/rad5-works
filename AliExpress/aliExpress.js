let dropdown2 = document.getElementById("dropdown2");
let dropdownSelect = document.getElementById("dropdown-select");
let Form = document.getElementById("form");
let AccountSelect = document.getElementById("accont-select");
dropdownSelect.addEventListener("mousemove", () => {
  dropdown2.style.display = "block";
});

dropdown2.addEventListener("mouseleave", () => {
  dropdown2.style.display = "none";
});

AccountSelect.addEventListener("mousemove", () => {
  Form.style.display = "block";
});

Form.addEventListener("mouseleave", () => {
  Form.style.display = "none";
});
