// Logo click → Home
function goHome() {
  window.location.href = "index.html";
}

// Highlight active page
const current = window.location.pathname.split("/").pop();

const map = {
  "index.html": "home",
  "televisions.html": "tv",
  "about.html": "about"
};

if (map[current]) {
  document.getElementById(map[current])?.classList.add("active");
}