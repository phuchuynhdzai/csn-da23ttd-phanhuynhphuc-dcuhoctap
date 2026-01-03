namespace SchoolSuppliesAPI.Models
{
    public class ProductReview
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public int Rating { get; set; } // 1-5
        public string ReviewText { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        
        // Navigation properties
        public Product? Product { get; set; }
        public User? User { get; set; }
    }
}
