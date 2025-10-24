# Gemini Agent Context

This document provides essential information for AI agents working with the Chiswi Catering website repository.

## 1. Project Overview

This is a static, single-page website for Chiswi Catering, a company providing gastronomic solutions for events. The site is designed to be modern and responsive, showcasing the company's services, history, and contact information.

-   **Objective:** To serve as a digital business card and lead generation tool for the company.
-   **Key Features:** Interactive carousels, scroll animations, a customizable campaign banner, and WhatsApp integration for contacts.
-   **Main File:** The entire website is contained in `index.html`. All content is managed directly in this file.

## 2. Technology Stack

The project relies on standard front-end technologies, using a mix of local dependencies and CDNs.

-   **Languages:** HTML5, CSS3, JavaScript (ES6).
-   **Core Libraries:**
    -   **Tailwind CSS:** For styling.
    -   **jQuery:** For DOM manipulation and event handling.
    -   **Swiper.js & Owl Carousel:** For interactive carousels.
    -   **WOW.js & Animate.css:** For scroll animations.
-   **Development Tools:**
    -   **Node.js/npm:** Required for running build scripts (minification and bundling).
    -   The main scripts are in `package.json` under `"build"` and `"watch"`.

## 3. Project Structure

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
├── js/
│   ├── ...                      # Individual JavaScript modules
│   └── bundle.min.js            # Bundled and minified JS (generated)
├── index.html                   # Main website file
├── package.json                 # Defines project dependencies and scripts
└── tailwind.config.js           # Tailwind CSS configuration
```

## 4. Key Configuration Files

There are two primary JavaScript files for customizing the site's behavior without altering the main logic:

-   **`js/config.js`:**
    -   **Purpose:** Manages the main WhatsApp contact number.
    -   **Key variable:** `config.numeroWhatsApp`. This is the number used in all "call-to-action" buttons.

-   **`js/campaign-config.js`:**
    -   **Purpose:** Controls the visibility and content of the top promotional banner.
    -   **Key variables:**
        -   `campaignConfig.enabled`: A boolean (`true`/`false`) to show or hide the banner.
        -   `campaignConfig.text`: The promotional text displayed.
        -   `campaignConfig.ctaText`: The text for the banner's button.
        -   `campaignConfig.ctaSubject`: The pre-filled message for the WhatsApp chat opened from the banner.

## 5. How to Run and Develop Locally

### Quick Start
To simply view the website, open the `index.html` file directly in a web browser. No server is needed.

### Development Workflow
For development, it is recommended to use the built-in scripts to handle CSS and JS bundling.

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Build production files:**
    To minify and bundle CSS and JS files once, run:
    ```bash
    npm run build
    ```
    This command executes the following steps:
    -   `build:tailwind`: Compiles Tailwind CSS.
    -   `build:css`: Bundles and minifies all CSS.
    -   `build:js`: Bundles and minifies all JavaScript.

3.  **Watch for changes:**
    To automatically rebuild files whenever a change is detected in the `css/` or `js/` directories, run:
    ```bash
    npm run watch
    ```

This command is useful during development as it provides continuous compilation.
