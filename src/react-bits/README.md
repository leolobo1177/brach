# React Bits on the Brach site

Original components: https://github.com/DavidHDev/react-bits
- https://reactbits.dev/text-animations/tech-text
- https://reactbits.dev/components/circular-carousel

Source retrieved on 2026-10-16 from src/content (JS + CSS). License: ../../licenses/react-bits.md.
Components are used only as part of this website, under MIT + Commons Clause.

Two React roots enhance the static homepage after `whenBrachPageReady` resolves.
The rest of the site continues to use its existing HTML and GSAP. The original
hero scroll effect controls the outer wordmark; TechText handles the canvas.

Local adaptations in CircularCarousel: localized accessible labels, branded
card backgrounds, previous/next controls, initial reduced-motion preference,
and refresh of translated captions. The wrapper adds pause/focus handling and
static error fallbacks. TechText adds a verticalFill option for the original hero
height and uses Anton and the site's cream/blue palette. Live announcements are
paused during automatic rotation.

## Build
Run `npm ci` followed by `npm run build`. Commit the generated `js/dist` files
along with the source; GitHub Pages serves the generated files without a Node
server. Dependencies are pinned in package-lock.json.

Manual checks: loader then hero, TechText hover, anchor return to top,
carousel drag/click/keyboard/buttons, pause, language switching, phone layout,
and reduced-motion mode.
