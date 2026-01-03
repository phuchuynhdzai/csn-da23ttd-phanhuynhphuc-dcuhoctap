namespace SchoolSuppliesAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string CustomerName { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = string.Empty;
        public string? Note { get; set; }
        public decimal TotalAmount { get; set; }
        public string Status { get; set; } = "Pending"; // Pending, Processing, Completed, Cancelled
        public DateTime OrderDate { get; set; } = DateTime.Now;
        
        // Navigation properties
        public User? User { get; set; }
        public ICollection<OrderItem>? OrderItems { get; set; }
    }
    
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        
        // Navigation properties
        public Order? Order { get; set; }
        public Product? Product { get; set; }
    }
}
