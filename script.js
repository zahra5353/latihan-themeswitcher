const button = document.getElementById("themeButton");

// Cek preferensi sebelumnya
if (localStorage.getItem("tema") === "gelap") {
  document.body.classList.add("dark-mode");
  button.textContent = "☀️ Ganti ke Mode Terang";
}

// Saat tombol diklik
button.addEventListener("click", function() {
  const isDark = document.body.classList.toggle("dark-mode");

  if (isDark) {
    button.textContent = "☀️ Ganti ke Mode Terang";
    localStorage.setItem("tema", "gelap");
  } else {
    button.textContent = "🌙 Ganti ke Mode Gelap";
    localStorage.setItem("tema", "terang");
  }
});