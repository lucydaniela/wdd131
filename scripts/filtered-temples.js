function updateGalleryLayout() {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return; // Prevent errors if the gallery element is missing

    if (window.innerWidth >= 768) {
        gallery.style.display = 'grid';
        gallery.style.gridTemplateColumns = `repeat(3, 1fr)`;
    } else {
        gallery.style.display = 'grid';
        gallery.style.gridTemplateColumns = `1fr`;
    }
}

// Debounce for resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateGalleryLayout, 200);
});

// Initial layout setup
updateGalleryLayout();

// Toggle the menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) menu.classList.toggle('open'); // Prevent errors if the menu element is missing
}

//  set the copyright year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentYear');
if (yearElement) yearElement.textContent = currentYear;

// tlast modified date
const lastModified = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModified.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Array of temples (example data)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74700,
        imageUrl: "./images/manti-utah-temple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "./images/payson-utah-temple-.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2021, May, 23",
        area: 68650,
        imageUrl: "./images/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 0000 ,
        imageUrl: "images/provo-city-center-templen.jpg"
    },
    {
        templeName: "San Antonio Texas",
        location: "San Antonio, Texas",
        dedicated: "2005, May, 22",
        area:  16800,
        imageUrl: "./images/san-antonio-texas.jpg"
    },
    {
        templeName: "Montervideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area:  41000,
        imageUrl: "./images/uruguay-temple.jpg"
    }
];

// Function to render temple cards
function renderTempleCards(templeList) {
    const container = document.getElementById("templesContainer");
    if (!container) {
        console.error("Container element not found!");
        return;
    }

    // Clear any existing content
    container.innerHTML = "";

    // Loop through the temple array
    templeList.forEach(temple => {
        // Create the card container
        const card = document.createElement("div");
        card.classList.add("temple-card");

        // Populate the card content
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" class="temple-image">
        `;

        // Append the card to the container
        container.appendChild(card);
    });
}

// Call the function to render cards
renderTempleCards(temples);
