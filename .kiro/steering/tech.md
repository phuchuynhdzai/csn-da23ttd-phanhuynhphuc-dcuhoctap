---
inclusion: always
---

# Technology Stack

## Frontend Architecture
- **Type**: Single Page Application (SPA)
- **HTML**: HTML5 with semantic tags
- **CSS**: CSS3 with Flexbox and Grid
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Icons**: Font Awesome 6.0.0

## Backend
- **C# API**: ASP.NET Core Web API (.NET 10.0)
- **Database**: SQLite with Entity Framework Core
- **Authentication**: JWT Bearer tokens
- **ORM**: Entity Framework Core 10.0

## Data Storage
- **Client-side**: LocalStorage API for temporary data
- **Server-side**: SQLite database (SchoolSupplies.db)

## Key Libraries & Packages
- Microsoft.EntityFrameworkCore.Sqlite (10.0.0)
- Microsoft.AspNetCore.Authentication.JwtBearer (10.0.0)
- BCrypt.Net-Next (4.0.3)
- Swashbuckle.AspNetCore (10.0.1)

## Project Structure
```
/
├── index.html          # Main SPA entry point
├── script.js           # All JavaScript logic
├── style.css           # Global styles
├── img/                # Product images and banners
└── c#/                 # C# API backend
    ├── Controllers/    # API controllers
    ├── Models/         # Entity models
    ├── Data/           # DbContext
    ├── Migrations/     # EF migrations
    └── Program.cs      # API startup
```

## Common Commands

### Frontend
No build process required - open `index.html` directly in browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

### Backend (C# API)
```bash
# Navigate to C# directory
cd c#

# Restore packages
dotnet restore

# Run migrations
dotnet ef database update

# Run the API
dotnet run

# Build for production
dotnet build --configuration Release
```

## API Configuration
- **Default Port**: 5000 (HTTP), 5001 (HTTPS)
- **CORS**: Configured for localhost:8000, 127.0.0.1:8000, localhost:5500
- **Swagger**: Available at /swagger in development mode

## LocalStorage Keys
- `app_products_v1`: Product catalog
- `app_cart_v1`: Shopping cart items
- `app_reviews_v1`: Customer reviews
- `app_admin_accounts_v1`: Admin credentials
- `app_admin_session_v1`: Admin session
- `app_promos_v1`: Student promotions
- `user_data`: Current user info
