/* =====================================================
   CAR DATA
===================================================== */

const cars = [
    {
        id: 1,
        brand: "BMW",
        model: "X5",
        year: 2025,
        price: 125000,
        fuel: "بنزینی",
        engine: "3.0L",
        power: "335 HP",
        transmission: "اتوماتیک",
        mileage: "0 km",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
        colors: [
            { name: "مشکی", value: "#111111" },
            { name: "سفید", value: "#f5f5f5" },
            { name: "قرمز", value: "#b11217" },
            { name: "آبی", value: "#243c68" }
        ]
    },

    {
        id: 2,
        brand: "Mercedes-Benz",
        model: "GLE",
        year: 2025,
        price: 145000,
        fuel: "بنزینی",
        engine: "3.0L",
        power: "375 HP",
        transmission: "اتوماتیک",
        mileage: "0 km",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
        colors: [
            { name: "مشکی", value: "#111111" },
            { name: "سفید", value: "#f5f5f5" },
            { name: "نقره‌ای", value: "#aaa" },
            { name: "سرمه‌ای", value: "#1d2d48" }
        ]
    },

    {
        id: 3,
        brand: "Toyota",
        model: "Land Cruiser",
        year: 2025,
        price: 110000,
        fuel: "بنزینی",
        engine: "3.5L",
        power: "409 HP",
        transmission: "اتوماتیک",
        mileage: "0 km",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
        colors: [
            { name: "سفید", value: "#f4f4f4" },
            { name: "مشکی", value: "#111111" },
            { name: "خاکستری", value: "#666" },
            { name: "سبز", value: "#26382c" }
        ]
    },

    {
        id: 4,
        brand: "Lexus",
        model: "LX 600",
        year: 2025,
        price: 175000,
        fuel: "بنزینی",
        engine: "3.5L Twin Turbo",
        power: "409 HP",
        transmission: "اتوماتیک",
        mileage: "0 km",
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
        colors: [
            { name: "مشکی", value: "#0b0b0b" },
            { name: "سفید", value: "#f4f4f4" },
            { name: "نقره‌ای", value: "#aaa" },
            { name: "قهوه‌ای", value: "#4c3427" }
        ]
    },

    {
        id: 5,
        brand: "Porsche",
        model: "Cayenne",
        year: 2025,
        price: 155000,
        fuel: "بنزینی",
        engine: "3.0L",
        power: "348 HP",
        transmission: "اتوماتیک",
        mileage: "0 km",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
        colors: [
            { name: "مشکی", value: "#111" },
            { name: "سفید", value: "#eee" },
            { name: "قرمز", value: "#9d1118" },
            { name: "خاکستری", value: "#555" }
        ]
    },

    {
        id: 6,
        brand: "Range Rover",
        model: "Sport",
        year: 2025,
        price: 165000,
        fuel: "بنزینی",
        engine: "3.0L",
        power: "355 HP",
        transmission: "اتوماتیک",
        mileage: "0 km",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
        colors: [
            { name: "مشکی", value: "#111" },
            { name: "سفید", value: "#eee" },
            { name: "خاکستری", value: "#666" },
            { name: "سبز", value: "#25372b" }
        ]
    }
];


/* =====================================================
   DOM
===================================================== */

const header = document.getElementById("header");

const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const closeMobileMenu = document.getElementById("closeMobileMenu");

const carsGrid = document.getElementById("carsGrid");

const brandFilter = document.getElementById("brandFilter");
const modelFilter = document.getElementById("modelFilter");
const priceFilter = document.getElementById("priceFilter");
const searchCars = document.getElementById("searchCars");

const openSearch = document.getElementById("openSearch");
const searchModal = document.getElementById("searchModal");
const closeSearch = document.getElementById("closeSearch");
const globalSearch = document.getElementById("globalSearch");
const globalSearchBtn = document.getElementById("globalSearchBtn");

const threeDModal = document.getElementById("threeDModal");
const close3D = document.getElementById("close3D");
const openMain3D = document.getElementById("openMain3D");

const threeDCarName = document.getElementById("threeDCarName");
const threeDImage = document.getElementById("threeDImage");

const selectedColor = document.getElementById("selectedColor");

const rotateLeft = document.getElementById("rotateLeft");
const rotateRight = document.getElementById("rotateRight");
const reset3D = document.getElementById("reset3D");

const carDetailsModal = document.getElementById("carDetailsModal");
const closeCarDetails = document.getElementById("closeCarDetails");
const carDetailsContainer = document.getElementById("carDetailsContainer");

const contactForm = document.getElementById("contactForm");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

const backToTop = document.getElementById("backToTop");


/* =====================================================
   STATE
===================================================== */

let currentCars = [...cars];

let current3DCar = null;

let rotation = 0;

let favorites =
    JSON.parse(localStorage.getItem("favoriteCars")) || [];


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderCars(cars);

    populateBrands();

    setupModels();

    updateFavoriteButtons();

});


/* =====================================================
   RENDER CARS
===================================================== */

function renderCars(list) {

    if (!carsGrid) return;

    currentCars = list;

    if (!list.length) {

        carsGrid.innerHTML = `
            <div class="no-results">

                <div class="no-results-icon">
                    🚘
                </div>

                <h3>خودرویی پیدا نشد</h3>

                <p>
                    فیلترهای جستجو را تغییر دهید.
                </p>

            </div>
        `;

        return;
    }


    carsGrid.innerHTML = list.map(car => {

        const isFavorite =
            favorites.includes(car.id);

        return `
            <article
                class="car-card"
                data-id="${car.id}"
            >

                <div class="car-image">

                    <img
                        src="${car.image}"
                        alt="${car.brand} ${car.model}"
                        loading="lazy"
                    >

                    <button
                        class="favorite-btn ${isFavorite ? "active" : ""}"
                        data-favorite="${car.id}"
                        aria-label="افزودن به علاقه‌مندی"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>

                    <span class="car-label">
                        ${car.year}
                    </span>

                </div>


                <div class="car-body">

                    <div class="car-brand">
                        ${car.brand}
                    </div>

                    <h3 class="car-name">
                        ${car.model}
                    </h3>


                    <div class="car-info">

                        <span>
                            ⚙ ${car.engine}
                        </span>

                        <span>
                            ⚡ ${car.power}
                        </span>

                        <span>
                            ⛽ ${car.fuel}
                        </span>

                    </div>


                    <div class="car-price">

                        $${formatPrice(car.price)}

                        <small>
                            قیمت تقریبی
                        </small>

                    </div>


                    <div class="car-actions">

                        <button
                            class="btn btn-dark view-3d-btn"
                            data-id="${car.id}"
                        >
                            ◉ مشاهده 3D
                        </button>

                        <button
                            class="btn btn-primary car-details-btn"
                            data-id="${car.id}"
                        >
                            جزئیات
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");


    attachCarEvents();
}


/* =====================================================
   PRICE FORMAT
===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat("en-US").format(price);

}


/* =====================================================
   BRAND FILTER
===================================================== */

function populateBrands() {

    if (!brandFilter) return;

    const brands =
        [...new Set(cars.map(car => car.brand))];

    brandFilter.innerHTML = `
        <option value="">همه برندها</option>

        ${brands.map(brand => `
            <option value="${brand}">
                ${brand}
            </option>
        `).join("")}
    `;
}


/* =====================================================
   MODEL FILTER
===================================================== */

function setupModels() {

    if (!brandFilter || !modelFilter) return;

    brandFilter.addEventListener("change", () => {

        const brand = brandFilter.value;

        const filtered =
            brand
                ? cars.filter(car => car.brand === brand)
                : cars;

        const models =
            [...new Set(filtered.map(car => car.model))];


        modelFilter.innerHTML = `
            <option value="">
                همه مدل‌ها
            </option>

            ${models.map(model => `
                <option value="${model}">
                    ${model}
                </option>
            `).join("")}
        `;

    });
}


/* =====================================================
   FILTER CARS
===================================================== */

function filterCars() {

    const brand =
        brandFilter?.value || "";

    const model =
        modelFilter?.value || "";

    const price =
        priceFilter?.value || "";

    let result = [...cars];


    if (brand) {

        result =
            result.filter(
                car => car.brand === brand
            );

    }


    if (model) {

        result =
            result.filter(
                car => car.model === model
            );

    }


    if (price) {

        if (price === "under100") {

            result =
                result.filter(
                    car => car.price < 100000
                );

        }

        if (price === "100-150") {

            result =
                result.filter(
                    car =>
                        car.price >= 100000 &&
                        car.price <= 150000
                );

        }

        if (price === "150-200") {

            result =
                result.filter(
                    car =>
                        car.price > 150000 &&
                        car.price <= 200000
                );

        }

        if (price === "over200") {

            result =
                result.filter(
                    car => car.price > 200000
                );

        }

    }


    renderCars(result);
}


/* =====================================================
   FILTER EVENTS
===================================================== */

brandFilter?.addEventListener(
    "change",
    filterCars
);

modelFilter?.addEventListener(
    "change",
    filterCars
);

priceFilter?.addEventListener(
    "change",
    filterCars
);


/* =====================================================
   SEARCH
===================================================== */

searchCars?.addEventListener(
    "input",
    event => {

        const query =
            event.target.value
                .trim()
                .toLowerCase();

        if (!query) {

            filterCars();

            return;
        }


        const result =
            cars.filter(car => {

                return (

                    car.brand
                        .toLowerCase()
                        .includes(query)

                    ||

                    car.model
                        .toLowerCase()
                        .includes(query)

                    ||

                    car.year
                        .toString()
                        .includes(query)

                );

            });


        renderCars(result);

    }
);


/* =====================================================
   GLOBAL SEARCH
===================================================== */

globalSearchBtn?.addEventListener(
    "click",
    () => {

        const query =
            globalSearch.value
                .trim()
                .toLowerCase();


        closeModal(searchModal);


        if (!query) {

            renderCars(cars);

            return;
        }


        const result =
            cars.filter(car => {

                return (

                    car.brand.toLowerCase()
                        .includes(query)

                    ||

                    car.model.toLowerCase()
                        .includes(query)

                    ||

                    car.year
                        .toString()
                        .includes(query)

                );

            });


        renderCars(result);

        document
            .getElementById("cars")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================================
   ENTER SEARCH
===================================================== */

globalSearch?.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            globalSearchBtn?.click();

        }

    }
);


/* =====================================================
   CAR EVENTS
===================================================== */

function attachCarEvents() {

    document
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    toggleFavorite(
                        Number(button.dataset.favorite)
                    );

                }
            );

        });


    document
        .querySelectorAll(".view-3d-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    open3D(id);

                }
            );

        });


    document
        .querySelectorAll(".car-details-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    openCarDetails(id);

                }
            );

        });

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "خودرو از علاقه‌مندی‌ها حذف شد."
        );

    } else {

        favorites.push(id);

        showToast(
            "خودرو به علاقه‌مندی‌ها اضافه شد."
        );

    }


    localStorage.setItem(
        "favoriteCars",
        JSON.stringify(favorites)
    );


    renderCars(currentCars);
}


/* =====================================================
   UPDATE FAVORITES
===================================================== */

function updateFavoriteButtons() {

    document
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            const id =
                Number(button.dataset.favorite);

            if (favorites.includes(id)) {

                button.classList.add("active");
                button.textContent = "♥";

            } else {

                button.classList.remove("active");
                button.textContent = "♡";

            }

        });

}


/* =====================================================
   3D VIEW
===================================================== */

function open3D(id) {

    const car =
        cars.find(item => item.id === id);

    if (!car || !threeDModal) return;


    current3DCar = car;

    rotation = 0;


    if (threeDCarName) {

        threeDCarName.textContent =
            `${car.brand} ${car.model}`;

    }


    if (threeDImage) {

        threeDImage.src = car.image;

        threeDImage.alt =
            `${car.brand} ${car.model}`;

        threeDImage.style.transform =
            `rotateY(${rotation}deg)`;

    }


    renderColors(car);


    openModal(threeDModal);

}


/* =====================================================
   COLORS
===================================================== */

function renderColors(car) {

    if (!selectedColor) return;

    selectedColor.innerHTML = `
        <div class="color-selector-title">
            انتخاب رنگ خودرو
        </div>

        <div class="color-list">

            ${car.colors.map((color, index) => `

                <button
                    class="car-color ${index === 0 ? "active" : ""}"
                    style="background:${color.value}"
                    title="${color.name}"
                    data-color="${color.value}"
                ></button>

            `).join("")}

        </div>
    `;


    selectedColor
        .querySelectorAll(".car-color")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectedColor
                        .querySelectorAll(".car-color")
                        .forEach(item =>
                            item.classList.remove("active")
                        );

                    button.classList.add("active");

                    changeCarColor(
                        button.dataset.color
                    );

                }
            );

        });

}


/* =====================================================
   CHANGE CAR COLOR
===================================================== */

function changeCarColor(color) {

    if (!threeDImage) return;

    /*
       چون عکس واقعی خودرو را نمی‌توان
       مستقیماً رنگ‌آمیزی کرد، از filter
       برای شبیه‌سازی تغییر رنگ استفاده می‌کنیم.
    */

    const filters = {

        "#111111":
            "brightness(.35) contrast(1.2)",

        "#f5f5f5":
            "brightness(1.25) grayscale(.1)",

        "#f4f4f4":
            "brightness(1.25) grayscale(.1)",

        "#b11217":
            "sepia(1) saturate(7) hue-rotate(315deg) brightness(.7)",

        "#9d1118":
            "sepia(1) saturate(7) hue-rotate(315deg) brightness(.65)",

        "#243c68":
            "sepia(1) saturate(3) hue-rotate(175deg) brightness(.7)",

        "#1d2d48":
            "sepia(1) saturate(3) hue-rotate(175deg) brightness(.65)",

        "#aaa":
            "grayscale(.8) brightness(1.15)",

        "#666":
            "grayscale(.9) brightness(.65)",

        "#555":
            "grayscale(.9) brightness(.6)",

        "#4c3427":
            "sepia(.8) saturate(2) hue-rotate(335deg) brightness(.65)",

        "#26382c":
            "sepia(.6) saturate(2) hue-rotate(70deg) brightness(.55)",

        "#25372b":
            "sepia(.6) saturate(2) hue-rotate(70deg) brightness(.55)"

    };


    threeDImage.style.filter =
        filters[color] ||
        "none";
}


/* =====================================================
   3D ROTATION
===================================================== */

rotateLeft?.addEventListener(
    "click",
    () => {

        rotation -= 25;

        update3DRotation();

    }
);


rotateRight?.addEventListener(
    "click",
    () => {

        rotation += 25;

        update3DRotation();

    }
);


reset3D?.addEventListener(
    "click",
    () => {

        rotation = 0;

        if (threeDImage) {

            threeDImage.style.transform =
                "rotateY(0deg)";

            threeDImage.style.filter =
                "none";

        }

    }
);


function update3DRotation() {

    if (!threeDImage) return;

    threeDImage.style.transform =
        `rotateY(${rotation}deg)`;

}


/* =====================================================
   CAR DETAILS
===================================================== */

function openCarDetails(id) {

    const car =
        cars.find(item => item.id === id);

    if (!car || !carDetailsModal) return;


    carDetailsContainer.innerHTML = `

        <div class="car-details">

            <div class="car-details-image">

                <img
                    src="${car.image}"
                    alt="${car.brand} ${car.model}"
                >

            </div>


            <div class="car-details-content">

                <h2>
                    ${car.model}
                </h2>

                <div class="brand">
                    ${car.brand}
                </div>


                <div class="specs">

                    <div class="spec">
                        <span>سال</span>
                        <strong>${car.year}</strong>
                    </div>

                    <div class="spec">
                        <span>موتور</span>
                        <strong>${car.engine}</strong>
                    </div>

                    <div class="spec">
                        <span>قدرت</span>
                        <strong>${car.power}</strong>
                    </div>

                    <div class="spec">
                        <span>سوخت</span>
                        <strong>${car.fuel}</strong>
                    </div>

                    <div class="spec">
                        <span>گیربکس</span>
                        <strong>${car.transmission}</strong>
                    </div>

                    <div class="spec">
                        <span>کارکرد</span>
                        <strong>${car.mileage}</strong>
                    </div>

                </div>


                <div class="car-price">

                    $${formatPrice(car.price)}

                </div>


                <button
                    class="btn btn-primary"
                    onclick="closeModal(carDetailsModal); open3D(${car.id})"
                >
                    مشاهده سه‌بعدی
                </button>

            </div>

        </div>

    `;


    openModal(carDetailsModal);

}


/* =====================================================
   MODALS
===================================================== */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* Close buttons */

close3D?.addEventListener(
    "click",
    () => closeModal(threeDModal)
);

closeCarDetails?.addEventListener(
    "click",
    () => closeModal(carDetailsModal)
);

closeSearch?.addEventListener(
    "click",
    () => closeModal(searchModal)
);


/* Search */

openSearch?.addEventListener(
    "click",
    () => {

        openModal(searchModal);

        setTimeout(() => {
            globalSearch?.focus();
        }, 300);

    }
);


/* Click outside */

document
    .querySelectorAll(".modal-overlay")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeModal(modal);

                }

            }
        );

    });


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        document
            .querySelectorAll(".modal-overlay.active")
            .forEach(modal => {

                closeModal(modal);

            });

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

mobileMenuBtn?.addEventListener(
    "click",
    () => {

        mobileMenu?.classList.add("active");

    }
);


closeMobileMenu?.addEventListener(
    "click",
    () => {

        mobileMenu?.classList.remove("active");

    }
);


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu?.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   HEADER SCROLL
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }
);


/* =====================================================
   ACTIVE NAV
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =====================================================
   MAIN 3D BUTTON
===================================================== */

openMain3D?.addEventListener(
    "click",
    () => {

        if (cars.length) {

            open3D(cars[0].id);

        }

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

contactForm?.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            contactForm.querySelector(
                '[name="name"]'
            )?.value.trim();

        if (!name) {

            showToast(
                "لطفاً نام خود را وارد کنید."
            );

            return;

        }


        showToast(
            "پیام شما با موفقیت ثبت شد."
        );


        contactForm.reset();

    }
);


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    toast.classList.add("active");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("active");

        }, 3000);

}


/* =====================================================
   BACK TO TOP
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("active");

        } else {

            backToTop.classList.remove("active");

        }

    }
);


backToTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) return;


                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =====================================================
   IMAGE ERROR HANDLER
===================================================== */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.style.objectFit =
                "contain";

            event.target.style.padding =
                "30px";

            event.target.style.background =
                "#eeeeee";

        }

    },
    true
);
