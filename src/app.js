// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log(
          "ServiceWorker registration successful:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });
  });
}

// Dark mode toggle functionality
const darkModeToggle = () => {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.setItem("darkMode", html.classList.contains("dark"));
};

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.documentElement.classList.add("dark");
}
