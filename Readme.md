# CampusMarket
[![Python](https://img.shields.io/badge/Python-3.9-blue.svg)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-4.0-green.svg)](https://www.djangoproject.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

CampusMarket is a Django-based e-commerce platform designed to facilitate buying and selling within a campus environment. This project allows users to list items for sale, search for items, and communicate with other users through a conversation system.

![CampusMarket](https://raw.githubusercontent.com/ParasY1724/CampusMarket/main/media/item_images/Screenshot%202024-04-23%20183337.png)

### Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Database Schema](#database-schema)
6. [Getting Your API Key](#getting-your-api-key)
7. [Getting Started](#getting-started)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

## Features
CampusMarket offers the following features:

| Feature       | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| User Accounts | Register, log in, and manage personal information.                   |
| Dashboard     | View and manage user-created items, with edit and delete options.    |
| Item Listing  | List items for sale, search, and filter based on categories and criteria. |
| Conversations | Secure communication between users through a built-in messaging system.  |
| Search API    | Integrates with an external API for real-time product data.          |

## Technologies Used
CampusMarket is built with the following technologies:

| Technology | Description                                 |
| ---------- | ------------------------------------------- |
| Django     | A high-level Python web framework.          |
| SQLite     | Default database used for local development.|
| HTML/Tailwind-CSS   | Front-end for rendering templates and styling. |
| JavaScript | Enhances interactivity on the front-end.    |
| PythonAnywhere | Deployment platform for Django applications. |

## Database Schema

![Database Schema](https://raw.githubusercontent.com/ParasY1724/CampusMarket/main/media/item_images/drawSQL-image-export-2024-04-23.png)


## Getting Started
To get started with CampusMarket, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/campusmarket.git
   cd campusmarket
   ```

2. **Set up a virtual environment**:
   ```bash
   python3 -m venv env
   source env/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

5. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

6. **Access the application**: Open a web browser and go to `http://127.0.0.1:8000/`.

## Getting Your API Key

To access the Real-Time Product Search API for integrating with CampusMarket, you need to obtain an API key from RapidAPI. Follow these steps to get your API key:

1. **Visit the RapidAPI Marketplace**: Go to [Real-Time Product Search API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-product-search) page on the RapidAPI website.

2. **Sign Up or Log In**: If you don't have an account, sign up for a RapidAPI account. If you already have one, log in to your account.

3. **Subscribe to the API**: Subscribe to the Real-Time Product Search API to get access. This may involve selecting a plan that suits your needs.

4. **Get Your API Key**: After subscribing, you will receive an API key. This key will be used to authenticate your requests to the API.

5. **Use the API Key**: Once you have your API key, you can use it to make requests to the Real-Time Product Search API and integrate it into CampusMarket for real-time product data.



## Deployment
CampusMarket is deployed on PythonAnywhere.
   ` https://campusmarket.pythonanywhere.com/`
   
## Contributing
Contributions are welcome! If you want to contribute to CampusMarket, please follow these guidelines:

1. **Fork the repository**.
2. **Create a new branch** for your changes.
3. **Submit a pull request** with a clear explanation of your changes.
