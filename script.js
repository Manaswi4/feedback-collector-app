let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

function displayFeedback() {
  const list = document.getElementById("feedback-list");
  list.innerHTML = "";
  feedbacks.forEach((f, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${f.name}</strong> <small>${f.time}</small>
      <p>${f.message}</p>
      <button onclick="deleteFeedback(${i})">Delete</button>
    `;
    div.className = "card";
    list.appendChild(div);
  });
}

function deleteFeedback(index) {
  feedbacks.splice(index, 1);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  displayFeedback();
}

document.getElementById("feedback-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const time = new Date().toLocaleString();
  feedbacks.push({ name, message, time });
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  e.target.reset();
  displayFeedback();
});

displayFeedback();
