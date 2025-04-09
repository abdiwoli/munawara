# Munawara Tech

## Overview
A digital platform for small businesses. Built with MERN stack + AI features.

## Features
- **E-commerce Platform:** Enables small businesses to list and sell products.
- **AI-powered Recommendations:** Personalized product suggestions.
- **Secure Authentication:** User authentication and authorization.
- **Payment Integration:** Stripe and PayPal support.
- **Admin Dashboard:** Manage users, orders, and inventory.
- **Chatbot Assistance:** AI-driven customer support.
- **Responsive UI:** Built with Next.js and Tailwind CSS.
- **SEO & Analytics:** Optimized using Rank Math and Google Analytics.

## Tech Stack
### **Frontend**
- Next.js, React.js
- Tailwind CSS
- Redux Toolkit

### **Backend**
- Node.js, Express.js
- MongoDB, PostgreSQL
- JWT Authentication
- REST API

### **AI & Automation**
- OpenAI API (Chatbot, AI responses)
- Dialogflow (Customer Support AI)
- TensorFlow/PyTorch

### **Hosting & Deployment**
- AWS (EC2, S3, CloudFront)
- Vercel for frontend

## Installation & Setup
### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/munawara.git
cd munawara
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file in the root directory and add:
```plaintext
MONGO_URI=your_mongodb_connection_string
POSTGRES_URI=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
OPENAI_API_KEY=your_openai_api_key
```

### **4. Run the Project**
Start the backend:
```bash
cd backend
npm run server
```
Start the frontend:
```bash
cd frontend
npm run dev
```

## API Endpoints
- `GET /api/products` - Fetch products
- `POST /api/orders` - Create an order
- `POST /api/chatbot` - AI chatbot interaction

## Deployment
- **Frontend:** Deployed on Vercel
- **Backend:** Hosted on AWS EC2 with a load balancer

## License
MIT License

---