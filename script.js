function revealText(element) {
  const response = element.nextElementSibling;
  if (response.style.display === "none") {
      response.style.display = "block";
  } else {
      response.style.display = "none";
  }
}
