console.log("Project loaded successfully!");

// ==========================
// Highlight active navigation link
// ==========================
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// ==========================
// Event gallery data
// ==========================
const events = {
    annual: [
        { src: " ", caption: "Annual Day Photo 1" },
        { src: " ", caption: "Annual Day Photo 2" },
        { src: " ", caption: "Annual Day Photo 3" },
        { src: " ", caption: "Annual Day Photo 4" },
        { src: " ", caption: "Annual Day Photo 5" }
    ],
    sports: [
        { src: " ", caption: "Annual Day Photo 1" },
        { src: " ", caption: "Annual Day Photo 2" },
        { src: " ", caption: "Annual Day Photo 3" },
        { src: " ", caption: "Annual Day Photo 4" },
        { src: " ", caption: "Annual Day Photo 5" }
    ],
    cultural: [
        { src: " ", caption: "Annual Day Photo 1" },
        { src: " ", caption: "Annual Day Photo 2" },
        { src: " ", caption: "Annual Day Photo 3" },
        { src: " ", caption: "Annual Day Photo 4" },
        { src: " ", caption: "Annual Day Photo 5" }
    ]
};

// ==========================
// Lightbox variables
// ==========================
let currentEvent = [];
let currentIndex = 0;
let autoSlideInterval = null;

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// ==========================
// Functions
// ==========================
function showSlide(index) {
    if (!currentEvent.length) return;
    currentIndex = (index + currentEvent.length) % currentEvent.length;
    lightboxImage.src = currentEvent[currentIndex].src;
    lightboxCaption.textContent = currentEvent[currentIndex].caption;
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 3000);
}

function openLightbox(eventName) {
    currentEvent = events[eventName] || [];
    currentIndex = 0;
    showSlide(currentIndex);
    lightbox.classList.add('active');
    startAutoSlide();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    clearInterval(autoSlideInterval);
}

// ==========================
// Event listeners
// ==========================
document.querySelectorAll('.gallery figure').forEach(figure => {
    figure.addEventListener('click', () => {
        const eventName = figure.dataset.event;
        openLightbox(eventName);
    });
});

closeBtn.addEventListener('click', closeLightbox);

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    startAutoSlide();
});