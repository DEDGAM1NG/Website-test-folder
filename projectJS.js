// JavaScript for handling dropdown buttons and close buttons
const dropdownButtons = document.querySelectorAll(".inner-dropdown-button");
const dropdownContents = document.querySelectorAll(".inner-dropdown-content");
const closeButtons = document.querySelectorAll(".close-button");
dropdownButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Toggle the display of the dropdown content
    dropdownContents[index].classList.toggle("active");
  });

  // Add a close button for each dropdown content
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    // Close the dropdown content when the close button is clicked
    dropdownContents[index].classList.remove("active");
  });

  // Append the close button to the dropdown content
  dropdownContents[index].appendChild(closeButton);
});


closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Close the dropdown content when the close button is clicked
    const parentSection = button.parentElement.parentElement;
    parentSection.querySelector(".dropdown-content").classList.remove("active");
  });
});





