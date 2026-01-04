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

// Hàm format giá tiền
function formatPrice(price) {
    return price.toLocaleString() + ' đ';
}

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

// Dữ liệu mẫu đánh giá website
const sampleReviews = [
    { id: 1, username: 'nguyenvanan', rating: 5, comment: 'Website dễ sử dụng, sản phẩm đa dạng, giá cả hợp lý. Giao hàng nhanh chóng!', date: '2025-12-15' },
    { id: 2, username: 'tranthib', rating: 5, comment: 'Mua hàng rất tiện lợi, nhân viên tư vấn nhiệt tình. Sẽ ủng hộ tiếp!', date: '2025-12-16' },
    { id: 3, username: 'lehoangc', rating: 4, comment: 'Sản phẩm chất lượng, đóng gói cẩn thận. Chỉ mong có thêm nhiều khuyến mãi hơn.', date: '2025-12-17' },
    { id: 4, username: 'phamminhduc', rating: 5, comment: 'Cửa hàng uy tín, hàng chính hãng 100%. Rất hài lòng với dịch vụ!', date: '2025-12-18' },
    { id: 5, username: 'hoangthiem', rating: 4, comment: 'Giá tốt hơn so với các cửa hàng khác. Giao hàng đúng hẹn.', date: '2025-12-19' },
    { id: 6, username: 'vovanphuc', rating: 5, comment: 'Mua đồ dùng học tập cho con ở đây rất yên tâm. Chất lượng đảm bảo!', date: '2025-12-20' },
    { id: 7, username: 'dangthigiang', rating: 5, comment: 'Website thiết kế đẹp, dễ tìm sản phẩm. Thanh toán nhanh gọn.', date: '2025-12-21' },
    { id: 8, username: 'nguyenthanhhai', rating: 4, comment: 'Sản phẩm đúng mô tả, giá cả phải chăng. Sẽ giới thiệu cho bạn bè.', date: '2025-12-22' }
];

function loadReviewsFromStorage(){
    try{
        const raw = localStorage.getItem(REVIEWS_KEY);
        if (!raw) {
            // Nếu chưa có đánh giá, thêm dữ liệu mẫu
            reviews = [...sampleReviews];
            saveReviewsToStorage();
            return;
        }
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            reviews = parsed;
            // Nếu chưa có đánh giá, thêm dữ liệu mẫu
            if (reviews.length === 0) {
                reviews = [...sampleReviews];
                saveReviewsToStorage();
            }
        }
    }catch(e){ console.warn('Unable to load reviews', e); }
}

function saveProductReviewsToStorage(){ try { localStorage.setItem(PRODUCT_REVIEWS_KEY, JSON.stringify(productReviews)); } catch(e) { console.warn('Failed save product reviews', e); } }

// Dữ liệu mẫu đánh giá sản phẩm
const sampleProductReviews = [
    // Bút Máy Cao Cấp (id: 1)
    { id: 1, productId: 1, username: 'nguyenvanan', rating: 5, comment: 'Bút viết rất êm tay, mực đều và không bị lem. Thiết kế sang trọng, rất hài lòng!', date: '2025-12-18' },
    { id: 2, productId: 1, username: 'tranthib', rating: 4, comment: 'Chất lượng tốt, giao hàng nhanh. Bút đẹp, viết mượt.', date: '2025-12-19' },
    { id: 3, productId: 1, username: 'lehoangc', rating: 5, comment: 'Mua tặng con học lớp 6, bé rất thích. Bút bền, viết đẹp.', date: '2025-12-20' },
    
    // Vở Học Sinh 96 Trang (id: 2)
    { id: 4, productId: 2, username: 'phamminhduc', rating: 5, comment: 'Giấy trắng mịn, không lem mực. Giá rẻ mà chất lượng tốt!', date: '2025-12-17' },
    { id: 5, productId: 2, username: 'hoangthiem', rating: 4, comment: 'Vở đẹp, bìa cứng bền. Mua cho cả lớp luôn.', date: '2025-12-18' },
    
    // Máy Tính Casio FX-580VN X (id: 4)
    { id: 6, productId: 4, username: 'vovanphuc', rating: 5, comment: 'Máy tính chính hãng, nhiều chức năng. Dùng được trong thi THPT Quốc gia.', date: '2025-12-15' },
    { id: 7, productId: 4, username: 'dangthigiang', rating: 5, comment: 'Con trai dùng rất tốt, pin lâu, màn hình rõ nét.', date: '2025-12-16' },
    { id: 8, productId: 4, username: 'nguyenthanhhai', rating: 4, comment: 'Hàng chuẩn, đóng gói cẩn thận. Giao hàng hơi lâu.', date: '2025-12-19' },
    
    // Balo Chống Gù Lưng (id: 5)
    { id: 9, productId: 5, username: 'truongvankhoa', rating: 5, comment: 'Balo đẹp, chống gù hiệu quả. Con mang đi học rất thoải mái.', date: '2025-12-14' },
    { id: 10, productId: 5, username: 'lythilan', rating: 5, comment: 'Chất liệu tốt, nhiều ngăn tiện lợi. Đáng tiền!', date: '2025-12-17' },
    { id: 11, productId: 5, username: 'nguyenvanan', rating: 4, comment: 'Balo đẹp, bền. Chỉ hơi nặng một chút.', date: '2025-12-20' },
    
    // Bộ Màu Vẽ Colormate 120 Món (id: 6)
    { id: 12, productId: 6, username: 'tranthib', rating: 5, comment: 'Bộ màu đầy đủ, màu sắc tươi sáng. Con gái rất thích vẽ!', date: '2025-12-16' },
    { id: 13, productId: 6, username: 'hoangthiem', rating: 4, comment: 'Hộp đựng đẹp, màu nhiều. Giá hợp lý.', date: '2025-12-18' },
    
    // Đèn Bàn Học Chống Cận (id: 7)
    { id: 14, productId: 7, username: 'phamminhduc', rating: 5, comment: 'Đèn sáng đều, không chói mắt. Rất tốt cho việc học buổi tối.', date: '2025-12-13' },
    { id: 15, productId: 7, username: 'vovanphuc', rating: 5, comment: 'Thiết kế đẹp, tiết kiệm điện. Mua thêm 1 cái nữa cho phòng khách.', date: '2025-12-15' },
    
    // Vở Campus 200 Trang (id: 8)
    { id: 16, productId: 8, username: 'dangthigiang', rating: 5, comment: 'Vở dày, giấy đẹp. Lò xo chắc chắn, không bị tuột.', date: '2025-12-12' },
    { id: 17, productId: 8, username: 'nguyenthanhhai', rating: 4, comment: 'Chất lượng tốt, viết êm tay. Sẽ mua thêm.', date: '2025-12-14' },
    
    // Bút Thiên Long Hộp 20 Cây (id: 9)
    { id: 18, productId: 9, username: 'truongvankhoa', rating: 5, comment: 'Mua cho cả lớp, giá rẻ mà viết tốt. Mực đều, không lem.', date: '2025-12-11' },
    { id: 19, productId: 9, username: 'lythilan', rating: 4, comment: 'Bút viết trơn, mực xanh đẹp. Đóng gói cẩn thận.', date: '2025-12-13' },
    
    // Bút Gel Xóa Được Pilot (id: 11)
    { id: 20, productId: 11, username: 'lehoangc', rating: 5, comment: 'Bút xóa được rất tiện, viết sai xóa ngay. Con rất thích!', date: '2025-12-10' },
    { id: 21, productId: 11, username: 'nguyenvanan', rating: 5, comment: 'Mực mịn, xóa sạch không để lại vết. Tuyệt vời!', date: '2025-12-12' },
    
    // Sổ Tay Bìa Da Cao Cấp A5 (id: 13)
    { id: 22, productId: 13, username: 'tranthib', rating: 5, comment: 'Sổ đẹp sang trọng, giấy dày. Mua làm quà tặng rất ý nghĩa.', date: '2025-12-09' },
    { id: 23, productId: 13, username: 'phamminhduc', rating: 4, comment: 'Bìa da đẹp, có dây đánh dấu tiện lợi.', date: '2025-12-11' },
    
    // Bộ Compa Vẽ Kỹ Thuật 8 Món (id: 22)
    { id: 24, productId: 22, username: 'hoangthiem', rating: 5, comment: 'Bộ compa đầy đủ, chính xác cao. Rất cần cho học sinh THCS.', date: '2025-12-08' },
    { id: 25, productId: 22, username: 'vovanphuc', rating: 5, comment: 'Chất liệu kim loại bền, hộp đựng chắc chắn.', date: '2025-12-10' }
];

function loadProductReviewsFromStorage(){
    try{
        const raw = localStorage.getItem(PRODUCT_REVIEWS_KEY);
        if (!raw) {
            // Nếu chưa có đánh giá, thêm dữ liệu mẫu
            productReviews = [...sampleProductReviews];
            saveProductReviewsToStorage();
            return;
        }
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            productReviews = parsed;
            // Nếu chưa có đánh giá, thêm dữ liệu mẫu
            if (productReviews.length === 0) {
                productReviews = [...sampleProductReviews];
                saveProductReviewsToStorage();
            }
        }
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
    loadArticlesFromStorage();

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
                <div class="product-actions">
                    <button onclick="event.stopPropagation(); addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Thêm giỏ</button>
                </div>
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
    const user = document.getElementById('reg-user').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const pass = document.getElementById('reg-pass').value;

    if(!user || !phone || !pass) {
        showToast("Vui lòng nhập đầy đủ thông tin!", 'warn');
        return;
    }
    
    // Validate phone format (10-11 số, bắt đầu bằng 0)
    const phoneRegex = /^0\d{9,10}$/;
    if(!phoneRegex.test(phone)) {
        showToast("Số điện thoại không hợp lệ! (10-11 số, bắt đầu bằng 0)", 'warn');
        return;
    }

    localStorage.setItem('user_data', JSON.stringify({ user, pass, phone }));
    
    // Lưu vào danh sách users cho admin
    let users = [];
    try {
        const stored = localStorage.getItem('app_users_v1');
        if (stored) users = JSON.parse(stored);
    } catch(e) {}
    
    const newUser = {
        id: Date.now(),
        username: user,
        phone: phone,
        registeredDate: new Date().toISOString().split('T')[0]
    };
    users.push(newUser);
    localStorage.setItem('app_users_v1', JSON.stringify(users));
    
    showToast("Đăng ký thành công! Vui lòng đăng nhập.", 'success');
    chuyenTrang('login');
}

function xuLyDangNhap() {
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value;
    
    if (!user || !pass) {
        showToast("Vui lòng nhập đầy đủ thông tin!", 'warn');
        return;
    }
    
    // Lấy dữ liệu user từ localStorage
    const storedData = localStorage.getItem('user_data');
    
    // DEBUG - hiển thị dữ liệu
    alert('Dữ liệu đã lưu: ' + storedData + '\n\nBạn nhập: user=' + user + ', pass=' + pass);
    
    if (!storedData) {
        showToast("Chưa có tài khoản nào được đăng ký!", 'warn');
        return;
    }
    
    const storedUser = JSON.parse(storedData);
    
    // So sánh username và password
    if (storedUser.user === user && storedUser.pass === pass) {
        localStorage.setItem('user_login', user); 
        currentUser = user;
        showToast("Đăng nhập thành công!", 'success');
        checkLoginStatus();
        chuyenTrang('home');
    } else {
        alert('So sánh thất bại!\nLưu: user=' + storedUser.user + ', pass=' + storedUser.pass + '\nNhập: user=' + user + ', pass=' + pass);
        showToast("Tên đăng nhập hoặc mật khẩu không đúng!", 'warn');
    }
}

// Hiển thị trang quên mật khẩu
function showForgotPassword() {
    chuyenTrang('forgot-password');
}

// Xử lý quên mật khẩu
function xuLyQuenMatKhau() {
    const email = document.getElementById('forgot-email').value.trim();
    
    if (!email) {
        showToast("Vui lòng nhập email!", 'warn');
        return;
    }
    
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast("Email không hợp lệ!", 'warn');
        return;
    }
    
    // Lấy thông tin user từ localStorage
    const storedUser = JSON.parse(localStorage.getItem('user_data'));
    
    if (storedUser && storedUser.email === email) {
        // Hiển thị mật khẩu (vì không có backend gửi email)
        showToast(`Mật khẩu của bạn là: ${storedUser.pass}`, 'success');
        
        // Xóa input
        document.getElementById('forgot-email').value = '';
        
        // Chuyển về trang đăng nhập sau 3 giây
        setTimeout(() => {
            chuyenTrang('login');
        }, 3000);
    } else {
        showToast("Email không tồn tại trong hệ thống!", 'warn');
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
    const registerLink = document.getElementById('register-link');
    const userGreeting = document.getElementById('user-greeting');
    const adminLink = document.getElementById('admin-link');
    const logoutLink = document.getElementById('logout-link');

    if (currentUser) {
        // Đã đăng nhập
        if (userDisplay) userDisplay.innerText = currentUser;
        if (authLink) authLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';
        if (userGreeting) userGreeting.style.display = 'list-item';
        if (adminLink) adminLink.style.display = 'list-item';
        if (logoutLink) logoutLink.style.display = 'list-item';
    } else {
        // Chưa đăng nhập
        if (authLink) authLink.style.display = 'list-item';
        if (registerLink) registerLink.style.display = 'list-item';
        if (userGreeting) userGreeting.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'none';
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

// Toggle user dropdown (click-based)
function toggleUserDropdown(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const dropdown = document.getElementById('user-dropdown');
    if (!dropdown) return;
    
    const isVisible = dropdown.classList.contains('show');
    
    if (isVisible) {
        closeUserDropdown();
    } else {
        dropdown.classList.add('show');
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 10);
    }
}

function closeUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const userInfo = document.getElementById('user-info');
    if (userInfo && !userInfo.contains(event.target)) {
        closeUserDropdown();
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
        fullName: name,
        phone: phone,
        address: address,
        paymentMethod: payment === 'cod' ? 'COD' : payment === 'bank' ? 'Chuyển khoản' : 'MoMo',
        note: note,
        items: [...cart],
        totalAmount: cart.reduce((sum, item) => sum + item.price, 0),
        date: new Date().toISOString().split('T')[0],
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
    document.getElementById('admin-revenue-view').style.display = 'none';
    const articlesView = document.getElementById('admin-articles-view');
    if (articlesView) articlesView.style.display = 'none';
    
    document.getElementById(`admin-${contentId}-view`).style.display = 'block';
    
    if(contentId === 'products') renderAdminProducts();
    if(contentId === 'reviews') renderAdminReviews();
    if(contentId === 'promotions') renderAdminPromotions();
    if(contentId === 'revenue') renderRevenueStats();
    if(contentId === 'users') renderAdminUsers();
    if(contentId === 'orders') renderAdminOrders();
    if(contentId === 'articles') renderAdminArticles();
}



function showAddProductForm() {
    // Ẩn danh sách sản phẩm, hiện form thêm
    document.querySelector('#admin-products-view > h3').style.display = 'none';
    document.querySelector('#admin-products-view .btn-add-new').style.display = 'none';
    document.getElementById('admin-product-list').style.display = 'none';
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

    // Ẩn danh sách sản phẩm, hiện form sửa
    document.querySelector('#admin-products-view > h3').style.display = 'none';
    document.querySelector('#admin-products-view .btn-add-new').style.display = 'none';
    document.getElementById('admin-product-list').style.display = 'none';
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
    // Hiện lại danh sách sản phẩm
    document.querySelector('#admin-products-view > h3').style.display = 'block';
    document.querySelector('#admin-products-view .btn-add-new').style.display = 'inline-block';
    document.getElementById('admin-product-list').style.display = 'block';
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
    return String(s).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
}

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


// ==================== QUẢN LÝ DOANH THU ====================
const ORDERS_KEY = 'app_orders_v1';
let orders = [];

// Dữ liệu mẫu đơn hàng
const sampleOrders = [
    { id: 1001, date: '2025-12-20', fullName: 'Nguyễn Văn An', phone: '0901234567', address: '123 Đường Nguyễn Huệ, Q.1, TP.HCM', paymentMethod: 'cod', totalAmount: 285000, status: 'completed', items: [{name: 'Bút Máy Cao Cấp', qty: 2, price: 50000}, {name: 'Vở Campus 200 Trang', qty: 2, price: 65000}, {name: 'Bút Chì Gỗ 2B Hộp 12 Cây', qty: 1, price: 35000}] },
    { id: 1002, date: '2025-12-20', fullName: 'Trần Thị Bích', phone: '0912345678', address: '456 Đường Lê Lợi, Q.3, TP.HCM', paymentMethod: 'banking', totalAmount: 950000, status: 'completed', items: [{name: 'Máy Tính Casio FX-580VN X', qty: 1, price: 850000}, {name: 'Bộ Thước Kẻ Đa Năng', qty: 4, price: 25000}] },
    { id: 1003, date: '2025-12-21', fullName: 'Lê Hoàng Cường', phone: '0923456789', address: '789 Đường Trần Hưng Đạo, Q.5, TP.HCM', paymentMethod: 'cod', totalAmount: 530000, status: 'completed', items: [{name: 'Balo Chống Gù Lưng', qty: 1, price: 450000}, {name: 'Bút Thiên Long Hộp 20 Cây', qty: 1, price: 80000}] },
    { id: 1004, date: '2025-12-21', fullName: 'Phạm Minh Đức', phone: '0934567890', address: '321 Đường Võ Văn Tần, Q.3, TP.HCM', paymentMethod: 'banking', totalAmount: 445000, status: 'completed', items: [{name: 'Bộ Màu Vẽ Colormate 120 Món', qty: 1, price: 250000}, {name: 'Sổ Tay Bìa Da Cao Cấp A5', qty: 2, price: 95000}] },
    { id: 1005, date: '2025-12-22', fullName: 'Hoàng Thị Em', phone: '0945678901', address: '654 Đường Nguyễn Thị Minh Khai, Q.1, TP.HCM', paymentMethod: 'cod', totalAmount: 368000, status: 'completed', items: [{name: 'Đèn Bàn Học Chống Cận', qty: 1, price: 180000}, {name: 'Bộ Compa Vẽ Kỹ Thuật 8 Món', qty: 1, price: 125000}, {name: 'Giấy Note Dán 3M Post-it', qty: 1, price: 42000}] },
    { id: 1006, date: '2025-12-22', fullName: 'Võ Văn Phúc', phone: '0956789012', address: '987 Đường Cách Mạng Tháng 8, Q.10, TP.HCM', paymentMethod: 'banking', totalAmount: 215000, status: 'completed', items: [{name: 'Giấy A4 Double A 70gsm', qty: 2, price: 95000}, {name: 'Kéo Học Sinh Inox 16cm', qty: 1, price: 18000}] },
    { id: 1007, date: '2025-12-23', fullName: 'Đặng Thị Giang', phone: '0967890123', address: '147 Đường Điện Biên Phủ, Q.Bình Thạnh, TP.HCM', paymentMethod: 'cod', totalAmount: 177000, status: 'pending', items: [{name: 'Bút Gel Xóa Được Pilot', qty: 2, price: 45000}, {name: 'Bút Dạ Quang Highlight 6 Màu', qty: 1, price: 55000}, {name: 'Hộp Bút Nhựa Trong Suốt', qty: 1, price: 22000}] },
    { id: 1008, date: '2025-12-23', fullName: 'Nguyễn Thanh Hải', phone: '0978901234', address: '258 Đường Phan Xích Long, Q.Phú Nhuận, TP.HCM', paymentMethod: 'banking', totalAmount: 612000, status: 'pending', items: [{name: 'Balo Chống Gù Lưng', qty: 1, price: 450000}, {name: 'Vở Học Sinh 96 Trang', qty: 10, price: 12000}, {name: 'Gọt Bút Chì 2 Lỗ Kim Loại', qty: 2, price: 15000}] },
    { id: 1009, date: '2025-12-23', fullName: 'Trương Văn Khoa', phone: '0989012345', address: '369 Đường Lý Thường Kiệt, Q.Tân Bình, TP.HCM', paymentMethod: 'cod', totalAmount: 298000, status: 'pending', items: [{name: 'Bộ Màu Vẽ Colormate 120 Món', qty: 1, price: 250000}, {name: 'Túi Đựng Bút Canvas Đa Năng', qty: 1, price: 38000}] },
    { id: 1010, date: '2025-12-23', fullName: 'Lý Thị Lan', phone: '0990123456', address: '741 Đường Hoàng Văn Thụ, Q.Tân Bình, TP.HCM', paymentMethod: 'banking', totalAmount: 183000, status: 'pending', items: [{name: 'Bảng Viết Bút Lông Mini A4', qty: 1, price: 68000}, {name: 'Sổ Tay Bìa Da Cao Cấp A5', qty: 1, price: 95000}, {name: 'Gọt Bút Chì 2 Lỗ Kim Loại', qty: 1, price: 15000}] }
];

function loadOrdersFromStorage() {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (raw) {
        orders = JSON.parse(raw);
    }
    // Nếu chưa có đơn hàng, thêm dữ liệu mẫu
    if (!orders || orders.length === 0) {
        orders = [...sampleOrders];
        saveOrdersToStorage();
    }
}

function saveOrdersToStorage() {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function renderRevenueStats() {
    loadOrdersFromStorage();
    
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    const totalOrdersCount = orders.length;
    
    // Doanh thu hôm nay
    const today = new Date().toISOString().split('T')[0];
    const todayOrders = orders.filter(order => order.date === today);
    const todayRevenue = todayOrders.reduce((sum, order) => sum + order.totalAmount, 0);
    
    document.getElementById('total-revenue').textContent = formatPrice(totalRevenue);
    document.getElementById('total-orders').textContent = totalOrdersCount;
    document.getElementById('today-revenue').textContent = formatPrice(todayRevenue);
    
    renderOrdersList(orders);
}

function filterRevenueByDate() {
    const selectedDate = document.getElementById('revenue-date').value;
    if (!selectedDate) return;
    
    loadOrdersFromStorage();
    const filteredOrders = orders.filter(order => order.date === selectedDate);
    
    const filteredRevenue = filteredOrders.reduce((sum, order) => sum + order.totalAmount, 0);
    document.getElementById('total-revenue').textContent = formatPrice(filteredRevenue);
    document.getElementById('total-orders').textContent = filteredOrders.length;
    
    renderOrdersList(filteredOrders);
}

function showAllRevenue() {
    document.getElementById('revenue-date').value = '';
    renderRevenueStats();
}

function renderOrdersList(ordersList) {
    const container = document.getElementById('revenue-orders-list');
    
    if (ordersList.length === 0) {
        container.innerHTML = '<p>Chưa có đơn hàng nào.</p>';
        return;
    }
    
    let html = '<table class="admin-table"><thead><tr><th>Mã ĐH</th><th>Ngày</th><th>Khách hàng</th><th>SĐT</th><th>Tổng tiền</th><th>Trạng thái</th><th>Chi tiết</th></tr></thead><tbody>';
    
    ordersList.forEach(order => {
        html += `
            <tr>
                <td>#${order.id}</td>
                <td>${order.date}</td>
                <td>${order.fullName}</td>
                <td>${order.phone}</td>
                <td>${formatPrice(order.totalAmount)}</td>
                <td><span class="status-${order.status || 'pending'}">${order.status === 'completed' ? 'Hoàn thành' : 'Đang xử lý'}</span></td>
                <td><button class="btn-view-detail" onclick="showOrderDetail(${order.id})"><i class="fas fa-eye"></i> Xem</button></td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function showOrderDetail(orderId) {
    loadOrdersFromStorage();
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    let itemsHtml = '';
    if (order.items && order.items.length > 0) {
        order.items.forEach((item, index) => {
            const itemTotal = item.qty * item.price;
            itemsHtml += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.qty}</td>
                    <td>${formatPrice(item.price)}</td>
                    <td>${formatPrice(itemTotal)}</td>
                </tr>
            `;
        });
    } else {
        itemsHtml = '<tr><td colspan="5">Không có thông tin sản phẩm</td></tr>';
    }
    
    const modalHtml = `
        <div class="order-detail-modal" id="orderDetailModal">
            <div class="order-detail-content">
                <span class="close-modal" onclick="closeOrderDetailModal()">&times;</span>
                <h3><i class="fas fa-file-invoice"></i> Chi tiết đơn hàng #${order.id}</h3>
                <div class="order-info">
                    <p><strong>Khách hàng:</strong> ${order.fullName}</p>
                    <p><strong>SĐT:</strong> ${order.phone}</p>
                    <p><strong>Địa chỉ:</strong> ${order.address}</p>
                    <p><strong>Ngày đặt:</strong> ${order.date}</p>
                    <p><strong>Thanh toán:</strong> ${order.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng'}</p>
                </div>
                <h4>Danh sách sản phẩm:</h4>
                <table class="order-items-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Sản phẩm</th>
                            <th>SL</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
                <div class="order-total">
                    <strong>Tổng cộng: ${formatPrice(order.totalAmount)}</strong>
                </div>
            </div>
        </div>
    `;
    
    // Xóa modal cũ nếu có
    const oldModal = document.getElementById('orderDetailModal');
    if (oldModal) oldModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeOrderDetailModal() {
    const modal = document.getElementById('orderDetailModal');
    if (modal) modal.remove();
}

// ==================== QUẢN LÝ NGƯỜI DÙNG ====================
const USERS_KEY = 'app_users_v1';
let users = [];

// Dữ liệu mẫu người dùng
const sampleUsers = [
    { id: 1, username: 'nguyenvanan', phone: '0901234567', password: '123456', registeredDate: '2025-12-01' },
    { id: 2, username: 'tranthib', phone: '0912345678', password: '123456', registeredDate: '2025-12-03' },
    { id: 3, username: 'lehoangc', phone: '0923456789', password: '123456', registeredDate: '2025-12-05' },
    { id: 4, username: 'phamminhduc', phone: '0934567890', password: '123456', registeredDate: '2025-12-07' },
    { id: 5, username: 'hoangthiem', phone: '0945678901', password: '123456', registeredDate: '2025-12-08' },
    { id: 6, username: 'vovanphuc', phone: '0956789012', password: '123456', registeredDate: '2025-12-10' },
    { id: 7, username: 'dangthigiang', phone: '0967890123', password: '123456', registeredDate: '2025-12-12' },
    { id: 8, username: 'nguyenthanhhai', phone: '0978901234', password: '123456', registeredDate: '2025-12-14' },
    { id: 9, username: 'truongvankhoa', phone: '0989012345', password: '123456', registeredDate: '2025-12-15' },
    { id: 10, username: 'lythilan', phone: '0990123456', password: '123456', registeredDate: '2025-12-16' }
];

function loadUsersFromStorage() {
    const raw = localStorage.getItem(USERS_KEY);
    if (raw) {
        users = JSON.parse(raw);
    }
    // Nếu chưa có người dùng, thêm dữ liệu mẫu
    if (!users || users.length === 0) {
        users = [...sampleUsers];
        saveUsersToStorage();
    }
}

function saveUsersToStorage() {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function renderAdminUsers() {
    loadUsersFromStorage();
    
    document.getElementById('total-users-count').textContent = users.length;
    
    const container = document.getElementById('admin-users-list');
    
    if (users.length === 0) {
        container.innerHTML = '<p>Chưa có người dùng nào đăng ký.</p>';
        return;
    }
    
    let html = '<table class="admin-table"><thead><tr><th>ID</th><th>Tên đăng nhập</th><th>Số điện thoại</th><th>Ngày đăng ký</th><th>Thao tác</th></tr></thead><tbody>';
    
    users.forEach(user => {
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.phone || 'Chưa cập nhật'}</td>
                <td>${user.registeredDate || 'N/A'}</td>
                <td>
                    <button onclick="viewUserDetail(${user.id})" class="btn-edit">Xem</button>
                    <button onclick="deleteUser(${user.id})" class="btn-delete">Xóa</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function viewUserDetail(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    alert(`Thông tin người dùng:\n\nID: ${user.id}\nTên đăng nhập: ${user.username}\nSố điện thoại: ${user.phone || 'Chưa cập nhật'}\nNgày đăng ký: ${user.registeredDate || 'N/A'}`);
}

function deleteUser(userId) {
    if (!confirm('Bạn có chắc muốn xóa người dùng này?')) return;
    
    users = users.filter(u => u.id !== userId);
    saveUsersToStorage();
    renderAdminUsers();
    showToast('Đã xóa người dùng!', 'success');
}

// ==================== QUẢN LÝ ĐƠN HÀNG ====================
function renderAdminOrders() {
    loadOrdersFromStorage();
    
    const container = document.getElementById('admin-orders-list');
    
    if (orders.length === 0) {
        container.innerHTML = '<p>Chưa có đơn hàng nào.</p>';
        return;
    }
    
    let html = '<table class="admin-table"><thead><tr><th>Mã ĐH</th><th>Ngày</th><th>Khách hàng</th><th>Địa chỉ</th><th>Tổng tiền</th><th>Thanh toán</th><th>Trạng thái</th><th>Chi tiết</th><th>Thao tác</th></tr></thead><tbody>';
    
    orders.forEach(order => {
        html += `
            <tr>
                <td>#${order.id}</td>
                <td>${order.date}</td>
                <td>${order.fullName}<br><small>${order.phone}</small></td>
                <td>${order.address}</td>
                <td>${formatPrice(order.totalAmount)}</td>
                <td>${order.paymentMethod === 'cod' ? 'COD' : 'Banking'}</td>
                <td><span class="status-${order.status || 'pending'}">${order.status === 'completed' ? 'Hoàn thành' : 'Đang xử lý'}</span></td>
                <td><button class="btn-view-detail" onclick="showOrderDetail(${order.id})"><i class="fas fa-eye"></i> Xem</button></td>
                <td>
                    <button onclick="updateOrderStatus(${order.id})" class="btn-edit">Cập nhật</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function updateOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const newStatus = order.status === 'completed' ? 'pending' : 'completed';
    order.status = newStatus;
    saveOrdersToStorage();
    renderAdminOrders();
    showToast(`Đã cập nhật trạng thái đơn hàng #${orderId}!`, 'success');
}


// ==================== TRANG THÔNG TIN TÀI KHOẢN ====================
function renderProfile() {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    
    if (!userData) {
        document.getElementById('profile-username').textContent = 'Chưa đăng nhập';
        document.getElementById('profile-phone').textContent = '-';
        document.getElementById('profile-date').textContent = '-';
        return;
    }
    
    document.getElementById('profile-username').textContent = userData.user || currentUser;
    document.getElementById('profile-phone').textContent = userData.phone || 'Chưa cập nhật';
    
    // Tìm ngày đăng ký từ danh sách users
    loadUsersFromStorage();
    const userInfo = users.find(u => u.username === currentUser);
    document.getElementById('profile-date').textContent = userInfo ? userInfo.registeredDate : 'N/A';
    
    // Hiển thị lịch sử đơn hàng của user
    renderUserOrders();
}

function renderUserOrders() {
    loadOrdersFromStorage();
    const container = document.getElementById('profile-orders-list');
    
    // Lọc đơn hàng của user hiện tại (dựa trên tên)
    const userData = JSON.parse(localStorage.getItem('user_data'));
    const userOrders = orders.filter(o => o.userId === currentUser || o.fullName === userData?.user);
    
    if (userOrders.length === 0) {
        container.innerHTML = '<p style="color:#888;">Bạn chưa có đơn hàng nào.</p>';
        return;
    }
    
    container.innerHTML = userOrders.map(order => `
        <div class="order-item">
            <p><strong>Mã đơn:</strong> #${order.id} | <strong>Ngày:</strong> ${order.date}</p>
            <p><strong>Tổng tiền:</strong> ${formatPrice(order.totalAmount)} | <strong>Trạng thái:</strong> ${order.status === 'completed' ? '✅ Hoàn thành' : '⏳ Đang xử lý'}</p>
        </div>
    `).join('');
}

// ==================== GỬI TIN NHẮN LIÊN HỆ ====================
function sendContactMessage() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    if (!name || !email || !message) {
        showToast('Vui lòng điền đầy đủ thông tin!', 'warn');
        return;
    }
    
    // Lưu tin nhắn vào LocalStorage (giả lập gửi)
    let contacts = [];
    try {
        const stored = localStorage.getItem('app_contacts_v1');
        if (stored) contacts = JSON.parse(stored);
    } catch(e) {}
    
    contacts.push({
        id: Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toISOString().split('T')[0]
    });
    
    localStorage.setItem('app_contacts_v1', JSON.stringify(contacts));
    
    // Clear form
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-subject').value = '';
    document.getElementById('contact-message').value = '';
    
    showToast('Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi sớm nhất.', 'success');
}

// ==================== ĐĂNG KÝ NHẬN ƯU ĐÃI ====================
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value.trim();
    
    if (!email) {
        showToast('Vui lòng nhập email của bạn!', 'warn');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        showToast('Email không hợp lệ!', 'warn');
        return;
    }
    
    // Lưu email vào LocalStorage
    let subscribers = [];
    try {
        const stored = localStorage.getItem('app_newsletter_v1');
        if (stored) subscribers = JSON.parse(stored);
    } catch(e) {}
    
    if (subscribers.includes(email)) {
        showToast('Email này đã đăng ký rồi!', 'info');
        return;
    }
    
    subscribers.push(email);
    localStorage.setItem('app_newsletter_v1', JSON.stringify(subscribers));
    
    document.getElementById('newsletter-email').value = '';
    showToast('Đăng ký thành công! Bạn sẽ nhận được ưu đãi 20% cho đơn hàng đầu tiên.', 'success');
}

// Cập nhật hàm chuyenTrang để render các trang mới
const originalChuyenTrang = chuyenTrang;
chuyenTrang = function(page) {
    originalChuyenTrang(page);
    if (page === 'profile') renderProfile();
};


// ==================== QUẢN LÝ BÀI VIẾT TIN TỨC & KHUYẾN MÃI ====================
const ARTICLES_KEY = 'app_articles_v1';
let articles = [];

// Bài viết mẫu mặc định
const defaultArticles = [
    {
        id: 1,
        title: 'Khai trương cửa hàng - Giảm giá 30%',
        type: 'promo',
        image: './img/banner1.jpg',
        summary: 'Nhân dịp khai trương, cửa hàng giảm giá 30% tất cả sản phẩm trong tuần đầu tiên!',
        content: 'Chào mừng quý khách đến với cửa hàng Dụng Cụ Học Tập! Nhân dịp khai trương, chúng tôi xin gửi tặng ưu đãi giảm giá 30% cho tất cả sản phẩm. Chương trình áp dụng từ ngày 01/01/2025 đến 07/01/2025. Nhanh tay mua sắm để nhận ưu đãi hấp dẫn!',
        date: '2025-01-01',
        active: true
    },
    {
        id: 2,
        title: 'Mùa tựu trường 2025 - Ưu đãi đặc biệt',
        type: 'promo',
        image: './img/banner2.jpg',
        summary: 'Chuẩn bị cho năm học mới với bộ dụng cụ học tập chất lượng cao, giá ưu đãi!',
        content: 'Mùa tựu trường đã đến! Cửa hàng Dụng Cụ Học Tập chuẩn bị sẵn sàng các sản phẩm chất lượng cao với giá ưu đãi đặc biệt dành cho học sinh, sinh viên. Mua combo bút + vở giảm thêm 15%. Áp dụng cho đơn hàng từ 200.000đ.',
        date: '2025-01-15',
        active: true
    },
    {
        id: 3,
        title: 'Hướng dẫn chọn bút phù hợp cho từng lứa tuổi',
        type: 'news',
        image: './img/butmay.JPG',
        summary: 'Bài viết chia sẻ kinh nghiệm chọn bút viết phù hợp cho học sinh tiểu học, THCS và THPT.',
        content: 'Việc chọn bút viết phù hợp rất quan trọng cho sự phát triển kỹ năng viết của trẻ. Đối với học sinh tiểu học, nên chọn bút chì 2B mềm, dễ viết. Học sinh THCS có thể sử dụng bút bi hoặc bút gel. Học sinh THPT và sinh viên nên dùng bút máy để rèn luyện chữ viết đẹp.',
        date: '2025-01-10',
        active: true
    },
    {
        id: 4,
        title: 'Top 5 sản phẩm bán chạy nhất tháng 1/2025',
        type: 'news',
        image: './img/voCamPus.JPG',
        summary: 'Điểm danh những sản phẩm được khách hàng yêu thích nhất trong tháng qua.',
        content: '1. Vở Campus 200 trang - Giấy trắng mịn, bền đẹp\n2. Bút Thiên Long hộp 20 cây - Giá trị tiết kiệm\n3. Máy tính Casio FX-580VN X - Được phép dùng trong thi\n4. Balo chống gù lưng - Thiết kế khoa học\n5. Bộ màu vẽ Colormate 120 món - Đa dạng màu sắc',
        date: '2025-01-20',
        active: true
    }
];

function loadArticlesFromStorage() {
    try {
        const raw = localStorage.getItem(ARTICLES_KEY);
        if (!raw) {
            articles = [...defaultArticles];
            saveArticlesToStorage();
            return;
        }
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
            articles = parsed;
        } else {
            articles = [...defaultArticles];
            saveArticlesToStorage();
        }
    } catch(e) {
        console.warn('Unable to load articles', e);
        articles = [...defaultArticles];
    }
}

function saveArticlesToStorage() {
    try {
        localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
    } catch(e) {
        console.warn('Failed to save articles', e);
    }
}

function renderAdminArticles() {
    const container = document.getElementById('admin-articles-list');
    if (!container) return;
    
    if (articles.length === 0) {
        container.innerHTML = '<p style="color:#999;">Chưa có bài viết nào. Hãy thêm bài viết mới!</p>';
        return;
    }
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Loại</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${articles.map(article => `
                    <tr>
                        <td>${article.id}</td>
                        <td>${escapeHtml(article.title)}</td>
                        <td>${article.type === 'news' ? '📰 Tin tức' : '🎁 Khuyến mãi'}</td>
                        <td>${article.date}</td>
                        <td>${article.active ? '<span style="color:green;">✅ Hiển thị</span>' : '<span style="color:red;">❌ Ẩn</span>'}</td>
                        <td>
                            <button class="btn-edit" onclick="editArticle(${article.id})">Sửa</button>
                            <button class="btn-delete" onclick="deleteArticle(${article.id})">Xóa</button>
                            <button onclick="toggleArticleStatus(${article.id})" style="background:${article.active ? '#e74c3c' : '#27ae60'}; padding:5px 10px; font-size:12px;">
                                ${article.active ? 'Ẩn' : 'Hiện'}
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function saveArticle() {
    const id = document.getElementById('article-id').value;
    const title = document.getElementById('article-title').value.trim();
    const type = document.getElementById('article-type').value;
    const image = document.getElementById('article-image').value.trim();
    const summary = document.getElementById('article-summary').value.trim();
    const content = document.getElementById('article-content').value.trim();
    
    if (!title) {
        showToast('Vui lòng nhập tiêu đề bài viết!', 'warn');
        return;
    }
    
    if (!summary) {
        showToast('Vui lòng nhập tóm tắt bài viết!', 'warn');
        return;
    }
    
    if (id) {
        // Cập nhật bài viết
        const index = articles.findIndex(a => a.id === parseInt(id));
        if (index !== -1) {
            articles[index] = {
                ...articles[index],
                title,
                type,
                image: image || './img/banner1.jpg',
                summary,
                content
            };
            showToast('Cập nhật bài viết thành công!', 'success');
        }
    } else {
        // Thêm bài viết mới
        const newArticle = {
            id: Date.now(),
            title,
            type,
            image: image || './img/banner1.jpg',
            summary,
            content,
            date: new Date().toISOString().split('T')[0],
            active: true
        };
        articles.unshift(newArticle);
        showToast('Thêm bài viết mới thành công!', 'success');
    }
    
    saveArticlesToStorage();
    renderAdminArticles();
    cancelArticleForm();
}

function editArticle(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;
    
    document.getElementById('article-id').value = article.id;
    document.getElementById('article-title').value = article.title;
    document.getElementById('article-type').value = article.type;
    document.getElementById('article-image').value = article.image || '';
    document.getElementById('article-summary').value = article.summary || '';
    document.getElementById('article-content').value = article.content || '';
    document.getElementById('article-form-title').innerText = 'Chỉnh Sửa Bài Viết';
    
    // Scroll to form
    document.querySelector('.article-form-container').scrollIntoView({ behavior: 'smooth' });
}

async function deleteArticle(id) {
    const confirmed = await showModal('Xác nhận xóa', 'Bạn có chắc muốn xóa bài viết này?');
    if (!confirmed) return;
    
    articles = articles.filter(a => a.id !== id);
    saveArticlesToStorage();
    renderAdminArticles();
    showToast('Đã xóa bài viết!', 'success');
}

function toggleArticleStatus(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
        article.active = !article.active;
        saveArticlesToStorage();
        renderAdminArticles();
        showToast(article.active ? 'Đã hiển thị bài viết!' : 'Đã ẩn bài viết!', 'info');
    }
}

function cancelArticleForm() {
    document.getElementById('article-id').value = '';
    document.getElementById('article-title').value = '';
    document.getElementById('article-type').value = 'news';
    document.getElementById('article-image').value = '';
    document.getElementById('article-summary').value = '';
    document.getElementById('article-content').value = '';
    document.getElementById('article-form-title').innerText = 'Thêm Bài Viết Mới';
}

// Render bài viết cho trang Tin Tức (public)
function renderNewsArticles() {
    const container = document.getElementById('news-articles-list');
    if (!container) return;
    
    const newsArticles = articles.filter(a => a.type === 'news' && a.active);
    
    if (newsArticles.length === 0) {
        container.innerHTML = `
            <div class="placeholder-content">
                <p>Chưa có tin tức nào.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = newsArticles.map(article => `
        <div class="article-card" onclick="showArticleDetail(${article.id})">
            <div class="article-image">
                <img src="${article.image}" alt="${escapeHtml(article.title)}" onerror="this.src='./img/banner1.jpg'">
            </div>
            <div class="article-info">
                <span class="article-date">📅 ${article.date}</span>
                <h3 class="article-title">${escapeHtml(article.title)}</h3>
                <p class="article-summary">${escapeHtml(article.summary)}</p>
                <button class="article-read-more">Đọc thêm →</button>
            </div>
        </div>
    `).join('');
}

// Render bài viết cho trang Khuyến Mãi (public)
function renderPromoArticles() {
    const container = document.getElementById('promo-articles-list');
    if (!container) return;
    
    const promoArticles = articles.filter(a => a.type === 'promo' && a.active);
    
    if (promoArticles.length === 0) {
        container.innerHTML = `
            <div class="placeholder-content">
                <p>Chưa có chương trình khuyến mãi nào.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = promoArticles.map(article => `
        <div class="article-card promo-article" onclick="showArticleDetail(${article.id})">
            <div class="article-image">
                <img src="${article.image}" alt="${escapeHtml(article.title)}" onerror="this.src='./img/banner1.jpg'">
                <span class="promo-badge-card">🎁 Khuyến mãi</span>
            </div>
            <div class="article-info">
                <span class="article-date">📅 ${article.date}</span>
                <h3 class="article-title">${escapeHtml(article.title)}</h3>
                <p class="article-summary">${escapeHtml(article.summary)}</p>
                <button class="article-read-more promo-btn">Xem chi tiết →</button>
            </div>
        </div>
    `).join('');
}

// Hiển thị chi tiết bài viết
function showArticleDetail(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;
    
    const modal = document.getElementById('product-detail-modal');
    const body = document.getElementById('product-detail-body');
    
    body.innerHTML = `
        <div class="article-detail">
            <div class="article-detail-header">
                <span class="article-type-badge ${article.type}">${article.type === 'news' ? '📰 Tin Tức' : '🎁 Khuyến Mãi'}</span>
                <span class="article-detail-date">📅 ${article.date}</span>
            </div>
            <h2 class="article-detail-title">${escapeHtml(article.title)}</h2>
            <img src="${article.image}" alt="${escapeHtml(article.title)}" class="article-detail-image" onerror="this.src='./img/banner1.jpg'">
            <div class="article-detail-content">
                ${article.content ? article.content.split('\n').map(p => `<p>${escapeHtml(p)}</p>`).join('') : `<p>${escapeHtml(article.summary)}</p>`}
            </div>
            <div class="article-detail-actions">
                <button onclick="closeProductDetail()">← Quay lại</button>
                <button onclick="chuyenTrang('products'); closeProductDetail();" style="background:#27ae60;">🛒 Mua sắm ngay</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
}

// Cập nhật chuyenTrang để render articles
const originalChuyenTrangForArticles = chuyenTrang;
chuyenTrang = function(page) {
    originalChuyenTrangForArticles(page);
    if (page === 'news') renderNewsArticles();
    if (page === 'promo') renderPromoArticles();
};

// Load articles khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    loadArticlesFromStorage();
});
 