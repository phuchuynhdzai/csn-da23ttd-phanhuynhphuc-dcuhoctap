using Microsoft.AspNetCore.Mvc;
using SchoolSuppliesAPI.Data;
using SchoolSuppliesAPI.Models;

namespace SchoolSuppliesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SeedController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SeedController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SeedData()
        {
            // Kiểm tra đã có dữ liệu chưa
            if (_context.Products.Any())
            {
                return Ok(new { message = "Dữ liệu đã tồn tại!" });
            }

            // Thêm sản phẩm mẫu
            var products = new List<Product>
            {
                new Product { Name = "Bút Máy Cao Cấp", Price = 50000, ImageUrl = "./img/butmay.JPG", Category = "Bút viết", Description = "Bút máy cao cấp với ngòi bằng thép không gỉ, viết êm mượt. Thiết kế sang trọng, phù hợp cho học sinh, sinh viên và dân văn phòng.", Stock = 50, Brand = "Thiên Long" },
                new Product { Name = "Vở Học Sinh 96 Trang", Price = 12000, ImageUrl = "./img/vohocsinh.JPG", Category = "Vở/Sổ", Description = "Vở học sinh 96 trang, giấy trắng mịn, không lem mực. Đường kẻ chuẩn, bìa cứng bền đẹp.", Stock = 200, Brand = "Hồng Hà" },
                new Product { Name = "Bộ Thước Kẻ Đa Năng", Price = 25000, ImageUrl = "./img/bothuocke.JPG", Category = "Dụng cụ học tập", Description = "Bộ thước kẻ 4 món gồm: thước thẳng 30cm, thước góc, eke 45° và eke 60°. Chất liệu nhựa trong suốt.", Stock = 80, Brand = "Thiên Long" },
                new Product { Name = "Máy Tính Casio FX-580VN X", Price = 850000, ImageUrl = "./img/maytinhcasio.JPG", Category = "Dụng cụ học tập", Description = "Máy tính khoa học Casio FX-580VN X, 552 chức năng. Được phép sử dụng trong các kỳ thi quốc gia.", Stock = 30, Brand = "Casio" },
                new Product { Name = "Balo Chống Gù Lưng", Price = 450000, ImageUrl = "./img/balo.JPG", Category = "Dụng cụ học tập", Description = "Balo học sinh thiết kế chống gù lưng, có đệm lưng thoáng khí. Nhiều ngăn tiện dụng, chất liệu chống nước.", Stock = 45, Brand = "Mikkor" },
                new Product { Name = "Bộ Màu Vẽ Colormate 120 Món", Price = 250000, ImageUrl = "./img/bomauve.JPG", Category = "Dụng cụ học tập", Description = "Bộ màu vẽ đa năng 120 món gồm bút chì màu, sáp màu, bút lông, bút dạ. Màu sắc tươi sáng, không độc hại.", Stock = 25, Brand = "Colormate" },
                new Product { Name = "Đèn Bàn Học Chống Cận", Price = 180000, ImageUrl = "./img/denhoc.JPG", Category = "Dụng cụ học tập", Description = "Đèn LED bàn học bảo vệ mắt, ánh sáng không chói, không nhấp nháy. 3 chế độ sáng, cần đèn uốn dẻo 360°.", Stock = 60, Brand = "Điện Quang" },
                new Product { Name = "Vở Campus 200 Trang", Price = 65000, ImageUrl = "./img/voCamPus.JPG", Category = "Vở/Sổ", Description = "Vở Campus 200 trang, giấy trắng cao cấp, mịn màng. Đường kẻ chuẩn, bìa cứng bền đẹp. Lò xo chắc chắn.", Stock = 100, Brand = "Campus" },
                new Product { Name = "Bút Thiên Long Hộp 20 Cây", Price = 80000, ImageUrl = "./img/butThienLong.JPG", Category = "Bút viết", Description = "Hộp 20 cây bút bi Thiên Long TL-027, mực xanh. Viết trơn, mực đều, không lem. Giá trị tiết kiệm cho học sinh.", Stock = 150, Brand = "Thiên Long" }
            };

            _context.Products.AddRange(products);
            await _context.SaveChangesAsync();

            // Thêm users mẫu
            var users = new List<User>
            {
                new User { FullName = "Admin", Email = "admin@school.com", Password = "123", Phone = "0901234567", Address = "123 Nguyễn Văn Linh, Q7, HCM", Role = "Admin" },
                new User { FullName = "Nguyễn Văn An", Email = "an@gmail.com", Password = "123", Phone = "0912345678", Address = "456 Lê Văn Việt, Q9, HCM", Role = "Customer" },
                new User { FullName = "Trần Thị Bình", Email = "binh@gmail.com", Password = "123", Phone = "0923456789", Address = "789 Võ Văn Ngân, Thủ Đức, HCM", Role = "Customer" },
                new User { FullName = "Lê Minh Châu", Email = "chau@gmail.com", Password = "123", Phone = "0934567890", Address = "321 Phan Văn Trị, Gò Vấp, HCM", Role = "Customer" },
                new User { FullName = "Phạm Đức Dũng", Email = "dung@gmail.com", Password = "123", Phone = "0945678901", Address = "654 Nguyễn Thị Minh Khai, Q3, HCM", Role = "Customer" }
            };
            _context.Users.AddRange(users);
            await _context.SaveChangesAsync();

            // Thêm đơn hàng mẫu
            var orders = new List<Order>
            {
                new Order { UserId = 2, CustomerName = "Nguyễn Văn An", Phone = "0912345678", Address = "456 Lê Văn Việt, Q9, HCM", PaymentMethod = "COD", TotalAmount = 162000, Status = "Completed", OrderDate = DateTime.Now.AddDays(-15) },
                new Order { UserId = 3, CustomerName = "Trần Thị Bình", Phone = "0923456789", Address = "789 Võ Văn Ngân, Thủ Đức, HCM", PaymentMethod = "Banking", TotalAmount = 930000, Status = "Completed", OrderDate = DateTime.Now.AddDays(-12) },
                new Order { UserId = 4, CustomerName = "Lê Minh Châu", Phone = "0934567890", Address = "321 Phan Văn Trị, Gò Vấp, HCM", PaymentMethod = "COD", TotalAmount = 275000, Status = "Completed", OrderDate = DateTime.Now.AddDays(-10) },
                new Order { UserId = 5, CustomerName = "Phạm Đức Dũng", Phone = "0945678901", Address = "654 Nguyễn Thị Minh Khai, Q3, HCM", PaymentMethod = "Banking", TotalAmount = 450000, Status = "Completed", OrderDate = DateTime.Now.AddDays(-8) },
                new Order { UserId = 2, CustomerName = "Nguyễn Văn An", Phone = "0912345678", Address = "456 Lê Văn Việt, Q9, HCM", PaymentMethod = "COD", TotalAmount = 850000, Status = "Completed", OrderDate = DateTime.Now.AddDays(-5) },
                new Order { UserId = 3, CustomerName = "Trần Thị Bình", Phone = "0923456789", Address = "789 Võ Văn Ngân, Thủ Đức, HCM", PaymentMethod = "Banking", TotalAmount = 180000, Status = "Completed", OrderDate = DateTime.Now.AddDays(-3) },
                new Order { UserId = 4, CustomerName = "Lê Minh Châu", Phone = "0934567890", Address = "321 Phan Văn Trị, Gò Vấp, HCM", PaymentMethod = "COD", TotalAmount = 315000, Status = "Processing", OrderDate = DateTime.Now.AddDays(-2) },
                new Order { UserId = 5, CustomerName = "Phạm Đức Dũng", Phone = "0945678901", Address = "654 Nguyễn Thị Minh Khai, Q3, HCM", PaymentMethod = "Banking", TotalAmount = 520000, Status = "Processing", OrderDate = DateTime.Now.AddDays(-1) },
                new Order { UserId = 2, CustomerName = "Nguyễn Văn An", Phone = "0912345678", Address = "456 Lê Văn Việt, Q9, HCM", PaymentMethod = "COD", TotalAmount = 145000, Status = "Pending", OrderDate = DateTime.Now },
                new Order { UserId = 3, CustomerName = "Trần Thị Bình", Phone = "0923456789", Address = "789 Võ Văn Ngân, Thủ Đức, HCM", PaymentMethod = "Banking", TotalAmount = 680000, Status = "Cancelled", OrderDate = DateTime.Now.AddDays(-7) }
            };
            _context.Orders.AddRange(orders);
            await _context.SaveChangesAsync();

            // Thêm order items mẫu
            var orderItems = new List<OrderItem>
            {
                // Order 1: Bút máy + Vở học sinh
                new OrderItem { OrderId = 1, ProductId = 1, Quantity = 2, Price = 50000 },
                new OrderItem { OrderId = 1, ProductId = 2, Quantity = 5, Price = 12000 },
                // Order 2: Máy tính Casio + Bút Thiên Long
                new OrderItem { OrderId = 2, ProductId = 4, Quantity = 1, Price = 850000 },
                new OrderItem { OrderId = 2, ProductId = 9, Quantity = 1, Price = 80000 },
                // Order 3: Bộ màu vẽ + Bộ thước kẻ
                new OrderItem { OrderId = 3, ProductId = 6, Quantity = 1, Price = 250000 },
                new OrderItem { OrderId = 3, ProductId = 3, Quantity = 1, Price = 25000 },
                // Order 4: Balo
                new OrderItem { OrderId = 4, ProductId = 5, Quantity = 1, Price = 450000 },
                // Order 5: Máy tính Casio
                new OrderItem { OrderId = 5, ProductId = 4, Quantity = 1, Price = 850000 },
                // Order 6: Đèn học
                new OrderItem { OrderId = 6, ProductId = 7, Quantity = 1, Price = 180000 },
                // Order 7: Bộ màu vẽ + Vở Campus
                new OrderItem { OrderId = 7, ProductId = 6, Quantity = 1, Price = 250000 },
                new OrderItem { OrderId = 7, ProductId = 8, Quantity = 1, Price = 65000 },
                // Order 8: Balo + Vở Campus
                new OrderItem { OrderId = 8, ProductId = 5, Quantity = 1, Price = 450000 },
                new OrderItem { OrderId = 8, ProductId = 8, Quantity = 1, Price = 65000 },
                // Order 9: Vở học sinh + Bút Thiên Long
                new OrderItem { OrderId = 9, ProductId = 2, Quantity = 5, Price = 12000 },
                new OrderItem { OrderId = 9, ProductId = 9, Quantity = 1, Price = 80000 },
                // Order 10: Máy tính Casio (cancelled)
                new OrderItem { OrderId = 10, ProductId = 4, Quantity = 1, Price = 850000 }
            };
            _context.OrderItems.AddRange(orderItems);
            await _context.SaveChangesAsync();

            // Thêm reviews mẫu
            var reviews = new List<ProductReview>
            {
                new ProductReview { ProductId = 1, UserId = 2, Rating = 5, ReviewText = "Bút viết rất êm, mực đều. Rất hài lòng!", CreatedAt = DateTime.Now.AddDays(-10) },
                new ProductReview { ProductId = 4, UserId = 3, Rating = 5, ReviewText = "Máy tính chính hãng, tính năng đầy đủ. Giao hàng nhanh!", CreatedAt = DateTime.Now.AddDays(-8) },
                new ProductReview { ProductId = 5, UserId = 4, Rating = 4, ReviewText = "Balo đẹp, chất lượng tốt. Đệm lưng êm.", CreatedAt = DateTime.Now.AddDays(-6) },
                new ProductReview { ProductId = 6, UserId = 5, Rating = 5, ReviewText = "Bộ màu vẽ đa dạng, màu sắc tươi sáng. Con rất thích!", CreatedAt = DateTime.Now.AddDays(-5) },
                new ProductReview { ProductId = 2, UserId = 2, Rating = 4, ReviewText = "Vở giấy trắng, đường kẻ chuẩn. Giá hợp lý.", CreatedAt = DateTime.Now.AddDays(-4) },
                new ProductReview { ProductId = 7, UserId = 3, Rating = 5, ReviewText = "Đèn sáng đều, không chói mắt. Rất tốt cho việc học.", CreatedAt = DateTime.Now.AddDays(-3) },
                new ProductReview { ProductId = 9, UserId = 4, Rating = 4, ReviewText = "Bút viết trơn, mực không lem. Mua số lượng lớn rất tiết kiệm.", CreatedAt = DateTime.Now.AddDays(-2) },
                new ProductReview { ProductId = 8, UserId = 5, Rating = 5, ReviewText = "Vở Campus giấy đẹp, lò xo chắc chắn. Sẽ mua thêm!", CreatedAt = DateTime.Now.AddDays(-1) }
            };
            _context.ProductReviews.AddRange(reviews);
            await _context.SaveChangesAsync();

            return Ok(new { 
                message = "Đã thêm dữ liệu mẫu thành công!", 
                productsCount = products.Count,
                usersCount = users.Count,
                ordersCount = orders.Count,
                orderItemsCount = orderItems.Count,
                reviewsCount = reviews.Count
            });
        }
    }
}
