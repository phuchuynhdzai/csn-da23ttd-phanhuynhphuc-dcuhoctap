# CSN - Website Bán Dụng Cụ Học Tập

## 📋 Thông tin đồ án

| Thông tin | Chi tiết |
|-----------|----------|
| **Môn học** | Đồ án Cơ sở Ngành |
| **Sinh viên** | Phan Huỳnh Phúc |
| **MSSV** | 110123159 |
| **Lớp** | DA23TTD |
| **GVHD** | Nguyễn Khắc Quốc |
| **Năm học** |2025-2026 |

## 📝 Mô tả đồ án

Website thương mại điện tử bán dụng cụ học tập và văn phòng phẩm, được xây dựng theo mô hình Single Page Application (SPA) sử dụng HTML5, CSS3 và JavaScript ES6+.

### 🎯 Mục tiêu

- Xây dựng website bán hàng trực tuyến chuyên về dụng cụ học tập
- Áp dụng kiến thức HTML5, CSS3, JavaScript vào thực tế
- Thiết kế giao diện responsive, thân thiện người dùng
- Quản lý dữ liệu với LocalStorage API

## ✨ Tính năng

### Khách hàng
- ✅ Xem danh sách 22 sản phẩm với hình ảnh, giá, mô tả
- ✅ Tìm kiếm sản phẩm real-time theo tên, danh mục, thương hiệu
- ✅ Lọc sản phẩm theo 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập
- ✅ Xem chi tiết sản phẩm trong modal
- ✅ Quản lý giỏ hàng (thêm, xóa, tính tổng tiền)
- ✅ Đặt hàng với form thông tin giao hàng
- ✅ Chọn phương thức thanh toán (COD, Chuyển khoản, MoMo)
- ✅ Đăng ký/Đăng nhập tài khoản
- ✅ Gửi đánh giá với rating 1-5 sao

### Quản trị viên
- ✅ Đăng nhập admin
- ✅ Quản lý sản phẩm (CRUD)
- ✅ Quản lý khuyến mãi học sinh
- ✅ Quản lý đánh giá khách hàng
- ✅ Khóa/mở khóa phiên làm việc

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mô tả |
|-----------|-------|
| HTML5 | Cấu trúc trang web với semantic tags |
| CSS3 | Thiết kế giao diện với Flexbox, Grid, Media Queries |
| JavaScript ES6+ | Xử lý logic với arrow functions, template literals |
| LocalStorage | Lưu trữ dữ liệu sản phẩm, giỏ hàng, tài khoản |
| Font Awesome 6.0 | Thư viện icon |

## 📁 Cấu trúc thư mục

```
websitebandungcuhoctap/
├── index.html          # File HTML chính (SPA)
├── script.js           # File JavaScript xử lý logic
├── style.css           # File CSS định dạng giao diện
├── README.md           # File hướng dẫn
├── BAO_CAO_DO_AN.md    # Báo cáo đồ án
├── progress-report/    # Thư mục báo cáo tiến độ
│   └── tuan-xx.md
└── img/                # Thư mục hình ảnh
    ├── banner1.svg
    ├── banner2.svg
    ├── banner3.svg
    └── [22 hình sản phẩm]
```


## 🚀 Hướng dẫn cài đặt và chạy

### Yêu cầu
- Trình duyệt web: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
- Kết nối Internet (để tải Font Awesome từ CDN)

### Cách chạy

**Cách 1: Mở trực tiếp**
```
Double click vào file index.html
```

**Cách 2: Sử dụng Live Server (VS Code)**
1. Cài extension "Live Server" trong VS Code
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"

**Cách 3: Sử dụng Python**
```bash
python -m http.server 8000
```
Truy cập: http://localhost:8000

### Tài khoản Admin mặc định
- **Username:** admin
- **Password:** 123

## 📸 Demo giao diện

### Trang chủ
- Banner carousel 3 slide
- Khuyến mãi học sinh
- Sản phẩm nổi bật
- Đánh giá khách hàng

### Trang sản phẩm
- Thanh tìm kiếm real-time
- Bộ lọc 3 danh mục
- Grid hiển thị 22 sản phẩm
- Modal chi tiết sản phẩm

### Trang giỏ hàng
- Danh sách sản phẩm đã chọn
- Tổng tiền tự động tính
- Form thanh toán

### Trang quản trị
- Quản lý sản phẩm (CRUD)
- Quản lý khuyến mãi
- Quản lý đánh giá

## 📊 Danh sách sản phẩm

| STT | Tên sản phẩm | Danh mục | Thương hiệu | Giá |
|-----|--------------|----------|-------------|-----|
| 1 | Bút Máy Cao Cấp | Bút viết | Thiên Long | 50.000đ |
| 2 | Vở Học Sinh 96 Trang | Vở/Sổ | Hồng Hà | 12.000đ |
| 3 | Bộ Thước Kẻ Đa Năng | Dụng cụ học tập | Thiên Long | 25.000đ |
| 4 | Máy Tính Casio FX-580VN X | Dụng cụ học tập | Casio | 850.000đ |
| 5 | Balo Chống Gù Lưng | Dụng cụ học tập | Mikkor | 450.000đ |
| ... | ... | ... | ... | ... |

*Xem đầy đủ 22 sản phẩm trong website*

## 📅 Tiến độ thực hiện

| Tuần | Nội dung | Trạng thái |
|------|----------|------------|
| 1-2 | Phân tích yêu cầu, thiết kế giao diện | ✅ Hoàn thành |
| 3-4 | Xây dựng HTML, CSS cơ bản | ✅ Hoàn thành |
| 5-6 | Lập trình JavaScript, LocalStorage | ✅ Hoàn thành |
| 7-8 | Hoàn thiện chức năng, responsive | ✅ Hoàn thành |
| 9-10 | Test, sửa lỗi, viết báo cáo | ✅ Hoàn thành |

## 📞 Liên hệ

- **Sinh viên:** Phan Huỳnh Phúc
- **Email:** phanhuynhphuc@gmail.com
- **SĐT:** 0977670459
- **Địa chỉ:** Đường D5, Châu Thành, Vĩnh Long

## 📄 License

Đồ án này được thực hiện cho mục đích học tập tại Khoa Công Nghệ Thông Tin.

---

⭐ **Nếu thấy hữu ích, hãy cho repo một star!**
