// EXPANDED PRODUCT CATALOG (24 Items Across 8 Categories)
const initialProducts = [
    {
        id: "SG-101",
        name: "Pro Rubber Hex Dumbbell Set (20kg)",
        category: "Gym Equipment",
        price: 4999,
        stock: 15,
        rating: 4.8,
        reviewsCount: 124,
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
        description: "Heavy duty cast iron dumbbell pair wrapped in durable, low-odor rubber contour for commercial & home gym floor protection.",
        badge: "BESTSELLER"
    },
    {
        id: "SG-102",
        name: "English Willow Kashmir Cricket Bat",
        category: "Cricket Equipment",
        price: 3499,
        stock: 8,
        rating: 4.7,
        reviewsCount: 89,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80",
        description: "Handcrafted Grade 1 Kashmir willow featuring a massive sweet spot, thick edges, and traditional cane handle binding.",
        badge: "NEW"
    },
    {
        id: "SG-103",
        name: "Ultra Cushioned Marathon Running Shoes",
        category: "Sports Shoes",
        price: 2999,
        stock: 22,
        rating: 4.9,
        reviewsCount: 210,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        description: "Breathable knit upper with responsive energy bounce foam midsole engineered for distance runners and road training.",
        badge: "SALE"
    },
    {
        id: "SG-104",
        name: "Official Match Size 5 Leather Football",
        category: "Football Equipment",
        price: 1299,
        stock: 30,
        rating: 4.6,
        reviewsCount: 64,
        image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=600&q=80",
        description: "Thermo-bonded 32-panel FIFA quality spec match football with high shape retention latex bladder.",
        badge: null
    },
    {
        id: "SG-105",
        name: "Aero Power Badminton Racquet Set",
        category: "Badminton Equipment",
        price: 1899,
        stock: 4,
        rating: 4.5,
        reviewsCount: 45,
        image: "https://images.unsplash.com/photo-1626225967045-9440882269db?auto=format&fit=crop&w=600&q=80",
        description: "Full graphite ultra-light racquet frame with high tension stringing and carrying thermal bag.",
        badge: "LOW STOCK"
    },
    {
        id: "SG-106",
        name: "Non-Slip Eco Yoga Mat (8mm)",
        category: "Yoga & Exercise",
        price: 899,
        stock: 40,
        rating: 4.8,
        reviewsCount: 175,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80",
        description: "High density eco-friendly TPE foam with laser aligner grid lines for joint protection during Pilates & Yoga routines.",
        badge: null
    },
    {
        id: "SG-107",
        name: "Dry-Fit Performance Compression Tee",
        category: "Sportswear",
        price: 799,
        stock: 25,
        rating: 4.4,
        reviewsCount: 92,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
        description: "4-way stretch moisture-wicking fabric for muscle recovery, thermal breathability, and anti-friction comfort.",
        badge: "SALE"
    },
    {
        id: "SG-108",
        name: "Smart Fitness Activity Tracker Watch",
        category: "Fitness Accessories",
        price: 2499,
        stock: 12,
        rating: 4.3,
        reviewsCount: 110,
        image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80",
        description: "Real-time heart rate sensor, SpO2 tracker, 14 sport modes, and IP68 waterproof rating.",
        badge: null
    },
    {
        id: "SG-109",
        name: "Adjustable Olympic Squat Barbell Rack",
        category: "Gym Equipment",
        price: 12999,
        stock: 3,
        rating: 4.9,
        reviewsCount: 38,
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
        description: "Heavy gauge steel frame rated for up to 350kg capacity with spotter arms and dip handle extensions.",
        badge: "PREMIUM"
    },
    {
        id: "SG-110",
        name: "Heavy Latex Resistance Loop Bands",
        category: "Fitness Accessories",
        price: 599,
        stock: 50,
        rating: 4.7,
        reviewsCount: 310,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=600&q=80",
        description: "Set of 5 color-coded tension levels ranging from extra light to extra heavy for rehabilitation & strength.",
        badge: "POPULAR"
    },
    {
        id: "SG-111",
        name: "Leather Cricket Ball (Pack of 6)",
        category: "Cricket Equipment",
        price: 1499,
        stock: 18,
        rating: 4.6,
        reviewsCount: 52,
        image: "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?auto=format&fit=crop&w=600&q=80",
        description: "Alum tanned leather, hand stitched 4-piece tournament grade red cricket balls for club matches.",
        badge: null
    },
    {
        id: "SG-112",
        name: "Pro Turf Goalkeeper Gloves",
        category: "Football Equipment",
        price: 1199,
        stock: 9,
        rating: 4.4,
        reviewsCount: 40,
        image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&q=80",
        description: "High friction latex palm grip with fingersave protection spines and supportive wrist wrap strap.",
        badge: null
    },
    {
        id: "SG-113",
        name: "Multi-Angle Adjustable Utility Weight Bench",
        category: "Gym Equipment",
        price: 7499,
        stock: 10,
        rating: 4.8,
        reviewsCount: 76,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
        description: "Commercial 7-level incline/decline position weight bench with high-density foam padding and heavy-duty steel base.",
        badge: "NEW"
    },
    {
        id: "SG-114",
        name: "Ergonomic Speed Steel Jump Rope",
        category: "Fitness Accessories",
        price: 499,
        stock: 35,
        rating: 4.5,
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
        description: "360-degree ball bearing system speed jump rope with tangle-free steel wire cable and anti-slip handles.",
        badge: null
    },
    {
        id: "SG-115",
        name: "Pro Indoor Court Badminton Shoes",
        category: "Sports Shoes",
        price: 3299,
        stock: 14,
        rating: 4.7,
        reviewsCount: 68,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
        description: "Non-marking gum rubber sole engineered for fast lateral movements, ankle stability, and shock absorption.",
        badge: null
    },
    {
        id: "SG-116",
        name: "Athletic Quick-Dry Training Shorts",
        category: "Sportswear",
        price: 699,
        stock: 28,
        rating: 4.3,
        reviewsCount: 84,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80",
        description: "Lightweight breathable gym shorts with built-in phone pocket, elastic waistband, and side ventilation vents.",
        badge: "SALE"
    },
    {
        id: "SG-117",
        name: "Professional Cricket Helmet with Visor",
        category: "Cricket Equipment",
        price: 2199,
        stock: 11,
        rating: 4.9,
        reviewsCount: 59,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80",
        description: "High impact outer shell with steel grille protection, adjustable chin strap, and sweat absorption lining.",
        badge: "SAFETY PASS"
    },
    {
        id: "SG-118",
        name: "Flexible Agility Ladder & Marker Cones Set",
        category: "Football Equipment",
        price: 899,
        stock: 20,
        rating: 4.6,
        reviewsCount: 95,
        image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&q=80",
        description: "6m footwork agility ladder with 10 vibrant marker cones and carrying bag for foot speed conditioning.",
        badge: null
    },
    {
        id: "SG-119",
        name: "Tournament Goose Feather Shuttlecocks (12 Pack)",
        category: "Badminton Equipment",
        price: 1199,
        stock: 26,
        rating: 4.8,
        reviewsCount: 180,
        image: "https://images.unsplash.com/photo-1626225967045-9440882269db?auto=format&fit=crop&w=600&q=80",
        description: "Grade-A natural goose feather shuttlecocks tested for consistent flight trajectory and durability.",
        badge: "POPULAR"
    },
    {
        id: "SG-120",
        name: "High-Density Foam Muscle Roller",
        category: "Yoga & Exercise",
        price: 749,
        stock: 32,
        rating: 4.5,
        reviewsCount: 115,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80",
        description: "Trigger point grid pattern foam roller designed for deep tissue massage, myofascial release, and soreness relief.",
        badge: null
    },
    {
        id: "SG-121",
        name: "Cast Iron Kettlebell (16kg)",
        category: "Gym Equipment",
        price: 2799,
        stock: 16,
        rating: 4.7,
        reviewsCount: 88,
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
        description: "Single piece solid cast iron kettlebell with textured smooth grip handle for swings, squats, and snatches.",
        badge: null
    },
    {
        id: "SG-122",
        name: "Unisex Cushioned Sports Socks (Pack of 3)",
        category: "Sportswear",
        price: 399,
        stock: 60,
        rating: 4.4,
        reviewsCount: 230,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
        description: "Cotton-blend crew socks with reinforced heel & toe cushioning for blister protection and sweat control.",
        badge: null
    },
    {
        id: "SG-123",
        name: "Breathable Mesh Gym Duffel Bag",
        category: "Fitness Accessories",
        price: 1299,
        stock: 15,
        rating: 4.6,
        reviewsCount: 77,
        image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80",
        description: "Water-resistant travel duffle with dedicated shoe compartment, wet clothes pocket, and padded shoulder strap.",
        badge: null
    },
    {
        id: "SG-124",
        name: "Pro Firm Ground Football Cleats",
        category: "Sports Shoes",
        price: 3899,
        stock: 10,
        rating: 4.8,
        reviewsCount: 54,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        description: "Molded TPU stud configuration designed for explosive traction, acceleration, and ball control on natural grass pitches.",
        badge: "NEW"
    }
];

// GLOBAL APPLICATION STATE
let products = JSON.parse(localStorage.getItem('sg_products')) || initialProducts;
let cart = JSON.parse(localStorage.getItem('sg_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('sg_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('sg_user')) || null;
let orderHistory = JSON.parse(localStorage.getItem('sg_orders')) || [];

let activeCategory = "All";
let activeMaxPrice = 25000;
let appliedVoucherDiscount = 0;

function saveData() {
    localStorage.setItem('sg_products', JSON.stringify(products));
    localStorage.setItem('sg_cart', JSON.stringify(cart));
    localStorage.setItem('sg_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('sg_user', JSON.stringify(currentUser));
    localStorage.setItem('sg_orders', JSON.stringify(orderHistory));
}

window.addEventListener('DOMContentLoaded', () => {
    renderAuthHeader();
    renderCatalog();
    updateCartBadges();
    updateWishlistBadges();
});

// CATEGORY & FILTER LOGIC
function filterCategory(cat) {
    activeCategory = cat;
    document.getElementById('activeCategoryName').innerText = cat === 'All' ? 'All Gear' : cat;
    renderCatalog();
}

function updatePriceFilter(val) {
    activeMaxPrice = parseInt(val);
    document.getElementById('priceValue').innerText = `₹${activeMaxPrice.toLocaleString('en-IN')}`;
    renderCatalog();
}

function applyFilters() { renderCatalog(); }

function resetFilters() {
    activeCategory = "All";
    activeMaxPrice = 25000;
    if(document.getElementById('priceRange')) document.getElementById('priceRange').value = 25000;
    if(document.getElementById('ratingFilter')) document.getElementById('ratingFilter').value = "0";
    if(document.getElementById('inStockOnly')) document.getElementById('inStockOnly').checked = false;
    if(document.getElementById('sortBy')) document.getElementById('sortBy').value = "featured";
    if(document.getElementById('searchInput')) document.getElementById('searchInput').value = "";
    filterCategory('All');
}

function handleSearch(e) { renderCatalog(); }
function executeSearch() { renderCatalog(); }
function toggleMobileSearch() {
    document.getElementById('mobileSearchContainer').classList.toggle('hidden');
}
function scrollToProducts() {
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
}

// CATALOG RENDERING ENGINE
function renderCatalog() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyCatalogState');
    const searchTerm = (document.getElementById('searchInput').value || "").toLowerCase().trim();
    const minRating = parseFloat(document.getElementById('ratingFilter') ? document.getElementById('ratingFilter').value : 0);
    const inStockOnly = document.getElementById('inStockOnly') ? document.getElementById('inStockOnly').checked : false;
    const sortBy = document.getElementById('sortBy') ? document.getElementById('sortBy').value : "featured";

    let filtered = products.filter(p => {
        const matchesCat = (activeCategory === "All" || p.category === activeCategory);
        const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm);
        const matchesPrice = p.price <= activeMaxPrice;
        const matchesRating = p.rating >= minRating;
        const matchesStock = !inStockOnly || p.stock > 0;
        return matchesCat && matchesSearch && matchesPrice && matchesRating && matchesStock;
    });

    if (sortBy === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (sortBy === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (sortBy === 'rating') filtered.sort((a,b) => b.rating - a.rating);

    document.getElementById('productCountBadge').innerText = `${filtered.length} items`;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(p => {
        const isWishlisted = wishlist.some(item => item.id === p.id);
        const isOutOfStock = p.stock === 0;

        return `
        <div class="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col group">
            <div class="relative h-48 bg-slate-900 overflow-hidden cursor-pointer" onclick="openProductModal('${p.id}')">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-3 left-3 flex flex-col gap-1">
                    ${p.badge ? `<span class="bg-brand-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">${p.badge}</span>` : ''}
                    ${isOutOfStock ? `<span class="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">Sold Out</span>` : ''}
                </div>
                <button onclick="event.stopPropagation(); toggleWishlist('${p.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/70 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-500 transition">
                    <i class="${isWishlisted ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}"></i>
                </button>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div class="space-y-1">
                    <div class="flex items-center justify-between text-[11px] text-slate-400">
                        <span>${p.category}</span>
                        <span class="text-amber-400 font-bold flex items-center gap-1">
                            <i class="fa-solid fa-star text-[10px]"></i> ${p.rating}
                        </span>
                    </div>
                    <h3 onclick="openProductModal('${p.id}')" class="font-bold text-sm text-slate-100 hover:text-brand-500 cursor-pointer line-clamp-1 transition">${p.name}</h3>
                    <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${p.description}</p>
                </div>
                <div class="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <div>
                        <span class="block text-[10px] text-slate-400 uppercase font-semibold">Price</span>
                        <span class="text-base font-extrabold text-white">₹${p.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button onclick="addToCart('${p.id}')" ${isOutOfStock ? 'disabled' : ''} 
                        class="bg-brand-600 hover:bg-brand-500 disabled:bg-slate-800 disabled:text-slate-600 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>${isOutOfStock ? 'Out of Stock' : 'Add'}</span>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// SHOPPING CART SYSTEM
function toggleCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const panel = document.getElementById('cartPanel');
    const isOpen = !drawer.classList.contains('opacity-0');

    if (isOpen) {
        panel.classList.add('translate-x-full');
        drawer.classList.add('opacity-0');
        setTimeout(() => drawer.classList.add('pointer-events-none'), 300);
    } else {
        renderCartDrawer();
        drawer.classList.remove('pointer-events-none', 'opacity-0');
        panel.classList.remove('translate-x-full');
    }
}

function addToCart(productId, qtyToAdd = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock <= 0) { showToast("Out of stock", "error"); return; }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) cartItem.qty += qtyToAdd;
    else cart.push({ id: productId, qty: qtyToAdd });

    saveData();
    updateCartBadges();
    showToast(`Added "${product.name}" to cart!`);
}

function updateCartQty(productId, newQty) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (newQty <= 0) {
        cart = cart.filter(item => item.id !== productId);
    } else {
        const item = cart.find(i => i.id === productId);
        if (item) item.qty = newQty;
    }
    saveData();
    updateCartBadges();
    renderCartDrawer();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveData();
    updateCartBadges();
    renderCartDrawer();
    showToast("Item removed from cart");
}

function updateCartBadges() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCountBadge').innerText = totalQty;
}

function calculateCartTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        const p = products.find(x => x.id === item.id);
        if (p) subtotal += p.price * item.qty;
    });
    const tax = Math.round(subtotal * 0.05);
    const delivery = (subtotal === 0 || subtotal >= 1999) ? 0 : 150;
    return { subtotal, tax, delivery, grandTotal: subtotal + tax + delivery };
}

function renderCartDrawer() {
    const container = document.getElementById('cartItemsContainer');
    const { subtotal, tax, delivery, grandTotal } = calculateCartTotals();
    
    const freeThreshold = 1999;
    const pct = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    if(document.getElementById('shippingProgressBar')) document.getElementById('shippingProgressBar').style.width = `${pct}%`;
    if(document.getElementById('shippingProgressPercent')) document.getElementById('shippingProgressPercent').innerText = `${pct}%`;
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-400">Your shopping bag is empty</div>`;
    } else {
        container.innerHTML = cart.map(item => {
            const p = products.find(x => x.id === item.id);
            if (!p) return '';
            return `<div class="flex gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800 items-center">
                <img src="${p.image}" class="w-14 h-14 rounded-xl object-cover bg-slate-900">
                <div class="flex-1 space-y-1">
                    <h4 class="font-bold text-xs text-white line-clamp-1">${p.name}</h4>
                    <span class="text-xs font-extrabold text-brand-500">₹${p.price.toLocaleString('en-IN')}</span>
                    <div class="flex items-center gap-2 pt-1">
                        <div class="flex items-center bg-slate-900 rounded-lg border border-slate-800">
                            <button onclick="updateCartQty('${p.id}', ${item.qty - 1})" class="px-2 py-0.5 text-slate-400 hover:text-white text-xs">-</button>
                            <span class="px-2 text-xs font-bold text-white">${item.qty}</span>
                            <button onclick="updateCartQty('${p.id}', ${item.qty + 1})" class="px-2 py-0.5 text-slate-400 hover:text-white text-xs">+</button>
                        </div>
                    </div>
                </div>
                <button onclick="removeFromCart('${p.id}')" class="text-slate-500 hover:text-red-400 p-2">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            </div>`;
        }).join('');
    }

    document.getElementById('cartSubtotal').innerText = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('cartTax').innerText = `₹${tax.toLocaleString('en-IN')}`;
    document.getElementById('cartDelivery').innerText = delivery === 0 ? "FREE" : `₹${delivery}`;
    document.getElementById('cartGrandTotal').innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// WISHLIST LOGIC
function toggleWishlist(productId) {
    const idx = wishlist.findIndex(item => item.id === productId);
    if (idx > -1) wishlist.splice(idx, 1);
    else wishlist.push({ id: productId });
    saveData();
    updateWishlistBadges();
    renderCatalog();
}

function updateWishlistBadges() {
    const badge = document.getElementById('wishlistBadge');
    badge.innerText = wishlist.length;
    if (wishlist.length > 0) badge.classList.remove('scale-0');
    else badge.classList.add('scale-0');
}
function openWishlistModal() {
    const container = document.getElementById('wishlistItemsContainer');
    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-center text-xs text-slate-400 py-6">Your wishlist is empty.</p>`;
    } else {
        container.innerHTML = wishlist.map(item => {
            const p = products.find(x => x.id === item.id);
            if (!p) return '';
            return `<div class="flex items-center justify-between bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3">
                    <img src="${p.image}" class="w-12 h-12 rounded-xl object-cover bg-slate-900">
                    <div>
                        <h4 class="font-bold text-xs text-white">${p.name}</h4>
                        <span class="text-xs text-brand-500 font-extrabold">₹${p.price.toLocaleString('en-IN')}</span>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="addToCart('${p.id}')" class="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">Add to Cart</button>
                    <button onclick="toggleWishlist('${p.id}'); openWishlistModal()" class="text-slate-500 hover:text-red-400 p-1.5"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>`;
        }).join('');
    }
    document.getElementById('wishlistModal').classList.remove('hidden');
}
function closeWishlistModal() { document.getElementById('wishlistModal').classList.add('hidden'); }

// AUTHENTICATION
function renderAuthHeader() {
    const container = document.getElementById('authNavContainer');
    if (currentUser) {
        container.innerHTML = `<button onclick="openUserProfileModal()" class="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 p-1.5 pr-3 rounded-xl border border-slate-800 transition">
            <div class="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white text-xs">${currentUser.name.charAt(0).toUpperCase()}</div>
            <span class="text-xs font-bold text-slate-200 hidden sm:inline">${currentUser.name.split(' ')[0]}</span>
        </button>`;
    } else {
        container.innerHTML = `<button onclick="openAuthModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-700 transition flex items-center gap-1.5">
            <i class="fa-regular fa-user"></i><span>Login</span>
        </button>`;
    }
}
function openAuthModal() { document.getElementById('authModal').classList.remove('hidden'); }
function closeAuthModal() { document.getElementById('authModal').classList.add('hidden'); }
function switchAuthTab(tab) {
    if(tab==='login') {
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('registerForm').classList.add('hidden');
    } else {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('registerForm').classList.remove('hidden');
    }
}
function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    if (email.includes("admin")) currentUser = { name: "Store Admin", email, role: "ADMIN" };
    else currentUser = { name: email.split('@')[0], email, role: "CUSTOMER" };
    saveData(); renderAuthHeader(); closeAuthModal(); showToast("Welcome back!");
}
function handleRegisterSubmit(e) {
    e.preventDefault();
    currentUser = { name: document.getElementById('regName').value, email: document.getElementById('regEmail').value, role: "CUSTOMER" };
    saveData(); renderAuthHeader(); closeAuthModal(); showToast("Account created!");
}

// CHECKOUT & ORDERS
function proceedToCheckout() {
    toggleCartDrawer();
    document.getElementById('checkoutModal').classList.remove('hidden');
}
function closeCheckoutModal() { document.getElementById('checkoutModal').classList.add('hidden'); }
function handlePlaceOrder(e) {
    e.preventDefault();
    cart = [];
    saveData(); updateCartBadges(); renderCatalog();
    closeCheckoutModal();
    document.getElementById('receiptModal').classList.remove('hidden');
}
function closeReceiptModal() { document.getElementById('receiptModal').classList.add('hidden'); }

// PRODUCT QUICK VIEW
function openProductModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const isWishlisted = wishlist.some(item => item.id === p.id);
    const modalContent = document.getElementById('productModalContent');
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div class="relative h-64 md:h-80 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
            </div>
            <div class="space-y-4">
                <div>
                    <span class="text-xs font-bold text-brand-500 uppercase tracking-widest">${p.category}</span>
                    <h2 class="text-xl font-extrabold text-white leading-tight">${p.name}</h2>
                    <div class="flex items-center gap-2 text-xs text-amber-400 pt-1">
                        <i class="fa-solid fa-star"></i>
                        <span class="font-bold text-white">${p.rating}</span>
                    </div>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${p.description}</p>
                <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center">
                    <div>
                        <span class="text-[10px] font-bold text-slate-400 uppercase">Unit Price</span>
                        <span class="block text-2xl font-extrabold text-white">₹${p.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-bold text-slate-400 uppercase">Availability</span>
                        <span class="block text-xs font-bold ${p.stock > 0 ? 'text-emerald-400' : 'text-red-400'}">${p.stock > 0 ? `In Stock (${p.stock})` : 'Out of Stock'}</span>
                    </div>
                </div>
                <div class="flex gap-3 pt-2">
                    <button onclick="addToCart('${p.id}'); closeProductModal()" ${p.stock === 0 ? 'disabled' : ''} class="flex-1 bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-600/30 transition flex items-center justify-center gap-2"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('productModal').classList.remove('hidden');
}
function closeProductModal() { document.getElementById('productModal').classList.add('hidden'); }

// ADMIN & MODALS
function toggleAdminView() { openAdminModal(); }
function openAdminModal() {
    renderAdminTable();
    document.getElementById('adminModal').classList.remove('hidden');
}
function closeAdminModal() { document.getElementById('adminModal').classList.add('hidden'); }
function renderAdminTable() {
    const table = document.getElementById('adminProductsTable');
    table.innerHTML = products.map(p => `
        <tr class="hover:bg-slate-900/50">
            <td class="p-3 font-bold text-white flex items-center gap-2">
                <img src="${p.image}" class="w-8 h-8 rounded object-cover">
                <span class="line-clamp-1">${p.name}</span>
            </td>
            <td class="p-3 text-slate-400">${p.category}</td>
            <td class="p-3 font-bold text-brand-500">₹${p.price.toLocaleString('en-IN')}</td>
            <td class="p-3 font-bold ${p.stock <= 5 ? 'text-amber-500' : 'text-slate-300'}">${p.stock}</td>
            <td class="p-3 text-right space-x-2">
                <button onclick="deleteProduct('${p.id}')" class="text-slate-400 hover:text-red-400 p-1"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    `).join('');
}
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveData(); renderAdminTable(); renderCatalog();
    showToast("Product removed from inventory");
}
function openAddProductModal() { document.getElementById('productFormModal').classList.remove('hidden'); }
function closeProductFormModal() { document.getElementById('productFormModal').classList.add('hidden'); }
function handleSaveProduct(e) {
    e.preventDefault();
    const name = document.getElementById('crudProdName').value;
    const cat = document.getElementById('crudProdCat').value;
    const price = parseInt(document.getElementById('crudProdPrice').value);
    const stock = parseInt(document.getElementById('crudProdStock').value);
    const rating = parseFloat(document.getElementById('crudProdRating').value);
    const img = document.getElementById('crudProdImg').value;
    const desc = document.getElementById('crudProdDesc').value;

    const newId = "SG-" + (100 + products.length + 1);
    products.unshift({ id: newId, name, category: cat, price, stock, rating, image: img, description: desc, badge: "NEW" });
    saveData(); renderAdminTable(); renderCatalog(); closeProductFormModal();
    showToast("Product Added!");
}
function openContactModal() { document.getElementById('contactModal').classList.remove('hidden'); }
function closeContactModal() { document.getElementById('contactModal').classList.add('hidden'); }
function handleContactSubmit(e) { e.preventDefault(); closeContactModal(); showToast("Ticket submitted!"); }
function openUserProfileModal() { document.getElementById('userProfileModal').classList.remove('hidden'); }
function closeUserProfileModal() { document.getElementById('userProfileModal').classList.add('hidden'); }
function applyVoucher() { showToast("Voucher Applied"); }

// TOAST NOTIFICATIONS
function showToast(message, type = "info") {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `bg-slate-900 border border-slate-700 p-3.5 rounded-xl text-xs text-white shadow-xl`;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
