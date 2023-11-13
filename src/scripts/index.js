import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

// console.log('Hello Coders! :)');
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".right-section");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".right-section");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Handle resizing of the window
    window.addEventListener("resize", function () {
        adjustHeroImageSize();
    });

    // Adjust hero image size on page load
    adjustHeroImageSize();
});

function adjustHeroImageSize() {
    const heroImage = document.querySelector(".hero img");
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 1200) {
        heroImage.style.minWidth = "1000px";
    } else {
        heroImage.style.minWidth = "0";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Ambil data restoran dari file DATA.json
    fetch("data/DATA.json")
        .then(response => response.json())
        .then(data => {
            // Panggil fungsi untuk menampilkan daftar restoran
            renderRestaurantList(data.restaurants);
        })
        .catch(error => console.error("Error fetching data:", error));
});

function renderRestaurantList(restaurants) {
    const restaurantListContainer = document.getElementById("restaurantList");

    // Loop melalui setiap restoran dan buat elemen card
    restaurants.forEach(restaurant => {
        const card = document.createElement("div");
        card.classList.add("restaurant-card");

        // Menambahkan elemen-elemen ke dalam card 
        card.innerHTML = `
            <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.city}</p>
                <p>Rating: ${restaurant.rating}</p>
                <p>${restaurant.description}</p>
            </div>
        `;

        // Tambahkan card ke dalam container
        restaurantListContainer.appendChild(card);
    });
}


