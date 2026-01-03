namespace SchoolSuppliesAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Role { get; set; } = "Customer"; // Customer, Admin
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        
        // Navigation properties
        public ICollection<Order>? Orders { get; set; }
        public ICollection<ProductReview>? Reviews { get; set; }
    }
}
