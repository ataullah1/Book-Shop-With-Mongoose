# 📚 Book Shop API with Mongoose

A RESTful API for managing a book shop's inventory and orders, built with Express.js, TypeScript, and Mongoose.

**Live API:** [https://book-shop-five-eta.vercel.app/](https://book-shop-five-eta.vercel.app/)

## 🚀 Features

### Product Management

- Create new books with details (title, author, price, etc.)
- View all books and specific book details
- Update book information and inventory
- Delete books from the system
- Automatic stock status tracking

### Order Management

- Place new orders with email validation
- View all orders and specific order details
- Automatic inventory updates on order placement
- Stock availability checking
- Calculate total revenue

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- CORS

## 📋 API Endpoints

### Products API

#### Create a Book

```http
POST https://book-shop-five-eta.vercel.app/api/products/create-product
```

**Request Body:**

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}
```

#### Get All Books

```http
GET https://book-shop-five-eta.vercel.app/api/products
```

#### Get a Specific Book

```http
GET https://book-shop-five-eta.vercel.app/api/products/:productId
```

#### Update a Book

```http
PUT https://book-shop-five-eta.vercel.app/api/products/:productId
```

**Request Body:**

```json
{
  "price": 15,
  "quantity": 25
}
```

#### Delete a Book

```http
DELETE https://book-shop-five-eta.vercel.app/api/products/:productId
```

### Orders API

#### Create an Order

```http
POST https://book-shop-five-eta.vercel.app/api/orders/create-order
```

**Request Body:**

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012", // (Replace with a valid product ID)
  "quantity": 2
}
```

#### Get All Orders

```http
GET https://book-shop-five-eta.vercel.app/api/orders
```

#### Get a Specific Order

```http
GET https://book-shop-five-eta.vercel.app/api/orders/:orderId
```

#### Calculate Revenue

```http
GET https://book-shop-five-eta.vercel.app/api/orders/revenue
```

## 📂 Project Structure

```
src/
├── app/
│   └── modules/
│       ├── product/
│       │   ├── product.interface.ts
│       │   ├── product.model.ts
│       │   ├── product.controller.ts
│       │   └── product.route.ts
│       ├── order/
│       │   ├── order.interface.ts
│       │   ├── order.model.ts
│       │   ├── order.controller.ts
│       │   └── order.route.ts
├── views/
│   └── uiView.ts
├── app.ts
└── server.ts
```

## 🔧 Setup Instructions

### Clone Repository

```bash
git clone https://github.com/ataullah1/Book-Shop-With-Mongoose.git
```

```bash
cd Book-Shop-With-Mongoose
```

### Install Dependencies

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/book-shop
```

### Run the Server

```bash
pnpm run dev
```

## 📌 API Response Format

### Success Response

```json
{
  "success": true,
  "message": "Success message here",
  "data": {}
}
```

### Error Response
