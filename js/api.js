const bouton = document.querySelector("#fetch-dog");
const image = document.querySelector("img");

bouton.addEventListener("click", async () => {
  callAPI();
});

async function callAPI() {
  var fetchResult = await fetch("https://random.dog/woof.json");
  var data = await fetchResult.json();

  if (data.url.includes(".mp4") || data.url.includes("webm")) {
    callAPI();
    return;
  } else {
    image.src = data.url;
  }
}
