BÁO CÁO ĐỒ ÁN CƠ SỞ NGÀNH

WEBSITE BÁN DỤNG CỤ HỌC TẬP

---

Sinh viên thực hiện: Phan Huỳnh Phúc
Mã số sinh viên: 110123159
Lớp: DA23TTD
Giảng viên hướng dẫn: [Họ và tên GVHD]
Khoa: Công Nghệ Thông Tin
Trường: [Tên trường]

Học kỳ: I • Năm học: 2024•2025

---

LỜI CẢM ƠN

Trước tiên, em xin gửi lời cảm ơn chân thành đến Thầy/Cô giảng viên hướng dẫn, người đã tận tình hướng dẫn, chỉ bảo và động viên em trong suốt quá trình thực hiện đồ án cơ sở ngành này.

Em xin chân thành cảm ơn quý Thầy Cô trong Khoa Công Nghệ Thông Tin đã truyền đạt những kiến thức về lập trình web, giúp em có nền tảng để hoàn thành đồ án này.

Em cũng xin gửi lời cảm ơn đến gia đình, bạn bè đã luôn bên cạnh, động viên và hỗ trợ em trong suốt thời gian học tập và thực hiện đồ án.

Mặc dù đã cố gắng hết sức, nhưng do thời gian và kinh nghiệm còn hạn chế, đồ án không tránh khỏi những thiếu sót. Em rất mong nhận được sự góp ý, chỉ bảo của quý Thầy Cô để đồ án được hoàn thiện hơn.

Em xin chân thành cảm ơn!

---

MỤC LỤC

TÓM TẮT ĐỒ ÁN CƠ SỞ NGÀNH
MỞ ĐẦU
CHƯƠNG 1: TỔNG QUAN
CHƯƠNG 2: CƠ SỞ LÝ THUYẾT
CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG
CHƯƠNG 4: KẾT QUẢ THỰC HIỆN
CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN
TÀI LIỆU THAM KHẢO

---

TÓM TẮT ĐỒ ÁN CƠ SỞ NGÀNH

Vấn đề nghiên cứu:
• Với sự phát triển của giáo dục và nhu cầu học tập ngày càng cao, thị trường dụng cụ học tập và văn phòng phẩm tại Việt Nam đang tăng trưởng mạnh mẽ. Tuy nhiên, các nền tảng thương mại điện tử chuyên biệt cho lĩnh vực này còn hạn chế cả về số lượng và chất lượng.
• Khách hàng (học sinh, sinh viên, phụ huynh) thường gặp khó khăn trong việc tìm kiếm sản phẩm phù hợp, so sánh giá cả, và đảm bảo chất lượng sản phẩm.
• Đề tài tập trung xây dựng một website bán dụng cụ học tập hiện đại, thân thiện với người dùng, và có khả năng hỗ trợ tốt trong giao dịch trực tuyến.

Hướng tiếp cận:
• Sử dụng công nghệ HTML5, CSS3 và JavaScript ES6+ để xây dựng giao diện người dùng thân thiện và linh hoạt.
• Áp dụng kiến trúc Single Page Application (SPA) giúp tăng trải nghiệm người dùng, chuyển trang mượt mà không cần tải lại.
• Xây dựng Backend API với ASP.NET Core Web API và Entity Framework Core.
• Sử dụng cơ sở dữ liệu SQLite để lưu trữ dữ liệu sản phẩm, người dùng, đơn hàng.
• Sử dụng LocalStorage API để lưu trữ dữ liệu tạm thời phía client.

Cách giải quyết vấn đề:
• Phân tích yêu cầu người dùng: Khảo sát để xác định các tính năng cần thiết như hiển thị danh mục sản phẩm, tìm kiếm, lọc sản phẩm, quản lý giỏ hàng, và hỗ trợ đăng ký/đăng nhập.
• Thiết kế giao diện: Xây dựng giao diện responsive với CSS Grid và Flexbox, đảm bảo hiển thị tốt trên desktop, tablet và mobile.
• Phát triển tính năng chính:
  + Quản lý sản phẩm: Hiển thị 22 sản phẩm với đầy đủ thông tin (tên, giá, hình ảnh, mô tả, thương hiệu, tồn kho).
  + Tìm kiếm và lọc: Cho phép người dùng tìm kiếm theo tên, danh mục, thương hiệu và lọc theo 3 danh mục.
  + Giỏ hàng và thanh toán: Thêm/xóa sản phẩm, tính tổng tiền, nhập thông tin giao hàng.
  + Quản lý tài khoản: Đăng ký, đăng nhập người dùng và admin.
  + Đánh giá sản phẩm: Gửi và hiển thị đánh giá với rating 1•5 sao.

Kết quả đạt được:
• Website được xây dựng hoàn thiện với 22 sản phẩm thuộc 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập.
• Giao diện đẹp mắt, thân thiện với người dùng, responsive trên nhiều thiết bị.
• Backend API hoàn chỉnh với ASP.NET Core, Entity Framework Core và SQLite.
• Hệ thống quản lý sản phẩm, giỏ hàng, tài khoản hoạt động ổn định.
• Swagger UI cho API documentation tại /swagger.

---

MỞ ĐẦU

Lý do chọn đề tài

Ngày nay, việc học tập ngày càng được chú trọng và đầu tư. Nhu cầu mua sắm các sản phẩm dụng cụ học tập như bút viết, vở, sổ tay, balo, máy tính và các vật dụng văn phòng phẩm ngày càng tăng cao. Tuy nhiên, thị trường trực tuyến tại Việt Nam chưa có nhiều nền tảng chuyên biệt cung cấp các sản phẩm này một cách thuận tiện và hiện đại.

Với sự phát triển mạnh mẽ của công nghệ web, việc nghiên cứu và áp dụng HTML5, CSS3, JavaScript để xây dựng một website bán dụng cụ học tập là một hướng đi tiềm năng nhằm đáp ứng nhu cầu thực tế.

Mục đích nghiên cứu

• Tìm hiểu cách áp dụng công nghệ HTML5, CSS3, JavaScript vào xây dựng một website thương mại điện tử.
• Phát triển một nền tảng mua sắm trực tuyến chuyên biệt dành cho dụng cụ học tập, giúp người dùng dễ dàng tìm kiếm, lựa chọn và mua sắm các sản phẩm phù hợp.
• Cải thiện trải nghiệm người dùng thông qua giao diện thân thiện, tính năng tìm kiếm nhanh, và thiết kế responsive.

Đối tượng nghiên cứu

• Công nghệ HTML5 và các thẻ semantic để xây dựng cấu trúc trang web.
• Công nghệ CSS3 với Flexbox, Grid Layout, Media Queries để thiết kế giao diện responsive.
• Ngôn ngữ JavaScript ES6+ để xử lý logic và tương tác người dùng.
• ASP.NET Core Web API để xây dựng Backend API.
• Entity Framework Core để tương tác với cơ sở dữ liệu.
• Cơ sở dữ liệu SQLite để lưu trữ dữ liệu.
• LocalStorage API để lưu trữ dữ liệu tạm thời phía client.
• Kiến trúc Single Page Application (SPA) để tạo trải nghiệm mượt mà.

Phạm vi nghiên cứu

• Tập trung vào việc xây dựng website bán dụng cụ học tập với 22 sản phẩm thuộc 3 danh mục.
• Nghiên cứu và triển khai các tính năng cơ bản: xem sản phẩm, tìm kiếm, lọc, giỏ hàng, thanh toán, đăng nhập, quản trị.
• Thiết kế giao diện responsive cho desktop, tablet và mobile.
• Thử nghiệm và tối ưu hóa hiệu năng của website trên các trình duyệt khác nhau.

---

CHƯƠNG 1: TỔNG QUAN

Dụng cụ học tập là một trong những mặt hàng ngày càng được nhiều người kinh doanh lựa chọn do nhu cầu học tập và làm việc ngày càng tăng cao. Không chỉ đơn thuần là những món đồ hỗ trợ, dụng cụ học tập còn thể hiện sự quan tâm đến chất lượng học tập và phong cách của người sử dụng. Các sản phẩm như bút viết, vở, sổ tay, balo, máy tính hay các dụng cụ văn phòng phẩm không chỉ đáp ứng nhu cầu cơ bản mà còn giúp tăng hiệu quả học tập và làm việc.

Với sự phát triển của công nghệ và hình thức kinh doanh trực tuyến, việc bán dụng cụ học tập qua các nền tảng online đang trở thành một xu hướng phổ biến. Kinh doanh trực tuyến mang lại nhiều lợi thế như thao tác nhanh gọn, đặt hàng ở bất kỳ đâu, bất kỳ lúc nào, tiết kiệm thời gian và chi phí. Hơn nữa, hình thức này không đòi hỏi vốn đầu tư lớn nhưng vẫn đảm bảo hiệu quả kinh doanh cao.

Xây dựng một Website bán dụng cụ học tập với đầy đủ chức năng là một giải pháp lý tưởng để tiếp cận khách hàng và tăng doanh thu. Website sẽ cung cấp các chức năng cơ bản như xem, thêm, xóa, sửa sản phẩm dành cho nhà kinh doanh. Đối với khách hàng, website sẽ cho phép họ xem các sản phẩm, đặt hàng và nhận được đầy đủ thông tin qua hình ảnh, mô tả, giá cả cũng như đánh giá từ những người dùng khác.

1.1. Giới thiệu về website

Website "Dụng Cụ Học Tập" là một trang thương mại điện tử chuyên bán các sản phẩm văn phòng phẩm và dụng cụ học tập. Website được xây dựng theo mô hình Single Page Application (SPA) sử dụng HTML5, CSS3 và JavaScript ES6+.

1.2. Danh sách sản phẩm trong website

Website hiện có 22 sản phẩm được chia thành 3 danh mục:

Danh mục "Bút viết" (5 sản phẩm):
• Bút Máy Cao Cấp • Thiên Long • 50.000đ
• Bút Thiên Long Hộp 20 Cây • Thiên Long • 80.000đ
• Bút Chì Gỗ 2B Hộp 12 Cây • Thiên Long • 35.000đ
• Bút Gel Xóa Được Pilot • Pilot • 45.000đ
• Bút Dạ Quang Highlight 6 Màu • Stabilo • 55.000đ

Danh mục "Vở/Sổ" (5 sản phẩm):
• Vở Học Sinh 96 Trang • Hồng Hà • 12.000đ
• Vở Campus 200 Trang • Campus • 65.000đ
• Sổ Tay Bìa Da Cao Cấp A5 • Klong • 95.000đ
• Giấy Note Dán 3M Post•it • 3M • 42.000đ
• Giấy A4 Double A 70gsm • Double A • 95.000đ

Danh mục "Dụng cụ học tập" (12 sản phẩm):
• Bộ Thước Kẻ Đa Năng • Thiên Long • 25.000đ
• Máy Tính Casio FX•580VN X • Casio • 850.000đ
• Balo Chống Gù Lưng • Mikkor • 450.000đ
• Bộ Màu Vẽ Colormate 120 Món • Colormate • 250.000đ
• Đèn Bàn Học Chống Cận • Điện Quang • 180.000đ
• Kéo Học Sinh Inox 16cm • Thiên Long • 18.000đ
• Hộp Bút Nhựa Trong Suốt • Deli • 22.000đ
• Gọt Bút Chì 2 Lỗ Kim Loại • Thiên Long • 15.000đ
• Bìa Hồ Sơ Còng Nhựa A4 • Hồng Hà • 8.000đ
• Túi Đựng Bút Canvas Đa Năng • Miniso • 38.000đ
• Bảng Viết Bút Lông Mini A4 • Deli • 68.000đ
• Bộ Compa Vẽ Kỹ Thuật 8 Món • Thiên Long • 125.000đ

1.3. Các chức năng chính của website

1.3.1. Chức năng dành cho khách hàng

• Xem danh sách 22 sản phẩm với hình ảnh, tên, giá hiển thị dạng lưới.
• Tìm kiếm sản phẩm theo tên, danh mục, thương hiệu với kết quả hiển thị real•time.
• Lọc sản phẩm theo 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập.
• Xem chi tiết sản phẩm trong modal với đầy đủ thông tin: mô tả, thương hiệu, tồn kho.
• Thêm sản phẩm vào giỏ hàng bằng nút "Thêm vào giỏ" hoặc "Mua ngay".
• Xóa sản phẩm khỏi giỏ hàng.
• Xem tổng tiền giỏ hàng được tính tự động.
• Đặt hàng với form nhập thông tin giao hàng: họ tên, số điện thoại, địa chỉ.
• Chọn phương thức thanh toán: COD, Chuyển khoản, MoMo.
• Đăng ký tài khoản mới với username và password.
• Đăng nhập/Đăng xuất tài khoản.
• Gửi đánh giá với rating 1•5 sao và nội dung nhận xét.
• Xem đánh giá từ khách hàng khác.

1.3.2. Chức năng dành cho quản trị viên

• Đăng nhập admin với tài khoản mặc định (username: admin, password: 123).
• Xem danh sách sản phẩm trong bảng quản lý.
• Thêm sản phẩm mới với đầy đủ thông tin.
• Sửa thông tin sản phẩm đã có.
• Xóa sản phẩm khỏi danh sách.
• Quản lý khuyến mãi học sinh: thêm, sửa, xóa, kích hoạt/tắt.
• Xem và phê duyệt đánh giá từ khách hàng.
• Khóa/Mở khóa phiên làm việc để bảo mật.
• Đăng xuất admin.

1.4. Cấu trúc thư mục dự án

```
/websitebandungcuhoctap
├── index.html          # File HTML chính (Frontend SPA)
├── script.js           # File JavaScript (xử lý logic frontend)
├── style.css           # File CSS (định dạng giao diện)
├── img/                # Thư mục chứa hình ảnh
│   ├── banner1.svg     # Banner quảng cáo 1
│   ├── banner2.svg     # Banner quảng cáo 2
│   ├── banner3.svg     # Banner quảng cáo 3
│   └── [22 hình sản phẩm]
│
└── c#/                 # Backend ASP.NET Core API
    ├── Program.cs      # Entry point và cấu hình
    ├── appsettings.json # Cấu hình ứng dụng
    ├── SchoolSupplies.db # SQLite database
    ├── Controllers/    # API Controllers
    │   ├── ProductsController.cs
    │   └── SeedController.cs
    ├── Models/         # Entity Models
    │   ├── Product.cs
    │   ├── User.cs
    │   ├── Order.cs
    │   └── ProductReview.cs
    ├── Data/           # Database Context
    │   └── AppDbContext.cs
    └── Migrations/     # EF Core Migrations
```

---

CHƯƠNG 2: CƠ SỞ LÝ THUYẾT

2.1. Tổng quan về thiết kế giao diện web

2.1.1. Tổng quan HTML

2.1.1.1. Giới thiệu ngôn ngữ HTML

HTML (Hypertext Markup Language • ngôn ngữ đánh dấu siêu văn bản) là ngôn ngữ được sử dụng để tạo và định dạng cấu trúc các thành phần trong trang web. Trang mã nguồn HTML là một tệp văn bản gồm các ký tự ASCII, chúng có thể được tạo ra từ bất kì trình soạn thảo nào. Các tệp mã nguồn này có phần mở rộng là ".htm" hoặc ".html".

2.1.1.2. Cấu trúc của các thành phần HTML

Các cặp thẻ HTML thường gồm thẻ mở và thẻ đóng, 2 thẻ này có cấu trúc gần giống nhau:

```html
<tên thẻ> Nội dung </tên thẻ>
```

Trong thẻ mở có thể có thêm tham số đặt phía sau tên thẻ, dữ liệu cần hiển thị nằm trong cặp thẻ mở và thẻ đóng. Tuy nhiên có một số thẻ đặc biệt sẽ không có thẻ đóng. Người soạn thảo có thể đặt các thẻ này lồng vào nhau.

2.1.1.3. Cấu trúc trang HTML

Cấu trúc trang HTML gồm 3 phần:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tiêu đề của trang sẽ nằm ở đây</title>
</head>
<body>
    Nội dung của trang sẽ nằm ở đây
</body>
</html>
```

• Phần khai báo loại chương trình: xuất hiện ở đầu trên cùng của file HTML, dùng để thông báo cho trình duyệt biết người dùng đang sử dụng phiên bản HTML nào. Ví dụ như thẻ khai báo <!DOCTYPE html> dùng để khai báo cho chuẩn HTML5.
• Phần khai báo ban đầu: chứa tiêu đề trang web và các khai báo về bảng mã chữ cái, từ khóa tìm kiếm. Phần này được đặt giữa cặp thẻ <head></head>.
• Phần chứa và hiển thị nội dung của trang web: đây là phần sẽ chứa các nội dung hiển thị trên màn hình khi người dùng truy cập vào trang web. Phần này được đặt giữa cặp thẻ <body></body>.

2.1.1.4. Các thẻ HTML được sử dụng trong website

Thẻ cấu trúc trang:
• `<header>` • Phần đầu trang, chứa logo và menu điều hướng
• `<nav>` • Menu điều hướng chính của website
• `<main>` • Nội dung chính của trang
• `<section>` • Các phần nội dung (trang chủ, sản phẩm, giỏ hàng, đăng nhập, admin)
• `<footer>` • Phần cuối trang chứa thông tin liên hệ

Thẻ hiển thị nội dung:
• `<div>` • Khối chứa nội dung, dùng để nhóm các phần tử
• `<span>` • Đoạn văn bản inline
• `<img>` • Hiển thị hình ảnh sản phẩm và banner
• `<a>` • Liên kết điều hướng giữa các trang
• `<button>` • Nút bấm (Thêm giỏ, Mua ngay, Đăng nhập...)
• `<ul>`, `<li>` • Danh sách menu và danh sách sản phẩm trong giỏ hàng

Thẻ form:
• `<form>` • Form đăng nhập, đăng ký, thanh toán, đánh giá
• `<input>` • Ô nhập liệu với các type: text, password, email, tel, number
• `<select>`, `<option>` • Dropdown chọn phương thức thanh toán, danh mục
• `<textarea>` • Ô nhập ghi chú đơn hàng, nội dung đánh giá

---

2.1.2. Tổng quan về CSS

2.1.2.1. Giới thiệu ngôn ngữ CSS

CSS (Cascading Style Sheet) là một ngôn ngữ thiết kế đơn giản, được sử dụng để tìm và định dạng lại các phần tử tạo ra bởi ngôn ngữ đánh dấu (như HTML). Hay nói khác đi, CSS được sử dụng để tạo ra phong cách hiển thị trang web. Phương thức hoạt động của CSS là nó dựa vào các vùng chọn (có thể là thẻ HTML, tên ID, class) để thay đổi các thuộc tính hiển thị của các phần tử trên vùng chọn đó.

2.1.2.2. Chức năng của CSS

CSS cho phép các người lập trình web quản lý được hầu hết các thuộc tính của các thành phần có trong HTML. Các tính năng có trong CSS:
• Đặt màu, màu nền cho một đoạn văn bản.
• Căn chỉnh khoảng cách giữa các ký tự, giữa các dòng.
• Thay đổi font chữ và các thuộc tính của font chữ.

2.1.2.3. Các kỹ thuật CSS được sử dụng trong website

a) Flexbox Layout:
Dùng để căn chỉnh menu điều hướng, card sản phẩm, footer trong website.

```css
/* Menu điều hướng */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.nav-menu {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

b) CSS Grid:
Dùng để hiển thị danh sách 22 sản phẩm dạng lưới responsive.

```css
/* Lưới sản phẩm */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    padding: 20px;
}
```

c) Media Queries (Responsive Design):
Dùng để điều chỉnh giao diện theo kích thước màn hình desktop, tablet, mobile.

```css
/* Desktop: 4 cột sản phẩm */
.product-grid {
    grid-template-columns: repeat(4, 1fr);
}

/* Tablet: 2 cột sản phẩm */
@media (max-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile: 1 cột sản phẩm */
@media (max-width: 480px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
}
```

d) CSS Variables:
Dùng để quản lý màu sắc thống nhất trong toàn bộ website.

```css
:root {
    --primary-color: #16a085;
    --secondary-color: #2ecc71;
    --danger-color: #e74c3c;
    --dark-color: #2c3e50;
}

.btn-primary {
    background: var(--primary-color);
}
```

e) Transitions và Animations:
Dùng để tạo hiệu ứng hover cho card sản phẩm và banner carousel.

```css
.product-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
```

---

2.1.3. Tổng quan JavaScript

2.1.3.1. Giới thiệu ngôn ngữ JavaScript

JavaScript (viết tắt là JS) là một ngôn ngữ lập trình thông dịch với khả năng hướng đối tượng. JavaScript là một ngôn ngữ lập trình web phổ biến hiện nay, dùng để tích hợp vào HTML giúp trang web trở nên sống động hơn. JavaScript có mối liên hệ chặt chẽ với HTML và CSS: trong khi HTML định dạng các thành phần của trang web, CSS quy định phong cách hiển thị trang web, thì JavaScript có thể xử lý các thuộc tính đối tượng do HTML và CSS quy định, tạo nên sự tương tác giữa người dùng với trang web.

2.1.3.2. Các tính năng của JavaScript

JavaScript có các tính năng gần giống với các ngôn ngữ lập trình thông thường, người lập trình có thể khai báo biến, hằng và các thao tác với các biến và hằng này, có thể xây dựng các hàm thực thi các chức năng khác nhau. Một số chức năng mà JavaScript cung cấp:
• Thay đổi nội dung các thành phần HTML.
• Thay đổi giá trị thuộc tính của thành phần HTML.
• Ẩn, hiện các phần tử HTML.

2.1.3.3. Các tính năng JavaScript ES6+ được sử dụng trong website

a) Mảng sản phẩm (Array):
Lưu trữ danh sách 22 sản phẩm với đầy đủ thông tin.

```javascript
let products = [
    { 
        id: 1, 
        name: "Bút Máy Cao Cấp", 
        price: 50000, 
        img: "./img/butmay.JPG",
        category: "Bút viết",
        description: "Bút máy cao cấp với ngòi bằng thép không gỉ...",
        stock: 50,
        brand: "Thiên Long"
    },
    // ... 21 sản phẩm khác
];
```

b) Arrow Functions:
Cú pháp ngắn gọn cho hàm, được sử dụng trong các hàm xử lý sự kiện và callback.

```javascript
// Tính tổng tiền giỏ hàng
const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

// Tìm sản phẩm theo ID
const findProduct = (id) => products.find(p => p.id === id);
```

c) Template Literals:
Tạo HTML động cho card sản phẩm, modal chi tiết, giỏ hàng.

```javascript
function renderProducts(productList) {
    const html = productList.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <button onclick="addToCart(${product.id})">
                Thêm vào giỏ
            </button>
        </div>
    `).join('');
    
    document.getElementById('product-list').innerHTML = html;
}
```

d) Array Methods:
Xử lý mảng sản phẩm với các phương thức filter, find, map, reduce.

```javascript
// filter() - Lọc sản phẩm theo danh mục
const filteredProducts = products.filter(p => p.category === 'Bút viết');

// find() - Tìm sản phẩm theo ID
const product = products.find(p => p.id === productId);

// map() - Chuyển đổi dữ liệu
const productNames = products.map(p => p.name);

// reduce() - Tính tổng tiền giỏ hàng
const total = cart.reduce((sum, item) => sum + item.price, 0);
```

e) DOM Manipulation:
Thao tác với các phần tử HTML để cập nhật giao diện động.

```javascript
// Lấy element
const productList = document.getElementById('product-list');
const searchInput = document.querySelector('#search-input');

// Thay đổi nội dung
productList.innerHTML = productsHTML;

// Thêm/xóa class
element.classList.add('active');
element.classList.remove('hidden');

// Xử lý sự kiện
searchInput.addEventListener('input', (e) => {
    searchProducts(e.target.value);
});
```

---

2.2. LocalStorage API

2.2.1. Giới thiệu LocalStorage

LocalStorage là Web Storage API cho phép lưu trữ dữ liệu trên trình duyệt của người dùng. Dữ liệu được lưu dạng key•value và không bị mất khi đóng trình duyệt.

Đặc điểm của LocalStorage:
• Lưu trữ dữ liệu dạng key•value
• Dung lượng: 5•10MB tùy trình duyệt
• Dữ liệu không hết hạn (persistent)
• Chỉ lưu trữ string, cần JSON.stringify/parse cho object

2.2.2. Các key LocalStorage trong website

Website sử dụng 8 key để lưu trữ dữ liệu:

```javascript
const PRODUCTS_KEY = 'app_products_v1';        // Danh sách sản phẩm
const CART_KEY = 'app_cart_v1';                // Giỏ hàng
const REVIEWS_KEY = 'app_reviews_v1';          // Đánh giá khách hàng
const PRODUCT_REVIEWS_KEY = 'app_product_reviews_v1';  // Đánh giá sản phẩm
const PROMOS_KEY = 'app_promos_v1';            // Khuyến mãi học sinh
const ADMIN_ACCOUNTS_KEY = 'app_admin_accounts_v1';   // Tài khoản admin
const ADMIN_SESSION_KEY = 'app_admin_session_v1';     // Phiên admin
const USER_DATA_KEY = 'user_data';             // Thông tin người dùng
```

2.2.3. Các hàm lưu/đọc dữ liệu trong website

```javascript
// Lưu sản phẩm vào LocalStorage
function saveProductsToStorage() {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

// Đọc sản phẩm từ LocalStorage
function loadProductsFromStorage() {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    if (raw) {
        products = JSON.parse(raw);
    }
}

// Lưu giỏ hàng
function saveCartToStorage() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Đọc giỏ hàng
function loadCartFromStorage() {
    const raw = localStorage.getItem(CART_KEY);
    if (raw) {
        cart = JSON.parse(raw);
    }
}
```

---

2.3. Kiến trúc Single Page Application (SPA)

2.3.1. Khái niệm SPA

Single Page Application là kiến trúc ứng dụng web trong đó toàn bộ nội dung được tải trong một trang HTML duy nhất. Các "trang" khác nhau được hiển thị bằng cách ẩn/hiện các phần tử DOM thông qua JavaScript, thay vì tải lại toàn bộ trang từ server.

Ưu điểm của SPA:
• Trải nghiệm người dùng mượt mà, không reload trang
• Tốc độ phản hồi nhanh
• Dễ dàng tạo hiệu ứng chuyển trang
• Giảm tải cho server

2.3.2. Cách triển khai SPA trong website

Cấu trúc HTML với các section đại diện cho các trang:

```html
<body>
    <section id="home" class="page active">
        <!-- Trang chủ: Banner, Khuyến mãi, Sản phẩm nổi bật, Đánh giá -->
    </section>
    
    <section id="products" class="page">
        <!-- Trang sản phẩm: Tìm kiếm, Lọc, Danh sách 22 sản phẩm -->
    </section>
    
    <section id="cart" class="page">
        <!-- Trang giỏ hàng: Danh sách sản phẩm, Form thanh toán -->
    </section>
    
    <section id="login" class="page">
        <!-- Trang đăng nhập -->
    </section>
    
    <section id="register" class="page">
        <!-- Trang đăng ký -->
    </section>
    
    <section id="admin-login" class="page">
        <!-- Trang đăng nhập admin -->
    </section>
    
    <section id="admin-panel" class="page">
        <!-- Trang quản trị: Quản lý sản phẩm, khuyến mãi, đánh giá -->
    </section>
</body>
```

Hàm chuyển trang trong JavaScript:

```javascript
function chuyenTrang(page) {
    // Ẩn tất cả các section
    document.querySelectorAll('.page').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Hiện section được chọn
    const targetSection = document.getElementById(page);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
    }
    
    // Cập nhật menu active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Scroll lên đầu trang
    window.scrollTo(0, 0);
}
```

---

2.4. ASP.NET Core Web API

2.4.1. Giới thiệu ASP.NET Core

ASP.NET Core là một framework mã nguồn mở, đa nền tảng được phát triển bởi Microsoft để xây dựng các ứng dụng web hiện đại. Website sử dụng ASP.NET Core Web API để xây dựng Backend API.

Đặc điểm chính của ASP.NET Core:
• Cross•platform: Chạy trên Windows, macOS, Linux
• High•performance: Hiệu suất cao, tối ưu cho web
• Open•source: Mã nguồn mở, cộng đồng lớn
• Built•in Dependency Injection: Hỗ trợ DI sẵn có

2.4.2. Cấu trúc Backend API trong website

```
c#/
├── Program.cs              # Entry point, cấu hình services
├── appsettings.json        # Cấu hình ứng dụng
├── SchoolSupplies.db       # SQLite database file
├── Controllers/            # API Controllers
│   ├── ProductsController.cs
│   └── SeedController.cs
├── Models/                 # Entity Models
│   ├── Product.cs
│   ├── User.cs
│   ├── Order.cs
│   └── ProductReview.cs
├── Data/                   # Database Context
│   └── AppDbContext.cs
└── Migrations/             # EF Core Migrations
```

2.4.3. Cấu hình Program.cs

```csharp
var builder = WebApplication.CreateBuilder(args);

// Đăng ký DbContext với SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Đăng ký Controllers
builder.Services.AddControllers();

// Cấu hình Swagger cho API documentation
builder.Services.AddSwaggerGen();

// Cấu hình CORS để cho phép Frontend gọi API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:8000", "http://localhost:5500")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("AllowFrontend");
app.MapControllers();

app.Run();
```

2.4.4. Products Controller

```csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    // GET: api/products/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();
        return product;
    }

    // POST: api/products
    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }
}
```

---

2.5. Entity Framework Core và SQLite

2.5.1. Giới thiệu Entity Framework Core

Entity Framework Core (EF Core) là một ORM (Object•Relational Mapping) framework cho .NET, cho phép làm việc với database bằng các đối tượng C# thay vì viết SQL trực tiếp.

2.5.2. Giới thiệu SQLite

SQLite là một hệ quản trị cơ sở dữ liệu quan hệ nhẹ, serverless, được lưu trữ trong một file duy nhất. Website sử dụng SQLite với file database SchoolSupplies.db.

Đặc điểm của SQLite:
• Serverless: Không cần cài đặt server riêng
• Zero•configuration: Không cần cấu hình phức tạp
• Self•contained: Toàn bộ database trong một file (.db)
• Cross•platform: Hoạt động trên mọi nền tảng

2.5.3. Entity Model trong website

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string ImageUrl { get; set; }
    public string Category { get; set; }
    public string Description { get; set; }
    public int Stock { get; set; }
    public string Brand { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

2.5.4. DbContext

```csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<ProductReview> ProductReviews { get; set; }
}
```

---

2.6. Font Awesome

2.6.1. Giới thiệu Font Awesome

Font Awesome là thư viện icon vector phổ biến nhất, cung cấp hàng nghìn icon miễn phí. Website sử dụng Font Awesome 6.0.0 để hiển thị các icon trong giao diện.

2.4.2. Các icon được sử dụng trong website

```html
<!-- Icon giỏ hàng trên menu -->
<i class="fas fa-shopping-cart"></i>

<!-- Icon tìm kiếm -->
<i class="fas fa-search"></i>

<!-- Icon người dùng -->
<i class="fas fa-user"></i>

<!-- Icon thêm vào giỏ -->
<i class="fas fa-cart-plus"></i>

<!-- Icon sao đánh giá -->
<i class="fas fa-star"></i>

<!-- Icon mạng xã hội trong footer -->
<i class="fab fa-facebook"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-twitter"></i>
<i class="fab fa-youtube"></i>

<!-- Icon thông tin liên hệ -->
<i class="fas fa-phone"></i>
<i class="fas fa-envelope"></i>
<i class="fas fa-map-marker-alt"></i>
```

---

CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

3.1. Phân tích yêu cầu

3.1.1. Yêu cầu chức năng

Đối với khách hàng:
• Xem danh sách sản phẩm với hình ảnh, tên, giá
• Tìm kiếm sản phẩm theo tên, danh mục, thương hiệu
• Lọc sản phẩm theo danh mục
• Xem chi tiết sản phẩm
• Thêm/xóa sản phẩm trong giỏ hàng
• Đặt hàng với thông tin giao hàng
• Đăng ký/Đăng nhập tài khoản
• Gửi đánh giá sản phẩm

Đối với quản trị viên:
• Đăng nhập admin
• Thêm/Sửa/Xóa sản phẩm
• Quản lý khuyến mãi
• Quản lý đánh giá

3.1.2. Yêu cầu phi chức năng

• Giao diện thân thiện, dễ sử dụng
• Responsive trên desktop, tablet, mobile
• Tốc độ tải trang nhanh
• Dữ liệu được lưu trữ an toàn trong LocalStorage

3.2. Thiết kế giao diện

3.2.1. Trang chủ (Home)

Các thành phần:
• Header: Logo, menu điều hướng, thông tin đăng nhập
• Banner carousel: 3 banner quảng cáo tự động chuyển đổi
• Khuyến mãi học sinh: Hiển thị các chương trình ưu đãi
• Sản phẩm nổi bật: 3 sản phẩm bán chạy với giá khuyến mãi
• Đánh giá khách hàng: Form gửi đánh giá và danh sách đánh giá
• Footer: Thông tin liên hệ, mạng xã hội

3.2.2. Trang sản phẩm (Products)

Các thành phần:
• Thanh tìm kiếm: Ô nhập từ khóa, icon tìm kiếm
• Bộ lọc danh mục: 4 nút (Tất cả, Bút viết, Vở/Sổ, Dụng cụ học tập)
• Danh sách sản phẩm: Grid hiển thị 22 sản phẩm
• Modal chi tiết: Hiển thị khi click vào sản phẩm

3.2.3. Trang giỏ hàng (Cart)

Các thành phần:
• Danh sách sản phẩm trong giỏ với nút xóa
• Tổng tiền
• Form thanh toán: Họ tên, SĐT, địa chỉ, phương thức thanh toán

3.2.4. Trang quản trị (Admin Panel)

Các thành phần:
• Sidebar: Menu quản lý sản phẩm, khuyến mãi, đánh giá
• Bảng danh sách sản phẩm
• Form thêm/sửa sản phẩm
• Nút khóa phiên, đăng xuất

3.3. Thiết kế dữ liệu

3.3.1. Cấu trúc dữ liệu sản phẩm

```javascript
{
    id: 1,                              // ID sản phẩm
    name: "Bút Máy Cao Cấp",           // Tên sản phẩm
    price: 50000,                       // Giá (VNĐ)
    img: "./img/butmay.JPG",           // Đường dẫn hình ảnh
    category: "Bút viết",              // Danh mục
    description: "Mô tả chi tiết...",  // Mô tả
    stock: 50,                          // Số lượng tồn kho
    brand: "Thiên Long"                // Thương hiệu
}
```

3.3.2. Cấu trúc dữ liệu giỏ hàng

```javascript
cart = [
    { id: 1, name: "Bút Máy Cao Cấp", price: 50000, img: "..." },
    { id: 2, name: "Vở Học Sinh 96 Trang", price: 12000, img: "..." }
]
```

3.3.3. Cấu trúc dữ liệu đánh giá

```javascript
{
    id: 1,
    name: "Nguyễn Văn A",
    email: "email@example.com",
    rating: 5,
    message: "Sản phẩm rất tốt!",
    date: "2024-12-17",
    responded: false
}
```

---

CHƯƠNG 4: KẾT QUẢ THỰC HIỆN

4.1. Kết quả đạt được

4.1.1. Về chức năng

Website đã hoàn thành đầy đủ các chức năng đề ra:

a) Chức năng dành cho khách hàng:
• Xem danh sách 22 sản phẩm với đầy đủ thông tin (tên, giá, hình ảnh, mô tả, thương hiệu, tồn kho)
• Tìm kiếm sản phẩm real•time theo tên, danh mục, thương hiệu
• Lọc sản phẩm theo 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập
• Xem chi tiết sản phẩm trong modal
• Quản lý giỏ hàng: thêm, xóa, xem tổng tiền
• Thanh toán với 3 phương thức: COD, Chuyển khoản, MoMo
• Đăng ký/Đăng nhập tài khoản
• Gửi đánh giá với rating 1•5 sao

b) Chức năng dành cho admin:
• Đăng nhập admin (username: admin, password: 123)
• Quản lý sản phẩm: thêm, sửa, xóa
• Quản lý khuyến mãi học sinh
• Quản lý đánh giá: xem, phê duyệt, xóa
• Khóa/mở khóa phiên làm việc

4.1.2. Về giao diện

• Giao diện hiện đại với gradient tím cho header
• Banner carousel 3 slide tự động chuyển đổi
• Responsive trên Desktop (>768px), Tablet (481•768px), Mobile (<480px)
• Sử dụng Font Awesome 6.0.0 cho icon
• Hiệu ứng hover cho card sản phẩm
• Toast notifications cho thông báo

4.1.3. Về hiệu suất

• Tốc độ tải trang: < 1 giây (không cần kết nối server)
• Chuyển trang mượt mà với kiến trúc SPA
• Dữ liệu được lưu trữ persistent trong LocalStorage

4.2. Các hàm JavaScript chính trong website

4.2.1. Hàm hiển thị sản phẩm

```javascript
function renderProducts(productList) {
    const container = document.getElementById('product-list');
    container.innerHTML = productList.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="brand">${product.brand}</p>
            <p class="price">${formatPrice(product.price)}</p>
            <button onclick="event.stopPropagation(); addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Thêm vào giỏ
            </button>
        </div>
    `).join('');
}
```

4.2.2. Hàm tìm kiếm sản phẩm

```javascript
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
}
```

4.2.3. Hàm thêm vào giỏ hàng

```javascript
function addToCart(productId) {
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'warning');
        chuyenTrang('login');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCartToStorage();
        updateCartCount();
        showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
    }
}
```

4.2.4. Hàm xử lý thanh toán

```javascript
function processCheckout() {
    const formData = {
        fullName: document.getElementById('checkout-name').value,
        phone: document.getElementById('checkout-phone').value,
        address: document.getElementById('checkout-address').value,
        paymentMethod: document.getElementById('checkout-payment').value,
        items: cart,
        totalAmount: cart.reduce((sum, item) => sum + item.price, 0)
    };
    
    // Validate
    if (!formData.fullName || !formData.phone || !formData.address) {
        showToast('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }
    
    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartCount();
    
    showToast('Đặt hàng thành công!', 'success');
    chuyenTrang('home');
}
```

---

CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

5.1. Kết luận

5.1.1. Tổng kết đồ án

Sau thời gian nghiên cứu và thực hiện, đồ án "Website Bán Dụng Cụ Học Tập" đã hoàn thành với những kết quả đạt được:

a) Về mục tiêu:
• Đã xây dựng thành công một website thương mại điện tử hoàn chỉnh
• Áp dụng thành công các kiến thức HTML5, CSS3, JavaScript ES6+
• Thiết kế giao diện thân thiện, responsive tốt
• Tối ưu trải nghiệm người dùng với kiến trúc SPA

b) Về kỹ thuật:
• Sử dụng thành thạo HTML5 semantic tags
• Áp dụng CSS Grid và Flexbox cho layout responsive
• Lập trình JavaScript ES6+ với arrow functions, template literals, array methods
• Quản lý dữ liệu với LocalStorage API

c) Về sản phẩm:
• Website hoạt động ổn định với 22 sản phẩm thuộc 3 danh mục
• Đầy đủ chức năng: xem sản phẩm, tìm kiếm, lọc, giỏ hàng, thanh toán, đăng nhập, quản trị
• Giao diện đẹp, hiện đại, chuyên nghiệp
• Hiệu suất cao, tải trang nhanh

5.1.2. Ưu điểm

• Code sạch, dễ đọc, có cấu trúc rõ ràng
• Giao diện responsive trên nhiều thiết bị
• Tốc độ tải trang nhanh (không cần server)
• Dữ liệu được lưu trữ persistent trong LocalStorage

5.1.3. Nhược điểm

• Dữ liệu chỉ lưu trên trình duyệt, có thể bị mất khi xóa cache
• Không có backend server để đồng bộ dữ liệu
• Chưa tích hợp thanh toán thực tế
• Chưa có hệ thống gửi email xác nhận đơn hàng

5.2. Hướng phát triển

5.2.1. Ngắn hạn

• Thêm chức năng wishlist (danh sách yêu thích)
• Thêm chức năng so sánh sản phẩm
• Cải thiện UX cho mobile
• Thêm loading indicator

5.2.2. Trung hạn

• Phát triển Backend API với ASP.NET Core
• Sử dụng SQLite hoặc SQL Server cho database
• Tích hợp thanh toán VNPay, MoMo
• Gửi email xác nhận đơn hàng

5.2.3. Dài hạn

• Phát triển ứng dụng mobile
• Tích hợp chatbot hỗ trợ khách hàng
• Hệ thống điểm thưởng khách hàng thân thiết
• Phân tích dữ liệu bán hàng

---

TÀI LIỆU THAM KHẢO

[1] Mozilla Developer Network. (2024). HTML: HyperText Markup Language. https://developer.mozilla.org/en-US/docs/Web/HTML

[2] Mozilla Developer Network. (2024). CSS: Cascading Style Sheets. https://developer.mozilla.org/en-US/docs/Web/CSS

[3] Mozilla Developer Network. (2024). JavaScript. https://developer.mozilla.org/en-US/docs/Web/JavaScript

[4] W3Schools. (2024). HTML Tutorial. https://www.w3schools.com/html/

[5] W3Schools. (2024). CSS Tutorial. https://www.w3schools.com/css/

[6] W3Schools. (2024). JavaScript Tutorial. https://www.w3schools.com/js/

[7] CSS•Tricks. (2024). A Complete Guide to Flexbox. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

[8] CSS•Tricks. (2024). A Complete Guide to Grid. https://css-tricks.com/snippets/css/complete-guide-grid/

[9] Font Awesome. (2024). Font Awesome Documentation. https://fontawesome.com/docs

---

PHỤ LỤC

Phụ lục A: Hướng dẫn sử dụng website

A.1. Yêu cầu hệ thống
• Trình duyệt web: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
• Kết nối Internet (để tải Font Awesome từ CDN)

A.2. Cách chạy website
• Mở file index.html trực tiếp trong trình duyệt
• Hoặc sử dụng Live Server extension trong VS Code

A.3. Tài khoản admin mặc định
• Username: admin
• Password: 123

Phụ lục B: Thông tin liên hệ

Sinh viên: Phan Huỳnh Phúc
Địa chỉ: ĐƯỜNG D5, CHÂU THÀNH, VĨNH LONG
Số điện thoại: 0977670459
Email: phanhuynhphuc@gmail.com

---

KẾT THÚC BÁO CÁO
