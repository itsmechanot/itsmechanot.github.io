# Testing Log

Live site: https://itsmechanot.github.io

## Test environments

| # | Browser / device | Version | Method | Result |
|---|---|---|---|---|
| 1 | Microsoft Edge (Windows 11) | 155.0.4283.62 | Automated headless load of the live URL + screenshots at 1440px | ✅ 0 JS errors, all sections render |
| 2 | Google Chrome (Windows 11) | 155.0.8059.82 | Automated headless load of the live URL | ✅ 0 JS errors, same output as Edge |
| 3 | Narrow-screen check (375px frame) | Edge 155 | Page rendered inside a 375px-wide frame | ✅ No horizontal scroll, layout stacks to one column |
| 4 | Phone: _model_ | _browser + version_ | Manual, live URL | ⏳ _pending_ |
| 5 | Chrome: manual pass | 155 | Manual, live URL | ⏳ _pending_ |
| 6 | Edge: manual pass | 155 | Manual, live URL | ⏳ _pending_ |

## Manual checklist (run on each browser/device)

| Feature | What to check |
|---|---|
| Intro screen | Plays once, then fades into the page; clicking skips it |
| Navigation | Each link scrolls to its section; the active link highlights while scrolling |
| Mobile menu | ☰ opens and closes; tapping a link closes it |
| Hero | Role text types and rotates; social icons open the right profiles in a new tab |
| About | Profile photo shows; stat cards count up and open the matching Portfolio tab |
| Academic | Cards and photos ease in and out when scrolling up and down |
| Portfolio | Tabs switch; slideshows auto-advance, loop forward, dots work, swipe works on touch |
| LOW_BOT | Bot button opens the panel; quick questions and typed questions get answers; ✕ and Esc close it |
| Contact | Email link and form open the email app; Location opens Google Maps pinned on Atipolo, Naval |
| Layout | No sideways scrolling at any width; text readable; images not stretched |

## Bugs found and fixed

| # | Problem | Cause | Fix |
|---|---|---|---|
| 1 | "Academic Foundation" heading ran off the screen on 375px phones | Heading font size too large for narrow screens | Smaller `clamp()` size below 560px |
| 2 | Slideshow visibly rewound through every photo when looping back | Track jumped from last slide back to the first | Clone of the first slide appended; snaps back invisibly after the forward slide |
| 3 | Tech Stack line icons rendered tiny and grey | Label style `.tech span` also matched the icon wrapper | Scoped selector `.tech .tech__svg` |
| 4 | New logo didn't appear after updating the site | Browser cached the old `main.js` | Version query strings (`?v=`) on CSS/JS links |
| 5 | SVG favicon showed blank | SVG favicons can't load other files (`<image href>`) | Inlined the logo artwork into `favicon.svg` |
| 6 | Hovering a project froze its slideshow | Autoplay paused on hover | Keeps playing at 5s per photo on hover (3s normally) |
| 7 | "Years of Experience" card opened the Tech Stack tab | Wrong tab id | Points to the Experience tab |
| 8 | Timeline animated only once on first scroll | Observer stopped watching after first reveal | Reversible, scroll-direction-aware IntersectionObserver |
| 9 | Timeline center line squeezed cards on phones | Line and padding kept on narrow screens | Line hidden below 860px |
| 10 | Two `<h1>`s and skipped heading levels (h2 → h4) | Intro title and footer/tech headings | Intro title is a `<div>`; footer and tech group headings are `<h3>` |
| 11 | Small grey text failed contrast (3.3:1) | `--dim` colour too dark | Raised to `#7d879c` (5.5:1, WCAG AA) |
| 12 | Template text ("PLACEHOLDER", "20XX") visible on the page | Unfinished entries in `data.js` | Unfinished entries are filtered out automatically |
| 13 | **Found on a real phone:** page had to be pinched to see it fully, and elements drifted off-centre after zooming | Slide-in elements waited 50–60px off to the side before animating, making the page 392px wide on a 354px screen; at 320px the "Fourth Year" header was also too wide for its card | Phones/tablets (≤1000px) reveal from below instead of the sides; `overflow-x: clip` on `html`/`body`; timeline column uses `minmax(0, 1fr)` and the year header wraps. Verified page width = screen width at 320, 360, 390, 430 and 768px |
| 14 | After adding the light/dark toggle, the ☰ menu button was pushed off the navbar on 320–360px phones | One more 40px button in an already full navbar | Below 560px the "Available" pill is hidden (the hero badge still shows it) and nav buttons shrink; below 380px the brand text and buttons shrink further. Verified the ☰ button stays inside the navbar at 320, 360 and 390px |
| 15 | In light mode, blue buttons (View Projects, View Resume, Send) had dark text | Buttons inherited the page text colour, which is dark in light mode | Gave the coloured buttons an explicit white text colour |
| 16 | In light mode the social icons (hero, Find me on, footer) and the "S" in the logo were nearly invisible | Both used a fixed pale grey meant for the dark background | Social icon colour became a theme variable (dark slate in light mode, with a bordered white tile); added a light-mode logo with a dark "S" that swaps in automatically |
| 17 | On phones, the tech tags overlaid on each project photo covered much of the image | Tags were positioned on top of the photo, and wrap to two rows on narrow cards | Tags moved into the card body as a row under the description; the photo's dark bottom fade was lightened since it no longer needs to back the labels |
| 18 | Tall (portrait) photos in the full-screen viewer ran past the bottom of the screen, under the photo counter | `max-height: 100%` has no effect inside an auto-sized grid row | Capped the photo at the screen height minus the viewer's top and bottom space (`100dvh`, with `100vh` fallback); checked on desktop and a phone-sized window |
| 19 | After adding the swipe animation, the next photo sometimes waited ~1.5 s off-screen before sliding in | The viewer waited on the browser's `decode()` promise, which can resolve late even for cached images | Neighbouring photos are preloaded whenever a photo is shown, and the viewer checks `complete`/`onload` instead (capped at 1.5 s for slow connections); tested drag, spring-back, swipe both ways, buttons, arrow keys and rapid double-taps |
