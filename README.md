# Full-Online-Shop-Angular-Django
Project with Typescript, Angular, Django, MySQL.
# Online Store Project

This project is a fully-featured online store developed with Angular for the frontend and Django for the backend. It utilizes a MySQL database to handle data storage and management.
The project is a migration from a previous version of the store, which was built using Angular, Express, and Mongodb. The functionalities have been adapted and optimized to fit the new stack.

## Key Features

- **Frontend:** Built with Angular to provide a modern and responsive user interface. It includes components for product listings, a shopping cart, user authentication, and order processing.
- **Backend:** Powered by Django and Django REST Framework, handling API requests, user management, and business logic.
- **Database:** Uses MySQL for robust data storage and efficient querying of products, users, orders, and other key information.
- **Authentication:** Secure user authentication with JWT for managing user sessions and access control.

## Technology Stack

- **Frontend:** Angular
- **Backend:** Django, Django REST Framework
- **Database:** MySQL
- **Authentication:** JWT

## Setup Instructions

### Frontend Setup

You have two options for accessing the frontend:

1. **Online:** The project is hosted and can be accessed live at [https://fulldjangoangular.netlify.app/](https://fulldjangoangular.netlify.app/). You can navigate and use all of its features directly from your browser.

2. **Local Setup:**
   - Clone the repository:
     ```bash
     git clone https://github.com/emigillini/Full-Online-Shop-Angular-Django.git
     ```
   - Navigate to the project directory:
     ```bash
     cd Full-Online-Shop-Angular-Django\frontend\src
     ```
   - Install project dependencies:
     ```bash
     npm install
     ```
   - Run the development server:
     ```bash
     npm start
     ```


### Backend Setup

The backend, built with Django, is fully operational and hosted on Railway. You can access the live server at [https://full-online-shop-angular-django-production.up.railway.app/api/](https://full-online-shop-angular-django-production.up.railway.app/api/). There are three ways to check the functionality of the backend:

1. **Local Setup:**
   - Clone the repository:
     ```bash
        git clone https://github.com/emigillini/Full-Online-Shop-Angular-Django.git
     ```
   - Navigate to the project directory:
     ```bash
     cd Full-Online-Shop-Angular-Django\backend
     ```
   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     - On Windows:
       ```bash
       venv\Scripts\activate
       ```
     - On macOS/Linux:
       ```bash
       source venv/bin/activate
       ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Navigate to the project directory:
     ```bash
     cd Full-Online-Shop-Angular-Django\backend\Full_Online
     ```
   - Start the Django development server:
     ```bash
     python manage.py runserver
     ```

2. **Using Docker:**
   - Pull the Docker image:
     ```bash
     docker pull ghcr.io/emigillini/full_online_django_angular:final
     ```
   - Run the Docker container:
     ```bash
     docker run -d -p 8000:8000 ghcr.io/emigillini/full_online_django_angular:final
     ```
   - The backend will be accessible at `http://localhost:8000`.

3. **Using the Railway Service:**
   - Access the live backend service at [https://full-online-shop-angular-django-production.up.railway.app](https://full-online-shop-angular-django-production.up.railway.app). This option allows you to interact with the backend without any local setup.

Each of these methods will allow you to interact with the Django backend and verify its functionality.

### DataBase

The database used in this project is MySQL, hosted on a Clever Cloud service. Due to the use of a free plan, you may experience limitations in query performance, such as longer response times. Despite these potential limitations, the database is configured in the backend and is fully functional.

## Backend Functionalities 

## Admin Credentials for Django Admin Panel

- **Email**: tests@tests.com
- **Password**: 123456

## Features

- **Authentication and Authorization:**
  - User registration
  - Login and logout
  - Password reset with email
  - User authentication with JWT and Knox
  - Role and permission management

- **Product Management:**
  - Create, read, update, and delete products
  - Get random products
  - Filter products
  - Stock managment

- **Shopping Cart Management:**
  - Create, read, update, and delete shopping carts
  - Add and remove products from the cart
  - Retrieve cart items

- **Purchase Management:**
  - Confirm purchases
  - Retrieve user purchases
  - Payment confirmation with Stripe and cash

- **Delivery Management:**
  - Update delivery status
  - Query deliveries

- **Conversation and Message Management:**
  - Create, read, update, and delete conversations and messages
  - Close conversations

- **Additional Models Configuration:**
  - Shoe models, brands, sizes, colors, and payment methods

- **Email Sending:**
  - Send password reset emails

  
# Frontend Functionalities

## Admin Credentials for Admin Dashboard and Interaction

- **Email**: tests@tests.com
- **Password**: 123456
  
## Backend Connections

- **Interceptors**: The frontend uses interceptors to manage request headers and redirect requests as needed. It handles local requests and, if not running locally, directs requests to the Railway service.

## User Features

### User Authentication

- **Login and Registration**: Users can sign up for a new account and log in to access personalized features.
- **Password Recovery**: Users can request password resets if they forget their credentials.

### Product Browsing

- **View Products**: Users can browse a catalog of products with detailed descriptions, images, and prices.
- **Search and Filter**: Users can search for specific products and apply filters to narrow down their choices.

### Shopping Cart Management

- **Add to Cart**: Users can add products to their shopping cart for future purchase.
- **View Cart**: Users can view the contents of their cart, including product details and total cost.
- **Update Cart**: Users can modify quantities or remove items from their cart.
- **Checkout**: Users can proceed to checkout, entering shipping and payment information to complete their purchase. They can select a payment method between cash and card using Stripe service, then confirm and generate an order.

### Order History

- **View Past Orders**: Users can view a history of their previous orders, including order details and statuses.

### Profile Management

- **Dashboard Access**: Once logged in, users can access a user dashboard for easy management of their account.
- **Update Profile**: Users can update their personal information, such as email address and password.
- **Manage Addresses**: Users can add, update, or remove shipping addresses.

### Customer Support

- **Contact Support**: Users can initiate conversations with customer support for assistance. The platform includes an internal messaging system where users can send and receive messages within the application.

## Admin Features

### User Management

- **Dashboard Access**: Admins can access an admin dashboard to manage various aspects of the system.
- **View Users**: Administrators can view a list of all registered users.
- **Update User Details**: Admins can update user information and manage user roles.

### Product Management

- **Add Products**: Admins can manage the product catalog by adding new products.
- **View Product Inventory**: Admins can monitor inventory levels and manage stock.

### Order Management

- **View Orders**: Admins can view all orders placed by users, including order details and statuses.
- **Update Order Status**: Admins can update the status of orders as they progress through different stages (e.g., processing, shipped, delivered).

### Delivery Management

- **Manage Deliveries**: Admins can track and update delivery statuses for orders.

### Conversation and Message Management

- **View Conversations**: Admins can view and manage conversations initiated by users.
- **Respond to Messages**: Admins can respond to user inquiries and provide support. There are different sections within the admin interface, including a contact page where admins can send emails to the company.




## Authors

- [Emiliano Gillini](https://github.com/emigillini)


## Contact

For any questions or issues, please reach out to me through the following channels:

- **Email**: [emigillini@hotmail.com](mailto:emigillini@hotmail.com)
- **WhatsApp**: +54 9 351 718 3512

Thank you for checking out the project! https://wa.me/+5493517183512
