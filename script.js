
let products = [
    { 
        id: 1, 
        name: "Bút Máy Cao Cấp", 
        price: 50000, 
        img: "./img/butmay.JPG",
        category: "Bút viết",
        description: "Bút máy cao cấp với ngòi bằng thép không gỉ, viết êm mượt. Thiết kế sang trọng, phù hợp cho học sinh, sinh viên và dân văn phòng. Mực bền màu, không lem.",
        stock: 50,
        brand: "Thiên Long"
    },
    { 
        id: 2, 
        name: "Vở Học Sinh 96 Trang", 
        price: 12000, 
        img: "./img/vohocsinh.JPG",
        category: "Vở/Sổ",
        description: "Vở học sinh 96 trang, giấy trắng mịn, không lem mực. Đường kẻ chuẩn, bìa cứng bền đẹp. Phù hợp cho mọi lứa tuổi học sinh.",
        stock: 200,
        brand: "Hồng Hà"
    },
    { 
        id: 3, 
        name: "Bộ Thước Kẻ Đa Năng", 
        price: 25000, 
        img: "./img/bothuocke.JPG",
        category: "Dụng cụ học tập",
        description: "Bộ thước kẻ 4 món gồm: thước thẳng 30cm, thước góc, eke 45° và eke 60°. Chất liệu nhựa trong suốt, độ chính xác cao. Thiết yếu cho học sinh.",
        stock: 80,
        brand: "Thiên Long"
    },
    { 
        id: 4, 
        name: "Máy Tính Casio FX-580VN X",  
        price: 850000, 
        img: "./img/maytinhcasio.JPG",
        category: "Dụng cụ học tập",
        description: "Máy tính khoa học Casio FX-580VN X, 552 chức năng. Màn hình hiển thị tự nhiên, pin năng lượng mặt trời. Được phép sử dụng trong các kỳ thi quốc gia.",
        stock: 30,
        brand: "Casio"
    },
    { 
        id: 5, 
        name: "Balo Chống Gù Lưng", 
        price: 450000, 
        img: "./img/balo.JPG",
        category: "Dụng cụ học tập",
        description: "Balo học sinh thiết kế chống gù lưng, có đệm lưng thoáng khí. Nhiều ngăn tiện dụng, chất liệu chống nước. Phù hợp cho học sinh tiểu học và THCS.",
        stock: 45,
        brand: "Mikkor"
    },
    { 
        id: 6, 
        name: "Bộ Màu Vẽ Colormate 120 Món",    
        price: 250000,  
        img: "./img/bomauve.JPG",
        category: "Dụng cụ học tập",
        description: "Bộ màu vẽ đa năng 120 món gồm bút chì màu, sáp màu, bút lông, bút dạ. Màu sắc tươi sáng, không độc hại. Hộp nhựa cao cấp, tiện lợi mang theo.",
        stock: 25,
        brand: "Colormate"
    },
    { 
        id: 7, 
        name: "Đèn Bàn Học Chống Cận",     
        price: 180000,    
        img: "./img/denhoc.JPG",
        category: "Dụng cụ học tập",
        description: "Đèn LED bàn học bảo vệ mắt, ánh sáng không chói, không nhấp nháy. 3 chế độ sáng, cần đèn uốn dẻo 360°. Tiết kiệm điện, tuổi thọ cao.",
        stock: 60,
        brand: "Điện Quang"
    }, 
    { 
        id: 8, 
        name: "Vở Campus 200 Trang",    
        price: 65000,   
        img: "./img/voCamPus.JPG",
        category: "Vở/Sổ",
        description: "Vở Campus 200 trang, giấy trắng cao cấp, mịn màng. Đường kẻ chuẩn, bìa cứng bền đẹp. Lò xo chắc chắn, dễ dàng ghi chép và xé trang.",
        stock: 100,
        brand: "Campus"
    },
    { 
        id: 9, 
        name: "Bút Thiên Long Hộp 20 Cây",    
        price: 80000,  
        img: "./img/butThienLong.jpg",
        category: "Bút viết",
        description: "Hộp 20 cây bút bi Thiên Long TL-027, mực xanh. Viết trơn, mực đều, không lem. Thân bút trong suốt, tiện theo dõi mực. Giá trị tiết kiệm cho học sinh.",
        stock: 150,
        brand: "Thiên Long"
    },
    { 
        id: 10, 
        name: "Bút Chì Gỗ 2B Hộp 12 Cây", 
        price: 35000, 
        img: "./img/but-chi-go-2b.jpg",
        category: "Bút viết",
        description: "Bút chì gỗ 2B chất lượng cao, ruột chì đen đậm, không gãy. Hộp 12 cây tiện lợi. Phù hợp cho học sinh tiểu học và vẽ kỹ thuật.",
        stock: 120,
        brand: "Thiên Long"
    },
    { 
        id: 11, 
        name: "Bút Gel Xóa Được Pilot", 
        price: 45000, 
        img: "./img/but-gel-pilot.jpg",
        category: "Bút viết",
        description: "Bút gel xóa được Pilot Frixion, mực mịn, viết êm. Có thể xóa bằng đầu tẩy nhiệt. Màu xanh, đỏ, đen. Lý tưởng cho học sinh ghi chép.",
        stock: 90,
        brand: "Pilot"
    },
    { 
        id: 12, 
        name: "Bút Dạ Quang Highlight 6 Màu", 
        price: 55000, 
        img: "./img/but-da-quang-stabilo.jpg",
        category: "Bút viết",
        description: "Bộ 6 bút dạ quang màu neon sáng, không lem, không thấm giấy. Đầu bút dẹt tiện đánh dấu. Màu sắc: vàng, xanh lá, xanh dương, hồng, cam, tím.",
        stock: 75,
        brand: "Stabilo"
    },
    { 
        id: 13, 
        name: "Sổ Tay Bìa Da Cao Cấp A5", 
        price: 95000, 
        img: "./img/so-tay-bia-da.jpg",
        category: "Vở/Sổ",
        description: "Sổ tay bìa da PU cao cấp, 200 trang giấy dày. Có dây đánh dấu, túi đựng card. Thiết kế sang trọng, phù hợp làm quà tặng hoặc ghi chú công việc.",
        stock: 60,
        brand: "Klong"
    },
    { 
        id: 14, 
        name: "Giấy Note Dán 3M Post-it", 
        price: 42000, 
        img: "./img/giay-note-3m.jpg",
        category: "Vở/Sổ",
        description: "Giấy note dán 3M Post-it 76x76mm, 100 tờ/xấp. Dính tốt, không để lại vết. 4 màu pastel dễ thương. Tiện ghi chú nhanh, đánh dấu trang sách.",
        stock: 95,
        brand: "3M"
    },
    { 
        id: 15, 
        name: "Giấy A4 Double A 70gsm", 
        price: 95000, 
        img: "./img/giay-a4-doublea.jpg",
        category: "Vở/Sổ",
        description: "Giấy A4 Double A 70gsm, 500 tờ/ream. Giấy trắng mịn, độ trắng cao 167 CIE. Phù hợp in ấn, photocopy. Chất lượng cao, giá tốt.",
        stock: 150,
        brand: "Double A"
    },
    { 
        id: 16, 
        name: "Kéo Học Sinh Inox 16cm", 
        price: 18000, 
        img: "./img/keo-hoc-sinh.jpg",
        category: "Dụng cụ học tập",
        description: "Kéo học sinh inox 16cm, lưỡi sắc bén, cắt giấy mượt. Tay cầm nhựa êm tay, an toàn. Phù hợp cho học sinh tiểu học và THCS.",
        stock: 140,
        brand: "Thiên Long"
    },
    { 
        id: 17, 
        name: "Hộp Bút Nhựa Trong Suốt", 
        price: 22000, 
        img: "./img/hop-but-nhua.jpg",
        category: "Dụng cụ học tập",
        description: "Hộp bút nhựa trong suốt 2 ngăn, kích thước 20x8cm. Chất liệu nhựa PP bền, không độc hại. Nhiều màu sắc: xanh, hồng, tím, vàng.",
        stock: 110,
        brand: "Deli"
    },
    { 
        id: 18, 
        name: "Gọt Bút Chì 2 Lỗ Kim Loại", 
        price: 15000, 
        img: "./img/got-but-chi.jpg",
        category: "Dụng cụ học tập",
        description: "Gọt bút chì kim loại 2 lỗ (lỗ nhỏ và lỗ lớn), lưỡi dao sắc bén. Có hộp chứa phoi tiện lợi. Bền, không gỉ sét.",
        stock: 160,
        brand: "Thiên Long"
    },
    { 
        id: 19, 
        name: "Bìa Hồ Sơ Còng Nhựa A4", 
        price: 8000, 
        img: "./img/bia-ho-so.jpg",
        category: "Dụng cụ học tập",
        description: "Bìa hồ sơ còng nhựa A4, dày 0.5mm. Nhiều màu: xanh, đỏ, vàng, trắng. Tiện lưu trữ tài liệu, bài tập. Giá rẻ, chất lượng tốt.",
        stock: 200,
        brand: "Hồng Hà"
    },
    { 
        id: 20, 
        name: "Túi Đựng Bút Canvas Đa Năng", 
        price: 38000, 
        img: "./img/tui-dung-but-canvas.jpg",
        category: "Dụng cụ học tập",
        description: "Túi đựng bút vải canvas dày dặn, khóa kéo chắc chắn. Nhiều ngăn tiện lợi. Họa tiết dễ thương, nhiều màu sắc. Phù hợp học sinh, sinh viên.",
        stock: 85,
        brand: "Miniso"
    },
    { 
        id: 21, 
        name: "Bảng Viết Bút Lông Mini A4", 
        price: 68000, 
        img: "./img/bang-viet-but-long.jpg",
        category: "Dụng cụ học tập",
        description: "Bảng viết bút lông mini A4, khung nhựa bền. Kèm 3 bút lông và tẩy. Tiện học tập, ghi chú nhanh. Dễ lau sạch, tái sử dụng nhiều lần.",
        stock: 55,
        brand: "Deli"
    },
    { 
        id: 22, 
        name: "Bộ Compa Vẽ Kỹ Thuật 8 Món", 
        price: 125000, 
        img: "./img/bo-compa.jpg",
        category: "Dụng cụ học tập",
        description: "Bộ compa vẽ kỹ thuật 8 món trong hộp nhựa. Gồm: compa, compa nhỏ, bút chì, ruột chì, tẩy, thước. Chất liệu kim loại bền, chính xác cao.",
        stock: 40,
        brand: "Thiên Long"
    }
];

let cart = [];
let reviews = [];
let productReviews = [];
let currentUser = localStorage.getItem('user_login');
let currentUserRole = localStorage.getItem('user_role');

const PRODUCTS_KEY = 'app_products_v1';
const CART_KEY = 'app_cart_v1';
const REVIEWS_KEY = 'app_reviews_v1';
const PRODUCT_REVIEWS_KEY = 'app_product_reviews_v1';
const ADMIN_REAUTH_KEY = 'app_admin_reauth_v1';
const PROMOS_KEY = 'app_promos_v1';
const ADMIN_ACCOUNTS_KEY = 'app_admin_accounts_v1';
const ADMIN_SESSION_KEY = 'app_admin_session_v1';

let adminAccounts = [];

function saveAdminAccountsToStorage(){ try { localStorage.setItem(ADMIN_ACCOUNTS_KEY, JSON.stringify(adminAccounts)); } catch(e){ console.warn('Failed to save admin accounts', e); } }
function loadAdminAccountsFromStorage(){
    try{
        const raw = localStorage.getItem(ADMIN_ACCOUNTS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) adminAccounts = parsed;
    }catch(e){ console.warn('Unable to load admin accounts', e); }
}

function ensureDefaultAdmin(){
    if (!adminAccounts || !adminAccounts.length){
        adminAccounts = [{ username: 'admin', password: '123' }];
        saveAdminAccountsToStorage();
    }
}

function saveProductsToStorage() {
    try { localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products)); } catch(e) { console.warn('Failed to save products', e); }
}

function loadProductsFromStorage(){
    try{
        const raw = localStorage.getItem(PRODUCTS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        // Chỉ load từ localStorage nếu có nhiều sản phẩm hơn (admin đã thêm)
        if (Array.isArray(parsed) && parsed.length > products.length) {
            products = parsed.map(p => ({
                ...p,
                price: (typeof p.price === 'number') ? p.price : parseLocalizedNumber(p.price)
            }));
        } else {
            // Nếu localStorage có ít sản phẩm hơn, xóa và dùng sản phẩm mới từ code
            localStorage.removeItem(PRODUCTS_KEY);
            console.log('Đã cập nhật danh sách sản phẩm mới!');
        }
    } catch(e){ console.warn('Unable to load products', e); }
}

function parseLocalizedNumber(raw) {
    if (raw === null || raw === undefined) return NaN;
    let s = String(raw).trim();
    s = s.replace(/[^0-9.,-]/g, '');
    if (s === '') return NaN;

    const hasDot = s.indexOf('.') !== -1;
    const hasComma = s.indexOf(',') !== -1;

    if (hasDot && hasComma) {
        if (s.lastIndexOf('.') > s.lastIndexOf(',')) {
            s = s.replace(/,/g, '');
        } else {
            s = s.replace(/\./g, '').replace(/,/g, '.');
        }
    } else if (hasComma) {
        const parts = s.split(',');
        if (parts.length > 2) { s = s.replace(/,/g, ''); }
        else { s = (parts[1].length === 3 && parts[0].length > 1) ? s.replace(/,/g,'') : s.replace(/,/g,'.'); }
    } else {
        const dotCount = (s.match(/\./g) || []).length;
        if (dotCount > 1) {
            s = s.replace(/\./g, '');
        } else if (dotCount === 1) {
            const parts = s.split('.');
            if (parts[1].length === 3 && parts[0].length > 1) {
                s = s.replace(/\./g, '');
            }
        }
    }

    return parseFloat(s);
}

function saveCartToStorage() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e) { console.warn('Failed save cart', e); } }
function loadCartFromStorage() {
    try{
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            cart = parsed.map(item => ({
                ...item,
                price: (typeof item.price === 'number') ? item.price : parseLocalizedNumber(item.price)
            }));
        }
    }catch(e){ console.warn('Unable to load cart', e); }
}

function saveReviewsToStorage(){ try { localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews)); } catch(e) { console.warn('Failed save reviews', e); } }
function loadReviewsFromStorage(){
    try{
        const raw = localStorage.getItem(REVIEWS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) reviews = parsed;
    }catch(e){ console.warn('Unable to load reviews', e); }
}

function saveProductReviewsToStorage(){ try { localStorage.setItem(PRODUCT_REVIEWS_KEY, JSON.stringify(productReviews)); } catch(e) { console.warn('Failed save product reviews', e); } }
function loadProductReviewsFromStorage(){
    try{
        const raw = localStorage.getItem(PRODUCT_REVIEWS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) productReviews = parsed;
    }catch(e){ console.warn('Unable to load product reviews', e); }
}

let studentPromos = [
    { id: 1, text: '🎒 Ưu đãi Học sinh: Giảm 15% cho đơn hàng từ 200.000đ - Mã: HOCSINH15', active: true },
    { id: 2, text: '📚 Mua 2 vở Campus tặng 1 vở nhỏ - ưu đãi chỉ trong tuần này', active: true },
    { id: 3, text: '✂️ Sinh viên giảm 10% khi xuất trình thẻ - kiểm tra tại quầy', active: true }
];

function savePromosToStorage(){ 
    try { localStorage.setItem(PROMOS_KEY, JSON.stringify(studentPromos)); } 
    catch(e){ console.warn('Failed to save promos', e); } 
}
function loadPromosFromStorage(){
    try{
        const raw = localStorage.getItem(PROMOS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) studentPromos = parsed;
    } catch(e){ console.warn('Unable to load promos', e); }
}

let studentPromoIndex = 0, studentPromoTimer = null;
function renderStudentOffers(){
    const container = document.getElementById('offers-list');
    if (!container) return;
    const visible = studentPromos.filter(p => p.active);
    if (!visible.length) { container.innerHTML = '<div class="offer-item empty">Hiện không có ưu đãi nào dành cho học sinh.</div>'; return; }
    container.innerHTML = visible.map(p => `
        <div class="offer-item" data-id="${p.id}">${escapeHtml(p.text)}</div>
    `).join('');

    studentPromoIndex = ((studentPromoIndex % visible.length) + visible.length) % visible.length;
    Array.from(container.children).forEach((el, idx) => el.style.display = (idx === studentPromoIndex) ? 'flex' : 'none');
}

function showNextStudentPromo(dir = 1){
    const visible = studentPromos.filter(p => p.active);
    if (!visible.length) return;
    studentPromoIndex = ((studentPromoIndex + dir) % visible.length + visible.length) % visible.length;
    renderStudentOffers();
}

function startStudentPromoRotation(interval = 3500){
    stopStudentPromoRotation();
    studentPromoTimer = setInterval(()=> showNextStudentPromo(1), interval);
}
function stopStudentPromoRotation(){ if (studentPromoTimer){ clearInterval(studentPromoTimer); studentPromoTimer = null; } }


window.onload = function() {
    startBanner();
    loadProductsFromStorage();
    loadCartFromStorage();
    loadReviewsFromStorage();
    loadProductReviewsFromStorage();
    loadAdminAccountsFromStorage();
    ensureDefaultAdmin();
    loadPromosFromStorage();

    renderProducts();
    renderPublicReviews();
    renderPromotions();
    wirePromoControls();
    showPromo(0);
    startPromoAutoRotate();
    renderStudentOffers();
    wireStudentOfferControls();
    startStudentPromoRotation();
    checkLoginStatus();
    chuyenTrang('home');
};

function isAdminReauthenticated(){
    return localStorage.getItem(ADMIN_REAUTH_KEY) === 'true';
}

function lockAdminSession(){
    localStorage.removeItem(ADMIN_REAUTH_KEY);
    showToast('Phiên quản trị đã bị khóa — cần xác thực lại để truy cập.', 'info');
    const adminEl = document.getElementById('admin-panel');
    if (adminEl && adminEl.style.display === 'block') chuyenTrang('home');
}

async function requireAdminReauth(){
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) {
        showToast('Vui lòng đăng nhập Admin để truy cập khu vực Quản trị!', 'warn');
        chuyenTrang('admin-login');
        return false;
    }

    if (isAdminReauthenticated()) return true;

    const session = JSON.parse(raw);
    const attempts = 2;
    for (let i=0;i<attempts;i++){
        const answer = prompt('Nhập mật khẩu Admin để truy cập khu vực Quản trị:');
        if (answer === null) return false;
        const account = adminAccounts.find(a => a.username === session.username && a.password === answer);
        if (account) {
            localStorage.setItem(ADMIN_REAUTH_KEY, 'true');
            showToast('Xác thực Admin thành công. Bạn có thể truy cập Admin Panel.', 'success');
            return true;
        } else {
            showToast('Mật khẩu không đúng. Vui lòng thử lại.', 'warn');
        }
    }
    return false;
}

function renderPromotions() {
    const container = document.getElementById('promo-list');
    if (!container) return;

    const wantedIds = [2, 5, 9];
    const top = wantedIds.map(id => products.find(p => p.id === id)).filter(Boolean);

    container.innerHTML = '';
    top.forEach((p, idx) => {
        const discounts = [15, 20, 10];
        const discount = discounts[idx % discounts.length];
        const salePrice = Math.round(p.price * (1 - discount / 100));

        container.innerHTML += `
            <div class="promo-card" onclick="showProductDetail(${p.id})" style="cursor:pointer;">
                <img class="thumb" src="${p.img}" alt="${p.name}">
                <div class="promo-info">
                    <span class="promo-badge">Giảm ${discount}%</span>
                    <h4 title="${p.name}">${p.name}</h4>
                    <p class="promo-price"><span class="price-current">${salePrice.toLocaleString()} đ</span> <span class="price-old">${p.price.toLocaleString()} đ</span></p>
                </div>
                <div class="promo-actions">
                    <button aria-label="Thêm ${p.name} vào giỏ" onclick="event.stopPropagation(); addToCart(${p.id})">Thêm vào giỏ</button>
                    <button aria-label="Mua ngay ${p.name}" style="background:#16a085;" onclick="event.stopPropagation(); buyNow(${p.id})">Mua ngay</button>
                </div>
            </div>
        `;
    });
}

let promoIndex = 0;
let promoTimer = null;
function showPromo(idx) {
    const container = document.getElementById('promo-list');
    if (!container) return;
    const cards = Array.from(container.querySelectorAll('.promo-card'));
    if (!cards.length) return;
    promoIndex = ((idx % cards.length) + cards.length) % cards.length;
    cards.forEach((c,i)=> c.classList.toggle('active', i===promoIndex));
}

function startPromoAutoRotate(interval = 3500){
    stopPromoAutoRotate();
    promoTimer = setInterval(()=> showPromo(promoIndex+1), interval);
}

function stopPromoAutoRotate(){ if (promoTimer) { clearInterval(promoTimer); promoTimer = null; } }

function wirePromoControls(){
    const pprev = document.getElementById('promo-prev');
    const pnext = document.getElementById('promo-next');
    if (pprev && pnext) {
        pprev.onclick = () => { stopPromoAutoRotate(); showPromo(promoIndex-1); startPromoAutoRotate(); };
        pnext.onclick = () => { stopPromoAutoRotate(); showPromo(promoIndex+1); startPromoAutoRotate(); };
    }
}

function wireStudentOfferControls(){
    const prev = document.getElementById('offers-prev');
    const next = document.getElementById('offers-next');
    if (!prev || !next) return;
    prev.onclick = () => { stopStudentPromoRotation(); showNextStudentPromo(-1); startStudentPromoRotation(); };
    next.onclick = () => { stopStudentPromoRotation(); showNextStudentPromo(1); startStudentPromoRotation(); };
}

const TOASTS = [];
function showToast(message, type = 'info', timeout = 2200) {
    const container = document.getElementById('ui-toast');
    if (!container) {
        console.warn('toast:', message); return;
    }
    try { container.style.display = 'flex'; } catch(e) {}
    const div = document.createElement('div');
    div.className = `toast ${type}`;
    div.innerText = message;
    container.appendChild(div);
    TOASTS.push(div);
    div.style.opacity = '0';
    requestAnimationFrame(() => div.style.opacity = '1');
    setTimeout(() => {
        div.style.opacity = '0';
        setTimeout(() => { try{ container.removeChild(div) }catch(e){} }, 220);
        setTimeout(()=>{ try{ if (container && container.children.length === 0) container.style.display = 'none'; }catch(e){} }, 240);
    }, timeout);
}

function showModal(title, body) {
    return new Promise(resolve => {
        const modal = document.getElementById('ui-modal');
        const t = document.getElementById('ui-modal-title');
        const b = document.getElementById('ui-modal-body');
        const btnCancel = document.getElementById('ui-modal-cancel');
        const btnOk = document.getElementById('ui-modal-confirm');
        if (!modal || !t || !b) { resolve(false); return; }
        t.innerText = title || '';
        b.innerText = body || '';
        modal.setAttribute('aria-hidden','false'); modal.style.display = 'flex';

        const cleanup = () => {
            modal.setAttribute('aria-hidden','true'); modal.style.display = 'none';
            btnCancel.removeEventListener('click', onCancel);
            btnOk.removeEventListener('click', onOk);
        };
        const onCancel = () => { cleanup(); resolve(false); };
        const onOk = () => { cleanup(); resolve(true); };
        btnCancel.addEventListener('click', onCancel);
        btnOk.addEventListener('click', onOk);
    });
}

function buyNow(id) {
    const product = products.find(p => p.id === id);
    if (!product) { showToast('Sản phẩm không tồn tại', 'warn'); return }
    if (!currentUser) {
        showToast('Vui lòng đăng nhập trước khi mua hàng.', 'warn');
        chuyenTrang('login');
        return;
    }
    cart.push(product);
    saveCartToStorage();
    document.getElementById('cart-count').innerText = `(${cart.length})`;
    showToast(`Mua ngay: ${product.name} — đã thêm vào giỏ.`, 'success');
    chuyenTrang('cart');
}

async function chuyenTrang(pageId) {
    if (pageId === 'admin-panel') {
        if (!localStorage.getItem(ADMIN_SESSION_KEY)) {
            showToast("Bạn phải đăng nhập Admin để truy cập khu vực Quản trị!", 'warn');
            chuyenTrang('admin-login');
            return;
        }
        const ok = await requireAdminReauth();
        if (!ok) return;
    }

    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    const el = document.getElementById(pageId);
    if (!el) {
        console.warn('chuyenTrang: page not found ->', pageId);
        return;
    }
    el.style.display = 'block';

    if (pageId === 'cart') renderCart();
    if (pageId === 'admin-panel') renderAdminProducts();
}


function startBanner() {
    const track = document.getElementById('banner-track');
    const indicators = document.getElementById('banner-indicators');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.slide'));
    const count = slides.length;
    if (count === 0) return;

    let current = 0;
    let t = null;

    if (indicators) {
        indicators.innerHTML = slides.map((_, i) => `<button class="indicator" data-idx="${i}" aria-label="Banner ${i+1}"></button>`).join('');
        indicators.querySelectorAll('.indicator').forEach(btn => btn.addEventListener('click', () => {
            const idx = Number(btn.getAttribute('data-idx'));
            goTo(idx);
            restart();
        }));
    }

    function updateIndicators(){
        if (!indicators) return;
        indicators.querySelectorAll('.indicator').forEach((b,i)=> b.classList.toggle('active', i===current));
    }

    function goTo(idx){
        current = ((idx % count) + count) % count;
        track.style.transform = `translateX(-${current * 100}%)`;
        updateIndicators();
    }

    function next(){ goTo(current + 1); }
    function prev(){ goTo(current - 1); }

    function start(interval = 4200){ stop(); t = setInterval(next, interval); }
    function stop(){ if (t) { clearInterval(t); t = null; } }
    function restart(){ stop(); start(); }

    const bnext = document.getElementById('banner-next');
    const bprev = document.getElementById('banner-prev');
    if (bnext) bnext.onclick = () => { stop(); next(); start(); };
    if (bprev) bprev.onclick = () => { stop(); prev(); start(); };

    const inner = document.querySelector('.banner-inner');
    if (inner) { inner.addEventListener('mouseenter', () => stop()); inner.addEventListener('mouseleave', () => start()); }

    track.style.transform = 'translateX(0)';
    updateIndicators();
    start();
}


let currentFilter = 'all';
let currentSearchTerm = '';

function renderProducts(productsToRender = products) {
    const container = document.getElementById('product-list');
    const resultsInfo = document.getElementById('search-results-info');
    
    container.innerHTML = '';
    
    if (productsToRender.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:40px;">
                <i class="fas fa-search" style="font-size:48px; color:#ccc; margin-bottom:15px;"></i>
                <p style="color:#999; font-size:18px;">Không tìm thấy sản phẩm nào</p>
                <button onclick="clearSearch()" style="margin-top:10px;">Xóa tìm kiếm</button>
            </div>
        `;
        if (resultsInfo) resultsInfo.style.display = 'none';
        return;
    }
    
    if (resultsInfo && (currentSearchTerm || currentFilter !== 'all')) {
        resultsInfo.style.display = 'block';
        resultsInfo.innerHTML = `<i class="fas fa-check-circle"></i> Tìm thấy ${productsToRender.length} sản phẩm`;
    } else if (resultsInfo) {
        resultsInfo.style.display = 'none';
    }
    
    productsToRender.forEach(p => {
        container.innerHTML += `
            <div class="product-card" onclick="showProductDetail(${p.id})" style="cursor:pointer;">
                <img src="${p.img}" alt="${p.name}" style="width:100%; border-radius:5px;">
                <h3>${p.name}</h3>
                <p style="color:#e74c3c; font-weight:bold;">${p.price.toLocaleString()} đ</p>
                <button onclick="event.stopPropagation(); addToCart(${p.id})">Thêm vào giỏ</button>
            </div>
        `;
    });
}

function searchProducts() {
    const searchInput = document.getElementById('product-search');
    const clearBtn = document.getElementById('clear-search');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    currentSearchTerm = searchTerm;
    
    if (clearBtn) {
        clearBtn.style.display = searchTerm ? 'flex' : 'none';
    }
    
    let filtered = products;
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm) ||
            p.brand.toLowerCase().includes(searchTerm) ||
            (p.description && p.description.toLowerCase().includes(searchTerm))
        );
    }
    
    renderProducts(filtered);
}

function filterByCategory(category) {
    currentFilter = category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    searchProducts();
}

function clearSearch() {
    const searchInput = document.getElementById('product-search');
    const clearBtn = document.getElementById('clear-search');
    
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    
    currentSearchTerm = '';
    currentFilter = 'all';
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.filter-btn').classList.add('active');
    
    renderProducts();
}

function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        showToast('Không tìm thấy sản phẩm', 'warn');
        return;
    }
    
    const modal = document.getElementById('product-detail-modal');
    const body = document.getElementById('product-detail-body');
    
    let stockStatus = '';
    let stockClass = '';
    if (product.stock > 50) {
        stockStatus = `<i class="fas fa-check-circle"></i> Còn hàng (${product.stock} sản phẩm)`;
        stockClass = '';
    } else if (product.stock > 0) {
        stockStatus = `<i class="fas fa-exclamation-circle"></i> Sắp hết hàng (${product.stock} sản phẩm)`;
        stockClass = 'low';
    } else {
        stockStatus = `<i class="fas fa-times-circle"></i> Hết hàng`;
        stockClass = 'out';
    }
    
    body.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-image">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <span class="product-detail-badge">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="product-detail-price">
                    <span class="current">${product.price.toLocaleString()}</span>
                    <span class="currency">đ</span>
                </div>
                <div class="product-detail-stock ${stockClass}">
                    ${stockStatus}
                </div>
                
                <div class="product-detail-description">
                    <h3><i class="fas fa-info-circle"></i> Mô tả sản phẩm</h3>
                    <p>${product.description}</p>
                </div>
                
                <div class="product-detail-specs">
                    <div class="product-detail-spec">
                        <span class="label"><i class="fas fa-tag"></i> Mã SP:</span>
                        <span class="value">#${product.id.toString().padStart(4, '0')}</span>
                    </div>
                    <div class="product-detail-spec">
                        <span class="label"><i class="fas fa-copyright"></i> Thương hiệu:</span>
                        <span class="value">${product.brand}</span>
                    </div>
                    <div class="product-detail-spec">
                        <span class="label"><i class="fas fa-box"></i> Tình trạng:</span>
                        <span class="value">Mới 100%</span>
                    </div>
                    <div class="product-detail-spec">
                        <span class="label"><i class="fas fa-shield-alt"></i> Bảo hành:</span>
                        <span class="value">12 tháng</span>
                    </div>
                </div>
                
                <div class="product-detail-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id}); closeProductDetail();">
                        <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
                    </button>
                    <button class="btn-buy-now" onclick="buyNow(${product.id}); closeProductDetail();">
                        <i class="fas fa-bolt"></i> Mua ngay
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Product Reviews Section -->
        <div class="product-reviews-section">
            <h3><i class="fas fa-star"></i> Đánh giá sản phẩm</h3>
            <div id="product-reviews-summary-${product.id}"></div>
            <div id="product-review-form-${product.id}" class="product-review-form"></div>
            <div id="product-reviews-list-${product.id}" class="product-reviews-list"></div>
        </div>
    `;
    
    setTimeout(() => {
        renderProductReviews(product.id);
    }, 0);
    
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    const modal = document.getElementById('product-detail-modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}


function addToCart(id) {
    if (!currentUser) {
        showToast("Vui lòng đăng nhập để mua hàng!", 'warn');
        chuyenTrang('login');
        return;
    }
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCartToStorage();
    document.getElementById('cart-count').innerText = `(${cart.length})`;
    showToast(`Đã thêm ${product.name} vào giỏ!`, 'success');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = '<p>Giỏ hàng trống</p>';
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div style="border-bottom:1px solid #ddd; padding:10px; display:flex; justify-content:space-between; align-items:center;">
                <span>${item.name} - ${item.price.toLocaleString()} đ</span>
                <button onclick="removeFromCart(${index})" class="btn-delete" style="padding:5px 10px; margin:0;">Xóa</button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        container.innerHTML += `<h3>Tổng cộng: ${total.toLocaleString()} đ</h3>`;
    }
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart[index];
        cart.splice(index, 1);
        saveCartToStorage();
        document.getElementById('cart-count').innerText = `(${cart.length})`;
        showToast(`Đã xóa ${removedItem.name} khỏi giỏ hàng`, 'info');
        renderCart();
    }
}


function xuLyDangKy() {
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;

    if(user && pass) {
        
        localStorage.setItem('user_data', JSON.stringify({ user, pass }));
        showToast("Đăng ký thành công! Vui lòng đăng nhập.", 'success');
        chuyenTrang('login');
    } else {
        showToast("Vui lòng nhập đầy đủ thông tin!", 'warn');
    }
}

function xuLyDangNhap() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    
    
    const storedUser = JSON.parse(localStorage.getItem('user_data'));

    if (storedUser && user === storedUser.user && pass === storedUser.pass) {
        localStorage.setItem('user_login', user); 
        currentUser = user;
        showToast("Đăng nhập thành công!", 'success');
        checkLoginStatus();
        chuyenTrang('home');
    } else {
        showToast("Tên đăng nhập hoặc mật khẩu không đúng!", 'warn');
    }
}
function xuLyDangNhapAdmin() {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;

    loadAdminAccountsFromStorage();
    const match = adminAccounts.find(a => a.username === user && a.password === pass);
    if (match) {
        localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ username: user }));
        localStorage.removeItem(ADMIN_REAUTH_KEY);
        showToast("Đăng nhập Admin thành công! Chào mừng Quản trị viên.", 'success');
        checkLoginStatus();
        chuyenTrang('admin-panel');
    } else {
        showToast("Thông tin đăng nhập Admin không hợp lệ!", 'warn');
    }
}

function dangXuatAdmin(){
    localStorage.removeItem(ADMIN_SESSION_KEY);
    localStorage.removeItem(ADMIN_REAUTH_KEY);
    showToast('Đã đăng xuất Admin.', 'info');
    if (document.getElementById('admin-panel') && document.getElementById('admin-panel').style.display === 'block') chuyenTrang('home');
    checkLoginStatus();
}

function checkLoginStatus() {
    currentUser = localStorage.getItem('user_login');
    currentUserRole = localStorage.getItem('user_role');

    const userDisplay = document.getElementById('username-display');
    const authLink = document.getElementById('auth-link');
    const userInfo = document.getElementById('user-info');

    if (currentUser) {
        userDisplay.innerText = currentUser;
        authLink.style.display = 'none';
        userInfo.style.display = 'block';
    } else {
        authLink.style.display = 'list-item';
        userInfo.style.display = 'none';
    }
}

function dangXuat() {
    localStorage.removeItem('user_login');
    currentUser = null;
    cart = []; 
    saveCartToStorage();
    document.getElementById('cart-count').innerText = '(0)';
    showToast("Đã đăng xuất!", 'info');
    checkLoginStatus();
    chuyenTrang('home');
}

let userMenuOpen = false;

function toggleUserMenu(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const dropdown = document.getElementById('user-dropdown');
    if (!dropdown) return;
    
    userMenuOpen = !userMenuOpen;
    
    if (userMenuOpen) {
        dropdown.classList.add('show');
        setTimeout(() => {
            document.addEventListener('click', closeUserMenuOutside);
        }, 100);
    } else {
        dropdown.classList.remove('show');
        document.removeEventListener('click', closeUserMenuOutside);
    }
}

function closeUserMenuOutside(event) {
    const dropdown = document.getElementById('user-dropdown');
    const trigger = document.querySelector('.user-menu-trigger');
    
    // Không đóng nếu click vào dropdown hoặc trigger
    if (dropdown && dropdown.contains(event.target)) return;
    if (trigger && trigger.contains(event.target)) return;
    
    // Đóng menu
    userMenuOpen = false;
    if (dropdown) dropdown.classList.remove('show');
    document.removeEventListener('click', closeUserMenuOutside);
}

function showCheckoutForm() {
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để thanh toán!', 'warn');
        chuyenTrang('login');
        return;
    }
    
    if (cart.length === 0) {
        showToast('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.', 'warn');
        return;
    }
    
    document.getElementById('checkout-form').style.display = 'block';
    
    document.getElementById('checkout-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function cancelCheckout() {
    document.getElementById('checkout-form').style.display = 'none';
    document.getElementById('checkout-name').value = '';
    document.getElementById('checkout-phone').value = '';
    document.getElementById('checkout-address').value = '';
    document.getElementById('checkout-payment').value = 'cod';
    document.getElementById('checkout-note').value = '';
}

function processCheckout() {
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const payment = document.getElementById('checkout-payment').value;
    const note = document.getElementById('checkout-note').value.trim();
    
    if (!name || !phone || !address) {
        showToast('Vui lòng điền đầy đủ thông tin bắt buộc!', 'warn');
        return;
    }
    
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
        showToast('Số điện thoại không hợp lệ! Vui lòng nhập 10-11 chữ số.', 'warn');
        return;
    }
    
    const order = {
        id: Date.now(),
        user: currentUser,
        name: name,
        phone: phone,
        address: address,
        payment: payment,
        note: note,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price, 0),
        date: new Date().toLocaleString(),
        status: 'pending'
    };
    
    let orders = [];
    try {
        const stored = localStorage.getItem('app_orders_v1');
        if (stored) orders = JSON.parse(stored);
    } catch(e) {}
    
    orders.push(order);
    localStorage.setItem('app_orders_v1', JSON.stringify(orders));
    
    cart = [];
    saveCartToStorage();
    document.getElementById('cart-count').innerText = '(0)';
    
    showToast(`Đặt hàng thành công! Mã đơn hàng: #${order.id}`, 'success', 3500);
    
    cancelCheckout();
    
    renderCart();
    
    setTimeout(() => {
        const paymentMethod = {
            'cod': 'Thanh toán khi nhận hàng',
            'bank': 'Chuyển khoản ngân hàng',
            'momo': 'Ví MoMo'
        };
        
        showModal(
            'Đặt hàng thành công!',
            `Mã đơn hàng: #${order.id}\nTổng tiền: ${order.total.toLocaleString()} đ\nPhương thức: ${paymentMethod[payment]}\n\nChúng tôi sẽ liên hệ với bạn sớm nhất!`
        );
    }, 500);
}
function renderAdminProducts() {
    const container = document.getElementById('admin-product-list');
    
    let html = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Tồn Kho</th>
                    <th>Thao Tác</th>
                </tr>
            </thead>
            <tbody>
    `;

    products.forEach(p => {
        html += `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString()} đ</td>
                <td>${Math.floor(Math.random() * 100) + 1}</td> <td>
                    <button class="btn-edit btn" onclick="editProduct(${p.id})">Sửa</button>
                    <button class="btn-delete btn" onclick="deleteProduct(${p.id})">Xóa</button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;
    container.innerHTML = html;
}

function showAdminContent(contentId) {
    document.getElementById('admin-products-view').style.display = 'none';
    document.getElementById('admin-orders-view').style.display = 'none';
    document.getElementById('admin-users-view').style.display = 'none';
    document.getElementById('admin-reviews-view').style.display = 'none';
    document.getElementById('admin-promotions-view').style.display = 'none';
    
    document.getElementById(`admin-${contentId}-view`).style.display = 'block';
    
    if(contentId === 'products') renderAdminProducts();
    if(contentId === 'reviews') renderAdminReviews();
    if(contentId === 'promotions') renderAdminPromotions();
}



function showAddProductForm() {
    document.getElementById('admin-products-view').style.display = 'none';
    document.getElementById('product-form-view').style.display = 'block';

    document.getElementById('form-title').innerText = 'Thêm Sản Phẩm Mới';
    document.getElementById('product-id').value = '';
    document.getElementById('p-name').value = '';
    document.getElementById('p-price').value = '';
    document.getElementById('p-category').value = 'but';
    document.getElementById('p-image').value = '';
    document.getElementById('p-desc').value = '';
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('admin-products-view').style.display = 'none';
    document.getElementById('product-form-view').style.display = 'block';

    document.getElementById('form-title').innerText = 'Sửa Sản Phẩm: ' + product.name;
    document.getElementById('product-id').value = product.id;
    document.getElementById('p-name').value = product.name;
    document.getElementById('p-price').value = product.price;
    document.getElementById('p-category').value = 'dungcu'; 
    document.getElementById('p-image').value = product.img;
    document.getElementById('p-desc').value = product.description || '';
}

function saveProduct() {
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('p-name').value;
    const rawPriceInput = String(document.getElementById('p-price').value || '').trim();
    const price = parseLocalizedNumber(rawPriceInput);
    const category = document.getElementById('p-category').value;
    const img = document.getElementById('p-image').value;
    const desc = document.getElementById('p-desc').value;

    if (!name || isNaN(price) || !img) {
        showToast("Vui lòng nhập đủ Tên, Giá và Đường dẫn Ảnh!", 'warn');
        return;
    }

    if (id) {
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
            products[index] = {
                ...products[index],
                name,
                price,
                img,
                description: desc
            };
            showToast("Đã cập nhật sản phẩm thành công!", 'success');
            saveProductsToStorage();
        }
    } else {
        const newId = Math.max(...products.map(p => p.id)) + 1;
        const newProduct = {
            id: newId,
            name,
            price,
            img,
            description: desc
        };
        products.push(newProduct);
        showToast(`Đã thêm sản phẩm mới: ${name}!`, 'success');
        saveProductsToStorage();
    }

    cancelForm();
    renderAdminProducts();
    renderProducts();
}

function cancelForm() {
    document.getElementById('product-form-view').style.display = 'none';
    document.getElementById('admin-products-view').style.display = 'block';
}

async function deleteProduct(id) {
    const confirmed = await showModal('Xác nhận xoá', `Bạn có chắc muốn xóa sản phẩm ID: ${id}? Thao tác này không thể hoàn tác.`);
    if (!confirmed) return;
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    
    if (products.length < initialLength) {
        showToast(`Đã xóa sản phẩm ID: ${id} thành công!`, 'success');
        if (typeof saveProductsToStorage === 'function') saveProductsToStorage();
        renderAdminProducts(); 
        renderProducts(); 
    } else {
        showToast(`Không tìm thấy sản phẩm ID: ${id}.`, 'warn');
    }
}

function renderPublicReviews(){
    const container = document.getElementById('public-reviews-list');
    if (!container) return;
    if (!reviews.length) {
        container.innerHTML = '<p>Chưa có phản hồi nào. Hãy là người đầu tiên gửi đánh giá!</p>';
        return;
    }

    container.innerHTML = reviews.slice().reverse().map(r => `
        <div class="review-item ${r.responded ? 'responded' : ''}">
            <div class="review-meta"><strong>${escapeHtml(r.name) || 'Khách hàng ẩn danh'}</strong> — <span class="rating">${'⭐'.repeat(r.rating)}</span> <span class="time">${new Date(r.ts).toLocaleString()}</span></div>
            <div class="review-body">${escapeHtml(r.message)}</div>
        </div>
    `).join('');
}

function submitReview(){
    const name = document.getElementById('review-name').value.trim();
    const email = document.getElementById('review-email').value.trim();
    const rating = parseInt(document.getElementById('review-rating').value, 10) || 5;
    const message = document.getElementById('review-message').value.trim();

    if (!message) { showToast('Vui lòng nhập nội dung phản hồi.', 'warn'); return; }

    const id = Date.now();
    const rev = { id, name, email, rating, message, ts: Date.now(), responded: false };
    reviews.push(rev);
    saveReviewsToStorage();
    showToast('Cảm ơn! Phản hồi của bạn đã gửi tới Admin.', 'success');
    clearReviewForm();
    renderPublicReviews();
    if (document.getElementById('admin-reviews-list')) renderAdminReviews();
}

function clearReviewForm(){
    if (document.getElementById('review-name')) document.getElementById('review-name').value = '';
    if (document.getElementById('review-email')) document.getElementById('review-email').value = '';
    if (document.getElementById('review-rating')) document.getElementById('review-rating').value = '5';
    if (document.getElementById('review-message')) document.getElementById('review-message').value = '';
}

function renderAdminReviews(){
    const container = document.getElementById('admin-reviews-list');
    if (!container) return;
    if (!reviews.length) { container.innerHTML = '<p>Không có phản hồi nào.</p>'; return; }

    container.innerHTML = `
        <table class="admin-table">
            <thead><tr><th>ID</th><th>Người gửi</th><th>Email</th><th>Rating</th><th>Message</th><th>Thời gian</th><th>Trạng thái</th><th>Hành động</th></tr></thead>
            <tbody>${reviews.slice().reverse().map(r => `
                <tr id="rev-${r.id}">
                    <td>${r.id}</td>
                    <td>${escapeHtml(r.name) || '(ẩn danh)'}</td>
                    <td>${escapeHtml(r.email) || '-'}</td>
                    <td>${r.rating} ⭐</td>
                    <td style="max-width:320px">${escapeHtml(r.message)}</td>
                    <td>${new Date(r.ts).toLocaleString()}</td>
                    <td>${r.responded ? '<span style="color:green">Đã trả lời</span>' : '<span style="color:orange">Chưa</span>'}</td>
                    <td>
                        ${r.responded ? '' : `<button onclick="markReviewResponded(${r.id})">Đánh dấu Đã trả lời</button>`}
                        <button onclick="deleteReview(${r.id})" class="btn-delete">Xóa</button>
                    </td>
                </tr>
            `).join('')}</tbody>
        </table>
    `;
}

function markReviewResponded(id){
    const idx = reviews.findIndex(r => r.id === id);
    if (idx === -1) { showToast('Không tìm thấy phản hồi', 'warn'); return; }
    reviews[idx].responded = true;
    saveReviewsToStorage();
    showToast('Đã đánh dấu phản hồi là đã trả lời', 'success');
    renderAdminReviews();
    renderPublicReviews();
}

async function deleteReview(id){
    const ok = await showModal('Xác nhận xoá', `Bạn có chắc muốn xóa phản hồi ID: ${id}?`);
    if (!ok) return;
    reviews = reviews.filter(r => r.id !== id);
    saveReviewsToStorage();
    showToast('Đã xóa phản hồi', 'success');
    renderAdminReviews();
    renderPublicReviews();
}

function escapeHtml(s){
    if (!s) return '';

    function renderAdminPromotions(){
        const container = document.getElementById('admin-promos-list');
        if (!container) return;
        if (!studentPromos.length) { container.innerHTML = '<p>Chưa có khuyến mãi.</p>'; return; }

        container.innerHTML = `
            <table class="admin-table">
                <thead><tr><th>ID</th><th>Message</th><th>Active</th><th>Actions</th></tr></thead>
                <tbody>
                    ${studentPromos.slice().reverse().map(p => `
                    <tr id="promo-${p.id}">
                        <td>${p.id}</td>
                        <td style="max-width:360px">${escapeHtml(p.text)}</td>
                        <td>${p.active ? '✅' : '❌'}</td>
                        <td>
                            <button onclick="togglePromotionActive(${p.id})">${p.active ? 'Tắt' : 'Bật'}</button>
                            <button class="btn-delete" onclick="deletePromotion(${p.id})">Xóa</button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;
    }

    function addPromotion(){
        const txt = document.getElementById('promo-text').value.trim();
        const active = !!document.getElementById('promo-active').checked;
        if (!txt) { showToast('Vui lòng nhập nội dung khuyến mãi.', 'warn'); return; }
        const id = Date.now();
        studentPromos.push({ id, text: txt, active });
        savePromosToStorage();
        showToast('Đã thêm khuyến mãi.', 'success');
        document.getElementById('promo-text').value = '';
        renderAdminPromotions();
        renderStudentOffers();
    }

    function togglePromotionActive(id){
        const idx = studentPromos.findIndex(p => p.id === id);
        if (idx === -1) { showToast('Không tìm thấy khuyến mãi', 'warn'); return; }
        studentPromos[idx].active = !studentPromos[idx].active;
        savePromosToStorage();
        renderAdminPromotions();
        renderStudentOffers();
    }

    async function deletePromotion(id){
        const ok = await showModal('Xác nhận xoá', `Bạn có chắc muốn xóa khuyến mãi ID: ${id}?`);
        if (!ok) return;
        studentPromos = studentPromos.filter(p => p.id !== id);
        savePromosToStorage();
        renderAdminPromotions();
        renderStudentOffers();
        showToast('Đã xóa khuyến mãi', 'success');
    }
    return String(s).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
}


function getProductReviews(productId) {
    return productReviews.filter(r => r.productId === productId);
}

function getAverageRating(productId) {
    const reviews = getProductReviews(productId);
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
}

function renderProductReviews(productId) {
    const reviews = getProductReviews(productId);
    const avgRating = getAverageRating(productId);
    
    const summaryEl = document.getElementById(`product-reviews-summary-${productId}`);
    if (summaryEl) {
        summaryEl.innerHTML = `
            <div class="reviews-summary">
                <div class="rating-overview">
                    <div class="rating-number">${avgRating}</div>
                    <div class="rating-stars">${renderStars(parseFloat(avgRating))}</div>
                    <div class="rating-count">${reviews.length} đánh giá</div>
                </div>
            </div>
        `;
    }
    
    const formEl = document.getElementById(`product-review-form-${productId}`);
    if (formEl) {
        if (!currentUser) {
            formEl.innerHTML = `
                <div class="review-login-prompt">
                    <i class="fas fa-user-lock"></i>
                    <p>Vui lòng <a href="#" onclick="closeProductDetail(); chuyenTrang('login');">đăng nhập</a> để đánh giá sản phẩm</p>
                </div>
            `;
        } else {
            formEl.innerHTML = `
                <div class="review-form-header">
                    <h4>Viết đánh giá của bạn</h4>
                </div>
                <div class="rating-input">
                    <label>Đánh giá của bạn:</label>
                    <div class="star-rating-input" id="star-rating-${productId}">
                        ${[5,4,3,2,1].map(i => `
                            <input type="radio" name="rating-${productId}" id="star${i}-${productId}" value="${i}">
                            <label for="star${i}-${productId}"><i class="fas fa-star"></i></label>
                        `).join('')}
                    </div>
                </div>
                <textarea id="review-text-${productId}" placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm..." rows="4"></textarea>
                <button onclick="submitProductReview(${productId})" class="btn-submit-review">
                    <i class="fas fa-paper-plane"></i> Gửi đánh giá
                </button>
            `;
        }
    }
    
    const listEl = document.getElementById(`product-reviews-list-${productId}`);
    if (listEl) {
        if (reviews.length === 0) {
            listEl.innerHTML = `
                <div class="no-reviews">
                    <i class="fas fa-comments"></i>
                    <p>Chưa có đánh giá nào. Hãy là người đầu tiên đánh giá sản phẩm này!</p>
                </div>
            `;
        } else {
            listEl.innerHTML = reviews.slice().reverse().map(r => `
                <div class="review-item-product">
                    <div class="review-header">
                        <div class="review-user">
                            <i class="fas fa-user-circle"></i>
                            <strong>${escapeHtml(r.userName)}</strong>
                        </div>
                        <div class="review-rating">${renderStars(r.rating)}</div>
                    </div>
                    <div class="review-date">${new Date(r.timestamp).toLocaleDateString('vi-VN')}</div>
                    <div class="review-text">${escapeHtml(r.text)}</div>
                </div>
            `).join('');
        }
    }
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let html = '';
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    return html;
}

function submitProductReview(productId) {
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để đánh giá!', 'warn');
        return;
    }
    
    const ratingInput = document.querySelector(`input[name="rating-${productId}"]:checked`);
    const textInput = document.getElementById(`review-text-${productId}`);
    
    if (!ratingInput) {
        showToast('Vui lòng chọn số sao đánh giá!', 'warn');
        return;
    }
    
    const rating = parseInt(ratingInput.value);
    const text = textInput ? textInput.value.trim() : '';
    
    if (!text) {
        showToast('Vui lòng nhập nội dung đánh giá!', 'warn');
        return;
    }
    
    const review = {
        id: Date.now(),
        productId: productId,
        userName: currentUser,
        rating: rating,
        text: text,
        timestamp: Date.now()
    };
    
    productReviews.push(review);
    saveProductReviewsToStorage();
    showToast('Cảm ơn bạn đã đánh giá!', 'success');
    
    renderProductReviews(productId);
}
