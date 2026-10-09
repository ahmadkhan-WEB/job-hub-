HireHub — Job Board Template Product Page

A responsive, single-page product/landing page for HireHub, a job board Astro template. Built with plain HTML, CSS and vanilla JavaScript, with no frameworks or build tools required.

The page includes a live-preview browser mockup, template details, a full description, a three-tier pricing section, share buttons, a similar-templates grid, a CTA banner and a footer.

Features
Browser-window mockup showing the HireHub hero, search bar, stats and job cards
Fully responsive layout with breakpoints at 820px and 620px
Pricing section with Single, Membership (highlighted) and Lifetime plans
Similar templates grid with image thumbnails
Interactive buttons (Live Preview, Buy Now, pricing, share, banner) with placeholder actions
Smooth scroll from the top "Buy Now" button to the pricing section
Clean design system using CSS variables (colors, fonts) for easy theming
Google Fonts: Space Grotesk, Inter, JetBrains Mono
Project Structure
.
├── index.html     # Page markup
├── style.css      # All styles (CSS variables + responsive rules)
├── script.js      # Button interactions
├── p1.png … p5.png  # Thumbnails for the "Similar Templates" section
└── README.md

Note: index.html references p1.png to p5.png. Add these images to the project root, otherwise the thumbnails will not display.

Getting Started
Clone the repository
bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
Open the page
Double-click index.html, or
Serve it locally:
bash
     npx serve .
     # or
     python -m http.server 8000
Visit http://localhost:8000 in your browser.

No installation or build step is needed.

Customization
What to change	Where
Colors (violet, coral, mint, etc.)	:root variables at the top of style.css
Fonts	Google Fonts <link> in index.html and font-family in style.css
Pricing, text, features	Matching sections in index.html
Button behavior (replace the alert() placeholders with real links or checkout)	script.js
Similar template thumbnails	background-image in .sim-thumb elements
Tech Stack
HTML5
CSS3 (Grid, Flexbox, custom properties, media queries)
Vanilla JavaScript (ES6)
Credits
HireHub template by Aigars Silkalns / Colorlib
Images from Unsplash
Fonts from Google Fonts
