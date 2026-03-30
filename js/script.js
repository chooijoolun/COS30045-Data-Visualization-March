function goHome() {
  window.location.href = "index.html";
}

// Highlight current page
const page = window.location.pathname.split("/").pop();

if (page === "index.html") {
  document.getElementById("home")?.classList.add("active");
}
if (page === "televisions.html") {
  document.getElementById("tv")?.classList.add("active");
}
if (page === "about.html") {
  document.getElementById("about")?.classList.add("active");
}