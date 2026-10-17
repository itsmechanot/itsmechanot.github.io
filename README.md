# Christian Mandras Sapilan: Portfolio Website

Personal portfolio of **Christian Mandras Sapilan**, a Computer Science student at Biliran Province State University (BiPSU) and IT working student at Xfiber Broadband.

**Live site:** _coming soon (GitHub Pages)_

## Sections
- **Home**: intro, rotating role titles, social links, and a code-style summary card
- **About**: bio, profile photo, and stat counters
- **Academic**: degree card and a year-by-year timeline (major subjects, tech stack, photos)
- **Portfolio**: tabs for Projects (photo slideshows), Experience, Certificates, and Tech Stack
- **Contact**: email, location (Google Maps link), socials, and a contact form
- **LOW_BOT**: a small rule-based chat assistant that answers questions from the site's own content

## Built with
- **HTML5**: semantic layout (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- **CSS3**: custom properties (design tokens), Grid and Flexbox, 3 responsive breakpoints, `prefers-reduced-motion` support
- **Vanilla JavaScript**: no frameworks; IntersectionObserver for scroll animations and the active-nav highlight
- [Devicon](https://devicon.dev) for tech logos, Google Fonts (Syne, DM Sans, JetBrains Mono)

## Project structure
```
index.html          page structure
css/style.css       all styling (tokens at the top, responsive rules at the bottom)
js/data.js          ALL site content: edit this file to update text, projects, photos
js/main.js          rendering, animations, slideshows, chatbot, contact form
assets/             logo, favicon, profile photo
  academic/         one photo per school year
  projects/         project slideshow photos
  logos/            company logos
  certificates/     certificate images
```

## Updating content
Everything visible on the site comes from `js/data.js`. Entries still marked `PLACEHOLDER` are hidden automatically until they are filled in.

## Running locally
```powershell
python -m http.server 5500
```
Then open http://localhost:5500 (add `?nointro` to skip the intro animation).
