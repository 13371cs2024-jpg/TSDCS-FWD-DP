// Custom cursor effect
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Comment form handling
const commentForm = document.getElementById("commentForm");
const commentsDisplay = document.getElementById("commentsDisplay");

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const newComment = document.createElement("div");
  newComment.classList.add("comment-item");
  newComment.innerHTML = `
    <div class="comment-header">
      <span class="comment-author">${name}</span>
      <span class="comment-date">Just now</span>
    </div>
    <p>${message}</p>
  `;

  commentsDisplay.prepend(newComment);
  commentForm.reset();
});
