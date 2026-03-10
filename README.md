# Abbay Key Real Estate Website

A modern, responsive real estate website for Abbay Key Properties, showcasing luxury homes and properties across Ethiopia.

## Project Overview

This is a static website built with HTML, CSS, and JavaScript that serves as the online presence for Abbay Key Real Estate. The website features property listings, company information, contact details, and user authentication functionality.

## Features

### 🏠 Property Showcase
- Homepage with hero video and company branding
- "Why Choose Us" section with feature highlights
- Previous works gallery with image slider
- Property listings page with detailed information for 7 properties across different regions

### 👥 User Authentication
- User registration and login system
- Client-side authentication using localStorage
- Secure access to property listings after login

### 📄 Company Information
- About Us page detailing company mission and values
- Contact Us page with contact form and company details
- Privacy Policy and Terms of Use pages

### 🎨 Design & UX
- Responsive design for mobile and desktop
- Modern UI with Font Awesome icons
- Smooth scrolling and interactive elements
- Professional color scheme and typography

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and responsive design
- **JavaScript** - Client-side functionality and authentication
- **Font Awesome** - Icons and visual elements
- **Local Storage** - User data persistence

## Project Structure

```
├── homepage.html          # Landing page with hero section
├── mainpage.html          # Property listings (requires login)
├── aboutus.html           # Company information
├── contactus.html         # Contact form and details
├── login.html            # User login page
├── signup.html           # User registration page
├── privacy.html          # Privacy policy
├── thermsofuse.html      # Terms of use
├── auth.js               # Authentication logic
├── ax.css               # Main styling
├── main.css             # Property listings styling
├── about.css            # About page styling
├── contact.css          # Contact page styling
├── auth.css             # Authentication forms styling
├── privacy.css          # Privacy/Terms styling
├── therms.css           # Terms styling
├── images/              # Static images
├── mainpage images/     # Property images
└── videos/              # Hero video
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation & Setup

1. **Clone or Download** the project files to your local machine

2. **Open the Website**
   - Navigate to the project directory
   - Open `homepage.html` in your web browser
   - The website will load and function immediately

### Navigation
- **Homepage**: `homepage.html` - Main landing page
- **Property Listings**: Login required, redirects to `mainpage.html`
- **About Us**: `aboutus.html`
- **Contact**: `contactus.html`

## User Authentication

### Registration
1. Click "Sign up" from the homepage
2. Fill in username, email, and password
3. Confirm password
4. Account created and stored locally

### Login
1. Click "Login" from the homepage
2. Enter registered email and password
3. Successful login redirects to property listings

*Note: User data is stored in browser localStorage and persists across sessions*

## Features in Detail

### Property Listings
Each property includes:
- High-quality images
- Location details (Region, City)
- Construction year
- Property size (house area, land area where applicable)
- Number of bedrooms
- Price in Ethiopian Birr (ETH)

### Contact Information
- **Address**: Bole, Addis Ababa, Ethiopia
- **Phone**: +251 987 654 321
- **Email**: support@theAbbayKey.com
- **Hours**: Mon - Sun: 8:00 AM – 8:00 PM

### Social Media
Links to company social media profiles on:
- Twitter
- YouTube
- Facebook
- Telegram
- LinkedIn
- TikTok
- Instagram

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Development Notes

- **Static Site**: No build process required
- **Client-Side Only**: All functionality runs in the browser
- **No Backend**: Authentication and data storage is local only
- **Responsive**: Adapts to different screen sizes
- **SEO Friendly**: Proper meta tags and semantic HTML

## Future Enhancements

Potential improvements for the website:
- Backend integration for real user management
- Database for property listings
- Contact form functionality
- Property search and filtering
- User dashboard for saved properties
- Admin panel for content management

## License

This project is for educational/academic purposes as part of IP_PROJECT_GROUP_7_SEC_2.

## Contact

For questions about this project, please refer to the contact information provided on the website.