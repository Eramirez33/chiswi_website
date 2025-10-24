# Chiswi Catering Website

Repository for the official website of Chiswi Catering, a company specializing in gastronomic solutions for corporate and social events.

## Description

This project is a static Single Page Application (SPA) designed to present the services, history, and contact information of Chiswi Catering. The site is fully responsive and features various animations and interactive sections to offer a modern and attractive user experience.

## ✨ Key Features

-   **Responsive Design:** Adaptable to mobile devices, tablets, and desktops.
-   **Elastic and Floating Navigation:** A modern navigation menu with visual effects on scroll.
-   **Campaign Banner:** A customizable top banner for important announcements (e.g., Christmas promotions).
-   **Services Carousel:** "Our Catalog" section with an interactive carousel to display the different services.
-   **Scroll Animations:** Appearance and movement effects on elements as the user scrolls down the page (using WOW.js).
-   **Interactive History Section:** Image slideshow and informational tooltips.
-   **Interactive Process:** A visual section that shows the company's work process with scroll animations.
-   **Client Ticker:** Infinite carousel with the logos of clients who trust Chiswi.
-   **Contact via WhatsApp:** Call-to-action buttons that open a pre-configured WhatsApp conversation.
-   **"Back to Top" Button:** Facilitates navigation on a long page.

## Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (which includes npm)

## 🚀 Technologies Used

This project is built primarily with standard front-end technologies and some libraries to enhance interactivity and design.

### Languages
-   **HTML5**
-   **CSS3**
-   **JavaScript (ES6)**

### Frameworks and Libraries
-   **Tailwind CSS:** "Utility-first" CSS framework for rapid and responsive design.
-   **jQuery:** JavaScript library to simplify DOM manipulation and event management.
-   **Swiper.js:** Used for the client logo carousel in the "Who Trusts Us" section.
-   **Owl Carousel:** Used for the service card carousel in the "A Service for Every Occasion" section.
-   **WOW.js:** Library to reveal animations on scroll. It relies on Animate.css.
-   **Animate.css:** Collection of ready-to-use CSS animations.
-   **Google Fonts:** For the site's typography (Poppins, Dancing Script, Playfair Display, Roboto).
-   **Font Awesome:** For the icons used throughout the site.
-   **Preline UI:** Some UI components and functionalities.

### Development Tools
-   **Node.js / npm:** For dependency management and script execution.
-   **tailwindcss:** `v3.4.0`
-   **uglify-js:** `v3.17.4`
-   **clean-css-cli:** `v5.6.3`
-   **npm-run-all:** `v4.1.5`
-   **onchange:** `v7.1.0`

## 🚀 Local Installation and Usage

1.  Clone the repository.
2.  Install the development dependencies:
    ```bash
    npm install
    ```
3.  To generate the production files (`bundle.min.css` and `bundle.min.js`) once:
    ```bash
    npm run build
    ```
4.  To work in "watch" mode (watches for changes and rebuilds automatically):
    ```bash
    npm run watch
    ```

## 📂 Project Structure

The repository is organized as follows:

```
/
├── css/
│   ├── components/              # Styles for specific components
│   ├── input.css                # Input file for Tailwind CSS
│   ├── styles.css               # Main custom stylesheet
│   └── bundle.min.css           # Bundled and minified CSS (generated)
├── dist/
│   └── tailwind.css             # Tailwind CSS output (generated)
├── img/
│   └── ...                      # Site images and logos
├── js/
│   ├── ...                      # Individual JavaScript modules
│   └── bundle.min.js            # Bundled and minified JS (generated)
├── node_modules/                # Project dependencies (managed by npm)
├── scripts/
│   └── ...                      # Build-related scripts
├── index.html                   # Main website file
├── package.json                 # Defines project dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

## Build Process

The build process is managed by npm scripts defined in `package.json`:

-   `npm run build:tailwind`: Compiles `css/input.css` with Tailwind CSS and outputs the result to `dist/tailwind.css`.
-   `npm run build:css`: Bundles and minifies all CSS files (including the generated Tailwind CSS) into `css/bundle.min.css`.
-   `npm run build:js`: Bundles and minifies all JavaScript files into `js/bundle.min.js`.
-   `npm run build`: Runs all the `build:*` scripts in sequence.
-   `npm run watch`: Watches for changes in CSS and JS files and runs the respective build scripts automatically.

## 🔧 Configuration and Customization

Most of the content and configuration can be easily modified:

### Campaign Banner
To enable, disable, or change the text of the top banner, edit the `js/campaign-config.js` file:
```javascript
const campaignConfig = {
    enabled: true, // Set to false to disable
    text: "Your text here",
    ctaText: "Button text",
    ctaSubject: "Subject for WhatsApp"
};
```

### Contact Information
To change the WhatsApp number used in the contact buttons, edit the `js/config.js` file:
```javascript
const config = {
    numeroWhatsApp: '598XXXXXXXX' // Replace with your number
};
```

### Content and Texts
All textual content and images are located directly in the `index.html` file. You can edit the corresponding sections to update the information.

## 🛠️ How to Run Locally

As a static web project, it does not require a complex server. Simply follow these steps:

1.  Clone or download this repository.
2.  Open the `index.html` file in your preferred web browser (e.g., Google Chrome, Firefox).

And that's it! The site should work locally.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Commit your changes (`git commit -m 'Add your feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
