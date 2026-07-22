### need for dynamic routes -->
- lets assume we are creating a blog website. so for every blog which is added we can not create a custom post/get request for each. So for that we use dynamic routes. refer to "app/blogposts/[slug]/page.jsx"

- we can create custom not-found 404 error pages by creating a "app/not-found.jsx" and copy boiler plate code form docuemntation and style it accordingly. Refer to not-found.jsx in this repo.

- above we created a global not-found.jsx which applies to all pages of our web app. But we can create component specific error pages by creating not-found.jsx inside the components folder. 

- For eg:- for error page of navbar, create a not-found.jsx inside navbar folder inside components.

- for errors we create "app/error.jsx"
