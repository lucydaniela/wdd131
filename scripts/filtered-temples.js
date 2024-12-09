document.addEventListener("DOMContentLoaded", () => {
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
            area: 0,
            imageUrl: "./images/provo-city-center-templen.jpg"
        },
        {
            templeName: "San Antonio Texas",
            location: "San Antonio, Texas",
            dedicated: "2005, May, 22",
            area: 16800,
            imageUrl: "./images/san-antonio-texas.jpg"
        },
        {
            templeName: "Montevideo Uruguay",
            location: "Montevideo, Uruguay",
            dedicated: "2001, March, 18",
            area: 41000,
            imageUrl: "./images/uruguay-temple.jpg"
        },
        {
            templeName: "Saratoga Springs",
            location: "Saratoga Springs, Utah",
            dedicated: "2023, August, 13",
            area: 97836,
            imageUrl: "./images/saratoga-springs.jpg"
        },
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah",
            dedicated: "1893, April, 24",
            area: 382207,
            imageUrl: "./images/salt-lake.jpg"
        },
        {
            templeName: "Logan",
            location: "Logan, Utah",
            dedicated: "1884, May, 19",
            area: 119619,
            imageUrl: "./images/logan-temple.jpg"
        },
        {
            templeName: "Spokane",
            location: "Spokane, Washington",
            dedicated: "1999, August, 21",
            area: 10700,
            imageUrl: "./images/washington-temple.jpg"
        },
        {
            templeName: "Laie",
            location: "Laie, Hawaii",
            dedicated: "1919, November, 27",
            area: 42100,
            imageUrl: "./images/laie-temple.jpg"
        }
    ];

    const templesContainer = document.getElementById("templesContainer");

    if (!templesContainer) {
        console.error("Container element not found!");
        return;
    }

    // Render all temple cards
    templesContainer.innerHTML = temples.map(temple => `
        <div class="temple-card">
            <img 
                src="./images/placeholder.jpg" 
                data-src="${temple.imageUrl}" 
                alt="${temple.templeName} Temple" 
                class="lazy-image">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area ? temple.area.toLocaleString() : "N/A"} sq ft</p>
        </div>
    `).join("");

    // Lazy load images
    const lazyImages = document.querySelectorAll(".lazy-image");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                }
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Update copyright year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Update last modified date
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
});
