// Database updated with your exact file extensions from the sidebar
const brandDatabase = {
    bharathi: {
        title: "Bharathi Cement (OPC 53 / PPC)",
        tagline: "German Technology - Ultra High Early Strength",
        useCase: "Perfect for high-performance concrete slabs, heavy foundations, and pillars demanding extreme structural load capacity.",
        benefits: "Advanced automated clean packaging to strongly resist moisture and outside elements.",
        imageUrl: "bharathi.avif" // Matches your sidebar file name perfectly
    },
    zuari: {
        title: "Zuari Cement (Classic / PowerX)",
        tagline: "Texmaco Group Excellence - Smooth Workability",
        useCase: "Top choice for general high-durability brick masonry, long-lasting wall plastering, and weather-proof external setups.",
        benefits: "Optimized chemical composition prevents micro-cracks over massive open surface areas.",
        imageUrl: "zuari.jpg" // Matches your sidebar file name perfectly
    },
    ultratech: {
        title: "UltraTech Cement (The Engineer's Choice)",
        tagline: "India's No. 1 Cement - Ultimate Structural Density",
        useCase: "The gold standard for multi-story residential casting, critical roofing slabs, and severe weather-exposed beams.",
        benefits: "Exceptional initial setting times and unmatched long-term architectural durability scores.",
        imageUrl: "ultratech.png" // Matches your sidebar file name perfectly
    }
};

const displayContainer = document.getElementById('product-display');
const bharathiBtn = document.getElementById('bharathi-btn');
const zuariBtn = document.getElementById('zuari-btn');
const ultratechBtn = document.getElementById('ultratech-btn');
const calculationBtn = document.getElementById('calc-btn');

function loadBrand(brandKey) {
    const data = brandDatabase[brandKey];
    if(!displayContainer) return;
    
    displayContainer.innerHTML = `
        <div class="product-image-container">
            <img src="${data.imageUrl}" alt="${data.title}" style="width: 100%; max-width: 280px; height: auto; border-radius: 12px; box-shadow: 0 12px 24px rgba(0,0,0,0.5); object-fit: contain; background: #fff; padding: 10px;">
        </div>
        <div class="product-details-container">
            <span class="badge-3d">OFFICIAL AUTHORIZED DEALER</span>
            <h3 style="font-size: 2.2rem; font-weight: 800; color: #fff; margin-bottom: 10px;">${data.title}</h3>
            <p style="color: #ff9f1c; font-weight: 700; font-size: 1.2rem; margin-bottom: 15px;">${data.tagline}</p>
            <p style="margin-bottom: 12px; font-size: 1.1rem; color: #cbd5e1;"><strong>Best For:</strong> ${data.useCase}</p>
            <p style="color: #94a3b8; font-size: 1rem;"><strong>Advantage:</strong> ${data.benefits}</p>
        </div>
    `;
}

function resetActiveTabs() {
    [bharathiBtn, zuariBtn, ultratechBtn].forEach(btn => {
        if(btn) btn.classList.remove('active');
    });
}

if(bharathiBtn) {
    bharathiBtn.addEventListener('click', () => {
        resetActiveTabs();
        bharathiBtn.classList.add('active');
        loadBrand('bharathi');
    });
}

if(zuariBtn) {
    zuariBtn.addEventListener('click', () => {
        resetActiveTabs();
        zuariBtn.classList.add('active');
        loadBrand('zuari');
    });
}

if(ultratechBtn) {
    ultratechBtn.addEventListener('click', () => {
        resetActiveTabs();
        ultratechBtn.classList.add('active');
        loadBrand('ultratech');
    });
}

if(calculationBtn) {
    calculationBtn.addEventListener('click', () => {
        const areaInput = document.getElementById('volume-input').value;
        const outcomeBox = document.getElementById('calc-result');
        if (areaInput && areaInput > 0) {
            const totalBags = Math.ceil(areaInput * 0.45);
            outcomeBox.innerText = `Estimated Requirement: ~${totalBags} Bags (50kg Net Weight)`;
        } else {
            outcomeBox.innerText = "Please input a valid square footage area.";
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.innerText = new Date().getFullYear();
    loadBrand('bharathi');
});