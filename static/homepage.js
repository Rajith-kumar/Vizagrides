//menu 
const toggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Toggle menu and overlay
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close on overlay click
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});

// Close on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  });
});


//slide section
const carImages = [
  "images/swiftdzire.png",
  "images/hondaamazeu.jpg",
  "images/ertiga.jpg",
  "images/innovacrysta.jpg"
];

let carIndex = 0;
const carSliderImg = document.getElementById("car-slider-image");
const carPrevBtn = document.getElementById("car-prev-btn");
const carNextBtn = document.getElementById("car-next-btn");

function showCarImage(index) {
  carSliderImg.src = carImages[index];
}

carPrevBtn.addEventListener("click", () => {
  carIndex = (carIndex - 1 + carImages.length) % carImages.length;
  showCarImage(carIndex);
});

carNextBtn.addEventListener("click", () => {
  carIndex = (carIndex + 1) % carImages.length;
  showCarImage(carIndex);
});

// Auto-slide
setInterval(() => {
  carIndex = (carIndex + 1) % carImages.length;
  showCarImage(carIndex);
}, 4000);


function sendWhatsAppMessage() {
  // Get input values
  const name = document.querySelector('input[placeholder="Enter your Name"]').value;
  const phone = document.querySelector('input[placeholder="Enter your Phone No"]').value;
  const start = document.querySelector('input[placeholder="Enter Starting point"]').value;
  const destination = document.querySelector('input[placeholder="Enter Destination"]').value;
  const persons = document.querySelector('input[placeholder="No. of Persons"]').value;
  const message = document.querySelector('textarea').value;

  // Validate required fields
  if (!name || !phone || !start || !destination || !persons) {
    alert("Please fill all required fields.");
    return;
  }

  // Format message
  const msg = 
    `New Ride Booking:\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `From: ${start}\n` +
    `To: ${destination}\n` +
    `Persons: ${persons}\n` +
    (message ? `Message: ${message}` : '');

  // WhatsApp number to send to (replace with your business number, without + or spaces)
  const targetNumber = '9490815366'; // <-- Replace with your WhatsApp number

  // Create WhatsApp link
  const whatsappURL = `https://wa.me/${targetNumber}?text=${encodeURIComponent(msg)}`;

  // Open WhatsApp
  window.open(whatsappURL, '_blank');
}
//for popup
function sendWhatsAppMessagefrompopup() {
  const inputs = document.querySelectorAll('#booking-form-popup input, #booking-form-popup textarea');
  const [name, phone, start, destination, persons, message] = [...inputs].map(input => input.value.trim());

  if (!name || !phone || !start || !destination || !persons) {
    alert("Please fill all required fields.");
    return;
  }

  const fullMessage = `*Booking Request* 🚗\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `From: ${start}\n` +
    `To: ${destination}\n` +
    `No. of Persons: ${persons}\n` +
    `Message: ${message || 'N/A'}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappURL = `https://wa.me/919490815366?text=${encodedMessage}`;

  console.log("Opening WhatsApp URL:", whatsappURL); // For debugging

  window.open(whatsappURL, '_blank');
}


//details form setion popup for book now
function openBookingForm() {
  document.getElementById('booking-form-popup').classList.add('active');
}

function closeBookingForm() {
  document.getElementById('booking-form-popup').classList.remove('active');
}

//pop up for enquiry now section 
function openEnquiryForm() {
  document.getElementById("enquiryPopup").style.display = "flex";
}

function closeEnquiryForm() {
  document.getElementById("enquiryPopup").style.display = "none";
}

//send details to whatsapp from both packages and outstation
let selectedServiceType = ''; // 'package' or 'route'
let selectedPackageTitle = ''; // For package
let selectedStartPoint = '';
let selectedEndPoint = '';

function openEnquiryForm(button) {
  const packageSlide = button.closest('.slide-package');
  const outstationSection = button.closest('.outstation');

  if (packageSlide) {
    selectedServiceType = 'package';
    selectedPackageTitle = packageSlide.querySelector('.title-package').innerText;
  } else if (outstationSection) {
    selectedServiceType = 'route';
    selectedStartPoint = document.getElementById('start-point').value.trim();
    selectedEndPoint = document.getElementById('end-point').value.trim();

    if (!selectedStartPoint || !selectedEndPoint) {
      alert("Please select both Starting Point and Destination.");
      return;
    }
  } else {
    alert("Unknown enquiry source.");
    return;
  }

  // Open the shared popup
  document.getElementById('enquiryPopup').style.display = 'block';
}

function closeEnquiryForm() {
  document.getElementById('enquiryPopup').style.display = 'none';
}

function sendToWhatsApp() {
  const popup = document.getElementById('enquiryPopup');
  const inputs = popup.querySelectorAll('input');
  const [nameInput, phoneInput] = [...inputs];
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !phone) {
    alert("Please fill all required fields.");
    return;
  }

  let message = `Enquiry Details\nName: ${name}\nPhone: ${phone}\n`;

  if (selectedServiceType === 'package') {
    message += `Package: ${selectedPackageTitle}`;
  } else if (selectedServiceType === 'route') {
    message += `From: ${selectedStartPoint}\nTo: ${selectedEndPoint}`;
  } else {
    message += `Service: Unknown`;
  }

  const whatsappURL = `https://wa.me/919490815366?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');

  closeEnquiryForm(); // optional
}


//packages section


let currentPackageIndex = 0;

function showPackageSlide(index) {
  const slides = document.querySelectorAll(".slide-package");
  const wrapper = document.getElementById("wrapperPackage");

  if (index < 0) currentPackageIndex = slides.length - 1;
  else if (index >= slides.length) currentPackageIndex = 0;
  else currentPackageIndex = index;

  const offset = -currentPackageIndex * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
}

function prevPackageSlide() {
  showPackageSlide(currentPackageIndex - 1);
}

function nextPackageSlide() {
  showPackageSlide(currentPackageIndex + 1);
}

// Init first slide
document.addEventListener("DOMContentLoaded", () => {
  showPackageSlide(currentPackageIndex);
});




// Open/Close
function openLogin() {
    document.getElementById("loginPopup").style.display = "block";
}
function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function openSignup() {
    document.getElementById("signupPopup").style.display = "block";
}
function closeSignup() {
    document.getElementById("signupPopup").style.display = "none";
}

// 🔐 SIGNUP API
async function signupUser() {
    const data = {
        name: document.getElementById("signupName").value,
        email: document.getElementById("signupEmail").value,
        password: document.getElementById("signupPassword").value
    };

    const res = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);
}

// 🔑 LOGIN API
async function loginUser() {
    const data = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);
}


function openLogin() {
  document.getElementById("login-form-popup").classList.add('active');
}


function closeloginfrom() {
  document.getElementById("login-form-popup").classList.remove('active');
}


function openSignup() {
  document.getElementById("signup-form-popup").classList.add('active');
}


function closesignupfrom() {
  document.getElementById("signup-form-popup").classList.remove('active');
}

async function Login() {
  let email = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  let res = await fetch("/login", {
    method: "POST",
    body: formData
  });

  let data = await res.text();

  if (data === "Login Successful") {
    alert("✅ Login Successful");

    closeloginfrom();

    // 🔥 ADD THIS LINE
    checkUser();   // 👈 VERY IMPORTANT

  } else {
    alert("❌ " + data);
  }
}


async function Signup() {
  let username = document.getElementById("signup-username").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let phone = document.getElementById("signup-phone").value;

  let formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phone", phone);

  let res = await fetch("/signup", {
    method: "POST",
    body: formData
  });

  let data = await res.text();

  if (data === "Signup Successful") {
    alert("✅ Signup Successful");

    closesignupfrom();

    
    checkUser();   

  } else {
    alert("❌ " + data);
  }
}

// async function checkUser() {
//   let res = await fetch("/get_user");
//   let data = await res.text();

//   if (data !== "Not Logged In") {
//   document.getElementById("auth-buttons").style.display = "none";

//   document.getElementById("welcome-container").style.display = "block";  // ✅ ADD THIS

//   document.getElementById("welcome-msg").innerText =
//     "Welcome " + data + " 👋";

//   document.getElementById("logout-btn").style.display = "inline-block";
// }
// }
async function checkUser() {
  let res = await fetch("/get_user");
  let data = await res.text();

  if (data !== "Not Logged In") {

    // ❌ Hide login/signup
    document.getElementById("auth-buttons").style.display = "none";

    // ✅ Show logout button in navbar
    document.getElementById("logout-btn").style.display = "inline-block";

    // ✅ Show hero welcome text
    document.getElementById("hero-welcome").style.display = "block";
    document.getElementById("hero-username").innerText = data;
  }
}
checkUser();

async function logout() {
  await fetch("/logout");
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("mobile-menu");

  toggle.addEventListener("click", function () {
    const menu = document.getElementById("nav-menu"); 

    if (!menu) {
      return;
    }

    menu.classList.toggle("active");
  });

});
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.remove("active");
}