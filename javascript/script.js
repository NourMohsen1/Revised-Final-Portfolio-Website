// Hamburger Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle active classes
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

let slideIndex = 1;
showSlides(slideIndex);
// Function to show a specific slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let thumbnails = document.getElementsByClassName("thumbnail");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].className += " active";
}

// Function to navigate to the next/previous slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show the current date and time
function showDateTime() {
    const dateElement = document.getElementById('date');
    dateElement.innerHTML = new Date().toLocaleString();
    dateElement.style.display = 'block';
    setTimeout(() => {
        dateElement.style.display = 'none';
    }, 6000); // hide date after 6 secs
}
