'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

function redirectToMoreInfo() {
  // Ganti URL dengan halaman tujuan yang sesuai
  window.location.href = 'more_info_page.html';
}

const images = [...document.querySelectorAll('.imagess')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `assets/images/testi${i+1}.jpeg`;
    largeImage.src = path;
    imageName.innerHTML = `Testimoni${i+1}.jpeg`;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

let popupcontainer = document.getElementById('popupmore');

function openPopup(){
  popupcontainer.classList.add("open-popup");
}

function closePopup(){
  popupcontainer.classList.remove("open-popup");
}

function redirectToWhatsApp() {
  window.location.href = "https://chat.whatsapp.com/GHGDV2mrjAYG62nJKyA2bR";
}

function redirectToInstagram() {
  window.location.href = "https://www.instagram.com/revou_id/";
}

// Bagian BE 
async function fetchShipmentById() {
  const shipmentId = document.getElementById('shipmentId').value;
  try {
      const response = await fetch(`${API_BASE_URL}/shipment/${shipmentId}`);
      const shipment = await response.json();
      const shipmentStatus = document.getElementById('shipment-status');
      shipmentStatus.innerHTML = `Id: ${shipmentID}<br>status: ${shipmentStatus}`;
  } catch (error) {
      console.error('Error fetching book:', error);
  }
}

// fetchShipments();

const createMessage = async () => {
  const full_name = document.getElementById('contactUs-name').value;
  const email = document.getElementById('contactUs-email').value;
  const subject = document.getElementById('contactUs-subject').value;
  const message = document.getElementById('contactUs-theMessage').value;

  try {
      const response = await fetch(`${API_BASE_URL}/message`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({full_name, email, subject, message})
      });
      const data = await response.json();

  } catch (error) {
      console.error('Error sending message:', error);
  } 
}