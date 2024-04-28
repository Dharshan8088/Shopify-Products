Breif Description of Project:

      A simple web application for displaying and categorizing products from Shopify.

HTML Structure:

    The HTML file sets up the basic structure of the webpage.
    It includes a header with a title and buttons for different categories (Men, Women, Kids).
    Below the header, there's a container to display the products.


CSS Styling:

    The CSS file provides styles for the layout, fonts, buttons, and product cards.
    It ensures that the webpage is responsive by adjusting styles based on screen size using media queries.


JavaScript Functionality:

    The JavaScript file contains a function called handle() which is triggered when a category button is clicked.
    This function fetches product data from a JSON file hosted on Shopify.
    It dynamically populates the product container with cards containing product details such as image, title, vendor, price, and discount.
    It calculates the discount percentage based on the compare-at price and current price.
    Each product card includes an "Add to cart" button, though the functionality for this button is currently commented out.


Overall Functionality:

    Users can click on different category buttons to load products related to that category dynamically.
    Product details including image, title, vendor, price, and discount are displayed in a visually appealing format.
    The webpage is designed to be responsive, providing a consistent experience across different devices.


Possible Improvements:

    Implementing the functionality for the "Add to cart" button to make the application more interactive.
    Adding more styling and animations to enhance the user experience.
    Error handling and displaying a message if the product data cannot be fetched successfully.
