### Link -->
- prefetch={true/false}, this prop preloads the data even before the button/link is clicked.

- the deafault behaviour of link is to scroll to the top, we can alter this by scroll={true/false} prop.

- refer to nextjs documentation for many more props relating to Link.

- import Link from "next/link"

### title & description -->
- inside layout.js, metadata variable helps us set title and description for whole website and using the same logic in component's page.js. We can set different title and different descriptions for each page.

- export const metadata = {
  title: "Facebook - Connect with the world",
  description: "Welcome to Facebook", 
  // a well optimised description makes the SEO of website better
};

### Script -->
- import Script from "next/script"

- very similiar to before, script tag is used to write JS logic inside return function(as this return function is parsed as an HTMl page to the browser we use script tag).

- refer to documentation for various useful props in script tag.

### Image -->

- To use the built-in image optimization of next.js, we use Image tag

- with the help of image optimization we can reduce the size of our used images by a huge margin, hence making our web app much efficient in all aspects.

- using Image tags improve the SEO scores of our web app

- import Image from "next.image"

- then inside next.config.mjs -->
    reactCompiler: true,
  images:{
    remotePatterns:[{
      protocol: 'https',
      hostname: 'hostnameofwebsite.com',
      port:'',
    },
  ],
  },

- by default, image is style position:absolute wrt its parent element, to use a prop fill={true}, we have to manually write relative as tailwind class in the parent elements(container).

- refer to documentation for syntax and many useful props for images syntax

- some of the props are quality={}, priority={}, object-contain, object-fit etc etc..