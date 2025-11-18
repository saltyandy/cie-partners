# CIE Partners Website

A simple one-page website for CIE Partners featuring a hero section with logo and contact details.

## Project Structure

```
cie_partners/
├── public/
│   └── index.html          # Main landing page
├── css/
│   └── styles.css          # Stylesheet for the website
├── images/
│   └── logo.svg            # Company logo
├── sanity-studio/          # Sanity CMS setup (optional)
└── README.md               # This file
```

## Getting Started

### Option 1: Open in Browser (Simple)
Simply open `public/index.html` in your web browser to view the website.

### Option 2: Serve Locally (Recommended)

#### Using Python 3:
```bash
cd public
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

#### Using Node.js and http-server:
```bash
npm install -g http-server
cd public
http-server
```
Then visit `http://localhost:8080` in your browser.

#### Using PHP:
```bash
cd public
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

## Features

- **Hero Section**: Displays your company logo, name, and tagline
- **Contact Section**: Three contact cards with email, phone, and address information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Styling**: Clean gradient design with hover effects

## Customization

### Update Contact Information
Edit `public/index.html` and update the contact details in the contact section:
- Email: Change the `href="mailto:..."` link
- Phone: Change the `href="tel:..."` link
- Address: Update the address text

### Update Logo
Replace `images/logo.svg` with your company's logo. Keep the filename the same or update the `src` in `public/index.html`.

### Customize Colors
Edit `css/styles.css` and modify the color values:
- Primary color: `#667eea` (purple)
- Secondary color: `#764ba2` (darker purple)
- Background: `#f8f9fa` (light gray)

### Update Hero Text
Edit `public/index.html` and change:
- H1 heading: "Welcome to CIE Partners"
- P text: "Your trusted partner for growth and success"

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Sanity CMS Integration (Optional)

The `sanity-studio/` directory can be set up for content management. To initialize:

```bash
cd sanity-studio
sanity init
sanity start
```

This allows you to manage the website content through the Sanity Studio interface.

## License

Copyright 2025 CIE Partners. All rights reserved.
