# Visit Musanze Website

This project is a small multi-page tourism website for Musanze District. It includes the following pages:

- `index.html` — homepage with a hero section, slider, services preview, article previews, and footer.
- `services.html` — service details page with a hero and service cards.
- `news.html` — news/blog page with article previews and leadership messaging.
- `tourism.html` — tourism gallery page showing destination photos.
- `contact.html` — contact page with a contact form and contact details.
- `styles/styles.css` — shared stylesheet for consistent design across all pages.
- `scripts/script.js` — simple slider logic used only on the homepage.

## Project Structure

- `index.html` is the only page with the homepage slider.
- All other pages use the same shared navigation, footer, and general styling.
- `styles/styles.css` is the single stylesheet imported by every page.
- `scripts/script.js` is loaded on all pages, but only runs slider code when the homepage slider exists.

## Page Breakdown

### `index.html`
This is the homepage and includes:

- A responsive navigation bar with links to all pages.
- A hero section containing:
  - a label (`.eyebrow`),
  - a large title,
  - a description paragraph,
  - action buttons.
- A homepage-only image slider inside `.hero-slider`.
- A `.services` section with three service cards.
- An `.articles` section previewing the latest blog posts.
- The footer with quick links, contact details, and attribution.

### `services.html`
This page describes the main visitor services provided in Musanze:

- Hero copy tailored to service booking and local guidance.
- A services grid with four service cards:
  - Gorilla Permits
  - Cultural Excursions
  - Hiking & Trekking
  - Airport Transfers
- Footer content consistent with the rest of the site.

The page also includes leadership messaging in the hero and service introduction copy to emphasize experienced local planning.

### `news.html`
This page is focused on news, updates, and blog stories.

- A hero section with news-focused copy.
- An `.articles` section featuring story cards.
- Leadership and community narrative included inside the content.
- Consistent footer and navigation.

### `tourism.html`
This page is a tourism gallery that highlights Musanze visually.

- Hero section introducing the gallery.
- `.gallery` section with a grid of photos.
- The gallery uses a responsive 3-column layout.
- Footer is shared with the rest of the site.

### `contact.html`
This page provides visitor contact information and a contact form.

- Hero section encouraging users to reach out.
- `.contact-page` section split into two columns:
  - contact information card
  - contact form
- The form includes fields for name, email, subject, and message.
- Footer is shared across the website.

## Styles Explanation (`styles/styles.css`)

### Base Styling

- `body` sets the page background, margin, and default font stack.
- `.container` keeps page content centered and contained.

### Navigation

- `.navigation` uses `display: flex;` to lay out logo and links horizontally.
- `justify-content: space-between;` spreads the logo and nav items across the full width.
- `align-items: center;` vertically centers navigation content.
- `box-shadow` adds a subtle shadow under the navbar.

### Buttons

- `.primary-button` is filled with a green gradient, white text, and rounded-pill styling.
- `.secondary-button` is outlined with the same green color and a subtle hover background.
- `.contact-button` is a separate button styled in warm orange for emphasis.
- Buttons use `transition` for smooth hover effects.

### Hero Section

- `.hero` is a two-column grid layout using `grid-template-columns: 1.05fr 0.95fr;`.
- The hero content stack becomes single-column on smaller screens.
- `.eyebrow` is an uppercase label with letter spacing to create a branded accent.

### Services and Cards

- `.services` sets a max width and page padding.
- `.service-grid` uses a 3-column responsive grid.
- `.service-card` includes background, border, radius, padding, and box shadow.
- Hovering `.service-card` lifts the card with `transform: translateY(-4px)`.

### Articles

- `.articles` shares the same layout container logic.
- `.article-grid` is a responsive grid for article cards.
- `.article-card` uses a white panel with rounded corners and shadow.
- `.article-tag` is a small pill badge used to categorize each article.

### Gallery

- `.gallery-grid` is a three-column responsive grid for the tourism page.
- `.gallery-item` uses overflow hidden, rounded corners, and a shadow.
- Hovering a gallery image scales it slightly for a subtle zoom effect.

### Contact Page Styling

- `.contact-page` uses a two-column grid layout.
- `.contact-card` and `.contact-form` use consistent card styling.
- `.form-group` organizes each label and input vertically.
- `.form-input` and `.form-textarea` use soft borders and padding.
- `:focus` states highlight the form field with a darker border.
- `.submit-button` is a rounded pill button with hover and transform effects.

### Footer

- `.footer` uses a dark green background and light text.
- `.footer-content` is a three-column grid.
- `.footer-links` are stacked vertically and lighten on hover.
- `.footer-bottom` adds a small copyright note.

## Script Explanation (`scripts/script.js`)

The script controls the homepage slider only.

- `document.addEventListener('DOMContentLoaded', ...)` waits until the page HTML is loaded before running the code.
- `document.querySelector('.slides')` finds the slider track container.
- `document.querySelectorAll('.indicator')` selects the dot controls under the slider.
- If either the slider or indicators are missing, the script returns early so non-home pages do not throw errors.

Slider behavior:

- `currentSlide` holds the index of the currently visible slide.
- `updateSlider()` applies a `translateX(...)` transform on the `.slides` container.
  - This moves the slider horizontally by 100% increments.
- The function also updates the `.active` class on the slider dots.

Auto-play:

- `setInterval(nextSlide, 5000)` advances the slider every 5 seconds.
- `nextSlide()` increments the current slide index, then calls `updateSlider()`.
- The modulo operator `% indicators.length` wraps the index back to zero when it reaches the last slide.

Manual control:

- Each `.indicator` dot gets a click listener.
- Clicking a dot sets `currentSlide` to that dot index, then calls `updateSlider()` immediately.

## Notes

- The site uses a shared stylesheet and shared footer/navigation for consistency.
- The homepage slider is the only page using the JavaScript slider code.
- The contact page is built with a static contact form layout. It does not submit to a backend by default.
- `Group 1` is credited in each footer as the site builder.

## How to Use

1. Open `index.html` in a browser to view the main homepage.
2. Navigate using the top menu to `services.html`, `news.html`, `tourism.html`, or `contact.html`.
3. The `styles/styles.css` file controls the look of every page.
4. The `scripts/script.js` file only manages the homepage slider.

## Recommended Enhancements

- Add a real form submission handler for `contact.html`.
- Add unique hero images or text for `services.html`, `news.html`, and `tourism.html`.
- Add descriptive alt text to every image if the current placeholders are replaced.
- Consider adding a navigation active-state style so the current page is visually highlighted.
