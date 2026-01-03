---
inclusion: always
---

# Project Structure & Conventions

## File Organization

### Frontend Files (Root)
- `index.html` - Single HTML file containing all page sections
- `script.js` - All JavaScript logic (no modules)
- `style.css` - All CSS styles (no preprocessor)
- `img/` - Product images, banners, and assets

### Backend Files (c#/)
- `Program.cs` - API startup and configuration
- `Controllers/` - API endpoints (ProductsController, SeedController)
- `Models/` - Entity classes (Product, User, Order, ProductReview)
- `Data/` - DbContext classes
- `Migrations/` - EF Core migrations
- `Properties/` - Launch settings

## Code Architecture

### Frontend (SPA Pattern)
All pages exist as hidden `<section>` elements in index.html:
- `#home` - Homepage with banner carousel
- `#products` - Product listing with search/filter
- `#cart` - Shopping cart and checkout
- `#login` / `#register` - Authentication
- `#admin-panel` - Admin dashboard
- `#admin-login` - Admin authentication

Navigation is handled by JavaScript showing/hiding sections, not URL routing.

### Backend (REST API)
- Controllers use `[ApiController]` and `[Route("api/[controller]")]`
- Async/await pattern for all database operations
- Entity Framework Core for data access
- JWT authentication for protected endpoints

## Naming Conventions

### JavaScript
- **Variables**: camelCase (`currentUser`, `productList`)
- **Functions**: camelCase with Vietnamese names (`chuyenTrang`, `xuLyDangNhap`)
- **Global arrays**: lowercase (`products`, `cart`, `reviews`)

### C#
- **Classes**: PascalCase (`Product`, `AppDbContext`)
- **Properties**: PascalCase (`Name`, `Price`, `ImageUrl`)
- **Methods**: PascalCase (`GetProducts`, `CreateProduct`)
- **Private fields**: _camelCase (`_context`)

### CSS
- **Classes**: kebab-case (`.product-grid`, `.btn-checkout`)
- **IDs**: kebab-case (`#product-list`, `#cart-items`)

## Data Models

### Product Entity
```csharp
{
  Id: int
  Name: string
  Price: decimal
  ImageUrl: string
  Category: string
  Description: string
  Stock: int
  Brand: string
  CreatedAt: DateTime
}
```

### Key Relationships
- Product → OrderItems (one-to-many)
- Product → ProductReviews (one-to-many)
- User → Orders (one-to-many)
- Order → OrderItems (one-to-many)

## Styling Patterns

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

### Color Scheme
- Primary: #16a085 (teal green)
- Secondary: #2ecc71 (bright green)
- Danger: #e74c3c (red)
- Dark: #2c3e50 (navy)

### Layout
- Flexbox for navigation and cards
- CSS Grid for product listings
- Mobile-first approach

## Common Patterns

### Page Navigation
```javascript
function chuyenTrang(page) {
  // Hide all sections
  // Show target section
  // Update active menu item
}
```

### Data Persistence
```javascript
// Save to LocalStorage
localStorage.setItem('key', JSON.stringify(data));

// Load from LocalStorage
const data = JSON.parse(localStorage.getItem('key')) || defaultValue;
```

### API Calls (Backend)
```csharp
[HttpGet]
public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
{
    return await _context.Products.ToListAsync();
}
```

## Important Notes

- Frontend is fully functional without backend (uses LocalStorage)
- Backend API is separate and optional
- No build tools or bundlers - vanilla HTML/CSS/JS
- All Vietnamese text should remain in Vietnamese
- Images use relative paths (`./img/filename.jpg`)
- Admin default credentials stored in LocalStorage
