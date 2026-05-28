# MEGA-MARKET (REACT APP)

## Overview

This is a multi-page online store website. It uses React, React Router, and Axios to fetch data from an API, manage a shopping cart, and handle page routing. The goal is to explore complex React features, handle global application state, and manage data from an external API. The app simulates a real online shopping experience with dynamic features, smooth transitions, and reliable error page handling.


## Key Features

* **Find Products**: Users can browse, filter, and sort products on the home page.
* **Product Details**: View product images, descriptions, prices, and similar product suggestions.
* **Shopping Cart**: Users can add items to the cart, change quantities, and see total prices.
* **Page Transitions**: Smooth animations when moving between different pages.
* **Safe Routing**: Broken links or wrong URLs automatically redirect users to a safe page.

## Pages

The app has 4 main pages built with reusable components:

* **Home (`/`)**: Features a banner slider, categories to filter items, and sorting by name or price.
* **Product (`/product/:id`)**: Shows full item details, a quantity selector, and a gallery of 4 similar items.
* **Cart (`/cart`)**: Lists chosen items, calculates totals, and handles the checkout view.
* **NotFound (`*`)**: A custom 404 error page for broken links.

## Main Components

* `Header` / `Footer`: Top and bottom navigation bars on every page.
* `HeroBanner`: An image slider showing store deals.
* `ProductCard`: A standard layout to show item info in grids.
* `FilterBar`: Selections to sort or filter products.

## Technologies Used

* **Framework**: React (using Hooks)
* **Routing**: react-router-dom
* **API Fetching**: axios connected to FakeStore API
* **Animations**: framer-motion

---
## Team Members
* **PATRICK**
* **WEIYU** 
* **IVAN** 