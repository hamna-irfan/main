# Git Flow Lab

A simple web lab for practicing Git workflows and front-end development.

## Features

### Navigation Bar
A responsive header with a navigation bar containing links to Home, About, Projects, and Contact.

### Dark Mode Toggle
A **Dark Mode** button in the navigation bar toggles the site between light and dark themes.

**How it works:**
- Clicking the button sets `data-theme="dark"` on `<body>` to activate dark mode.
- Clicking again sets it back to `data-theme="light"`, restoring the light theme.
- The button label updates to reflect the current state ("Dark Mode" / "Light Mode").

**Files involved:**
- `index.html` — button element (`#theme-toggle`) inside `<header>`
- `script.js` — click listener that toggles the `data-theme` attribute
- `style.css` — `[data-theme="dark"]` rules that restyle background, text, header, and nav

## Project Structure

```
web-lab/
├── index.html   # Main HTML page
├── style.css    # Styles including dark theme
├── script.js    # Theme toggle logic
└── README.md    # This file
```
