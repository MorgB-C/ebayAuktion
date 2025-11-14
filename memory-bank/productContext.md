# Product Context: eBay Auction Generator

## Problem
Creating eBay auctions manually can be repetitive and time-consuming. Users need to fill in the same information repeatedly, such as shipping details or legal disclaimers.

## Solution
This tool provides a simple web interface to streamline the creation of eBay auctions. It allows users to quickly fill out key details and leverages features like automatically calculated prices and text snippets to speed up the process.

## Implemented Features
- **Auction Form:** A single-page form to input all necessary auction details:
  - Title
  - Description
  - Start Price
- **Automatic "Buy It Now" Price:** The "Buy It Now" price is automatically calculated as 40% higher than the start price and is displayed in a read-only field.
- **Photo Uploads with Preview:** Users can select multiple images from their local machine. Previews of the selected images are displayed directly on the page.
- **Text Snippets:** A dropdown menu allows users to insert pre-defined text blocks (e.g., for item condition, shipping policy, or disclaimers) into the description field to save time.
- **Data Folder:** A `data` folder was created to hold sample images for testing.
- **GitHub Integration:** The project is version-controlled with Git and hosted on GitHub.
- **Hosting:** The static site is deployed using GitHub Pages for free hosting.
