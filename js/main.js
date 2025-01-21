// Mobile menu functionality
const burgerButton = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

if (burgerButton && navList) {
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerButton.contains(e.target) && !navList.contains(e.target)) {
            burgerButton.classList.remove('active');
            navList.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    if (navLinks.length) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerButton.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }
}

// Tabs functionality
const tabButtons = document.querySelectorAll('.categories__tab-btn');
const tabPanes = document.querySelectorAll('.categories__tab-pane');

if (tabButtons.length && tabPanes.length) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.dataset.tab;
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add('active');
                // Render products for the active tab
                renderProducts(tabId);
            }
        });
    });
}

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
if (anchorLinks.length) {
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll behavior
const header = document.querySelector('.header');
if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// Product tabs content
const productTabs = {
    tools: [
        {
            image: 'images/tool1.jpg',
            title: 'Premium Garden Scissors',
            description: 'Professional scissors for precise trimming',
            price: '$49.99'
        },
        {
            image: 'images/tool2.jpg',
            title: 'Garden Tool Set',
            description: 'Set of 3 tools for plant care',
            price: '$39.99'
        },
        {
            image: 'images/tool3.jpg',
            title: 'Garden Watering Can',
            description: 'Convenient watering can with adjustable sprayer',
            price: '$24.99'
        }
    ],
    seeds: [
        {
            image: 'images/seeds1.jpg',
            title: 'Vegetable Seeds Set',
            description: '10 popular vegetable varieties',
            price: '$19.99'
        },
        {
            image: 'images/seeds2.jpg',
            title: 'Herb Seeds Collection',
            description: 'Set of 6 herb varieties',
            price: '$14.99'
        },
        {
            image: 'images/seeds3.jpg',
            title: 'Flower Seeds Mix',
            description: 'Mix of seeds for a beautiful flower garden',
            price: '$12.99'
        }
    ],
    equipment: [
        {
            image: 'images/equipment1.jpg',
            title: 'Drip Irrigation System',
            description: 'Complete set for automatic watering',
            price: '$99.99'
        },
        {
            image: 'images/equipment2.jpg',
            title: 'Garden Sprayer',
            description: 'Professional 5L sprayer',
            price: '$49.99'
        },
        {
            image: 'images/equipment3.jpg',
            title: 'Garden Composter',
            description: '300L composter with ventilation system',
            price: '$129.99'
        }
    ]
};

// Function to render products
function renderProducts(category) {
    const productsContainer = document.querySelector(`#${category} .products-grid`);
    if (!productsContainer || !productTabs[category]) return;

    const products = productTabs[category];
    productsContainer.innerHTML = products.map(product => `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-card__image">
            <div class="product-card__content">
                <h3 class="product-card__title">${product.title}</h3>
                <p class="product-card__description">${product.description}</p>
                <p class="product-card__price">${product.price}</p>
                <a href="contact.html" class="button button--primary product-card__button">Order</a>
            </div>
        </article>
    `).join('');
}

// Initialize product tabs
if (typeof productTabs !== 'undefined' && document.querySelector('.categories__tab-pane')) {
    Object.keys(productTabs).forEach(category => {
        renderProducts(category);
    });
}

// Slider functionality
class Slider {
    constructor(sliderElement) {
        if (!sliderElement) return;
        
        this.slider = sliderElement;
        this.track = this.slider.querySelector('.slider__track');
        this.slides = this.slider.querySelectorAll('.slider__slide');
        this.prevButton = this.slider.querySelector('.slider__button--prev');
        this.nextButton = this.slider.querySelector('.slider__button--next');
        
        if (!this.track || !this.slides.length || !this.prevButton || !this.nextButton) return;
        
        this.slideWidth = 0;
        this.currentIndex = 0;
        this.slidesPerView = 3;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        this.updateSlidesPerView();
        this.updateSlideWidth();
        this.addEventListeners();
        this.updateButtonsState();

        // Initial position
        this.updateSlidePosition();

        // Update on window resize
        window.addEventListener('resize', () => {
            this.updateSlidesPerView();
            this.updateSlideWidth();
            this.updateSlidePosition();
            this.updateButtonsState();
        });
    }

    updateSlidesPerView() {
        if (window.innerWidth <= 768) {
            this.slidesPerView = 1;
        } else if (window.innerWidth <= 1024) {
            this.slidesPerView = 2;
        } else {
            this.slidesPerView = 3;
        }
    }

    updateSlideWidth() {
        this.slideWidth = 100 / this.slidesPerView;
        this.slides.forEach(slide => {
            slide.style.flex = `0 0 ${this.slideWidth}%`;
        });
    }

    updateSlidePosition() {
        const position = -this.currentIndex * this.slideWidth;
        this.track.style.transform = `translateX(${position}%)`;
    }

    updateButtonsState() {
        const maxIndex = this.slides.length - this.slidesPerView;
        this.prevButton.style.display = this.currentIndex <= 0 ? 'none' : 'block';
        this.nextButton.style.display = this.currentIndex >= maxIndex ? 'none' : 'block';
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.slidePrev());
        this.nextButton.addEventListener('click', () => this.slideNext());

        // Touch events for mobile
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchmove', (e) => {
            this.touchEndX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', () => {
            const touchDiff = this.touchStartX - this.touchEndX;
            if (Math.abs(touchDiff) > 50) { // Minimum swipe distance
                if (touchDiff > 0) {
                    this.slideNext();
                } else {
                    this.slidePrev();
                }
            }
        });
    }

    slidePrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlidePosition();
            this.updateButtonsState();
        }
    }

    slideNext() {
        const maxIndex = this.slides.length - this.slidesPerView;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateSlidePosition();
            this.updateButtonsState();
        }
    }
}

// Initialize sliders if they exist
document.querySelectorAll('.slider').forEach(slider => {
    if (slider) {
        new Slider(slider);
    }
});

// Testimonials Slider
function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials-wrapper');
    const slides = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.testimonials-button.prev');
    const nextButton = document.querySelector('.testimonials-button.next');
    const dotsContainer = document.querySelector('.testimonials-dots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonials-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.testimonials-dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    // Event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Auto slide
    let interval = setInterval(nextSlide, 5000);

    // Pause auto slide on hover
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    });
}

// Initialize testimonials slider if it exists
if (document.querySelector('.testimonials-wrapper')) {
    initTestimonialsSlider();
}

// Animate sustainability stats
function initSustainabilityStats() {
    const statBars = document.querySelectorAll('.stat-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.dataset.percentage;
                bar.style.setProperty('--percentage', percentage + '%');
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    statBars.forEach(bar => observer.observe(bar));
}

// Initialize sustainability stats if they exist
if (document.querySelector('.sustainability-stats')) {
    initSustainabilityStats();
}

document.addEventListener('DOMContentLoaded', function() {
    // Seasonal slider functionality
    const slides = document.querySelectorAll('.seasonal-slide');
    const prevBtn = document.querySelector('.seasonal-prev');
    const nextBtn = document.querySelector('.seasonal-next');
    const dotsContainer = document.querySelector('.seasonal-dots');

    // Проверяем наличие всех необходимых элементов
    if (slides.length && prevBtn && nextBtn && dotsContainer) {
        let currentSlide = 0;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('seasonal-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.seasonal-dot');

        function updateSlides() {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }

        // Event listeners for controls
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    }
});

// Achievement numbers animation
function initAchievementCounters() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const number = card.querySelector('.achievement-number');
                const text = card.querySelector('.achievement-text');
                const targetNumber = parseInt(number.dataset.target);
                let currentNumber = 0;
                const duration = 2000; // 2 seconds
                const steps = 50;
                const increment = targetNumber / steps;
                const stepTime = duration / steps;

                // Add animation classes
                number.classList.add('animate');
                text.classList.add('animate');

                function updateNumber() {
                    currentNumber += increment;
                    if (currentNumber <= targetNumber) {
                        if (targetNumber >= 1000) {
                            number.textContent = Math.round(currentNumber) + '+';
                        } else {
                            number.textContent = Math.round(currentNumber);
                        }
                        setTimeout(updateNumber, stepTime);
                    } else {
                        // Устанавливаем точное конечное значение
                        number.textContent = targetNumber >= 1000 ? targetNumber + '+' : targetNumber;
                    }
                }

                updateNumber();
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.5 });

    achievementCards.forEach(card => {
        const number = card.querySelector('.achievement-number');
        const targetNumber = number.dataset.target; // Сохраняем оригинальное значение в data-target
        number.dataset.target = targetNumber; // Устанавливаем data-target
        number.textContent = '0'; // Начальное значение
        observer.observe(card);
    });
}

// Initialize achievement counters if they exist
if (document.querySelector('.achievements-grid')) {
    initAchievementCounters();
} 