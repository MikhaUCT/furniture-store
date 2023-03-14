# write-up explaining my design choices and how they contribute to the website goals and target audience

I have used the SvelteKit framework with Typescript and SCSS. If you are unfamiliar with these it essentially means the site is built out of components, which means there is less of a need for separate css (or scss) files. I have some general styles in stand alone files, but most styling happens on a component level. Styles in components are scoped to the component i.e they don't affect anything else.

Sveltekit uses file based routing, so to access the code for the cart page for example you would go to `src/routes/checkout/cart/+page.svelte`. This corresponds to the /checkout/cart page on the site.

## Design Choices
I went with a light theme as that is what most people prefer for retail (despite not being my preference) as this is the standard background color of product images, and it gives a clean, professional feel.

My goal is to target a wide range of users, so I made an effort to make the site as accessible as possible. The layout changes depending on the screen size, and all custom animations respect the `prefers-reduced-motion` setting.
- Depending on the screen size the filters will either be in the sidebar or a hamburger menu.
- The links to different pages will be at the top on larger screens and in the hamburger menu on smaller screens.
- If the screen is too small to fit the logo it switches to a more compact version
- The number of columns of products changes depending on the screen size
- The layout of product pages changes depending on screen size to make sure the most important information is always first
- The position of the buttons on items in your shopping cart changes to prevent it from ever feeling cramped
- There is a lot more, but it can easily be seen by playing with the site on different screen sizes.