// Product data
const products = {
    tools: [
        {
            id: 't1',
            image: '../images/pruning-shears.jpg',
            title: 'Premium Pruning Shears',
            description: 'Professional-grade pruning shears with ergonomic design',
            price: 899,
            category: 'tools'
        },
        {
            id: 't2',
            image: '../images/garden-trowel.jpg',
            title: 'Garden Trowel Set',
            description: '3-piece ergonomic trowel set for planting',
            price: 699,
            category: 'tools'
        },
        {
            id: 't3',
            image: '../images/rake.jpg',
            title: 'Garden Rake',
            description: 'Durable rake for leaves and garden maintenance',
            price: 599,
            category: 'tools'
        },
        {
            id: 't4',
            image: '../images/watering-can.jpg',
            title: 'Watering Can',
            description: '5L capacity with adjustable sprinkler head',
            price: 449,
            category: 'tools'
        },
        {
            id: 't5',
            image: '../images/gloves.jpg',
            title: 'Gardening Gloves',
            description: 'Protective gloves with grip enhancement',
            price: 299,
            category: 'tools'
        },
        {
            id: 't6',
            image: '../images/shovel.jpg',
            title: 'Garden Shovel',
            description: 'Heavy-duty shovel for digging and transplanting',
            price: 799,
            category: 'tools'
        }
    ],
    seeds: [
        {
            id: 's1',
            image: '../images/vegetable-mix.jpg',
            title: 'Vegetable Seeds Collection',
            description: '10 varieties of premium vegetable seeds',
            price: 399,
            category: 'seeds'
        },
        {
            id: 's2',
            image: '../images/herb-kit.jpg',
            title: 'Herb Seeds Kit',
            description: '6 popular herb varieties with growing guide',
            price: 299,
            category: 'seeds'
        },
        {
            id: 's3',
            image: '../images/flower-mix.jpg',
            title: 'Flower Seeds Mix',
            description: 'Colorful flower varieties for garden beauty',
            price: 249,
            category: 'seeds'
        },
        {
            id: 's4',
            image: '../images/tomato.jpg',
            title: 'Tomato Seeds',
            description: 'High-yield hybrid tomato varieties',
            price: 199,
            category: 'seeds'
        },
        {
            id: 's5',
            image: '../images/chili.jpg',
            title: 'Chili Seeds',
            description: 'Popular Indian chili varieties',
            price: 149,
            category: 'seeds'
        },
        {
            id: 's6',
            image: '../images/microgreens.jpg',
            title: 'Microgreens Kit',
            description: 'Complete kit for growing nutritious microgreens',
            price: 499,
            category: 'seeds'
        }
    ],
    equipment: [
        {
            id: 'e1',
            image: '../images/drip-system.jpg',
            title: 'Drip Irrigation System',
            description: 'Complete drip irrigation system for small gardens',
            price: 1999,
            category: 'equipment'
        },
        {
            id: 'e2',
            image: '../images/sprayer.jpg',
            title: 'Garden Sprayer',
            description: '5L pressure sprayer for fertilizers and pesticides',
            price: 799,
            category: 'equipment'
        },
        {
            id: 'e3',
            image: '../images/mist-system.jpg',
            title: 'Misting System',
            description: 'Automatic misting system for humidity control',
            price: 2499,
            category: 'equipment'
        },
        {
            id: 'e4',
            image: '../images/greenhouse.jpg',
            title: 'Mini Greenhouse',
            description: 'Portable greenhouse for plant protection',
            price: 3999,
            category: 'equipment'
        },
        {
            id: 'e5',
            image: '../images/timer.jpg',
            title: 'Irrigation Timer',
            description: 'Digital timer for automatic watering',
            price: 1299,
            category: 'equipment'
        },
        {
            id: 'e6',
            image: '../images/pump.jpg',
            title: 'Water Pump',
            description: 'Submersible pump for garden irrigation',
            price: 2999,
            category: 'equipment'
        }
    ],
    pots: [
        {
            id: 'p1',
            image: '../images/ceramic-set.jpg',
            title: 'Ceramic Pot Set',
            description: 'Set of 3 decorative ceramic pots',
            price: 1299,
            category: 'pots'
        },
        {
            id: 'p2',
            image: '../images/hanging.jpg',
            title: 'Hanging Planters',
            description: 'Set of 4 hanging planters with chains',
            price: 899,
            category: 'pots'
        },
        {
            id: 'p3',
            image: '../images/self-watering.jpg',
            title: 'Self-Watering Pot',
            description: 'Smart pot with water reservoir',
            price: 599,
            category: 'pots'
        },
        {
            id: 'p4',
            image: '../images/terracotta.jpg',
            title: 'Terracotta Pots',
            description: 'Traditional terracotta pots set of 5',
            price: 999,
            category: 'pots'
        },
        {
            id: 'p5',
            image: '../images/vertical-pots.jpg',
            title: 'Vertical Garden Pots',
            description: 'Stackable pots for vertical gardening',
            price: 1499,
            category: 'pots'
        },
        {
            id: 'p6',
            image: '../images/railing.jpg',
            title: 'Railing Planters',
            description: 'Adjustable planters for balcony railings',
            price: 799,
            category: 'pots'
        }
    ],
    soil: [
        {
            id: 'sf1',
            image: '../images/potting-mix.jpg',
            title: 'Premium Potting Mix',
            description: 'All-purpose potting mix for container plants',
            price: 449,
            category: 'soil'
        },
        {
            id: 'sf2',
            image: '../images/organic-compost.jpg',
            title: 'Organic Compost',
            description: 'Rich organic compost for healthy plants',
            price: 299,
            category: 'soil'
        },
        {
            id: 'sf3',
            image: '../images/coco-peat.jpg',
            title: 'Coco Peat Block',
            description: 'Compressed coco peat for soil amendment',
            price: 199,
            category: 'soil'
        },
        {
            id: 'sf4',
            image: '../images/vermicompost.jpg',
            title: 'Vermicompost',
            description: 'Natural fertilizer from earthworms',
            price: 399,
            category: 'soil'
        },
        {
            id: 'sf5',
            image: '../images/perlite.jpg',
            title: 'Perlite',
            description: 'Natural soil aerator for better drainage',
            price: 249,
            category: 'soil'
        },
        {
            id: 'sf6',
            image: '../images/neem-cake.jpg',
            title: 'Neem Cake Fertilizer',
            description: 'Organic pest control and fertilizer',
            price: 349,
            category: 'soil'
        }
    ]
};

// State management
let currentCategory = 'all';
let currentSort = 'default';
let searchQuery = '';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.querySelector('.product-filter__select');
const searchInput = document.querySelector('.product-filter__input');

// Filter products by category and search query
function filterProducts() {
    let filtered = [];
    
    // Combine all products into a single array
    Object.values(products).forEach(category => {
        filtered = filtered.concat(category);
    });

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(product => product.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }

    return filtered;
}

// Sort products
function sortProducts(products) {
    switch (currentSort) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name':
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
        default:
            return products;
    }
}

// Render products
function renderProducts() {
    let filtered = filterProducts();
    filtered = sortProducts(filtered);

    // Render products
    productsGrid.innerHTML = filtered.map(product => `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-card__image">
            <div class="product-card__content">
                <h3 class="product-card__title">${product.title}</h3>
                <p class="product-card__description">${product.description}</p>
                <p class="product-card__price">₹${product.price}</p>
                <a href="contact.html" class="button button--primary product-card__button">Order</a>
            </div>
        </article>
    `).join('');
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.dataset.category;
        renderProducts();
    });
});

sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
});

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// Initialize the page
renderProducts(); 