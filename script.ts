document.addEventListener("DOMContentLoaded", () => {
    // Get the hover link element
    const hoverLink = document.getElementById("hover-link");
  
    // Add event listener for hover effect
    hoverLink?.addEventListener("mouseenter", () => {
      if (hoverLink.classList.contains("hovered")) {
        hoverLink.classList.remove("hovered");
      } else {
        hoverLink.classList.add("hovered");
      }
    });
  });
  