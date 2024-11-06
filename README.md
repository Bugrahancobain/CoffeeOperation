# CoffeeOperation

## About

**CoffeeOperation** is a web application designed to manage café operations, including menu management, product display, and user authentication. Built with **Next.js**, the app features server-side rendering (SSR) for enhanced performance and SEO. It integrates with **Firebase** for authentication and data management, ensuring a smooth user experience for both café owners and customers.

## Features

- **Dynamic Menu**: Manage products categorized into Drinks, Food, and Desserts.
- **Authentication**: Google Firebase Authentication for secure login and membership management.
- **SSR (Server-Side Rendering)**: Fast page loading and SEO-friendly URLs.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Customizable Themes**: Ability to change the background and other theme settings.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bugrahancobain/CoffeeOperation.git
   cd CoffeeOperation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase configuration:
   - Create a Firebase project and generate Firebase configuration keys.
   - Update the `firebase.js` and `firebaseAdmin.js` files with your Firebase credentials.

4. Run the application locally:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Key Components

### 1. **Navbar**
   - Contains links for navigating through the site.
   - Displays a login button and responsive menu.
   - **Visibility**: The login button is hidden on smaller screens.

### 2. **Menu Management Panel**
   - Accessible after user login.
   - Café owners can add, edit, or remove menu items.
   - Products are categorized into Drinks, Food, and Desserts.

### 3. **Product Display**
   - Displays products on the homepage based on selected categories.
   - Interactive filtering based on user selection.

### 4. **Firebase Authentication**
   - Implements Firebase Authentication for login using Google accounts.
   - Ensures only authorized users can access the admin panel for menu management.

### 5. **SSR (Server-Side Rendering)**
   - Pages like the menu and product list are rendered server-side for better SEO and faster load times.
   - Ensures that dynamic content is indexed by search engines.

## Setup & Configuration

### Firebase Setup
- Set up Firebase in both the `firebase.js` and `firebaseAdmin.js` files.
- Ensure your Firebase project has Firestore and Firebase Authentication enabled.

### Vercel Deployment
- You can deploy this app on Vercel directly from GitHub. After deployment, you can access the live version at `https://coffee-operation.vercel.app`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
