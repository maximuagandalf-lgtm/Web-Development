### AIM:-
- Using the API(https://jsonplaceholder.typicode.com/posts) display the data in the form of card under a container. 
- All the data points returned by API should be converted to a card.

## Hint:-
- Create a state for the data which will be fetched using the json Placeholder API.
- Inside useEffect, use fetch to populate that state and then use map to render the cards from that state

## imp syntax to fetch data:-

-  let a = await fetch("https://jsonplaceholder.typicode.com/posts")
   let carddata = await a.json()

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.