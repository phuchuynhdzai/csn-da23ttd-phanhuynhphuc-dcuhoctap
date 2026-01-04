using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolSuppliesAPI.Data;
using SchoolSuppliesAPI.Models;

namespace SchoolSuppliesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Orders - Lấy tất cả đơn hàng
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders
                .Include(o => o.OrderItems!)
                .ThenInclude(oi => oi.Product)
                .OrderByDescending(o => o.OrderDate)
                .ToListAsync();
        }

        // GET: api/Orders/5 - Lấy đơn hàng theo ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders
                .Include(o => o.OrderItems!)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
            {
                return NotFound(new { message = "Không tìm thấy đơn hàng" });
            }

            return order;
        }

        // GET: api/Orders/status/{status} - Lấy đơn hàng theo trạng thái
        [HttpGet("status/{status}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrdersByStatus(string status)
        {
            return await _context.Orders
                .Include(o => o.OrderItems!)
                .ThenInclude(oi => oi.Product)
                .Where(o => o.Status == status)
                .OrderByDescending(o => o.OrderDate)
                .ToListAsync();
        }


        // GET: api/Orders/revenue - Thống kê doanh thu
        [HttpGet("revenue")]
        public async Task<ActionResult<object>> GetRevenue([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
        {
            var query = _context.Orders.Where(o => o.Status == "Completed");

            if (startDate.HasValue)
                query = query.Where(o => o.OrderDate >= startDate.Value);
            if (endDate.HasValue)
                query = query.Where(o => o.OrderDate <= endDate.Value.AddDays(1));

            var orders = await query.ToListAsync();
            var totalRevenue = orders.Sum(o => o.TotalAmount);
            var totalOrders = orders.Count;

            // Doanh thu theo ngày
            var revenueByDay = orders
                .GroupBy(o => o.OrderDate.Date)
                .Select(g => new { Date = g.Key.ToString("dd/MM/yyyy"), Revenue = g.Sum(o => o.TotalAmount), Orders = g.Count() })
                .OrderByDescending(x => x.Date)
                .ToList();

            // Doanh thu theo tháng
            var revenueByMonth = orders
                .GroupBy(o => new { o.OrderDate.Year, o.OrderDate.Month })
                .Select(g => new { Month = $"{g.Key.Month:D2}/{g.Key.Year}", Revenue = g.Sum(o => o.TotalAmount), Orders = g.Count() })
                .OrderByDescending(x => x.Month)
                .ToList();

            return Ok(new
            {
                totalRevenue,
                totalOrders,
                averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0,
                revenueByDay,
                revenueByMonth
            });
        }

        // GET: api/Orders/statistics - Thống kê tổng quan
        [HttpGet("statistics")]
        public async Task<ActionResult<object>> GetStatistics()
        {
            var allOrders = await _context.Orders.ToListAsync();
            
            var pending = allOrders.Count(o => o.Status == "Pending");
            var processing = allOrders.Count(o => o.Status == "Processing");
            var completed = allOrders.Count(o => o.Status == "Completed");
            var cancelled = allOrders.Count(o => o.Status == "Cancelled");
            
            var totalRevenue = allOrders.Where(o => o.Status == "Completed").Sum(o => o.TotalAmount);
            
            // Doanh thu hôm nay
            var today = DateTime.Today;
            var todayRevenue = allOrders
                .Where(o => o.Status == "Completed" && o.OrderDate.Date == today)
                .Sum(o => o.TotalAmount);
            
            // Doanh thu tháng này
            var monthRevenue = allOrders
                .Where(o => o.Status == "Completed" && o.OrderDate.Month == today.Month && o.OrderDate.Year == today.Year)
                .Sum(o => o.TotalAmount);

            return Ok(new
            {
                totalOrders = allOrders.Count,
                pending,
                processing,
                completed,
                cancelled,
                totalRevenue,
                todayRevenue,
                monthRevenue
            });
        }


        // POST: api/Orders - Tạo đơn hàng mới
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            order.OrderDate = DateTime.Now;
            order.Status = "Pending";
            
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }

        // PUT: api/Orders/5/status - Cập nhật trạng thái đơn hàng
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] string status)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound(new { message = "Không tìm thấy đơn hàng" });
            }

            var validStatuses = new[] { "Pending", "Processing", "Completed", "Cancelled" };
            if (!validStatuses.Contains(status))
            {
                return BadRequest(new { message = "Trạng thái không hợp lệ" });
            }

            order.Status = status;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Cập nhật trạng thái thành công", order });
        }

        // DELETE: api/Orders/5 - Xóa đơn hàng
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .FirstOrDefaultAsync(o => o.Id == id);
                
            if (order == null)
            {
                return NotFound(new { message = "Không tìm thấy đơn hàng" });
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Đã xóa đơn hàng thành công" });
        }
    }
}
