### server-components in Next.js
- every component in Next.js is a server component by default, a server component is unlike react components, it is first loaded in server and then parsed as HTML into the browser.

- Hence, we can't use hooks like useState, useEffect, useContext in the same way we used to do in react as they are client components, and are loaded directly in the browser.

- to convert these server components into client components we have to write "use client" on the top of page.jsx file. This will alllow use to write react like code and use all the hooks.

- client components are logged into client side(browser console) while server components are logged into server, this allows to log secret info into server hiding it from user.

- Next.js is a full stack react development framework hence we can use both frontend-client components(React) and backend-server components(express.js)