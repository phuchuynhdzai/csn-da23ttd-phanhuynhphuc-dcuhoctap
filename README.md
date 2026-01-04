# CSN - Website Bán Dụng Cụ Học Tập

## Thông tin đồ án
- **Sinh viên thực hiện:** Phan Huỳnh Phúc
- **Mã số sinh viên:** DA23TTD
- **Môn học:** Công nghệ phần mềm

## Cấu trúc thư mục

```
/
├── src/                    # Source code
│   ├── c#/                 # Backend API (ASP.NET Core)
│   ├── img/                # Hình ảnh sản phẩm
│   ├── index.html          # Trang chính
│   ├── script.js           # JavaScript
│   └── style.css           # CSS
├── thesis/                 # Tài liệu đồ án
│   ├── abs/                # Slide, Poster
│   ├── doc/                # File .DOC
│   └── pdf/                # File .PDF
├── progress-report/        # Báo cáo tiến độ
└── README.md
```

## Công nghệ sử dụng
- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Backend:** ASP.NET Core Web API (.NET 10.0)
- **Database:** SQLite với Entity Framework Core
- **Authentication:** JWT Bearer tokens

## Hướng dẫn chạy

### Frontend
Mở file `src/index.html` trực tiếp trong trình duyệt.

### Backend
```bash
cd src/c#
dotnet restore
dotnet run
```
API sẽ chạy tại: http://localhost:5000
