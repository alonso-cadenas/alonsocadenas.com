const subtitles = [
  "Software Engineer 💻",
  "Technical Leader 🚀",
  "Optimist ✨",
  "Curious Learner 🔍",
  "Husband ❤️",
  "Father ☀️",
  "Foodie 🥗",
  "Music Lover 🎵",
  "Soccer Fan ⚽",
  "Nature Seeker 🌳",
];

const FADE_IN_DURATION = 2000;
const FADE_OUT_DURATION = 2000;

export function cycleSubtitles() {
  let currentIndex = 0;
  const subtitleElement = document.getElementById("subtitle");

  if (!subtitleElement) {
    console.error("Unable to cycle subtitles.");
    return;
  }

  function setNextSubtitle() {
    // Start fade-out animation
    subtitleElement.classList.remove("fade-in");
    subtitleElement.classList.add("fade-out");

    // Wait for fade-out to complete before updating the text and starting fade-in
    setTimeout(() => {
      // Set next subtitle
      currentIndex = (currentIndex + 1) % subtitles.length;
      subtitleElement.textContent = subtitles[currentIndex];

      // Start fade-in animation
      subtitleElement.classList.remove("fade-out");
      subtitleElement.classList.add("fade-in");
    }, FADE_OUT_DURATION);
  }

  // Start the first fade-in on page load
  subtitleElement.textContent = subtitles[currentIndex];
  subtitleElement.classList.add("fade-in");

  // Schedule the first fade-out to start after the fade-in
  setTimeout(() => {
    setNextSubtitle();
    setInterval(setNextSubtitle, FADE_OUT_DURATION + FADE_IN_DURATION);
  }, FADE_IN_DURATION);
}
