// Click Link To Show Links
let link = document.querySelector(".all-links li");
let megaMenu = document.querySelector(".mega-menu");
let landingImage = document.querySelector(".mega-menu .image img");

link.addEventListener("click", () => {
  megaMenu.classList.toggle("show-links");
});

document.addEventListener("click", (e) => {
  if (e.target !== link && e.target !== megaMenu && e.target !== landingImage) {
    if (megaMenu.classList.contains("show-links")) {
      megaMenu.classList.remove("show-links");
    }
  }
});
link.addEventListener("click", (e) => {
  e.stopPropagation();
});
// End
// Start Class
classImage = document.querySelector(".class .class-content .image img");
classImage.addEventListener("click", addImage);
function addImage() {
  // Create Element To Over Lay Page
  divOverLay = document.createElement("div");
  divOverLay.className = "class-Over-lay";
  // Add Element On Page
  document.body.appendChild(divOverLay);
  // Create Element To Put Img
  popupBox = document.createElement("div");
  popupBox.className = "popup-box";
  // Create Img
  popupImage = document.createElement("img");
  popupImage.src = this.src;
  // Add Image To Popup Box
  popupBox.appendChild(popupImage);
  // Add Popup Image To Page
  document.body.appendChild(popupBox);
  document.addEventListener("click", (e) => {
    if (e.target === divOverLay) {
      const popupBox = document.querySelector(".popup-box");
      const overlay = document.querySelector(".class-Over-lay");
      if (popupBox) {
        popupBox.remove();
      }
      if (overlay) {
        overlay.remove();
      }
    }
  });
}

// End Class
//======================================================================
// class Another Syntax

let anotherClass = document.querySelectorAll(".another-content img");

anotherClass.forEach((classes) => {
  classes.addEventListener("click", addImage);
});
//=====================================================================
// ===============================================================
// Constructor

let constructor = document.querySelectorAll(".constructor-content .image img");

constructor.forEach((img) => {
  img.addEventListener("click", addImage);
});

// ===============================================================
// Destructor

let destructor = document.querySelectorAll(".destructor-content .image img");

destructor.forEach((img) => {
  img.addEventListener("click", addImage);
});
// Destructor
// Start Over Loading
document
  .querySelector(".over-loading-content .image img")
  .addEventListener("click", addImage);

// End Over Loading
// Start Default Copy Constructor
let Default = document.querySelector(".default-copy-constructor .image img");

Default.addEventListener("click", addImage);

// End Default Copy Constructor

// Start Pass Object As Argument

let argument = document.querySelectorAll(".object-as-argument .images img");

argument.forEach((img) => {
  img.addEventListener("click", addImage);
});

// End Pass Object As Argument
// Start Static
let staticImage = document.querySelectorAll(".static img");

staticImage.forEach((img) => {
  img.addEventListener("click", addImage);
});

// End Static
// Start operator Over Loading

let operatorImage = document.querySelectorAll(".operator-over-loading img");

operatorImage.forEach((img) => {
  img.addEventListener("click", addImage);
});
