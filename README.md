# 💅 Beauty Salon App

Welcome to the **Beauty Salon App**! This application is designed to showcase the services, team, and pricing of a beauty salon, making it easy for clients to connect with us and explore what we offer.

## ✨ Features

- **Multi-Page Structure**: Navigate between different sections with ease:
  - **Home**: Welcoming page introducing the salon.
  - **About Us**: Learn more about the salon's story.
  - **Services & Pricing**: Explore our range of services and transparent pricing.
  - **Team**: Meet the talented professionals behind the beauty.
  - **Contact**: Get in touch with us directly from the app.
- **Language Toggle**: Easily switch between Polish and English for all content.
- **Contact Form**: Submit inquiries or requests for more information directly from the contact page.

## 💻 Tech Stack

- **React + Vite**: Fast and modern development setup with optimized performance.
- **Node.js + Express**: Backend API for handling online booking form submissions.

## 🚀 Getting Started

Follow these steps to get the app running locally:

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/beauty-salon.git
   ```

Navigate to the project folder:
cd beauty-salon-app

Install dependencies:
npm install

Create frontend env file:
copy .env.example .env

Run the development server:
npm run dev

View the app: Open your browser and go to http://localhost:5173.

## 🔌 Backend (Node.js + Express)

The booking form in the header sends data to:

- `POST http://localhost:3001/api/bookings`

To run backend locally:

1. Go to backend folder:
   `cd backend`
2. Install dependencies:
   `npm install`
3. Create env file from example:
   `copy .env.example .env`
4. Start backend:
   `npm run dev`

Optional test endpoint:

- `GET http://localhost:3001/api/bookings` (returns saved bookings in memory)

📦 Additional Commands

Build for production:
npm run build

Preview production build:
npm run preview
