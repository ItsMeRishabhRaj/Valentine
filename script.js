const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "You";

document.getElementById("question").innerText =
    `${name}, will you be my Valentine? 💖`;

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 80;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
document.getElementById("yesBtn").onclick = () => {
    document.body.innerHTML = `
    <div style="text-align:center;">
      <h1>YAY!!! 🎉💘</h1>
      <h2>${name} said YES 😍</h2>
      <img src="celebration.gif" 
           alt="celebration"
           style="width:250px; margin-top:20px;" />
    </div>
  `;
};

