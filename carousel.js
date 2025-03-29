let images = document.querySelectorAll(".carousel img");
let links = [
  "https://www.youtube.com/@watrotac/featured",  // youtube link
  "https://x.com/WatroTac", // disgusting x link
  "https://www.instagram.com/elpo_4/"  // chillchugus insta link ART THO
];
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });

  // Update the link
  document.getElementById("carousel-link").href = links[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Auto-scroll every 3 seconds
setInterval(nextImage, 3000);
