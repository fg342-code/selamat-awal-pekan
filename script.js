const scene = document.querySelector(".scene");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const musicButton = document.getElementById("musicButton");
const instruction = document.getElementById("instruction");
const music = document.getElementById("backgroundMusic");

document.getElementById("tanggal").textContent =
  new Date().toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

async function playMusic() {
  try {
    await music.play();
    musicButton.textContent = "Ⅱ Jeda Musik";
  } catch (error) {
    instruction.textContent = "Tekan tombol Putar Musik jika suara belum berjalan.";
  }
}

function pauseMusic() {
  music.pause();
  musicButton.textContent = "♫ Putar Musik";
}

openButton.addEventListener("click", async () => {
  if (!scene.classList.contains("open")) {
    scene.classList.add("open");
    instruction.textContent = "Amplop terbuka! Tekan Baca Surat untuk membaca pesannya.";
    openButton.textContent = "Baca Surat";
    await playMusic();
  } else {
    scene.classList.add("reading");
    instruction.textContent = "Selamat membaca. Musik bisa dijeda kapan saja.";
    openButton.hidden = true;
    closeButton.hidden = false;
  }
});

closeButton.addEventListener("click", () => {
  scene.classList.remove("reading", "open");
  instruction.textContent = "Ada surat untukmu. Tekan tombol di bawah untuk membukanya.";
  openButton.textContent = "✉ Buka Surat";
  openButton.hidden = false;
  closeButton.hidden = true;
});

musicButton.addEventListener("click", () => {
  if (music.paused) playMusic();
  else pauseMusic();
});
