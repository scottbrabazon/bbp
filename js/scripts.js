// MOBILE NAVIGATION BURGER TOGGLE

let id = null; 
let pos = -1000;
const elem = document.getElementById("nav");
const button = document.getElementById("nav-button");

const openMenu = () => {
   if (pos === 0) {
      clearInterval(id);
   } else {
      pos += 10;
      elem.style.left = pos + 'px';
   }
}

const closeMenu = () => {
   if (pos === -1000) {
      clearInterval(id);
   } else {
      pos -= 10;
      elem.style.left = pos + 'px';
   }
}

const slideMenu = () => {
   elem.classList.toggle("open");
   button.classList.toggle("open");
   if (pos === -1000) {
      id = setInterval(openMenu, 1);
      openMenu()

   } else {
      clearInterval(id);
      id = setInterval(closeMenu, 1);
      closeMenu()
   }
}

const closeOnSelection = () => {
   elem.classList.toggle("open");
   button.classList.toggle("open");
   clearInterval(id);
   id = setInterval(closeMenu, 1);
   closeMenu()
}


// ADJUST OVERFLOW OF HEADER IF THERE IS EXCESSIVE CONTENT

const headerTextContainerHeight = document.getElementById("header-text-container").clientHeight;
const headerVideoHeight = document.getElementById("header-video").clientHeight;
const headerVideo = document.getElementById("header-video");

if (headerTextContainerHeight > headerVideoHeight) {
   headerVideo.style.height = headerTextContainerHeight + 200 + "px";
}





