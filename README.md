## Full Stack E-commerce (MERN)

A full stack e-commerce web application built with the MERN stack. It has a customer storefront, an admin panel for managing products and orders, and a REST API backend. Payments can be made with Cash on Delivery, Stripe or Razorpay.

## Features

### Storefront (customers)
- Browse the collection, search, filter and sort products
- Product page with size selection
- Cart with quantity updates
- Register and login with JWT authentication
- Checkout with a delivery information form
- Payment methods: **Cash on Delivery**, **Stripe**, **Razorpay**
- "My Orders" page to track order status

### Admin panel
- Secure admin login
- Add new products (with image upload to Cloudinary)
- List and remove products
- View all customer orders (items, address, phone, payment method, date, amount)
- Update order status (Order Placed, Packing, Shipped, Out for delivery, Delivered)

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend / Admin | React (Vite), React Router, Axios, Tailwind CSS, React Toastify |
| Backend | Node.js, Express (ES modules), JWT, bcrypt, Multer |
| Database | MongoDB Atlas with Mongoose |
| Image hosting | Cloudinary |
| Payments | Stripe Checkout, Razorpay |

## Project Structure

```
Ecommerce-app/
├── backend/
│   ├── config/            # MongoDB and Cloudinary setup
│   ├── controllers/       # user, product, cart and order controllers
│   ├── middleware/        # auth.js (user), adminAuth.js, multer.js
│   ├── models/            # userModels.js, productModels.js, orderModels.js
│   ├── routes/            # user, product, cart and order routes
│   └── server.js
├── frontend/              # customer storefront
│   └── src/
│       ├── components/
│       ├── context/       # ShopContext (global state)
│       └── pages/         # Home, Collection, Product, Cart, PlaceOrder, Orders, Verify...
└── admin/                 # admin panel
    └── src/
        ├── components/
        └── pages/         # Add, List, Orders
```



## Getting Started

### Prerequisites
- Node.js 18 or newer
- A MongoDB Atlas account (or a local MongoDB)
- A Cloudinary account
- Stripe and Razorpay test accounts (only for online payments)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Ecommerce-app
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

STRIPE_SECRET_KEY=sk_test_xxxxxxxx
RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxx
```

Start the server:

```bash
npm run server
```

### 3. Storefront setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
```

Also add the Razorpay checkout script inside `<body>` in `frontend/index.html`:

```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

Start the app:

```bash
npm run dev
```

### 4. Admin panel setup

```bash
cd admin
npm install
```

Create `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin panel:

```bash
npm run dev
```

Vite picks the next free port for each app (for example 5173 for the storefront and 5174 for the admin panel).

> Restart the dev servers after changing any `.env` file.

## API Overview

### Orders (`/api/order`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/place` | User | Place an order with Cash on Delivery |
| POST | `/stripe` | User | Create a Stripe Checkout session |
| POST | `/razorpay` | User | Create a Razorpay order |
| POST | `/verifyStripe` | User | Confirm a Stripe payment |
| POST | `/verifyRazorpay` | User | Confirm a Razorpay payment |
| POST | `/userorders` | User | Get the logged-in user's orders |
| POST | `/list` | Admin | Get all orders |
| POST | `/status` | Admin | Update an order's status |

Authentication is sent in a `token` request header:

```js
axios.post(url, data, { headers: { token } })
```

## Testing Payments

- **Cash on Delivery:** place an order and check the `orders` collection in MongoDB.
- **Stripe (test mode):** use card `4242 4242 4242 4242`, any future expiry date and any CVC.
- **Razorpay (test mode):** use the test keys from your Razorpay dashboard. Razorpay charges in INR.

