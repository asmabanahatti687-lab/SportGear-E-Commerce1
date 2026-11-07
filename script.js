// INITIAL DEMO DATABASE PRE-SEEDED PRODUCTS
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
        description: "Heavy duty cast iron dumbbell pair wrapped in durable rubber for gym floor protection.",
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
        description: "Handcrafted Grade 1 Kashmir willow featuring a massive sweet spot and thick edges.",
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
        description: "Breathable knit upper with responsive energy bounce foam midsole for distance runners.",
        badge: "SALE"
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
    document.getElementById('searchInput').value = "";
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

    let filtered = products.filter(p => {
        const matchesCat = (activeCategory === "All" || p.category === activeCategory);
        const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm);
        const matchesPrice = p.price <= activeMaxPrice;
        return matchesCat && matchesSearch && matchesPrice;
    });

    document.getElementById('productCountBadge').innerText = `${filtered.length} items`;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(p => {
        const isWishlisted = wishlist.some(item => item.id === p.id);
        return `
        <div class="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col group">
            <div class="relative h-48 bg-slate-900 overflow-hidden cursor-pointer" onclick="openProductModal('${p.id}')">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <button onclick="event.stopPropagation(); toggleWishlist('${p.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/70 flex items-center justify-center text-slate-300 hover:text-red-500">
                    <i class="${isWishlisted ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}"></i>
                </button>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                    <h3 onclick="openProductModal('${p.id}')" class="font-bold text-sm text-slate-100 hover:text-brand-500 cursor-pointer">${p.name}</h3>
                    <p class="text-[11px] text-slate-400 line-clamp-2">${p.description}</p>
                </div>
                <div class="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span class="text-base font-extrabold text-white">₹${p.price.toLocaleString('en-IN')}</span>
                    <button onclick="addToCart('${p.id}')" class="bg-brand-600 hover:bg-brand-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold">Add</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// SHOPPING CART & DRAWER
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
    showToast(`Added to cart!`);
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
    
    container.innerHTML = cart.map(item => {
        const p = products.find(x => x.id === item.id);
        if (!p) return '';
        return `<div class="flex gap-3 bg-slate-950 p-3 rounded-xl items-center">
            <img src="${p.image}" class="w-12 h-12 rounded object-cover">
            <div class="flex-1"><h4 class="font-bold text-xs text-white">${p.name}</h4><span class="text-xs text-brand-500">₹${p.price} x ${item.qty}</span></div>
        </div>`;
    }).join('');

    document.getElementById('cartSubtotal').innerText = `₹${subtotal}`;
    document.getElementById('cartTax').innerText = `₹${tax}`;
    document.getElementById('cartGrandTotal').innerText = `₹${grandTotal}`;
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
function openWishlistModal() { document.getElementById('wishlistModal').classList.remove('hidden'); }
function closeWishlistModal() { document.getElementById('wishlistModal').classList.add('hidden'); }

// AUTHENTICATION
function renderAuthHeader() {
    const container = document.getElementById('authNavContainer');
    if (currentUser) {
        container.innerHTML = `<button onclick="openUserProfileModal()" class="bg-slate-900 p-2 rounded-xl text-xs font-bold text-white">${currentUser.name}</button>`;
    } else {
        container.innerHTML = `<button onclick="openAuthModal()" class="bg-slate-800 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold">Login</button>`;
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
    if (email.includes("admin")) currentUser = { name: "Admin", email, role: "ADMIN" };
    else currentUser = { name: "User", email, role: "CUSTOMER" };
    saveData(); renderAuthHeader(); closeAuthModal(); showToast("Logged in!");
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
    saveData(); updateCartBadges();
    closeCheckoutModal();
    document.getElementById('receiptModal').classList.remove('hidden');
}
function closeReceiptModal() { document.getElementById('receiptModal').classList.add('hidden'); }

// ADMIN & MODALS
function toggleAdminView() { openAdminModal(); }
function openAdminModal() { document.getElementById('adminModal').classList.remove('hidden'); }
function closeAdminModal() { document.getElementById('adminModal').classList.add('hidden'); }
function openAddProductModal() { document.getElementById('productFormModal').classList.remove('hidden'); }
function closeProductFormModal() { document.getElementById('productFormModal').classList.add('hidden'); }
function handleSaveProduct(e) { e.preventDefault(); closeProductFormModal(); showToast("Product Saved!"); }
function openContactModal() { document.getElementById('contactModal').classList.remove('hidden'); }
function closeContactModal() { document.getElementById('contactModal').classList.add('hidden'); }
function handleContactSubmit(e) { e.preventDefault(); closeContactModal(); showToast("Ticket submitted!"); }
function openUserProfileModal() { document.getElementById('userProfileModal').classList.remove('hidden'); }
function closeUserProfileModal() { document.getElementById('userProfileModal').classList.add('hidden'); }
function openProductModal(id) { document.getElementById('productModal').classList.remove('hidden'); }
function closeProductModal() { document.getElementById('productModal').classList.add('hidden'); }
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