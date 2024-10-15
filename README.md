# Coffee Operation

**Coffee Operation** is a dynamic portfolio and e-commerce website designed for coffee enthusiasts. This project allows users to explore various coffee products, place orders, and deeply understand coffee culture. All content and products are managed through a user-friendly admin panel.

## Features

- **Dynamic Content Management**: All content, including products, blog posts, and references, is managed through an admin panel.
- **Coffee Products**: Detailed information and ordering options for different coffee varieties, equipment, and accessories.
- **User-Friendly Interface**: Provides a modern and intuitive user experience.
- **Blog and References**: Offers informative articles about coffee culture and user experiences.
- **Mobile Responsive Design**: Ensures perfect display on all devices.

## Technologies

The **Coffee Operation** project is developed using the following technologies and libraries:

- **Next.js**: A React-based framework that provides server-side rendering (SSR) and static site generation (SSG) features.
- **Firebase**: Used for Realtime Database and Authentication services for user data and content management.
- **React**: Utilized for building user interface components.
- **CSS and SCSS**: Used for styling and customizing the design.
- **Local Font**: For using custom fonts.
- **Google Analytics**: To track and analyze user interactions.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone the Project**: 
   ```bash
   git clone https://github.com/Bugrahancobain/CoffeeOperation.git
   cd CoffeeOperation
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Update the `firebase.js` file with your Firebase project credentials.

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   - Go to `http://localhost:3000` in your browser.

## Page Structure and Descriptions

The main page structure of the project is as follows:

```
CoffeeOperation/
├── pages/              # Pages
│   ├── index.js        # Home page
│   ├── about.js        # About page
│   ├── products.js     # Products page
│   ├── product/[id].js # Specific product detail page
│   ├── blog.js         # Blog page
│   ├── blog/[id].js    # Specific blog post detail page
│   ├── admin/          # Admin panel pages
│   │   ├── index.js    # Admin panel home page
│   │   ├── add-product.js # Product adding page
│   │   └── manage-products.js # Product management page
└── ...
```

### `index.js` - Home Page

- **Purpose**: The first page shown to users upon entering the site. Showcases coffee varieties and popular products.
- **Components Used**:
  - `Navbar`: Provides the navigation menu.
  - `Hero`: An attention-grabbing section related to coffee products.
  - `Featured Products`: Displays featured products.

### `about.js` - About Page

- **Purpose**: Provides information about Coffee Operation. Includes details about the company's mission, vision, and values.
- **Components Used**:
  - `AboutContent`: A special component containing information about the company.

### `products.js` - Products Page

- **Purpose**: Lists all coffee products for users.
- **Components Used**:
  - `ProductList`: A component that lists products.
  - `Filter`: Allows users to filter products by category or price range.

### `product/[id].js` - Product Detail Page

- **Purpose**: Provides detailed information about a specific product. Contains the product image, description, and ordering option.
- **Components Used**:
  - `ProductDetail`: A component that shows the details of the selected product.

### `blog.js` - Blog Page

- **Purpose**: Offers informative articles about coffee culture to users.
- **Components Used**:
  - `BlogList`: A component that lists blog posts.
  - `SearchBar`: Allows users to search among blog posts.

### `blog/[id].js` - Blog Detail Page

- **Purpose**: Presents the detailed content of a specific blog post.
- **Components Used**:
  - `BlogPost`: A component that displays the content of the selected blog post.

### `admin/index.js` - Admin Panel Home Page

- **Purpose**: A control panel for administrators. Redirects to pages for adding or editing products.
- **Components Used**:
  - `AdminDashboard`: Displays the general overview and statistics of the admin panel.

### `admin/add-product.js` - Product Adding Page

- **Purpose**: Provides a form for adding new products.
- **Components Used**:
  - `AddProductForm`: A form component used to enter product information.

### `admin/manage-products.js` - Product Management Page

- **Purpose**: Lists existing products and allows for editing.
- **Components Used**:
  - `ProductTable`: A component that shows products and performs edit/delete operations.

## Libraries Used

- **Firebase**: For real-time database and authentication operations.
- **React Router**: For navigating between pages.
- **Axios**: For making HTTP requests.
- **Sass**: For CSS pre-processing.

## Contributing

If you would like to contribute, please follow these steps:

1. **Fork the Project**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Add your changes**:
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push your branch to GitHub**:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Create a Pull Request**.

## License

This project is licensed under the [MIT License](LICENSE).
