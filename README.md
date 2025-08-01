Mini Product Listing Store :
A minimalist React + Vite e-commerce demo with category filtering, product details, and a pop-out cart accessible from the navbar. Fast, responsive, modular, and powered by Fake Store API.

https://miniprojectsp.netlify.app/

🚀 Features :

Product Listing: Clean, responsive product grid.

Category Filter: Instantly filter products by category.

Product Details: See images and descriptions for each item.

Pop-out Cart: Cart is only visible when clicking the cart icon in the navbar. Add, remove, or clear products.

Modern Stack: Vite, React 18, Context API, React Router 6, CSS Modules.


🏗️ Tech Stack :

Frontend: React 18 (with hooks), React Router v6

State: Context API (Cart)

Network: Axios

Styling: CSS Modules & Global CSS

Bundler: Vite

💻 Getting Started (Local Development)

1. Create Project (if needed):
npm create vite@latest my-product-app -- --template react
cd my-product-app

2. Install Dependencies:

npm install

npm install axios react-router-dom

3. Run Dev Server:

npm run dev

4. Open in Browser

Visit [http://localhost:5173]


Assumptions & Limitations

- This is a front-end-only demo app for educational/demo purposes. Cart state is not persisted after reload and there is no authentication or real purchases.
- All products, categories, and details are provided by [Fake Store API](https://fakestoreapi.com/)—which may occasionally be slow or unavailable.
- The layout is responsive but basic. Some design or accessibility polish may be required for production use.
- The cart slides in only when clicking the navbar cart icon. No checkout, payment, or address handling functionality is included.
- No Backend/Database: No order history, user accounts, or back-office/admin functionality.
- Modern Browsers: Tested only in modern Chromium/Firefox browsers.
