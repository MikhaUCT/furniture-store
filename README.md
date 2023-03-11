# Running the website
- Make sure you have Nodejs 18 or higher installed.
- Install the dependencies using the command `npm ci`.
- Run the project from the root directory using the command `npm run dev`.
- Go to `localhost:5173` in your browser to view the website, or press `o` in the terminal where you ran `npm run dev`.


- Alternatively, you can view the hosted website [here](https://mikhauct.github.io/furniture-store/home), and find the source code [here](https://github.com/MikhaUCT/furniture-store).

# Development Details
- The website is built using [SvelteKit](https://kit.svelte.dev/), SCSS & Typescript.
- All CSS, HTML & Typescript was hand written by me. I also hand made all SVGs. CSS frameworks are for the weak ;)
- The Search bar does not work because there was way too little time to implement it.
- I started to make the site responsive to different screen sizes, but ran out of time. Fortunately there were no marks allocated for this.
- The checkout page is not to my standard. I ran out of time.
## Pages:
- About
- Cart
- Category (page for each category)
- Checkout
- Contact
- Home
- Privacy Policy
- Product (page for each product)
- Search
- Terms & Conditions
- /
- 404
## Responsive design system
There are 3 screen sizes:
- Small (max-width: 480px)
- Medium (max-width: 760px)
- Large (min-width: 760px)
- Elements can be easily hidden or shown at different screen sizes using the responsive design system classes.
  - Elements without any of the responsive design system classes will be shown at all screen sizes.
  - `hide-at-medium` will hide the element at the medium screen sizes and smaller.
  - `hide-at-small` will hide the element at the small screen sizes.
  - `show-at-medium` will show the element at the medium screen sizes and smaller.
  - `show-at-small` will show the element at the small screen sizes.

# Accessibility
- All custom animations respect the `prefers-reduced-motion` media query.

# References
- All product images were custom generated using [dall-e](https://labs.openai.com/)
- Sections of the About, Contact, Privacy Policy & Terms and Conditions pages were generated using [chat GPT](https://chat.openai.com/chat).

<details>
<summary><strong>Desired Features<strong></summary>

- Responsive search bar
- Fancy credit card details input
- Related items on product pages
- More advanced category system with subcategories
- Comment filtering
</details>